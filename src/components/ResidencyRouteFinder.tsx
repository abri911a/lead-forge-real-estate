import { useState } from "react";
import { Button } from "@/components/ui/button";

/*
  Residency route finder.
  Three taps, one answer. Every outcome card is always in the DOM so the
  prerender and AI crawlers read the full content; the questions only
  highlight the card that applies. No JavaScript = all cards visible.
*/

type Nat = "gcc" | "other";
type Buy = "freehold" | "offplan" | "usufruct" | "unsure";
type Val = "under" | "over";
type RouteKey = "gcc" | "owner" | "offplan" | "golden" | "usufruct" | "unsure";

const ROUTES: Record<
  RouteKey,
  { title: string; verdict: string[]; source: string; cta: string; note?: string }
> = {
  owner: {
    title: "Owner Residency",
    verdict: [
      "You qualify for residency on the property itself.",
      "Since 22 June 2026 it is issued without a local sponsor.",
      "No minimum value is stated. Your spouse and first-degree relatives are included.",
      "It ends if you sell.",
    ],
    source: "Royal Oman Police Decision 87/2026",
    cta: "I am buying a registered unit in an ITC. What is my residency position?",
  },
  offplan: {
    title: "Owner visa first, residency at registration",
    verdict: [
      "Before the unit is registered you can get an owner visa, not residency.",
      "It runs 6 to 12 months and is renewable, on a certificate from the competent authority.",
      "Once the unit is registered in your name, the Owner Residency route opens.",
    ],
    source: "Royal Oman Police Decision 87/2026",
    cta: "I am buying off-plan in an ITC. What is my residency position?",
    note: "At OMR 200,000 or more, the Golden route also opens once the unit is registered with a title deed.",
  },
  golden: {
    title: "Two routes. You choose.",
    verdict: [
      "Owner Residency: sponsor-free, tied to the property, the simpler route.",
      "Golden Residency: a 10-year renewable permit, applied for separately, on a qualifying investment of OMR 200,000 in a completed unit with a title deed.",
      "Which is better depends on how long you plan to hold and whether you want the longer term.",
    ],
    source: "ROP Decision 87/2026 and the Golden Residency Programme (MoCIIP)",
    cta: "I am buying at OMR 200,000 or more in an ITC. Owner Residency or Golden, which fits me?",
  },
  usufruct: {
    title: "Not spelled out. Do not assume.",
    verdict: [
      "The usufruct route outside ITCs (Ministerial Decision 357/2020) carried no residency when it started.",
      "Whether the June 2026 owner-residency rules cover a registered usufruct has not been stated.",
      "Separately: to use this route at all you must already live in Oman on a residence permit.",
    ],
    source: "MD 357/2020; the residency point is unresolved",
    cta: "I am looking at a usufruct apartment outside an ITC. Does it give residency?",
  },
  gcc: {
    title: "Different rules apply to you",
    verdict: [
      "GCC citizens own under separate GCC agreements, across far more of Oman than other foreigners.",
      "The residency question is different too. Start with the GCC guide.",
    ],
    source: "Royal Decree 21/2004 and GCC agreements",
    cta: "I am a GCC citizen buying in Oman. What applies to me?",
  },
  unsure: {
    title: "Check what you are actually buying first",
    verdict: [
      "For a non-GCC foreigner, ownership only registers in designated areas: ITCs, the future cities, and named integrated neighbourhoods.",
      "Outside those, a purchase cannot be registered in your name, and no residency follows from it.",
      "Send me the project name and I will tell you which route it is.",
    ],
    source: "Ministry of Housing and Urban Planning, June 2026 clarification",
    cta: "I am not sure what type of property I am looking at. Can you check it?",
  },
};

const ORDER: RouteKey[] = ["owner", "offplan", "golden", "usufruct", "gcc", "unsure"];

function track(name: string, route: string) {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", name, { route });
}

function resolve(nat?: Nat, buy?: Buy, val?: Val): RouteKey | null {
  if (nat === "gcc") return "gcc";
  if (!nat || !buy) return null;
  if (buy === "usufruct") return "usufruct";
  if (buy === "unsure") return "unsure";
  if (!val) return null;
  if (buy === "freehold") return val === "over" ? "golden" : "owner";
  return "offplan";
}

function Pill({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={
        "rounded-full border px-4 py-2 text-sm transition-colors " +
        (on
          ? "bg-gold text-luxury-dark border-gold font-semibold"
          : "border-border text-foreground hover:border-gold/60")
      }
    >
      {on ? "✓ " : ""}
      {children}
    </button>
  );
}

const ResidencyRouteFinder = () => {
  const [nat, setNat] = useState<Nat>();
  const [buy, setBuy] = useState<Buy>();
  const [val, setVal] = useState<Val>();
  const result = resolve(nat, buy, val);
  const needsVal = nat === "other" && (buy === "freehold" || buy === "offplan");

  const pick = <T,>(setter: (v: T) => void, v: T, key?: RouteKey | null) => {
    setter(v);
    if (key) track("residency_tool_result", key);
  };

  const reset = () => {
    setNat(undefined);
    setBuy(undefined);
    setVal(undefined);
  };

  return (
    <div className="border border-gold/30 rounded-lg p-6 md:p-8 mb-12 bg-card">
      <p className="text-gold text-sm font-semibold uppercase tracking-wide mb-1">
        Route finder
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
        Which residency does your purchase give you?
      </h2>
      <p className="text-muted-foreground mb-6">
        Three taps. Six possible answers, all shown below. Nothing here replaces a
        check with the competent authority before you pay.
      </p>

      {/* Q1 */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-foreground mb-2">1. Your nationality</p>
        <div className="flex flex-wrap gap-2">
          <Pill on={nat === "other"} onClick={() => { pick(setNat, "other"); setBuy(undefined); setVal(undefined); }}>
            Not a GCC citizen
          </Pill>
          <Pill on={nat === "gcc"} onClick={() => { pick(setNat, "gcc", "gcc"); setBuy(undefined); setVal(undefined); }}>
            GCC citizen
          </Pill>
        </div>
      </div>

      {/* Q2 */}
      {nat === "other" && (
        <div className="mb-5">
          <p className="text-sm font-semibold text-foreground mb-2">2. What you are buying</p>
          <div className="flex flex-wrap gap-2">
            <Pill on={buy === "freehold"} onClick={() => { pick(setBuy, "freehold"); setVal(undefined); }}>
              Freehold in an ITC or eligible zone
            </Pill>
            <Pill on={buy === "offplan"} onClick={() => { pick(setBuy, "offplan"); setVal(undefined); }}>
              Off-plan, not yet registered
            </Pill>
            <Pill on={buy === "usufruct"} onClick={() => pick(setBuy, "usufruct", "usufruct")}>
              Usufruct apartment outside an ITC
            </Pill>
            <Pill on={buy === "unsure"} onClick={() => pick(setBuy, "unsure", "unsure")}>
              Not sure
            </Pill>
          </div>
        </div>
      )}

      {/* Q3 */}
      {needsVal && (
        <div className="mb-5">
          <p className="text-sm font-semibold text-foreground mb-2">3. Purchase value</p>
          <div className="flex flex-wrap gap-2">
            <Pill on={val === "under"} onClick={() => pick(setVal, "under", resolve(nat, buy, "under"))}>
              Under OMR 200,000
            </Pill>
            <Pill on={val === "over"} onClick={() => pick(setVal, "over", resolve(nat, buy, "over"))}>
              OMR 200,000 or more
            </Pill>
          </div>
        </div>
      )}

      {/* Outcomes: always rendered; the answer is highlighted, the rest collapse */}
      {/* idle = nothing answered yet: compact rows, full text kept in the HTML but hidden */}
      <div className={"mt-6 " + (result === null ? "grid gap-3 md:grid-cols-2" : "space-y-3")}>
        {ORDER.map((key) => {
          const r = ROUTES[key];
          const active = result === key;
          const dimmed = result !== null && !active;
          const idle = result === null;
          const showNote = key === "offplan" && val === "over";
          return (
            <div
              key={key}
              className={
                "rounded-lg border transition-all " +
                (active
                  ? "border-gold bg-gradient-to-br from-gold/15 to-transparent p-5 md:p-6"
                  : dimmed
                  ? "border-border/50 px-4 py-2 opacity-50"
                  : "border-border p-4")
              }
            >
              <h3 className={"font-bold text-foreground " + (active ? "text-xl mb-3" : "text-base")}>
                {r.title}
              </h3>
              {!dimmed && (
                <>
                  <ul className={"space-y-1 " + (active ? "text-foreground" : "text-muted-foreground text-sm mt-1")}>
                    {r.verdict.map((line, i) => (
                      <li key={line} className={idle && i > 0 ? "hidden" : undefined}>{line}</li>
                    ))}
                    {showNote && r.note && <li>{r.note}</li>}
                  </ul>
                  <p className={"text-xs text-muted-foreground mt-3" + (idle ? " hidden" : "")}>
                    Source: {r.source}. Confirm with the competent authority before you pay.
                  </p>
                  {active && (
                    <div className="mt-4 flex flex-wrap gap-3 items-center">
                      <Button asChild className="bg-gold text-luxury-dark hover:bg-gold-light">
                        <a
                          href={"https://wa.me/96879136646?text=" + encodeURIComponent("Hi Waleed. " + r.cta)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => track("residency_tool_cta", key)}
                        >
                          Ask Waleed about this route
                        </a>
                      </Button>
                      {key === "gcc" && (
                        <a href="/can-gcc-citizens-buy-property-in-oman" className="text-gold underline underline-offset-2 hover:text-gold-light text-sm">
                          Read the GCC guide
                        </a>
                      )}
                      <button type="button" onClick={reset} className="text-sm text-muted-foreground underline underline-offset-2">
                        Start again
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResidencyRouteFinder;
