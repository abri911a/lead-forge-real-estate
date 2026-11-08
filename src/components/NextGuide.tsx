import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// 8 Nov 2026: one "next guide" link at the end of each guide, in a fixed reading order.
// Order = the questions a foreign buyer asks, first to last.
const GUIDES = [
  { path: "/can-foreigners-buy-property-in-oman", title: "Can foreigners buy property in Oman?" },
  { path: "/oman-residency-by-property", title: "Does buying property in Oman give you residency?" },
  { path: "/property-for-sale-in-oman-for-foreigners", title: "Projects you can buy as a foreigner, with prices" },
  { path: "/oman-property-prices-2026", title: "Oman off-plan prices, checked monthly" },
  { path: "/is-off-plan-property-safe-in-oman", title: "Is off-plan property safe in Oman?" },
  { path: "/sultan-haitham-city-guide", title: "Sultan Haitham City: a buyer's guide" },
  { path: "/al-mouj-guide", title: "Al Mouj Muscat: a buyer's guide" },
  { path: "/oman-investment-guide", title: "Oman property investment guide" },
  { path: "/can-gcc-citizens-buy-property-in-oman", title: "Can GCC citizens buy property in Oman?" },
  { path: "/muscat-property-supply-and-demand-2026", title: "Muscat property supply and demand 2026" },
];

const NextGuide = () => {
  const { pathname } = useLocation();
  const here = pathname.replace(/\/+$/, "");
  const i = GUIDES.findIndex((g) => g.path === here);
  if (i === -1) return null;
  const next = GUIDES[(i + 1) % GUIDES.length];

  return (
    <nav aria-label="Next guide" className="bg-luxury-dark pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to={next.path}
          className="flex items-center justify-between gap-4 rounded-lg border border-gold/30 bg-card p-6 hover:border-gold/60 transition-colors"
        >
          <span>
            <span className="block text-sm text-muted-foreground mb-1">Next guide</span>
            <span className="block text-lg font-semibold text-foreground">{next.title}</span>
          </span>
          <ArrowRight className="h-5 w-5 text-gold flex-shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default NextGuide;
