// Prerender every route in the sitemap to static per-route HTML.
// Why: AI crawlers (GPTBot, PerplexityBot, ClaudeBot) do not run JavaScript.
// Without this, every route serves the empty SPA shell and the site's content
// is invisible to answer engines. Run after `vite build`, before deploy.
//
// Output layout (GitHub Pages / any static host):
//   dist/index.html                     -> prerendered home
//   dist/<route>/index.html             -> prerendered route
//   dist/404.html                       -> original SPA shell (client-side fallback)
//   dist/.nojekyll                      -> disable Jekyll processing on GH Pages

import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));
const PORT = 45173;
const BASE = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = 4;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};

// Keep the untouched SPA shell in memory: it stays the fallback for
// non-prerendered routes while (and after) we overwrite dist/index.html.
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');

// Routes = every <loc> in the built sitemap.
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname.replace(/\/$/, '') || '/');
if (!routes.includes('/')) routes.unshift('/');
const unique = [...new Set(routes)];

const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, BASE).pathname);
  let file = join(DIST, path);
  try {
    if (statSync(file).isDirectory()) file = join(file, 'index.html');
    const body = readFileSync(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    // SPA fallback: any extension-less path gets the original shell.
    if (!extname(path)) {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(shell);
    } else {
      res.writeHead(404);
      res.end();
    }
  }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await chromium.launch();
const results = { ok: [], failed: [] };
let homeHtml = null;

async function render(route) {
  const page = await browser.newPage();
  try {
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    } catch {
      // Third-party beacons (gtag etc.) can keep the network busy forever,
      // so 'networkidle' never fires. Fall back to 'load' + a settle delay.
      await page.goto(BASE + route, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(500); // let react-helmet-async settle head tags
    const rootChildren = await page.$eval('#root', (el) => el.children.length).catch(() => 0);
    if (rootChildren === 0) throw new Error('root rendered empty');
    const html = await page.content();
    if (route === '/') {
      homeHtml = html;
    } else {
      const dir = join(DIST, route);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html);
      // Also write <route>.html so GitHub Pages serves the extensionless URL
      // (/oman-residency-by-property) with a 200 — matching the canonical
      // exactly instead of 301-redirecting to the trailing-slash variant.
      writeFileSync(join(DIST, `${route}.html`), html);
    }
    results.ok.push(route);
  } catch (err) {
    results.failed.push({ route, error: String(err).slice(0, 200) });
  } finally {
    await page.close();
  }
}

// Simple pool.
const queue = [...unique];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await render(queue.shift());
  }),
);

await browser.close();
server.close();

if (homeHtml) writeFileSync(join(DIST, 'index.html'), homeHtml);
writeFileSync(join(DIST, '404.html'), shell);
writeFileSync(join(DIST, '.nojekyll'), '');

console.log(`prerendered ${results.ok.length}/${unique.length} routes`);
for (const f of results.failed) console.warn(`FAILED ${f.route}: ${f.error}`);

// Content routes must all succeed; /property/ pages are best-effort
// (a deleted listing must not block the whole deploy).
const coreFailures = results.failed.filter((f) => !f.route.startsWith('/property/'));
if (coreFailures.length) {
  console.error(`${coreFailures.length} core route(s) failed — failing build`);
  process.exit(1);
}
