import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AuthorProfile from "@/components/AuthorProfile";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const title =
  "Oman Property Prices 2026: Verified Area-by-Area Guide | Waleed Property";
const description =
  "Verified June 2026 Oman property prices by area: apartments from OMR 19,700, foreign-freehold zones, realistic rental yields, residency and escrow law. By a licensed Oman real estate advisor.";
const canonical = "https://waleedproperty.com/oman-property-prices-2026";
const ogTitle = "Oman Property Prices 2026: Verified Area-by-Area Guide";
const ogDescription =
  "What property actually costs in Oman in 2026, by area and type, with foreign-ownership rules and realistic yields.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Oman Property Prices 2026: A Verified, Area-by-Area Guide",
  author: {
    "@type": "Person",
    name: "Waleed Al Abri",
    jobTitle: "Licensed Real Estate Advisor",
  },
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
  about: "Property prices, foreign ownership, and rental yields in Oman in 2026",
};

const faqs = [
  {
    q: "What is the cheapest property in Oman in 2026?",
    a: "New off-plan 1-bedroom apartments start around OMR 19,700 to 22,900 in the Khoudh area of Muscat, but these are small and limited to Omani and GCC buyers.",
  },
  {
    q: "Can foreigners buy property in Oman?",
    a: "Yes. Under Royal Decree 29/2018, foreigners can own freehold in designated ITC zones such as Muscat Hills, Muscat Bay and Telal Al Qurm, or hold 99-year usufruct in some other areas. ITC freehold also grants residency rights.",
  },
  {
    q: "How much does a 2-bedroom apartment cost in Muscat?",
    a: "As of June 2026, roughly OMR 50,000 to 72,000 in mid-market areas, rising to OMR 80,000 to 105,000 for premium beachfront or master-planned ITC locations.",
  },
  {
    q: "What rental yield can I expect in Oman?",
    a: "A realistic gross yield on a standard residential apartment is about 5 to 7 percent. Advertised yields of 10 to 14 percent generally apply to commercial or furnished short-let properties and should be checked carefully.",
  },
  {
    q: "Which areas in Oman allow foreign freehold ownership?",
    a: "Mainly ITC zones such as Muscat Hills, Muscat Bay, Al Mouj and Telal Al Qurm, plus select Sultan Haitham City projects. Outside these, foreigners are usually limited to usufruct or cannot buy.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const OmanPropertyPrices2026 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <SeoHead
        title={title}
        description={description}
        canonical={canonical}
        type="article"
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <section className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wide">
              Market Report · June 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Oman Property Prices 2026: A Verified, Area-by-Area Guide
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Updated June 14, 2026 · By Waleed Al Abri — Licensed Real Estate
              Advisor
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Updated June 2026. This is a working price reference for buying
              property in Oman, built from current developer-advertised prices
              across 50+ active projects, not recycled portal estimates. It
              covers what apartments actually cost by area, which zones
              foreigners can own freehold, realistic rental yields, residency,
              and the escrow law that protects your deposit. Figures are in
              Omani Rial (OMR). One OMR is about USD 2.60.
            </p>
          </div>

          {/* Author callout */}
          <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              Written by <strong>Waleed Al Abri</strong>, a licensed real estate
              advisor in Oman. Prices move. Every figure below is dated and
              reflects developer offers seen in June 2026. For a current quote
              on a specific project,{" "}
              <button
                onClick={() => navigate("/#contact")}
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                contact me
              </button>
              .
            </p>
          </div>

          {/* Quick answer */}
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">
              Quick answer (June 2026)
            </h2>
            <ul className="space-y-2 text-foreground">
              <li>
                • <strong>Cheapest new apartment:</strong> entry 1-bedroom units
                start around OMR 19,700 to 22,900 (Khoudh cluster, off-plan).
              </li>
              <li>
                • <strong>Typical Muscat 2-bedroom:</strong> roughly OMR 50,000
                to 72,000 depending on area and finish.
              </li>
              <li>
                • <strong>Foreign-freehold (all nationalities):</strong> mostly
                in ITC zones such as Muscat Hills, Muscat Bay, Sultan Haitham
                City and Telal Al Qurm, from about OMR 45,000 (1BR) upward.
              </li>
              <li>
                • <strong>Realistic residential rental yield:</strong> about 5%
                to 7% gross. Headline 10% to 14% figures are commercial,
                furnished short-let, or developer projections. Treat them with
                caution.
              </li>
              <li>
                • <strong>Deposit protection:</strong> off-plan payments are
                meant to sit in an escrow account under Royal Decree 79/2025,
                but always verify the account exists before you pay.
              </li>
            </ul>
          </div>

          {/* Author */}
          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Cheapest entry points */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Cheapest entry points (June 2026)
            </h2>
            <p className="text-muted-foreground mb-6">
              The lowest verified new-build prices, all off-plan in the Khoudh
              education cluster.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project area</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>From (OMR)</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Khoudh 6</TableCell>
                    <TableCell>1BR 54–61m²</TableCell>
                    <TableCell>19,700</TableCell>
                    <TableCell>Off-plan, GCC + Omani</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Khoudh (near SQU)</TableCell>
                    <TableCell>Apartment</TableCell>
                    <TableCell>21,000</TableCell>
                    <TableCell>5K down + installments</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Khoudh / Al Irfan</TableCell>
                    <TableCell>Boutique apartment</TableCell>
                    <TableCell>22,900</TableCell>
                    <TableCell>Off-plan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Khoudh 7</TableCell>
                    <TableCell>Offices 46–89m²</TableCell>
                    <TableCell>34,500</TableCell>
                    <TableCell>~9% gross commercial</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              <strong className="text-foreground">Reality check:</strong>{" "}
              sub-OMR 25K units are small, off-plan, and limited to Omani and
              GCC buyers. There is no ready-to-move, developer-direct unit under
              about OMR 35K right now. Ready stock sells out fast and trades on
              the resale market.
            </p>
          </div>

          {/* Apartment prices by area */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6">
              Apartment prices by area (June 2026, developer-advertised)
            </h2>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Area</TableHead>
                    <TableHead>1-Bedroom</TableHead>
                    <TableHead>2-Bedroom</TableHead>
                    <TableHead>Foreign ownership</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Khoudh</TableCell>
                    <TableCell>from 19,700</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>GCC + Omani</TableCell>
                    <TableCell>Cheapest entry; education cluster</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ghala</TableCell>
                    <TableCell>from 28,000</TableCell>
                    <TableCell>from 38,000</TableCell>
                    <TableCell>99-yr usufruct (foreigners)</TableCell>
                    <TableCell>Verify escrow before paying</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bousher</TableCell>
                    <TableCell>26,900 cash / 35,000 ready</TableCell>
                    <TableCell>from 52,000</TableCell>
                    <TableCell>Mostly GCC + Omani</TableCell>
                    <TableCell>Mixed-use anchor cluster</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sultan Haitham City</TableCell>
                    <TableCell>studio from 46,600</TableCell>
                    <TableCell>up to 105,000</TableCell>
                    <TableCell>Freehold, all nationalities</TableCell>
                    <TableCell>New govt master-planned city</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Muscat Hills (ITC)</TableCell>
                    <TableCell>from 45,159</TableCell>
                    <TableCell>from 57,925</TableCell>
                    <TableCell>Freehold, all nationalities + residency</TableCell>
                    <TableCell>Premium; golf/airport</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Muscat Bay (ITC)</TableCell>
                    <TableCell>studio 47,000 / 1BR 56,000</TableCell>
                    <TableCell>3BR 132,000</TableCell>
                    <TableCell>Freehold, all nationalities</TableCell>
                    <TableCell>Beachfront flagship</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>MSQ (Madinat Qaboos)</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>from 50,000 (143m² ~104,500)</TableCell>
                    <TableCell>GCC + Omani</TableCell>
                    <TableCell>Elite central district</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Qurum</TableCell>
                    <TableCell>studio 37,250</TableCell>
                    <TableCell>from 81,000 (beachfront)</TableCell>
                    <TableCell>
                      Telal = freehold all-nat + permanent residency
                    </TableCell>
                    <TableCell>Prime central Muscat</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Knowledge Oasis</TableCell>
                    <TableCell>56,000 to 58,000</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>Freehold + family residency</TableCell>
                    <TableCell>9% rental guarantee (3yr)</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption className="px-4 pb-4 text-left">
                  Representative verified figures. A project's exact price
                  depends on floor, size and payment plan. Al Mouj is excluded
                  from value picks because it is saturated, with little
                  capital-growth headroom (June 2026).
                </TableCaption>
              </Table>
            </div>
          </div>

          {/* Price by type */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6">
              Price by property type (Muscat, June 2026)
            </h2>
            <ul className="space-y-2 text-foreground">
              <li>
                • <strong>Studio:</strong> OMR 37,000 to 55,000 (entry off-plan
                to ITC beachfront)
              </li>
              <li>
                • <strong>1-Bedroom:</strong> OMR 19,700 (Khoudh) to 70,000
                (Muscat Hills premium)
              </li>
              <li>
                • <strong>2-Bedroom:</strong> OMR 38,000 (Ghala) to 105,000
                (Sultan Haitham City premium)
              </li>
              <li>
                • <strong>3-Bedroom / townhouse:</strong> OMR 110,000 to
                150,000+ (premium ITC and gated communities)
              </li>
            </ul>
          </div>

          {/* Rental yields */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Rental yields, honestly (June 2026)
            </h2>
            <p className="text-muted-foreground mb-6">
              Developers advertise high yields. Here is the real picture.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Yield band</TableHead>
                    <TableHead>Where it comes from</TableHead>
                    <TableHead>Trust level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>5% to 7%</TableCell>
                    <TableCell>
                      Standard residential apartment rented long-term
                    </TableCell>
                    <TableCell>Realistic, plan around this</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8% to 11%</TableCell>
                    <TableCell>
                      Commercial offices or shops in strong-footfall locations
                    </TableCell>
                    <TableCell>Achievable but tenant-dependent</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13% to 14%</TableCell>
                    <TableCell>
                      Furnished short-let (e.g. Salalah khareef season) or
                      best-case offices
                    </TableCell>
                    <TableCell>
                      Headline only, verify occupancy assumptions
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              <strong className="text-foreground">Bottom line:</strong> for a
              normal apartment, model about 5% to 7% gross, then subtract
              service charges, vacancy and maintenance. Anyone quoting a flat
              double-digit yield on a standard residential flat is selling, not
              advising.
            </p>
          </div>

          {/* Foreigners */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Can foreigners buy property in Oman?
            </h2>
            <p className="text-muted-foreground mb-4">
              Under Royal Decree 29/2018, non-Omanis can own property, but how
              depends on the zone.
            </p>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">
                  ITC freehold (all nationalities)
                </h3>
                <p className="text-muted-foreground">
                  Full, permanent ownership plus the right to residency. Zones
                  include Muscat Hills, Muscat Bay, Al Mouj, Telal Al Qurm, and
                  select Sultan Haitham City projects. This is what most foreign
                  investors want.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">
                  Usufruct (99-year leasehold)
                </h3>
                <p className="text-muted-foreground">
                  Long-term use rights, not permanent title. Common where
                  foreigners buy outside ITC zones, such as some Ghala projects.
                  It usually comes with property-linked residency.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">
                  GCC + Omani only
                </h3>
                <p className="text-muted-foreground">
                  Much of Khoudh, most of Bousher, and Mawalah are restricted to
                  Gulf nationals and Omanis.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Do not confuse ITC freehold with usufruct. They are legally
              different things, with different exit, inheritance and residency
              consequences. Always confirm the exact ownership type in writing
              before you commit.
            </p>
          </div>

          {/* Residency */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Residency through property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Buying a qualifying ITC freehold property can grant renewable
              residency. Some projects, such as Telal Al Qurm, advertise
              permanent lifetime residency for the buyer and first-degree
              relatives. Thresholds and terms vary by project and change with
              policy, so verify the current rule for your specific project
              rather than relying on a generic number.
            </p>
          </div>

          {/* Escrow */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Is your deposit protected? (escrow law)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Royal Decree 79/2025 requires developers selling off-plan to hold
              buyer payments in a dedicated escrow account, released against
              construction milestones. That protects you if a project stalls. In
              practice, enforcement is uneven, and some projects are still
              selling without an active escrow account. Before you pay any
              off-plan deposit, ask for the escrow account details and confirm
              they exist. It is the most important check a foreign buyer can
              make.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gold mb-4">
              Need a straight read on a specific project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Prices and availability change weekly, and the cheapest listing is
              rarely the best buy. If you are a GCC or foreign investor weighing
              a specific project, I will give you a straight read: ownership
              type, real yield, escrow status, and whether there is a better
              option for your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/#contact")}
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                Book a consultation
              </Button>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                onClick={() => navigate("/#properties")}
              >
                View available properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OmanPropertyPrices2026;
