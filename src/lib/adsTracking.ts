// WhatsApp-tap measurement. One delegated listener covers every wa.me link on the site,
// so a new link needs no wiring.

const ADS_ID = "AW-17753851829";
// Conversion label from Google Ads (Goals → Conversions → "WhatsApp tap" → tag setup → "send_to").
// Paste only the part after the slash. Empty = no Ads conversion is sent.
const WA_TAP_LABEL = "RjteCL_Irv4cELWP2ZFC";
// GA4 measurement ID ("G-XXXXXXXXXX"). Google Ads only reports taps that follow an ad click;
// organic taps (the route-finder gate) are readable only in GA4. Empty = GA4 off.
const GA4_ID = "";
// Appended to the WhatsApp prefilled text for ad clicks, so the conversation can be matched in the CRM.
const PAID_REF = "(ref: G1)";
const PAID_KEY = "wp_paid_click";

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

function isPaidSession() {
  try {
    return sessionStorage.getItem(PAID_KEY) === "1";
  } catch {
    return false;
  }
}

function withPaidRef(href: string) {
  try {
    const url = new URL(href);
    const text = url.searchParams.get("text") ?? "";
    if (text.includes(PAID_REF)) return href;
    // encodeURIComponent, not searchParams.set: the latter writes spaces as "+", which WhatsApp may show literally
    return url.origin + url.pathname + "?text=" + encodeURIComponent((text + " " + PAID_REF).trim());
  } catch {
    return href;
  }
}

export function initAdsTracking() {
  if (typeof window === "undefined") return;
  rememberPaidClick();
  if (GA4_ID) gtag("config", GA4_ID);

  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!link) return;
      const paid = isPaidSession();
      if (paid) link.href = withPaidRef(link.href);
      gtag("event", "whatsapp_tap", {
        page_path: window.location.pathname,
        traffic: paid ? "paid" : "organic",
      });
      // beacon: the hit survives if a link opens WhatsApp in the same tab
      if (WA_TAP_LABEL) gtag("event", "conversion", { send_to: ADS_ID + "/" + WA_TAP_LABEL, transport_type: "beacon" });
    },
    true,
  );
}
