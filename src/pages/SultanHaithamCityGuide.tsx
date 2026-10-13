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

// Rewritten 11 Oct 2026 from a claim-by-claim fact-check: the old page had the wrong size (1,600 ha),
// population (200K+), location ("30 km south"), phases, "pre-launch" prices, and unsourced yields and
// growth promises. Every number below has a source in the "Sources" list. Do not add one without it.
// The residency paragraph is the 13 Sep 2026 wording (568c6ed), kept.

const title = "Sultan Haitham City Buyer Guide (2026): Facts, Prices, Residency | Waleed Property";
const description =
  "Sultan Haitham City for buyers: official size and phases, what is built in 2026, investor prices, who can own, and the 30% residency rule. Every number has a source.";
const canonical = "https://waleedproperty.com/sultan-haitham-city-guide";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";

const sources = [
  { label: "Oman Observer, Housing Minister on the city plan (20 Jun 2023)", href: "https://www.omanobserver.om/article/1139059/oman/sultan-haitham-city-first-phase-in-6-years" },
  { label: "MEED, more Sultan Haitham City details (20 Jun 2023)", href: "https://www.meed.com/oman-releases-more-sultan-haitham-city-details" },
  { label: "CNN, the SOM master plan (17 Aug 2023)", href: "https://edition.cnn.com/style/oman-smart-city-som" },
  { label: "Oman Observer, units signed in the first year (27 Jul 2024)", href: "https://www.omanobserver.om/article/1156819/business/property/6986-residential-units-signed-in-the-first-year-of-sultan-haitham-city" },
  { label: "Ministry of Housing and Urban Planning, project page", href: "https://mohup.gov.om/en/projects/qctg57lyr61bsqi7c00hey6s" },
  { label: "Oman Observer, first phase to launch this year (24 Feb 2026)", href: "https://www.omanobserver.om/article/1184978/business/economy/sultan-haitham-citys-first-phase-to-launch-this-year" },
  { label: "Muscat Daily, investments exceed RO 2.4bn, 1,700 units sold (13 Apr 2026)", href: "https://www.muscatdaily.com/2026/04/13/haitham-city-investments-exceed-ro2-4bn-1700-units-sold/" },
  { label: "Gulf News, foreign ownership stays in designated areas (28 Jun 2026)", href: "https://gulfnews.com/world/gulf/oman/oman-clarifies-foreign-property-ownership-remains-restricted-to-designated-areas-1.500589740" },
  { label: "Gulf News, the Muscat Metro plan (30 Jun 2026)", href: "https://gulfnews.com/world/gulf/oman/what-you-need-to-know-about-omans-muscat-metro-project-backed-by-france-1.500591747" },
  { label: "EnterpriseAM, residency incentives in Sultan Haitham City (30 Sep 2026)", href: "https://enterpriseam.com/menaplus/2026/09/30/a-stack-of-residency-incentives-is-turning-sultan-haitham-city-into-the-gccs-most-accessible-foreign-buyer-real-estate-market/" },
];

const SultanHaithamCityGuide = () => (
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
        title: "Sultan Haitham City Buyer Guide (2026): Facts, Prices, Residency",
        description,
        datePublished: "2025-01-19",
        dateModified: "2026-10-11",
      }}
    />

    <Header />

    <main className="pt-8 pb-16 md:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 max-w-4xl [&_p]:max-w-[65ch] [&_li]:max-w-[65ch] [&_strong]:text-foreground">
        <div className="mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Area guide · October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Sultan Haitham City: A Buyer's Guide
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Updated October 11, 2026 · By Waleed Al Abri, Real Estate Advisor
          </p>
          <PublishedInStrip className="mt-2" />
        </div>

        {/* Short answer */}
        <div className="bg-card border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Short answer</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>
              Sultan Haitham City is a new city the government is building in Al Seeb, west of
              central Muscat. It is planned for 100,000 people and 20,000 homes.
            </p>
            <p>
              Sales started in 2024. More than 1,700 units were sold by April 2026. The first part of
              the city is expected to open in 2026.
            </p>
            <p>
              Foreigners can buy, but only in the projects the ministry has named for foreign
              ownership. The Minister put the investor price at about OMR 900 per square metre.
            </p>
          </div>
        </div>

        {/* Facts */}
        <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The official numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums whitespace-nowrap">14.8 km²</div>
              <div className="text-sm text-muted-foreground">Area</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums whitespace-nowrap">100,000</div>
              <div className="text-sm text-muted-foreground">Residents planned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums whitespace-nowrap">20,000</div>
              <div className="text-sm text-muted-foreground">Homes planned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold tabular-nums whitespace-nowrap">2024–2045</div>
              <div className="text-sm text-muted-foreground">Four phases</div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            The city has 19 neighbourhoods and 2.9 km² of green space, including a central park
            along a wadi. The master plan is by Skidmore, Owings &amp; Merrill (SOM). The Ministry of
            Housing and Urban Planning leads the project. Private developers build the
            neighbourhoods under agreements with the ministry.
          </p>
        </div>

        <WhatsAppOfferBox
          heading="Looking at Sultan Haitham City?"
          body="Send me your budget and your nationality on WhatsApp. I will tell you which projects you can buy in, and the current price."
          message="Hi Waleed, I am looking at Sultan Haitham City. My budget is: ... My nationality is: ..."
        />

        {/* Status and phases */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Where it stands in 2026
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed [&>li]:pl-[0.56em] [&>li]:-indent-[0.56em]">
            <li>
              • Construction started in February 2024. By April 2026, more than 1,700 units were
              sold to buyers from more than 35 nationalities, and investments passed OMR 2.4 billion.
            </li>
            <li>
              • In April 2026, bridges were about 75% done, infrastructure about 40%, and power
              stations about 94%.
            </li>
            <li>
              • Phase 1 runs 2024–2030 and covers the city centre. The ministry's page now shows 2027
              for the completion of Phase 1. Phases 2 to 4 run to 2045.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            So most of the city does not exist yet. If you buy now, you are buying an early phase of
            a long plan.
          </p>
        </div>

        {/* Prices */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            What it costs
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Housing Minister said in February 2026 that investors pay about OMR 900 per square
              metre. Eligible Omani families pay about OMR 400, with state support.
            </p>
            <p>
              One example with public prices: a studio at Wadi Zaha was OMR 42,000 for 50 m² in May
              2025, and OMR 54,705 for 54 m² in September 2026. That is about 21% more per square
              metre. Details and sources are on my{" "}
              <a href="/oman-property-prices-2026" className={linkClass}>
                off-plan price tracker
              </a>
              .
            </p>
            <p>
              I do not list rental yields for Sultan Haitham City. Very few units are finished and
              rented, so any yield today is a guess.
            </p>
          </div>
        </div>

        {/* Ownership and residency */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Who can buy, and residency
          </h2>
          <ul className="text-muted-foreground space-y-3 leading-relaxed [&>li]:pl-[0.56em] [&>li]:-indent-[0.56em]">
            <li>
              • <strong className="text-foreground">Foreigners:</strong> only in designated projects.
              In June 2026 the ministry confirmed that foreign ownership stays limited to named
              areas, and listed Sultan Haitham City among them. That does not mean every building
              in the city. Ask which title a project gives before you book.
            </li>
            <li>
              • <strong className="text-foreground">GCC citizens:</strong> buy under the GCC rules.
            </li>
            <li>
              • <strong className="text-foreground">Residency:</strong> Sultan Haitham City has its
              own residency rule, set by the Ministry of Housing for the future cities and Surouh
              projects: once 30% of the price is paid, the buyer can apply for a two-year renewable
              residency, before handover. At OMR 50,000 or less it covers the buyer only; above OMR
              50,000 it covers first-degree family too. It needs a separate security clearance, so
              ownership does not guarantee it. Ask before paying the 30%. I could not find the
              official text online; the rule is reported by trade press and by developers. Full
              guide:{" "}
              <a href="/oman-residency-by-property" className={linkClass}>
                Oman residency by property
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Location and transport
          </h2>
          <ul className="text-muted-foreground space-y-2 leading-relaxed [&>li]:pl-[0.56em] [&>li]:-indent-[0.56em]">
            <li>• In Al Seeb, Muscat Governorate, west of central Muscat</li>
            <li>• Next to the Muscat Expressway and Sultan Qaboos Street</li>
            <li>• About 22 km in a straight line from Muscat International Airport</li>
            <li>
              • A Muscat Metro line from Sultan Haitham City to Ruwi is planned. There is no start
              date yet.
            </li>
          </ul>
        </div>

        {/* Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Sources</h2>
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

export default SultanHaithamCityGuide;
