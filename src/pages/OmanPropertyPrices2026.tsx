import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AuthorProfile from "@/components/AuthorProfile";
import SeoHead from "@/components/SeoHead";
import WhatsAppOfferBox from "@/components/WhatsAppOfferBox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Off-plan price tracker. Rebuilt 8 Oct 2026 from the June area guide.
// Data rule: only PUBLIC prices, each linked to the page that shows it (checked 8 Oct 2026).
// Never add prices from rep WhatsApp sheets, client deals or this site itself.

const title =
  "Oman Off-Plan Prices 2025 to 2026: What Changed, With Sources | Waleed Property";
const description =
  "Public off-plan prices for Oman projects in 2025 and 2026, with sources. Which projects went up, which stayed flat, and why a higher price is not always a rise.";
const canonical = "https://waleedproperty.com/oman-property-prices-2026";
const ogTitle = "Off-Plan Prices in Oman: What Changed From 2025 to 2026";
const ogDescription =
  "Four projects with public prices in both years. Two went up a lot, two stayed flat. Every price links to its source.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Off-Plan Prices in Oman: What Changed From 2025 to 2026",
  author: {
    "@type": "Person",
    name: "Waleed Al Abri",
    jobTitle: "Real Estate Advisor",
  },
  datePublished: "2026-06-14",
  dateModified: "2026-10-08",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
  about: "Off-plan property prices in Oman, 2025 to 2026",
};

const faqs = [
  {
    q: "Did off-plan prices in Oman go up from 2025 to 2026?",
    a: "For some projects. I found 4 projects with a public price for the same kind of unit in both years. The Great Escape 2 went up 32% and Wadi Zaha 21% per square metre. Opal Residence and The Plaza at Sustainable City Yiti stayed flat. Both rises came from the developer raising the list as units sold.",
  },
  {
    q: "Does the NCSI real estate price index show prices per square metre?",
    a: "No. It measures the value of deals traded. In Q2 2026 the apartment index was 17.2% higher than a year before. That means more money went into apartment deals. It does not mean a flat costs 17.2% more.",
  },
  {
    q: "Why does a project's 'from' price go up?",
    a: "There are three reasons. The developer raises the list as units sell. The cheap units sell out, so the 'from' price moves even though nothing got more expensive. Or the market moves. Only the third is a real price rise.",
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

type Source = { label: string; date: string; href: string };
type Row = {
  project: string;
  area: string;
  unit: string;
  before: string;
  beforeSource: Source;
  after: string;
  afterSource: Source;
  change: string;
  reason: string;
};

const rows: Row[] = [
  {
    project: "The Great Escape 2",
    area: "AIDA, Yiti",
    unit: "1-bedroom, 59.6 m²",
    before: "95,390",
    beforeSource: {
      label: "Omran Real Estate",
      date: "Jan 2025",
      href: "https://web.archive.org/web/20250518161442/https://omran-realestate.com/property/aida-the-great-escape-2-apartment/",
    },
    after: "125,605",
    afterSource: {
      label: "Tropical Riviera",
      date: "Feb 2026",
      href: "https://tropicalriviera.com/the-great-escape-2-signature-residences-aida-oman/",
    },
    change: "+32%",
    reason: "Developer raised the list as units sold",
  },
  {
    project: "Wadi Zaha",
    area: "Sultan Haitham City",
    unit: "Studio",
    before: "42,000 for 50 m² (840 per m²)",
    beforeSource: {
      label: "Vista Real Estate",
      date: "May 2025",
      href: "https://web.archive.org/web/20250619125314/https://vistaoman.com/Properties-for-sale-rent/sale/apartments-flat-oman/mabela/great-offer-50-sqm-freehold-studio-apartment-in-wadi-zaha/",
    },
    after: "54,705 for 54 m² (1,013 per m²)",
    afterSource: {
      label: "Damas Global",
      date: "Sep 2026",
      href: "https://damas.net/oman/blog/sultan-haitham-city-shc",
    },
    change: "+21% per m²",
    reason: "Developer raised the list. Studios also got bigger.",
  },
  {
    project: "Opal Residence",
    area: "Muscat Hills",
    unit: "Studio",
    before: "44,645 before VAT",
    beforeSource: {
      label: "Ruby Oman",
      date: "Jun 2025",
      href: "https://rubyoman.com/projects/opal-muscat-hills/",
    },
    after: "44,100 for 49 m²",
    afterSource: {
      label: "KV Land",
      date: "Oct 2026",
      href: "https://kvland.com/property/opal-residential-project-muscat-hills/",
    },
    change: "-1%",
    reason: "Flat",
  },
  {
    project: "The Plaza, Sustainable City Yiti",
    area: "Yiti",
    unit: "1-bedroom, about 79 m²",
    before: "87,000",
    beforeSource: {
      label: "Muzn Properties",
      date: "Oct 2025",
      href: "https://web.archive.org/web/20251110220330/https://muzn-properties.com/property/plaza-apartments-yiti-1bedroom-beach/",
    },
    after: "85,971",
    afterSource: {
      label: "April 2026 developer price list, via muscat.properties",
      date: "Apr 2026",
      href: "https://muscat.properties/projects/tsc-yiti-the-plaza",
    },
    change: "-1%",
    reason: "Flat",
  },
];

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";

const SourceLink = ({ s }: { s: Source }) => (
  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {s.label}, {s.date}
  </a>
);

const OmanPropertyPrices2026 = () => (
  <div className="dark min-h-screen bg-luxury-dark text-foreground">
    <SeoHead title={title} description={description} canonical={canonical} type="article" />
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
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>

    <Header />

    <section className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Price tracker · Updated October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Off-Plan Prices in Oman: What Changed From 2025 to 2026
          </h1>
          <p className="text-sm text-muted-foreground">
            Updated October 8, 2026 · By Waleed Al Abri, Real Estate Advisor
          </p>
        </div>

        {/* Short answer */}
        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gold mb-4">Short answer</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>
              I found 4 projects with a public price for the same kind of unit in both 2025 and
              2026.
            </p>
            <p>
              Two went up a lot: The Great Escape 2 by 32%, and Wadi Zaha by 21% per square metre.
              Two stayed flat: Opal Residence and The Plaza at Sustainable City Yiti.
            </p>
            <p>
              Both rises came from the developer raising the list as units sold. I did not see a
              market-wide rise in these numbers.
            </p>
            <p>Four projects is a small sample. It cannot show where the whole market is going.</p>
          </div>
        </div>

        <WhatsAppOfferBox
          heading="Looking at one of these projects?"
          body="Send me the project name and your budget on WhatsApp. I will tell you what I know about its price. You can also send a project you want me to add."
          message="Hi Waleed, I am looking at this project: ... My budget is: ..."
        />

        {/* Three reasons */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">A higher price is not always a rise</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When a project's price goes up, I see three different reasons behind it.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground font-semibold">The developer raises the list.</span>{" "}
              Many developers sell in steps. When the first units sell, the next units cost more.
              This helps an early buyer only if they can sell later at the new price.
            </li>
            <li>
              <span className="text-foreground font-semibold">The cheap units sold out.</span> The
              "from" price goes up because the small units or the low floors are gone. Nothing got
              more expensive.
            </li>
            <li>
              <span className="text-foreground font-semibold">The market moved.</span> Similar
              units in the area now sell for more. This is the only real price rise.
            </li>
          </ol>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Every row in the table below says which one it is.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            One more thing to check: VAT and furniture. Some 2025 prices exclude 5% VAT. Some 2026
            prices include it, or include furniture. A 5% jump can be VAT only.
          </p>
        </div>

        {/* Table A */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">
            2025 to 2026: projects with two public prices
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            All four are in zones where foreigners can buy. The rules still differ by project, so
            check my{" "}
            <a href="/can-foreigners-buy-property-in-oman" className={linkClass}>
              guide on foreign ownership
            </a>{" "}
            before you book.
          </p>
          {/* Phones: one card per project, so Change and Reason stay on screen */}
          <div className="md:hidden space-y-4">
            {rows.map((r) => (
              <div key={r.project} className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <span className="text-foreground font-semibold">{r.project}</span>
                  <span className="text-gold font-bold whitespace-nowrap">{r.change}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {r.area} · {r.unit}
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  2025: {r.before} (<SourceLink s={r.beforeSource} />)
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  2026: {r.after} (<SourceLink s={r.afterSource} />)
                </p>
                <p className="text-muted-foreground text-sm mt-3">{r.reason}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block bg-card border border-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>2025 price (OMR)</TableHead>
                  <TableHead>2026 price (OMR)</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.project}>
                    <TableCell>
                      <span className="text-foreground font-semibold">{r.project}</span>
                      <br />
                      <span className="text-muted-foreground text-sm">{r.area}</span>
                    </TableCell>
                    <TableCell>{r.unit}</TableCell>
                    <TableCell>
                      {r.before}
                      <br />
                      <span className="text-sm">
                        <SourceLink s={r.beforeSource} />
                      </span>
                    </TableCell>
                    <TableCell>
                      {r.after}
                      <br />
                      <span className="text-sm">
                        <SourceLink s={r.afterSource} />
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">{r.change}</TableCell>
                    <TableCell>{r.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            All prices are in Omani rials. Most of these prices come from broker pages, not from
            the developer. Brokers do not always update their pages, so I use the date the page
            shows.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            For Wadi Zaha I compare price per square metre, because the 2026 studio is bigger. One{" "}
            <a
              href="https://web.archive.org/web/20250906002422/https://muzn-properties.com/property/wadi-zaha-freehold-apartments/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              broker page
            </a>{" "}
            listed the project "from 40,000" in September 2025 and{" "}
            <a
              href="https://muzn-properties.com/property/wadi-zaha-freehold-apartments/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              "from 44,000"
            </a>{" "}
            in January 2026. That is +10% in four months.
          </p>
        </div>

        {/* Not clean */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">
            Projects I checked but could not compare cleanly
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground">Sarooj Oasis (Sultan Haitham City):</span> it{" "}
              <a
                href="https://www.omanobserver.om/article/1164471/business/economy/sarooj-oasis-launched-at-sultan-haitham-city"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                launched "from 31,600"
              </a>{" "}
              in January 2025, but the unit size was not published. So I cannot compare it with a
              2026 price.
            </li>
            <li>
              <span className="text-foreground">Yenaier (Sultan Haitham City):</span> the 2025
              price excludes VAT. The 2026 price includes furniture, and the studio is a different
              size.
            </li>
            <li>
              <span className="text-foreground">Azura (Al Mouj):</span> Phase III and IV start at
              69,000 plus VAT. Phase II started at 88,000. These are different buildings, so this
              is not a price drop.
            </li>
            <li>
              <span className="text-foreground">Zen Residences (Muscat Bay):</span> the studios and
              1-bedrooms are sold out. Only 2-bedrooms are left.
            </li>
            <li>
              <span className="text-foreground">Golf Hills, Solaris and Hay Al Wafa:</span> the
              public sources disagree, or the units are not the same.
            </li>
          </ul>
        </div>

        {/* NCSI */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">What the official numbers say</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Oman's statistics centre (NCSI) publishes a real estate index every quarter. The name
              is confusing, so check what it measures.
            </p>
            <p>
              It measures the <span className="text-foreground font-semibold">value</span> of
              deals traded. It does not measure the price per square metre.
            </p>
            <p>
              In Q2 2026 the apartment index was 17.2% higher than a year before (NCSI, reported by{" "}
              <a
                href="https://timesofoman.com/article/177120-omans-property-price-index-rises-by-227-in-2026-q2"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Times of Oman on 19 September 2026
              </a>
              ). That means more money went into apartment deals. It does not mean a flat costs
              17.2% more.
            </p>
          </div>
        </div>

        {/* Limits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">What this page does not show</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Resale prices. This table shows what developers ask for new units. It does not show
              what an owner gets when they sell later.
            </p>
            <p>
              For most of these projects I have no resale record yet. When I find a real resale
              price from a public source, I will add it.
            </p>
          </div>
        </div>

        {/* Method */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">How I collect the prices</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I only use prices that are public: the developer's own posts, ads or website,
              newspapers, and broker or portal ads.
            </p>
            <p>Each price links to the page where I found it, with the date.</p>
            <p>I do not publish prices that a sales rep sent me privately.</p>
            <p>
              If you see a price here that is wrong or old, tell me on WhatsApp (button above) and
              I will check it.
            </p>
          </div>
        </div>

        <AuthorProfile variant="full" />
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default OmanPropertyPrices2026;
