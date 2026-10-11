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
import { MapPin, Receipt, Landmark, ListChecks, Scale } from "lucide-react";

// Rewritten 11 Oct 2026 from a claim-by-claim fact-check: the old page said Golden Residency needs
// OMR 500,000 (replaced Sep 2025), ITC units sell "without government approval", "no income tax"
// (5% PIT from 2028), freehold in SEZs (usufruct), and read NCSI's value index as prices.
// Every rule and number below has a source in the "Sources" list. Do not add one without it.

const title = "Investing in Oman Property (2026): Where, Costs, Tax, Residency | Waleed Property";
const description =
  "What a foreign buyer needs before investing in Oman property: where you can own, buying costs, the 2028 income tax, mortgages for expats, Golden Residency at OMR 200,000, and the steps.";
const canonical = "https://waleedproperty.com/oman-investment-guide";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";

const sources = [
  { label: "Gulf News, Oman launches the 10-year Golden Residency (Aug 2025)", href: "https://gulfnews.com/world/gulf/oman/oman-officially-launches-10-year-golden-residency-to-attract-foreign-capital-and-talent-1.500252541" },
  { label: "Gulf News, foreign ownership stays in designated areas (28 Jun 2026)", href: "https://gulfnews.com/world/gulf/oman/oman-clarifies-foreign-property-ownership-remains-restricted-to-designated-areas-1.500589740" },
  { label: "Times of Oman, legal framework for foreign ownership in ITCs (25 Jul 2026)", href: "https://timesofoman.com/article/174831-legal-framework-governing-foreign-ownership-in-omans-itcs" },
  { label: "gov.om, title deed based on a sale contract (Sale for Non-Omanis)", href: "https://gov.om/en/w/get-title-deed-based-on-sale-contract" },
  { label: "Deloitte, Oman VAT guide for the real estate sector", href: "https://www.deloitte.com/middle-east/en/services/tax/perspectives/oman-tax-authority-issued-vat-guide-real-estate-sector.html" },
  { label: "Oman Observer, rental contracts must be registered (3% fee)", href: "https://www.omanobserver.om/article/1114776/oman/non-registration-of-rental-agreement-to-invite-fine" },
  { label: "KPMG, Oman personal income tax from 1 January 2028", href: "https://kpmg.com/om/en/insights/2025/06/oman-announces-the-introduction-of-personal-income-tax-effective-1-january-2028.html" },
  { label: "PwC, Oman introduces personal income tax", href: "https://www.pwc.com/m1/en/services/tax/me-tax-legal-news/2025/oman-introduces-personal-income-tax.html" },
  { label: "National Bank of Oman, housing loan key facts (Jun 2026)", href: "https://www.nbo.om/en/Download%20Documents/Key%20Facts%20Statements%20-%20Housing%20loans%20-%20Ready%20Property.pdf" },
  { label: "SEZAD Duqm, investment incentives", href: "https://duqm.gov.om/en/incentives" },
];

const OmanInvestmentGuide = () => (
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
        title: "Investing in Oman Property (2026): Where, Costs, Tax, Residency",
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
            Investor guide · October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Investing in Oman Property: What You Need to Know
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
            <p>Foreigners can buy in named areas only, mostly Integrated Tourism Complexes (ITCs).</p>
            <p>
              On top of the price, budget about 4 to 5% for a resale unit. For a new unit from a
              developer, add 5% VAT as well.
            </p>
            <p>
              Golden Residency starts at OMR 200,000, for a finished unit with a title deed.
            </p>
            <p>
              Oman has no personal income tax today. From January 2028, a 5% tax applies to income
              above OMR 42,000 a year, and it can include rent and gains from property.
            </p>
          </div>
        </div>

        <WhatsAppOfferBox
          heading="Want to check a project?"
          body="Send me the project name and your budget on WhatsApp. I will tell you if you can buy there, the real total cost, and whether it gives residency."
          message="Hi Waleed, I want to check a project: ... My budget is: ..."
        />

        {/* Where */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <MapPin className="h-8 w-8 shrink-0" />
            Where foreigners can buy
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed">
            <li>
              • <strong className="text-foreground">Integrated Tourism Complexes (ITCs):</strong>{" "}
              for example Al Mouj Muscat, Muscat Bay, Jebel Sifah and Hawana Salalah. Al Mouj is the
              same place that used to be called The Wave.
            </li>
            <li>
              • <strong className="text-foreground">Future cities and named neighbourhoods:</strong>{" "}
              such as Sultan Haitham City. In June 2026 the Ministry of Housing confirmed that
              foreign ownership stays limited to the named areas.
            </li>
            <li>
              • <strong className="text-foreground">Duqm Special Economic Zone:</strong> land is
              given as a usufruct of up to 50 years, renewable. It is not freehold, and it is mainly
              for business use.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Inside an ITC, not every project gives the same title. Always ask whether it is freehold
            or usufruct before you book. More detail:{" "}
            <a href="/can-foreigners-buy-property-in-oman" className={linkClass}>
              Can foreigners buy property in Oman?
            </a>
          </p>
        </div>

        {/* Rules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 shrink-0" />
            ITC freehold has rules
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed">
            <li>
              • A sale to a non-Omani is registered with the Ministry of Housing and Urban Planning,
              through its "Sale for Non-Omanis" service.
            </li>
            <li>• If you rent the unit out, the lease must be registered with the municipality.</li>
            <li>• Holiday letting needs a licence from the Ministry of Heritage and Tourism.</li>
            <li>
              • If you buy a plot, you must build on it within 4 years, and you cannot sell it
              before then.
            </li>
          </ul>
        </div>

        {/* Costs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Receipt className="h-8 w-8 shrink-0" />
            What it costs on top of the price
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed">
            <li>
              • <strong className="text-foreground">Registration:</strong> 3% of the value, paid to
              the Ministry of Housing, plus small fixed fees.
            </li>
            <li>
              • <strong className="text-foreground">VAT:</strong> 5% on the first sale of a new
              residential unit by a developer. A resale has no VAT.
            </li>
            <li>• <strong className="text-foreground">Lawyer:</strong> if you use one for the contract.</li>
            <li>
              • <strong className="text-foreground">Total:</strong> about 4 to 5% for a resale paid
              in cash. For a new unit with a mortgage, about 9 to 12%.
            </li>
            <li>
              • <strong className="text-foreground">If you rent it out:</strong> the landlord pays a
              3% lease registration fee on the rent in Muscat.
            </li>
          </ul>
        </div>

        {/* Tax and loans */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <Landmark className="h-8 w-8 shrink-0" />
            Tax and mortgages
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Income tax from 2028.</strong> Royal Decree
              56/2025 brings a 5% personal income tax on income above OMR 42,000 a year, from 1
              January 2028. Rental income and gains from selling property can count. Your main home
              is exempt. Check your own case with a tax adviser.
            </p>
            <p>
              <strong className="text-foreground">Mortgages for expatriates.</strong> At National
              Bank of Oman (June 2026), an expatriate can borrow up to 70% of the value, so at least
              30% down, for up to 20 years, from age 21. Other banks have their own terms. Ask the
              bank before you book.
            </p>
          </div>
        </div>

        {/* Residency */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">Residency</h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed">
            <li>
              • <strong className="text-foreground">Owner Residency</strong> (ROP Decision 87/2026):
              sponsor-free residency for the owner of a qualifying unit. It lasts while you own it.
            </li>
            <li>
              • <strong className="text-foreground">Golden Residency:</strong> from OMR 200,000 of
              qualifying investment, 10 years, renewable, and it can cover your family. For the
              property route, the unit must be finished, with a title deed. It is a separate
              application from the owner visa. The old 250,000 and 500,000 tiers were replaced in September
              2025.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Full rules:{" "}
            <a href="/oman-residency-by-property" className={linkClass}>
              Oman residency by property
            </a>
            .
          </p>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
            <ListChecks className="h-8 w-8 shrink-0" />
            The steps
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Check before you choose.</strong> Is the area
              open to your nationality? Freehold or usufruct? For off-plan, how are your payments
              protected before handover?
            </li>
            <li>
              <strong className="text-foreground">Reserve.</strong> Developers usually ask 5 to 10%
              to book a unit.
            </li>
            <li>
              <strong className="text-foreground">Read the contract.</strong> Check the handover
              date, what happens if it is late, and the payment plan.
            </li>
            <li>
              <strong className="text-foreground">Pay and register.</strong> The sale is registered
              at the Ministry of Housing, and the title deed is issued in your name.
            </li>
            <li>
              <strong className="text-foreground">Apply for residency</strong> if your unit
              qualifies.
            </li>
          </ol>
        </div>

        {/* Returns */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-4">What about returns?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I do not give one yield for "Oman". It changes a lot by area, by unit, and by the
              price you pay. For one area with sourced numbers, see my{" "}
              <a href="/al-mouj-guide" className={linkClass}>
                Al Mouj guide
              </a>
              . For how prices moved from 2025 to 2026, see my{" "}
              <a href="/oman-property-prices-2026" className={linkClass}>
                off-plan price tracker
              </a>
              .
            </p>
            <p>
              One warning: the NCSI "real estate price index" measures the value of deals traded,
              not prices. A headline like "villas up 17%" from that index does not mean a villa
              costs 17% more.
            </p>
          </div>
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
            Checked 11 October 2026. This is general information, not tax or legal advice. If you
            see something here that is wrong or old, tell me on WhatsApp and I will check it.
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

export default OmanInvestmentGuide;
