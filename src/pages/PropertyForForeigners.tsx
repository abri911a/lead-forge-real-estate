import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppOfferBox from "@/components/WhatsAppOfferBox";
import AuthorProfile from "@/components/AuthorProfile";
import PublishedInStrip from "@/components/PublishedInStrip";
import SeoHead from "@/components/SeoHead";

// Landing page for AG2 (listing-intent searches: "property for sale in oman for expats", "villa for sale oman").
// Built 17 Oct 2026 from a project-by-project check (waleedproperty_seo/price_tracker_inventory_2026-10-08/projects_verified_2026-10-17.md).
// Rules: only projects with (1) a public price on a dated page and (2) a public source that foreigners can buy THERE.
// No ROI promises. Prices are asking prices on the date shown, not offers. Golf Links (sold out 2024) and JOOD (no dated price,
// terms unconfirmed) are excluded on purpose. Never add Uptown Muscat / Wujha.

const title = "Property for Sale in Oman for Foreigners (2026): Projects You Can Buy, With Prices | Waleed Property";
const description =
  "14 projects in Oman that foreigners can buy, with a public price, the date, and a link to the source. Al Mouj, Muscat Bay, Yiti, Muscat Hills, Jebel Sifah, Salalah and Sultan Haitham City.";
const canonical = "https://waleedproperty.com/property-for-sale-in-oman-for-foreigners";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";
const WA = "https://wa.me/96879136646?text=";

type Project = {
  name: string;
  by: string;
  unit: string;
  price: string;
  date: string;
  older?: boolean; // price date more than 3 months before 17 Oct 2026
  priceSource: { label: string; href: string };
  whoCanBuy: string;
  whoSource: { label: string; href: string };
  handover?: string;
};

type Area = { id: string; name: string; note: string; guide?: { label: string; href: string }; projects: Project[] };

const areas: Area[] = [
  {
    id: "al-mouj",
    name: "Al Mouj Muscat",
    note: "Integrated Tourism Complex (ITC) next to Muscat airport. Built, lived-in, with a marina and golf.",
    guide: { label: "Al Mouj guide", href: "/al-mouj-guide" },
    projects: [
      {
        name: "Azura Beach Residences III & IV",
        by: "Al Mouj Muscat (developer)",
        unit: "Apartments, unit type not stated",
        price: "from 69,000 + VAT",
        date: "live 17 Oct 2026",
        priceSource: { label: "almouj.com", href: "https://www.almouj.com/en/azura-iii-iv/" },
        whoCanBuy: "Freehold, all nationalities",
        whoSource: { label: "developer press release (Zawya)", href: "https://www.zawya.com/en/press-release/companies-news/al-mouj-muscat-expands-its-best-selling-oceanfront-portfolio-with-final-release-of-azura-beach-residences-iii-and-iv-361251" },
      },
      {
        name: "Vistal by Victoria Swarovski",
        by: "LEO Developments",
        unit: "1-bedroom, about 66 m²",
        price: "from 140,316",
        date: "live 17 Oct 2026 (broker)",
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/property/vistal-by-victoria-swarovski/" },
        whoCanBuy: "Freehold, with residency for foreign buyers",
        whoSource: { label: "Oman Observer", href: "https://www.omanobserver.om/article/1180942/business/first-victoria-swarovski-branded-residential-project-launched-at-al-mouj-muscat" },
        handover: "Q4 2029",
      },
    ],
  },
  {
    id: "muscat-bay",
    name: "Muscat Bay",
    note: "ITC on the coast south-east of Muscat, between the mountains and the sea.",
    projects: [
      {
        name: "Luma Residences",
        by: "Muscat Bay",
        unit: "1-bedroom, 105 m² sellable",
        price: "78,555",
        date: "14 Mar 2026 (broker)",
        older: true,
        priceSource: { label: "VP Realty", href: "https://thevprealty.com/property/luma-residences-muscat-bay/" },
        whoCanBuy: "Freehold units, finance offered to all nationalities",
        whoSource: { label: "Muscat Daily", href: "https://www.muscatdaily.com/2026/01/13/muscat-bay-launches-luma-residences-with-r020mn-investment/" },
        handover: "about 2029",
      },
      {
        name: "Zen Residences",
        by: "Muscat Bay",
        unit: "2-bedroom, 133 m² (studios and 1-bedrooms sold out)",
        price: "from 138,000 before VAT",
        date: "live 17 Oct 2026 (broker)",
        priceSource: { label: "Irfan", href: "https://www.irfaninvest.com/buy/zen-residences" },
        whoCanBuy: "Freehold, any nationality (broker statement)",
        whoSource: { label: "Irfan", href: "https://www.irfaninvest.com/buy/zen-residences" },
        handover: "handover started 2026",
      },
    ],
  },
  {
    id: "yiti-aida",
    name: "Yiti and AIDA",
    note: "ITCs on the coast past Muscat Bay. Mostly off-plan, handover 2027 to 2029.",
    projects: [
      {
        name: "The Plaza, Sustainable City Yiti",
        by: "The Sustainable City Yiti",
        unit: "1-bedroom, about 78–83 m²",
        price: "85,971",
        date: "Apr 2026 developer list, via a broker",
        older: true,
        priceSource: { label: "muscat.properties", href: "https://muscat.properties/projects/tsc-yiti-the-plaza" },
        whoCanBuy: "Freehold, any nationality (broker statement)",
        whoSource: { label: "muscat.properties", href: "https://muscat.properties/projects/tsc-yiti-the-plaza" },
        handover: "Dec 2027",
      },
      {
        name: "The Great Escape 2",
        by: "Dar Global",
        unit: "1-bedroom, 59.6 m², unfurnished",
        price: "125,605",
        date: "18 Feb 2026 (broker)",
        older: true,
        priceSource: { label: "Tropical Riviera", href: "https://tropicalriviera.com/the-great-escape-2-signature-residences-aida-oman/" },
        whoCanBuy: "All nationalities (broker statement)",
        whoSource: { label: "Tropical Riviera", href: "https://tropicalriviera.com/the-great-escape-2-signature-residences-aida-oman/" },
        handover: "June 2029",
      },
      {
        name: "Marriott Residences AIDA",
        by: "Dar Global",
        unit: "1-bedroom, about 60 m², furnished",
        price: "139,200",
        date: "18 Jul 2026 (broker guide)",
        older: true,
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/guides/aida-yiti/" },
        whoCanBuy: "Freehold, all nationalities",
        whoSource: { label: "Dar Global", href: "https://darglobal.co.uk/marriott-residences-aida-oman" },
        handover: "Sep 2029",
      },
    ],
  },
  {
    id: "muscat-hills",
    name: "Muscat Hills",
    note: "ITC near the airport, around a golf course.",
    projects: [
      {
        name: "Opal Residence",
        by: "Al Nama",
        unit: "From-price on the developer page (a studio, before VAT, per a broker)",
        price: "from 44,645",
        date: "live 17 Oct 2026 (developer)",
        priceSource: { label: "opalresidence.com", href: "https://opalresidence.com/" },
        whoCanBuy: "Freehold for all nationalities",
        whoSource: { label: "developer", href: "https://opalresidence.com/" },
        handover: "Q4 2028",
      },
    ],
  },
  {
    id: "jebel-sifah",
    name: "Jebel Sifah",
    note: "ITC on the coast about an hour from Muscat. Holiday and second-home market.",
    projects: [
      {
        name: "Solaris",
        by: "Muriya",
        unit: "Studio to 2-bedroom",
        price: "from 50,000",
        date: "live 17 Oct 2026 (developer)",
        priceSource: { label: "jebelsifah.com", href: "https://jebelsifah.com/real-estate/solaris/" },
        whoCanBuy: "Freehold and residency for all nationalities",
        whoSource: { label: "developer", href: "https://jebelsifah.com/real-estate/solaris/" },
      },
      {
        name: "Olive Farms Phase 2",
        by: "Muriya",
        unit: "1-bedroom farmhouse (a house, not an apartment)",
        price: "from 75,000",
        date: "live 17 Oct 2026 (developer)",
        priceSource: { label: "jebelsifah.com", href: "https://jebelsifah.com/real-estate/olive-farms/" },
        whoCanBuy: "Freehold (developer); all nationalities (broker)",
        whoSource: { label: "developer", href: "https://jebelsifah.com/real-estate/olive-farms/" },
      },
    ],
  },
  {
    id: "salalah",
    name: "Hawana Salalah",
    note: "ITC in Salalah, in the south. Resort and holiday-rental market.",
    projects: [
      {
        name: "Riviera Residences",
        by: "Muriya",
        unit: "1-bedroom sea view, about 50–54 m²",
        price: "65,500 (VAT probably extra)",
        date: "18 Jul 2026 (broker guide)",
        older: true,
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/guides/hawana-salalah/" },
        whoCanBuy: "Open to international buyers, residency for all nationalities",
        whoSource: { label: "developer", href: "https://hawanasalalah.com/real-estate/" },
      },
    ],
  },
  {
    id: "sultan-haitham-city",
    name: "Sultan Haitham City",
    note: "New government city in Al Seeb. Early phase: most of it is not built yet. Read the title note below before you book.",
    guide: { label: "Sultan Haitham City guide", href: "/sultan-haitham-city-guide" },
    projects: [
      {
        name: "Wadi Zaha",
        by: "Al Ahly Sabbour",
        unit: "Studio, 54 m²",
        price: "54,705",
        date: "3 Sep 2026 (broker); other brokers show more",
        priceSource: { label: "Damas Global", href: "https://damas.net/oman/blog/sultan-haitham-city-shc" },
        whoCanBuy: "Sold to foreign buyers (sales site). Title: see note",
        whoSource: { label: "sales site", href: "https://www.investinoman.co/en_GB" },
        handover: "2028 (brokers)",
      },
      {
        name: "Yenaier Residences",
        by: "Adanté Realty",
        unit: "Studio, 65 m²",
        price: "52,500",
        date: "13 Jul 2026 price list (broker)",
        older: true,
        priceSource: { label: "Damas Global", href: "https://damas.net/en/oman/muscat/sultan-haitham-city/yenaier" },
        whoCanBuy: "Described as open to all nationalities (press). Title: see note",
        whoSource: { label: "Gulf News", href: "https://gulfnews.com/world/gulf/adante-realty-launches-yenaier-residences-in-oman-1.500017306" },
        handover: "second half of 2027 (broker)",
      },
      {
        name: "Sarooj Oasis – Azha",
        by: "Sarooj",
        unit: "1-bedroom, 70.1 m²",
        price: "60,765",
        date: "9 Jun 2026 (broker)",
        older: true,
        priceSource: { label: "Wave Homes", href: "https://www.wavehomes.net/property-search~action=detail,pid=3202" },
        whoCanBuy: "Omanis and expats can buy (press). Title: see note",
        whoSource: { label: "Oman Observer", href: "https://www.omanobserver.om/article/1164471/business/economy/sarooj-oasis-launched-at-sultan-haitham-city" },
        handover: "Q4 2028 (broker)",
      },
    ],
  },
];

const count = areas.reduce((n, a) => n + a.projects.length, 0);

const sources = [
  { label: "Royal Decree 12/2006, ownership in Integrated Tourism Complexes (Ministry of Housing)", href: "https://www.housing.gov.om/cmsapi/files/content/Royal%20Decree%20-%20Real%20Estate%20Ownership%20Act%20for%20the%20Integrated%20Tourism%20Complexes.pdf" },
  { label: "Gulf News, foreign ownership stays in designated areas (28 Jun 2026)", href: "https://gulfnews.com/world/gulf/oman/oman-clarifies-foreign-property-ownership-remains-restricted-to-designated-areas-1.500589740" },
  { label: "Muscat Daily, foreigners get 99-year rights in the future cities (24 Jun 2023)", href: "https://www.muscatdaily.com/2023/06/24/foreigners-entitled-to-property-for-99-years-in-future-cities/" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Property for Sale in Oman for Foreigners: Projects You Can Buy, With Prices",
  author: { "@type": "Person", name: "Waleed Al Abri", jobTitle: "Real Estate Advisor" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
};

const askLink = (project: string) =>
  WA + encodeURIComponent(`Hi Waleed, I am interested in ${project}. My budget is: ... My nationality is: ...`);

const PropertyForForeigners = () => (
  <div className="dark min-h-screen bg-luxury-dark text-foreground">
    <SeoHead title={title} description={description} canonical={canonical} type="article" />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="ar" href="https://waleedproperty.com/ar/property-for-sale-in-oman-for-foreigners" />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:title" content="Property in Oman you can buy as a foreigner: projects and prices" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Property in Oman you can buy as a foreigner: projects and prices" />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
    </Helmet>

    <Header />

    <main className="pt-8 pb-16 md:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 max-w-4xl [&_p]:max-w-[65ch]">
        <div className="mb-8">
          <p className="mb-4 text-sm" dir="rtl" lang="ar">
            <a href="/ar/property-for-sale-in-oman-for-foreigners" className={linkClass}>
              اقرأ بالعربية
            </a>
          </p>
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Projects for foreign buyers · October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Property in Oman You Can Buy as a Foreigner: Projects and Prices
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Updated October 17, 2026 · By Waleed Al Abri, Real Estate Advisor
          </p>
          <PublishedInStrip className="mt-2" />
        </div>

        {/* Short answer */}
        <div className="bg-card border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Short answer</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>
              As a foreigner, you can buy only in named areas. Most are Integrated Tourism Complexes
              (ITCs). Some projects in Sultan Haitham City are also sold to foreigners.
            </p>
            <p>
              Below are {count} projects in those areas with a public price. Each price has a date
              and a link to the page where I found it.
            </p>
            <p>
              The cheapest start around OMR 44,000 to 55,000. Most 1-bedrooms are OMR 60,000 to
              140,000.
            </p>
            <p>Prices change as units sell. Ask me for today's price before you decide.</p>
          </div>
        </div>

        <WhatsAppOfferBox
          heading="Not sure which one fits?"
          body="Send me your budget and your nationality on WhatsApp. I will reply with 3 projects you can legally buy, and today's price."
          message="Hi Waleed, I want to buy property in Oman. My budget is: ... My nationality is: ..."
          showPublications
        />

        {/* How to read */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How to read this list</h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-6">
            <li>
              Prices are in Omani rials. They are asking prices on the date shown, not offers. "From"
              means the cheapest unit on that page.
            </li>
            <li>
              Most new units from a developer carry 5% VAT. Some pages include it, some do not. I
              say which when the page says.
            </li>
            <li>
              Many prices come from brokers, not the developer. I say which. Prices older than 3
              months are marked.
            </li>
            <li>
              I do not list rental yields here. They depend on the exact unit and the price you pay.
            </li>
          </ul>
        </div>

        {/* Area nav */}
        <nav aria-label="Areas" className="mb-10 flex flex-wrap gap-2">
          {areas.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-gold/40 px-4 py-2 text-sm text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              {a.name}
            </a>
          ))}
        </nav>

        {areas.map((area) => (
          <section key={area.id} id={area.id} className="mb-14 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{area.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">{area.note}</p>
            {area.guide && (
              <p className="mb-4">
                <a href={area.guide.href} className={linkClass}>
                  {area.guide.label}
                </a>
              </p>
            )}

            {area.id === "sultan-haitham-city" && (
              <div className="border border-gold/40 bg-gold/5 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Title note for foreigners</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sellers call these projects freehold. But in June 2023 the Housing Minister said
                  foreigners get a 99-year usufruct in the new cities, not freehold. I have not found
                  an official update since. Before you pay, get the title type in writing from the
                  developer.
                </p>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {area.projects.map((p) => (
                <article key={p.name} className="bg-card border border-border rounded-lg p-5 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.by}</p>
                  <p className="text-2xl font-bold text-gold leading-tight">
                    {p.price.startsWith("from ") ? `From OMR ${p.price.slice(5)}` : `OMR ${p.price}`}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">{p.unit}</p>
                  <dl className="text-sm space-y-1.5 mb-4">
                    <div>
                      <dt className="inline text-muted-foreground">Price date: </dt>
                      <dd className="inline text-foreground">
                        {p.date} ·{" "}
                        <a href={p.priceSource.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {p.priceSource.label}
                        </a>
                        {p.older && (
                          <span className="ml-2 inline-block rounded bg-gold/15 px-2 py-0.5 text-xs text-gold">
                            older than 3 months
                          </span>
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline text-muted-foreground">Who can buy: </dt>
                      <dd className="inline text-foreground">
                        {p.whoCanBuy} ·{" "}
                        <a href={p.whoSource.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {p.whoSource.label}
                        </a>
                      </dd>
                    </div>
                    {p.handover && (
                      <div>
                        <dt className="inline text-muted-foreground">Handover: </dt>
                        <dd className="inline text-foreground">{p.handover}</dd>
                      </div>
                    )}
                  </dl>
                  <a
                    href={askLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center min-h-[44px] rounded-md border border-[#25D366]/60 px-4 text-sm font-semibold text-foreground hover:bg-[#25D366] hover:text-[#0B141A] transition-colors"
                  >
                    Ask about {p.name} on WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Before you book */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Before you book any of these</h2>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>Get the title type in writing: freehold or usufruct, and for how long.</li>
            <li>
              For off-plan, ask how your payments are protected before handover.{" "}
              <a href="/is-off-plan-property-safe-in-oman" className={linkClass}>
                Is off-plan safe in Oman?
              </a>
            </li>
            <li>
              Check if the unit gives residency, and which kind.{" "}
              <a href="/oman-residency-by-property" className={linkClass}>
                Residency by property
              </a>
            </li>
            <li>Ask for today's price and the payment plan. Many prices here are a few months old.</li>
          </ol>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            How prices moved from 2025 to 2026:{" "}
            <a href="/oman-property-prices-2026" className={linkClass}>
              off-plan price tracker
            </a>
            . The rules in detail:{" "}
            <a href="/can-foreigners-buy-property-in-oman" className={linkClass}>
              can foreigners buy property in Oman?
            </a>
          </p>
        </div>

        {/* Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Sources for the rules</h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Each project's price and ownership source is linked on its card. Checked 17 October
            2026. If you see a price that is wrong or old, tell me on WhatsApp and I will check it.
          </p>
        </div>

        <div className="mt-12">
          <AuthorProfile variant="full" />
        </div>
      </div>
    </main>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default PropertyForForeigners;
