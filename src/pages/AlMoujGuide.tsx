import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import PublishedInStrip from "@/components/PublishedInStrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppOfferBox from "@/components/WhatsAppOfferBox";
import StructuredData from "@/components/StructuredData";
import AuthorProfile from "@/components/AuthorProfile";
import BacklinkResources from "@/components/BacklinkResources";
import SeoHead from "@/components/SeoHead";
import { Home, Waves, MapPin, Scale } from "lucide-react";

// Rewritten 11 Oct 2026 from a claim-by-claim fact-check (13 of 44 claims on the old page were wrong).
// Every number below has a source in the "Sources" list. Do not add yields, prices or "growth" without one.

const title = "Al Mouj Muscat Buyer Guide (2026): Prices, Ownership, Residency | Waleed Property";
const description =
  "Al Mouj Muscat for foreign buyers: what is there today, current developer prices, freehold rules, residency, and realistic rental yields. Every number has a source.";
const canonical = "https://waleedproperty.com/al-mouj-guide";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";

const sources = [
  { label: "Al Mouj Muscat, 20th anniversary brochure (2026)", href: "https://www.almouj.com/20th-anniversary/BrochureEN.pdf" },
  { label: "Al Mouj Muscat, homepage (checked 11 Oct 2026)", href: "https://www.almouj.com/en/" },
  { label: "Al Mouj Muscat, Azura III and IV (launched 15 Feb 2026)", href: "https://www.almouj.com/en/azura-iii-iv/" },
  { label: "Al Mouj Muscat, Golf Links", href: "https://www.almouj.com/en/golf/" },
  { label: "Royal Decree 12/2006, ownership in Integrated Tourism Complexes (Ministry of Housing)", href: "https://www.housing.gov.om/cmsapi/files/content/Royal%20Decree%20-%20Real%20Estate%20Ownership%20Act%20for%20the%20Integrated%20Tourism%20Complexes.pdf" },
  { label: "Times of Oman, legal framework for foreign ownership in ITCs (25 Jul 2026)", href: "https://cdn.timesofoman.com/article/174831-legal-framework-governing-foreign-ownership-in-omans-itcs" },
  { label: "Savills, Muscat residential market (Q2 2025)", href: "https://www.savills.com/research_articles/255800/379696-0" },
  { label: "Sands of Wealth, Al Mouj prices and yields (2 Sep 2026)", href: "https://sandsofwealth.com/blogs/news/al-mouj-overpriced" },
  { label: "Muscat Trips, Al Mouj area guide (Jul 2026)", href: "https://www.muscattrips.com/areas/al-mouj" },
];

const AlMoujGuide = () => (
  <div className="dark min-h-screen bg-luxury-dark text-foreground">
    <SeoHead title={title} description={description} canonical={canonical} type="article" />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
    </Helmet>
    <StructuredData
      type="article"
      data={{
        title: "Al Mouj Muscat Buyer Guide (2026): Prices, Ownership, Residency",
        description,
        datePublished: "2025-01-19",
        dateModified: "2026-10-11",
      }}
    />

    <Header />

    <main className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Area guide · October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Al Mouj Muscat: A Buyer's Guide
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Updated October 11, 2026 · By Waleed Al Abri, Real Estate Advisor
          </p>
          <PublishedInStrip className="mt-2" />
        </div>

        {/* Short answer */}
        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gold mb-4">Short answer</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>
              Al Mouj Muscat is an Integrated Tourism Complex (ITC) on the coast, about 10 minutes
              from Muscat airport. Foreigners can buy freehold here.
            </p>
            <p>
              New apartments start from OMR 69,000 plus VAT. A well-bought unit rents for about 5
              to 6% a year before costs.
            </p>
            <p>
              Al Mouj makes sense if you want to live here or rent it out. I would not buy here for
              a quick price rise.
            </p>
          </div>
        </div>

        {/* At a glance */}
        <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gold mb-4">What is there today</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Al Mouj opened in 2006. It has an 18-hole golf course designed by Greg Norman, a marina,
            more than 90 shops and restaurants, and a 6 km waterfront with a community beach. The
            developer says more than 19,000 people from 94 nationalities live here.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">266</div>
              <div className="text-sm text-muted-foreground">Hectares (developer)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">165</div>
              <div className="text-sm text-muted-foreground">Marina berths in use (400 planned)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">10 min</div>
              <div className="text-sm text-muted-foreground">To the airport</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">5–6%</div>
              <div className="text-sm text-muted-foreground">Gross rent yield, resale</div>
            </div>
          </div>
        </div>

        <WhatsAppOfferBox
          heading="Looking at Al Mouj?"
          body="Send me your budget and what you want: apartment, townhouse or villa. I will tell you what is available now and the current price."
          message="Hi Waleed, I am looking at Al Mouj. I want: ... My budget is: ..."
        />

        {/* Prices */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Home className="h-8 w-8 shrink-0" />
            What it costs
          </h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-3">New apartments, from the developer</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Azura Beach Residences III and IV: from OMR 69,000 plus VAT (launched February 2026).</li>
                <li>• Golf Links: from OMR 77,000.</li>
                <li>• For comparison, Azura Phase II started at OMR 88,000 plus VAT in October 2025.</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-3">Resale apartments</h3>
              <p className="text-muted-foreground">
                1-bedroom resale units were asked at about OMR 99,900 to 112,000 in September 2026
                (Sands of Wealth). These are asking prices, not sold prices.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-3">Villas</h3>
              <p className="text-muted-foreground">
                Price depends a lot on the location inside Al Mouj (golf, lake or beach). Ask me for
                current units. I do not list a price range here because the public numbers disagree
                too much.
              </p>
            </div>
          </div>
        </div>

        {/* Rent and yield */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">Rent and yield</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Al Mouj has some of the highest rents in Muscat. Savills put a 2-bedroom apartment at
              about OMR 709 a month in Q2 2025.
            </p>
            <p>
              On a well-bought resale unit, that is about 5 to 6% a year before costs. After service
              charges and empty months, expect about 3 to 4.5%. On a new launch at today's prices,
              the yield is lower.
            </p>
          </div>
        </div>

        {/* Price history */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">Will the price go up?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I have not seen evidence of fast price growth in Al Mouj.</p>
            <p>
              The newest phase, Azura III and IV, starts lower than the phase before it: 69,000 plus
              VAT against 88,000 plus VAT. These are different buildings, so it is not a price drop.
              But it is not a sign of rising prices either.
            </p>
            <p>
              Buy here for the place and the rent. If you want a price rise, look at early phases in
              newer areas, and accept the higher risk that comes with them. See my{" "}
              <a href="/oman-property-prices-2026" className={linkClass}>
                off-plan price tracker
              </a>
              .
            </p>
          </div>
        </div>

        {/* Ownership and residency */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 shrink-0" />
            Ownership and residency
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed">
            <li>
              • <strong className="text-foreground">Freehold for all nationalities.</strong> Al Mouj
              is a licensed ITC. Under Royal Decree 12/2006, non-Omanis can own land or built units
              here. The title is registered at the Ministry of Housing.
            </li>
            <li>
              • <strong className="text-foreground">Selling.</strong> A built unit can be sold at any
              time. A plot is different: you must build on it within 4 years, and you cannot sell it
              before then.
            </li>
            <li>
              • <strong className="text-foreground">Residency.</strong> The owner of a built unit can
              get residency for themselves and their first-degree family. The owner residency ends
              when you sell the unit. Full rules:{" "}
              <a href="/oman-residency-by-property" className={linkClass}>
                Oman residency by property
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Lifestyle */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Waves className="h-8 w-8 shrink-0" />
            Living there
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-3">Sea and golf</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Marina: 400 berths planned, 165 in use today</li>
                <li>• 6 km waterfront and a community beach</li>
                <li>• 18-hole golf course designed by Greg Norman</li>
                <li>• 1.5 km cycling trail and walking paths</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gold mb-3">Daily life</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• More than 90 shops and restaurants, mostly around The Walk</li>
                <li>• A supermarket (almeera)</li>
                <li>• Nurseries on site (Shomoukh, Horizon Kids)</li>
                <li>• Some neighbourhoods, like Golf Links, are gated with 24/7 security</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Schools and hospitals: I found nurseries inside Al Mouj, but no full school or hospital.
            Most families use schools and hospitals elsewhere in Muscat.
          </p>
        </div>

        {/* Location */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <MapPin className="h-8 w-8 shrink-0" />
            Getting around
          </h2>
          <ul className="text-muted-foreground space-y-2">
            <li>• About 10 minutes to Muscat International Airport</li>
            <li>• Road access from 18th November Street</li>
            <li>• About 25 to 30 minutes by taxi to Muttrah Souq and old Muscat</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gold mb-4">Sources</h2>
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
            Checked 11 October 2026. If you see something here that is wrong or old, tell me on
            WhatsApp and I will check it.
          </p>
        </div>

        <div className="mt-12">
          <AuthorProfile variant="full" />
        </div>
      </div>
    </main>

    <BacklinkResources />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default AlMoujGuide;
