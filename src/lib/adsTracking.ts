// WhatsApp-tap measurement. One delegated listener covers every wa.me link on the site,
// so a new link needs no wiring.

const ADS_ID = "AW-17753851829";
// Conversion label from Google Ads (Goals → Conversions → "WhatsApp tap" → tag setup → "send_to").
// Paste only the part after the slash. Empty = no Ads conversion is sent.
const WA_TAP_LABEL = "RjteCL_Irv4cELWP2ZFC";
// GA4 (G-9SYPLP0KP9) needs no code here: it is combined with the Ads tag in Google's tag settings, so every
// gtag event already reaches it. Do not add a GA4 config call, it would count each page view twice.
// Appended to the WhatsApp prefilled text for ad clicks, so the conversation can be matched in the CRM.
// Non-ad visits that arrive with ?utm_source= (Instagram bio, a newsletter link) get "(ref: source/campaign)" instead.
// The source is kept for 30 days, so a visitor who comes back later and taps WhatsApp is still tagged.
// The "traffic" value on the GA4 event stays per-session paid/organic, so the Ads read windows keep one definition.
const PAID_REF_NAME = "G1";
const PAID_KEY = "wp_paid_click";
const SOURCE_KEY = "wp_source";
const SOURCE_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Gtag = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  const w = window as unknown as { gtag?: Gtag };
  if (typeof w.gtag === "function") w.gtag(...args);
}

function rememberPaidClick() {
  try {
    const p = new URLSearchParams(window.location.search);
    if (p.get("gclid") || p.get("gbraid") || p.get("wbraid")) sessionStorage.setItem(PAID_KEY, "1");
  } catch {
    // storage blocked: the tap is still counted, only as organic
  }
}

function sourceFromUrl() {
  const p = new URLSearchParams(window.location.search);
  if (p.get("gclid") || p.get("gbraid") || p.get("wbraid")) return PAID_REF_NAME;
  const utm = [p.get("utm_source"), p.get("utm_campaign")].filter(Boolean).join("/");
  // only letters, digits, - _ . / survive: the value ends up in a customer's WhatsApp message
  return utm.replace(/[^\w\-./]/g, "").slice(0, 40);
}

function rememberSource() {
  try {
    const ref = sourceFromUrl();
    if (ref) localStorage.setItem(SOURCE_KEY, JSON.stringify({ ref, at: Date.now() }));
  } catch {
    // storage blocked: taps just go out untagged
  }
}

function storedSource() {
  try {
    const saved = JSON.parse(localStorage.getItem(SOURCE_KEY) ?? "null") as { ref?: string; at?: number } | null;
    if (!saved?.ref || !saved.at || Date.now() - saved.at > SOURCE_MAX_AGE_MS) return "";
    return saved.ref;
  } catch {
    return "";
  }
}

function isPaidSession() {
  try {
    return sessionStorage.getItem(PAID_KEY) === "1";
  } catch {
    return false;
  }
}

function withRef(href: string, ref: string) {
  try {
    const url = new URL(href);
    const text = url.searchParams.get("text") ?? "";
    if (text.includes("(ref: ")) return href;
    // encodeURIComponent, not searchParams.set: the latter writes spaces as "+", which WhatsApp may show literally
    return url.origin + url.pathname + "?text=" + encodeURIComponent((text + " (ref: " + ref + ")").trim());
  } catch {
    return href;
  }
}

export function initAdsTracking() {
  if (typeof window === "undefined") return;
  rememberPaidClick();
  rememberSource();

  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!link) return;
      const paid = isPaidSession();
      const ref = paid ? PAID_REF_NAME : storedSource();
      if (ref) link.href = withRef(link.href, ref);
      gtag("event", "whatsapp_tap", {
        page_path: window.location.pathname,
        traffic: paid ? "paid" : "organic",
        source: ref || "none",
      });
      // beacon: the hit survives if a link opens WhatsApp in the same tab
      if (WA_TAP_LABEL) gtag("event", "conversion", { send_to: ADS_ID + "/" + WA_TAP_LABEL, transport_type: "beacon" });
    },
    true,
  );
}
