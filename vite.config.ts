import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: [
          "/",
          "/oman-investment-guide",
          "/al-mouj-guide",
          "/sultan-haitham-city-guide",
        ],
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 2000,
          headless: true,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
