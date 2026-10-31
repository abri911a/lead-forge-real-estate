import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppOfferBox from "@/components/WhatsAppOfferBox";
import AuthorProfile from "@/components/AuthorProfile";
import PublishedInStrip from "@/components/PublishedInStrip";
import SeoHead from "@/components/SeoHead";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Built 22 Oct 2026 from Waleed's research brief (LifeOS/20_Areas/My_Learning/research/2026-10-22_muscat-supply-vs-demand-BRIEF.md)
// and his approved article text. This is the FULL data version; the LinkedIn post is the short one.
// Rules: every number has a fetched source in `sources`. "Oversupplied" is a hypothesis, not a finding.
// Do not quote the NCSI price index as prices. Do not use "37.6% of flats not fully used" (2022 census category, not vacancy).
// Never write that Sultan Haitham City title = freehold. Never mention Uptown Muscat / Wujha.
// One WhatsApp ask only (the box at the end), by Waleed's spec: no floating WhatsApp button on this page.

const title = "Is Muscat Building More Homes Than It Needs? (2026 Data) | Waleed Property";
const description =
  "Muscat's big projects come slowly. The risk is in old, ordinary flats. Population, projects and Gulf data for 2026, with every source linked.";
const canonical = "https://waleedproperty.com/muscat-property-supply-and-demand-2026";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";

type Src = { label: string; href?: string }; // no href = developer source: cited as plain text, never linked
const S = {
  yearbook: { label: "NCSI Statistical Year Book 2025", href: "https://api.ncsi.gov.om/uploads/pdfs/publicationpdf1759647084.pdf" },
  bulletin: { label: "NCSI Monthly Statistical Bulletin, August 2026", href: "https://api.ncsi.gov.om/uploads/pdfs/monthly_statistical_bulletin___august_2026_1787557374.pdf" },
  sales: { label: "Oman Observer, sales contracts Jan–Aug 2026", href: "https://www.omanobserver.om/article/1196630/business/economy/omans-real-estate-shift-from-trading-to-development" },
  cm: { label: "Oman Observer, Cavendish Maxwell interview (24 Jun 2025)", href: "https://www.omanobserver.om/article/1172471/oman/why-do-we-have-so-many-vacant-residential-units" },
  plan: { label: "Ministry of Housing and Urban Planning, Greater Muscat Structure Plan", href: "https://mohup.gov.om/en/projects/structural-plans/msxzkhjf6iasb66x6md4u046" },
  bm: { label: "Broadway Malyan, Muscat Structure Plan launch", href: "https://www.broadwaymalyan.com/news/muscat-structure-plan-launches/" },
  shcSold: { label: "Muscat Daily, Sultan Haitham City 1,700 units sold (13 Apr 2026)", href: "https://www.muscatdaily.com/2026/04/13/haitham-city-investments-exceed-ro2-4bn-1700-units-sold/" },
  shcPlan: { label: "Oman Observer, Sultan Haitham City plan (20 Jun 2023)", href: "https://www.omanobserver.om/article/1139059/oman/sultan-haitham-city-first-phase-in-6-years" },
  shcMin: { label: "Oman Observer, Housing Minister on Sultan Haitham City (24 Feb 2026)", href: "https://www.omanobserver.om/article/1184978/business/economy/sultan-haitham-citys-first-phase-to-launch-this-year" },
  jood: { label: "Ministry of Housing and Urban Planning, Jood", href: "https://mohup.gov.om/en/projects/neighborhood/a02q9z428xxwuhdkqn4guujy" },
  tmg: { label: "Talaat Moustafa Group, investor presentation (Sep 2026)" },
  wz: { label: "Osoul Misr, Wadi Zaha (12 Mar 2026, Arabic)", href: "https://www.osoulmisrmagazine.com/432504" },
  thuraya: { label: "Times of Oman, A'Thuraya City (27 Sep 2025)", href: "https://timesofoman.com/article/163221-construction-work-for-athuraya-city-begins" },
  khuwair: { label: "Oman Observer, Al Khuwair Downtown (26 Sep 2026)", href: "https://www.omanobserver.om/article/1196793/business/al-khuwair-downtown-nears-next-phase-as-50-plus-firms-show-interest" },
  irfan: { label: "Zawya, Madinat Al Irfan first phase (13 Oct 2026)", href: "https://www.zawya.com/en/press-release/companies-news/omran-group-and-hassan-allam-holding-partner-to-launch-first-phase-of-residential-development-in-madinat-al-irfan-1619736" },
  mouj: { label: "Zawya, Al Mouj last two phases (16 Feb 2026)", href: "https://www.zawya.com/en/business/real-estate/al-mouj-muscat-launches-last-two-phases-of-key-coastal-residential-project-360940" },
  sorouhAhd: { label: "Oman Observer, Sorouh Al Ahd (7 May 2025)", href: "https://www.omanobserver.om/article/1170210/oman/a-model-for-building-modern-urban-housing" },
  sorouhAmerat: { label: "Muscat Daily, Ministry projects incl. Amerat (10 May 2026)", href: "https://www.muscatdaily.com/2026/05/10/mhup-unveils-projects-worth-ro496mn/" },
  cwQ4: { label: "Cushman & Wakefield, Dubai Q4 2025", href: "https://www.cushwake.ae/en/marketbeats/marketbeat-residential-q4-2025-dubai-uae" },
  cwQ2: { label: "Cushman & Wakefield, Dubai Q2 2026", href: "https://www.cushwake.ae/en/marketbeats/marketbeat-residential-q2-2026-dubai-uae" },
  dubaiPop: { label: "Gulf News, Dubai population (29 Sep 2026)", href: "https://gulfnews.com/uae/dubai-population-rises-by-226885-since-start-of-2026-1.500692623" },
  adCm: { label: "Khaleej Times, Abu Dhabi supply (Cavendish Maxwell, 26 Aug 2026)", href: "https://www.khaleejtimes.com/business/abu-dhabi-to-see-surge-in-new-homes-easing-price-and-rental-growth" },
  adCw: { label: "Cushman & Wakefield, Abu Dhabi H1 2026", href: "https://www.cushwake.ae/en/reports/abu-dhabi-mid-year-residential-office-market-update-h1-2026" },
  cbre: { label: "CBRE, Bahrain H1 2026", href: "https://www.cbre.bh/insights/figures/bahrain-real-estate-market-snapshot-h1-2026" },
  trowers: { label: "Trowers & Hamlins, Real Estate Registry Law (Jul 2026)", href: "https://www.trowers.com/insights/2026/july/omans-new-real-estate-registry-law-what-you-need-to-know" },
  imiLaw: { label: "IMI Daily, Oman opens its market to foreigners (24 Jun 2026)", href: "https://www.imidaily.com/mena/oman-opens-its-real-estate-market-to-foreigners-adds-sponsor-free-owners-residence-permit/" },
  areas: { label: "Gulf News, ownership stays in designated areas (28 Jun 2026)", href: "https://gulfnews.com/world/gulf/oman/oman-clarifies-foreign-property-ownership-remains-restricted-to-designated-areas-1.500589740" },
  imiGR: { label: "IMI Daily, Golden Residency applications (16 Jun 2026)", href: "https://www.imidaily.com/mena/omans-golden-residency-averages-5500-applications-a-month-since-relaunch/" },
  hh: { label: "NCSI, Population, Housing and Household Statistics 2023 (archived copy, Arabic)", href: "https://web.archive.org/web/20250330230206/https://www.ncsi.gov.om/Elibrary/LibraryContentDoc/bar_Population%2C%20housing%20and%20household%20statistics%202023_d13817bf-ba03-4aa9-8541-8cb36c865134.pdf" },
  mm: { label: "Muscat Municipality open data (construction permits)", href: "https://www.mm.gov.om/opendata.aspx" },
} satisfies Record<string, Src>;

const SourceLink = ({ s }: { s: Src }) =>
  s.href ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {s.label}
    </a>
  ) : (
    <span>{s.label}</span>
  );

const Sources = ({ list }: { list: Src[] }) => (
  <>
    {list.map((s, i) => (
      <span key={s.label}>
        {i > 0 && " · "}
        <SourceLink s={s} />
      </span>
    ))}
  </>
);

// Phone: one card per row (tables with sources in the cells get too narrow). md and up: the table.
const Cards = ({ rows }: { rows: { title: string; lines: [string, string][]; src: Src[] }[] }) => (
  <div className="md:hidden space-y-4 mt-6">
    {rows.map((r) => (
      <div key={r.title} className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-foreground font-semibold mb-2">{r.title}</h3>
        <dl className="text-sm space-y-1">
          {r.lines.map(([k, v]) => (
            <div key={k}>
              <dt className="inline text-muted-foreground">{k}: </dt>
              <dd className="inline text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
        {r.src.length > 0 && (
          <p className="text-sm text-muted-foreground mt-3">
            Source: <Sources list={r.src} />
          </p>
        )}
      </div>
    ))}
  </div>
);

const population = [
  { when: "End of 2023", people: "1,455,680", change: "—" },
  { when: "End of 2024", people: "1,498,521", change: "+42,841 (+2.9%)" },
  { when: "End of 2025", people: "1,532,486", change: "+33,965 (+2.3%)" },
  { when: "July 2026", people: "1,546,325", change: "+24,975 (+1.6%) in 12 months" },
];

const households = [
  { year: "2024", people: "+42,841", homes: "about 9,600" },
  { year: "2025", people: "+33,965", homes: "about 7,600" },
  { year: "12 months to July 2026", people: "+24,975", homes: "about 5,600" },
];

const delivery = [
  { bucket: "Subsidised housing (e.g. Sorouh)", low: "1,000", high: "2,000" },
  { bucket: "Future cities (e.g. Sultan Haitham City)", low: "4,000", high: "10,600" },
  { bucket: "Tourism complexes (ITCs)", low: "3,000", high: "9,000" },
  { bucket: "Total, 2026 to 2030", low: "8,000", high: "21,600" },
  { bucket: "Per year", low: "1,600", high: "4,300" },
];

const projects: { name: string; units: string; delivery: string; status: string; src: Src[] }[] = [
  { name: "Sultan Haitham City", units: "about 20,000 (Phase 1: 6,743)", delivery: "Phase 1 2024–2030 (2023 plan); full plan to 2045", status: "About 2,100 sold by October 2026 (Ministry of Housing and Urban Planning)", src: [S.shcPlan, S.shcMin, S.shcSold] },
  { name: "Jood and Yamal (Talaat Moustafa)", units: "about 15,600 together; Jood alone 7,746", delivery: "First phase 2030 (developer)", status: "380+ sold in the first half of 2026", src: [S.jood, S.tmg] },
  { name: "Wadi Zaha (inside Sultan Haitham City)", units: "950", delivery: "Not on the source page", status: "On sale", src: [S.wz] },
  { name: "A'Thuraya City", units: "Phase 1: 2,600+ · Phase 2: 3,600", delivery: "No date published", status: "Construction started (Sep 2025)", src: [S.thuraya] },
  { name: "Al Khuwair Downtown", units: "7,500+", delivery: "No date published", status: "Only early agreements (MoUs) signed. No developer contract yet (Sep 2026)", src: [S.khuwair] },
  { name: "Madinat Al Irfan", units: "10,000 planned", delivery: "No date published", status: "First residential phase signed 13 Oct 2026", src: [S.irfan] },
  { name: "Al Mouj, last two phases", units: "611", delivery: "Not on the source page", status: "Launched Feb 2026", src: [S.mouj] },
  { name: "Sorouh (subsidised): Al Ahd and Amerat", units: "965 and 1,006", delivery: "Not on the source pages", status: "Announced 2025 and 2026", src: [S.sorouhAhd, S.sorouhAmerat] },
];

const gulf: { market: string; ratio: string; now: string; src: Src[] }[] = [
  { market: "Muscat (flats only, 2024)", ratio: "0.36 (15,500 flats ÷ 42,841 people)", now: "Rents flat: housing costs in Oman's price index are almost the same as in 2018 (100.9 in July 2026; 2018 = 100)", src: [S.cm, S.yearbook, S.bulletin] },
  { market: "Dubai (all homes, 2025)", ratio: "0.14 (46,700 homes ÷ 332,000 people)", now: "April to June 2026: prices −4% and rents −6% from the quarter before", src: [S.cwQ4, S.dubaiPop, S.cwQ2] },
  { market: "Abu Dhabi", ratio: "Not calculated: no 2025 population published yet", now: "Flat prices +16.4% in the first half of 2026, vs a year before. But prices fell 1% from April to June, the first fall since late 2021", src: [S.adCm, S.adCw] },
  { market: "Bahrain", ratio: "Not calculated: I found no public number for new homes a year", now: "Flat values −1.82% in the first half of 2026. Rents −1.2%", src: [S.cbre] },
];

const scenarios = [
  { pace: "2026 pace (+1.6% a year)", pop: "1.93 million", extra: "+385,000", homes: "about 86,000" },
  { pace: "2025 pace (+2.3% a year)", pop: "2.12 million", extra: "+571,000", homes: "about 128,000" },
  { pace: "2024 pace (+2.9% a year)", pop: "2.31 million", extra: "+761,000", homes: "about 171,000" },
  { pace: "About +4.7% a year", pop: "2.94 million", extra: "+1.4 million", homes: "about 313,000" },
];

const otherWay: { signal: string; value: string; src?: Src }[] = [
  { signal: "Sales contracts, all of Oman", value: "OMR 954.1 million in Jan–Aug 2026, +14.5%", src: S.sales },
  { signal: "Mortgage contracts, all of Oman", value: "15,441 in Jan–Jul 2026, +22.3%. Total value +0.7% only (OMR 864.4 million). So loans got smaller. That fits first-time buyers.", src: S.bulletin },
  // SHC sales: figure given to Waleed by the Ministry (22 Oct 2026), credit to the Ministry approved. No public link;
  // the Muscat Daily 1,700+ (Apr 2026) stays in the sources as the published reference point.
  // Any OTHER number from that ministry contact is private to Waleed: never add one to this site.
  { signal: "Sultan Haitham City", value: "About 2,100 units sold by October 2026 (Ministry of Housing and Urban Planning)" },
  { signal: "Jood and Yamal (Talaat Moustafa)", value: "380+ units sold in the first half of 2026", src: S.tmg },
];

const sources: Src[] = Object.values(S);

const faqs = [
  {
    q: "Is Muscat oversupplied with homes?",
    a: "Not as a whole. The big projects deliver about 1,600 to 4,300 homes a year to 2030, less than new households. The risk is in old and ordinary flats.",
  },
  {
    q: "Does Muscat need 313,000 new homes?",
    a: "No. 313,000 is the space the Greater Muscat Structure Plan allows by 2040, including rebuilt areas. At recent growth Muscat needs about 86,000 to 171,000.",
  },
  {
    q: "Is Muscat's population still growing?",
    a: "Yes, but slower. +2.9% in 2024, +2.3% in 2025, and +1.6% in the year to July 2026 (NCSI).",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Muscat Building More Homes Than It Needs? (2026 Data)",
  description,
  author: { "@type": "Person", name: "Waleed Al Abri" },
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
  inLanguage: "en",
  mainEntityOfPage: canonical,
  publisher: { "@type": "Organization", name: "Waleed Property" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const h2 = "text-2xl md:text-3xl font-bold text-foreground mb-6";
const tableBox = "bg-card border border-border rounded-lg mb-4";
const para = "space-y-4 text-muted-foreground leading-relaxed";
const list = "text-muted-foreground space-y-2 leading-relaxed [&>li]:pl-[0.56em] [&>li]:-indent-[0.56em]";

const MuscatSupplyDemand2026 = () => (
  <div className="dark min-h-screen bg-luxury-dark text-foreground">
    <SeoHead title={title} description={description} canonical={canonical} type="article" />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Is Muscat building more homes than it needs?" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Is Muscat building more homes than it needs?" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>

    <Header />

    <main className="pt-8 pb-16 md:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 max-w-4xl [&_p]:max-w-[65ch] [&_li]:max-w-[65ch] [&_strong]:text-foreground">
        <div className="mb-8">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">
            Market data · October 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
            Is Muscat Building More Homes Than It Needs?
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Published October 22, 2026 · By Waleed Al Abri
          </p>
          <PublishedInStrip className="mt-2" />
        </div>

        {/* Short answer */}
        <div className="bg-card border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Short answer</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>The big projects come slowly. The risk is in ordinary flats, mostly old ones.</p>
            <p>
              Muscat adds about 5,000 to 10,000 new households a year. The big planned communities
              can deliver about 1,600 to 4,300 homes a year to 2030. (Both are my estimates from
              public data.)
            </p>
            <p>
              "Oversupplied" is a question to watch, not a finding. Muscat is not one market. The
              question is which unit.
            </p>
          </div>
        </div>

        <div className={`${para} mb-12`}>
          <p>The question I get most from buyers in Muscat is simple.</p>
          <p>"So many new projects. Who will live in all of them?"</p>
          <p>
            So I went through the public numbers. Population, households, the big projects, and three
            other Gulf markets. This is what I found.
          </p>
        </div>

        {/* 1. Population */}
        <section className="mb-12">
          <h2 className={h2}>Is Muscat's population still growing?</h2>
          <div className={para}>
            <p>Yes, but slower now.</p>
          </div>
          <div className={`${tableBox} mt-6`}>
            <Table className="tabular-nums">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Muscat population</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {population.map((r) => (
                  <TableRow key={r.when}>
                    <TableCell className="text-foreground font-semibold whitespace-nowrap">{r.when}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.people}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.change}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Sources: <SourceLink s={S.yearbook} /> (2023, 2024); <SourceLink s={S.bulletin} /> (2025, July 2026).
          </p>
          <div className={para}>
            <p>
              Most of the growth is expats. In 2024 they were +34,170 of the +42,841. Omanis were
              +8,671.
            </p>
            <p>
              People rent and buy as households, not one by one. An expat household in Muscat is
              about 4 people. An Omani household is about 7. So Muscat adds roughly 5,000 to 10,000
              new households a year.
            </p>
          </div>
          <div className={`${tableBox} mt-6`}>
            <Table className="tabular-nums">
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>New people</TableHead>
                  <TableHead>New households (my calculation)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {households.map((r) => (
                  <TableRow key={r.year}>
                    <TableCell className="text-foreground font-semibold whitespace-nowrap">{r.year}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.people}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.homes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground">
            How I calculated it: new expats ÷ 4.1, plus new Omanis ÷ 6.9 (NCSI household sizes for
            Muscat, end of 2022, from <SourceLink s={S.hh} />). Newer sizes for Muscat are not
            published, so this is an estimate.
          </p>
        </section>

        {/* 2. Mega projects */}
        <section className="mb-12">
          <h2 className={h2}>How many homes will the mega projects deliver?</h2>
          <div className={para}>
            <p>
              The headlines are big. Sultan Haitham City: 20,000 homes. Jood and Yamal: about 15,600
              together. Madinat Al Irfan: 10,000. Al Khuwair Downtown: 7,500+.
            </p>
            <p>
              But they are built in phases. A developer starts the next phase only after the last one
              sells. Sultan Haitham City's full plan runs to 2045.
            </p>
          </div>
          <Cards rows={projects.map((r) => ({ title: r.name, lines: [["Planned units", r.units], ["Delivery", r.delivery], ["Status", r.status]], src: r.src }))} />
          {projects.length > 0 && (
            <div className={`${tableBox} mt-6 hidden md:block`}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Planned units</TableHead>
                    <TableHead>Delivery</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((r) => (
                    <TableRow key={r.name}>
                      <TableCell className="text-foreground font-semibold">
                        {r.name}
                        <br />
                        <span className="text-sm font-normal">
                          <Sources list={r.src} />
                        </span>
                      </TableCell>
                      <TableCell className="tabular-nums">{r.units}</TableCell>
                      <TableCell>{r.delivery}</TableCell>
                      <TableCell>{r.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          <div className={`${para} mt-6`}>
            <p>
              I added up what the big planned communities can deliver by 2030. I got about 1,600 to
              4,300 homes a year.
            </p>
          </div>
          <div className={`${tableBox} mt-6`}>
            <Table className="tabular-nums">
              <TableHeader>
                <TableRow>
                  <TableHead>Planned communities, Muscat</TableHead>
                  <TableHead>Low</TableHead>
                  <TableHead>High</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {delivery.map((r, i) => (
                  <TableRow key={r.bucket} className={i >= delivery.length - 2 ? "font-semibold text-foreground" : undefined}>
                    <TableCell>{r.bucket}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.low}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.high}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            My estimate from the project pages and developer reports above. Self-built villas on
            government plots are not in it.
          </p>
          <div className={para}>
            <p>
              That is LESS than the new households each year. The big projects are not the main
              supply.
            </p>
          </div>
        </section>

        {/* 3. Ordinary flats */}
        <section className="mb-12">
          <h2 className={h2}>Is Muscat oversupplied?</h2>
          <div className={para}>
            <p>Ordinary apartment buildings are the bigger number.</p>
            <p>
              One consultancy, Cavendish Maxwell, estimated that Muscat added about 15,500 apartments
              in 2024 (<SourceLink s={S.cm} />). Muscat added about 9,600 new households that year.
            </p>
            <p>
              Be careful with this number. It is one estimate. I could not confirm it with official
              data. For comparison, Muscat added 13,100 new electricity connections in 2024 (
              <SourceLink s={S.yearbook} />, provisional). That count is for all connections, not
              only homes.
            </p>
            <p>
              Cavendish Maxwell also says many tenants move from old flats to new ones. So OLDER
              buildings may have more empty units.
            </p>
          </div>
        </section>

        {/* 4. Gulf */}
        <section className="mb-12">
          <h2 className={h2}>How does Muscat compare with Dubai, Abu Dhabi and Bahrain?</h2>
          <div className={para}>
            <p>New homes for every new resident. This is rough, and it is my calculation.</p>
          </div>
          <Cards rows={gulf.map((r) => ({ title: r.market, lines: [["New homes per new resident", r.ratio], ["Market now", r.now]], src: r.src }))} />
          {gulf.length > 0 && (
            <div className={`${tableBox} mt-6 hidden md:block`}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Market</TableHead>
                    <TableHead>New homes per new resident</TableHead>
                    <TableHead>Market now</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gulf.map((r) => (
                    <TableRow key={r.market}>
                      <TableCell className="text-foreground font-semibold">{r.market}</TableCell>
                      <TableCell className="tabular-nums">{r.ratio}</TableCell>
                      <TableCell>
                        {r.now}
                        <br />
                        <span className="text-sm">
                          <Sources list={r.src} />
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          <div className={`${para} mt-6`}>
            <p>
              Muscat builds more than twice Dubai's rate per new person. But the Muscat number counts
              flats only, and it is one estimate. Dubai counts all homes.
            </p>
            <p>
              And Muscat rents are flat, not falling like Dubai's. Why? I am not sure. One reason may
              be where the empty units are: in old buildings.
            </p>
          </div>
        </section>

        {/* 5. Other way */}
        <section className="mb-12">
          <h2 className={h2}>Are buyers still active?</h2>
          <div className={para}>
            <p>Yes. These numbers from 2026 point the other way.</p>
          </div>
          <Cards rows={otherWay.map((r) => ({ title: r.signal, lines: [["Number", r.value]], src: r.src ? [r.src] : [] }))} />
          {otherWay.length > 0 && (
            <div className={`${tableBox} mt-6 hidden md:block`}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Signal</TableHead>
                    <TableHead>Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {otherWay.map((r) => (
                    <TableRow key={r.signal}>
                      <TableCell className="text-foreground font-semibold">{r.signal}</TableCell>
                      <TableCell>
                        {r.value}
                        {r.src && (
                          <>
                            <br />
                            <span className="text-sm">
                              <SourceLink s={r.src} />
                            </span>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          <div className={`${para} mt-6`}>
            <p>
              Sales and mortgage numbers are for all of Oman, not only Muscat. Muscat has no public
              data on how fast new buildings fill.
            </p>
          </div>
        </section>

        {/* 6. 313K */}
        <section className="mb-12">
          <h2 className={h2}>Does Muscat need 313,000 new homes?</h2>
          <div className={para}>
            <p>
              Some people quote this number. It comes from the Greater Muscat Structure Plan, launched
              on 19 May 2026 (<SourceLink s={S.plan} />).
            </p>
            <p>
              Read the wording. The plan allows UP TO 313,000 new homes by 2040, from Muttrah to
              Barka. They come "through new and regenerated communities" (<SourceLink s={S.bm} />). So
              this includes rebuilding old areas.
            </p>
          </div>
          <div className={`${tableBox} mt-6`}>
            <Table className="tabular-nums">
              <TableHeader>
                <TableRow>
                  <TableHead>If Muscat grows at</TableHead>
                  <TableHead>Muscat in 2040</TableHead>
                  <TableHead>Extra people</TableHead>
                  <TableHead>New homes needed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scenarios.map((r) => (
                  <TableRow key={r.pace}>
                    <TableCell className="text-foreground font-semibold">{r.pace}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.pop}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.extra}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.homes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            My calculation. Start: 1,546,325 people in July 2026, 14 years to 2040. About 4.5 people
            per new household (the 2024 average from the table above).
          </p>
          <div className={para}>
            <p>
              At recent growth, Muscat needs about 86,000 to 171,000 new homes by 2040. That is a
              quarter to a half of 313,000. To need all 313,000, Muscat would have to grow almost 5%
              a year, every year, to 2040.
            </p>
            <p>So 313,000 is the space the plan allows. It is not a measured shortage.</p>
          </div>
        </section>

        {/* Buyers */}
        <section className="mb-12">
          <h2 className={h2}>What does this mean for buyers?</h2>
          <div className={para}>
            <p>
              The big idea: Muscat is not one market. The question is which unit, not "Muscat yes or
              no".
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Lower risk</h3>
              <ul className={list}>
                <li>• New buildings in good locations, from a developer that finished projects on time before.</li>
                <li>
                  • Areas where land is running out. Building permits in Muttrah fell 57% from 2016 to
                  2022 (284 to 121; my count from <SourceLink s={S.mm} />).
                </li>
                <li>• Land and villas, for Omani family demand.</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Higher risk</h3>
              <ul className={list}>
                <li>• Old flats, or ordinary flats with nothing special, that compete with empty units.</li>
                <li>• Small units bought only for the payment plan or a residency hope.</li>
                <li>• Projects with no developer yet, or a delivery date that keeps moving.</li>
              </ul>
            </div>
          </div>
          <div className={`${para} mt-6`}>
            <p>
              To compare projects, see the{" "}
              <a href="/property-for-sale-in-oman-for-foreigners" className={linkClass}>
                projects foreigners can buy, with prices
              </a>
              , the{" "}
              <a href="/oman-property-prices-2026" className={linkClass}>
                off-plan price tracker
              </a>{" "}
              and the{" "}
              <a href="/sultan-haitham-city-guide" className={linkClass}>
                Sultan Haitham City guide
              </a>
              .
            </p>
            <p>
              Is residency part of your plan? Check your route first with the{" "}
              <a href="/oman-residency-by-property" className={linkClass}>
                residency route finder
              </a>
              .
            </p>
          </div>
        </section>

        {/* Wildcards */}
        <section className="mb-12">
          <h2 className={h2}>What could change this?</h2>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              The new Real Estate Registry Law (Royal Decree 56/2026) may let foreigners own outside
              the tourism complexes. The Ministry says not in all areas, and the rules to apply it are
              not issued yet (<SourceLink s={S.trowers} />; <SourceLink s={S.imiLaw} />;{" "}
              <SourceLink s={S.areas} />).
            </li>
            <li>
              Golden Residency had about 56,000 applications by June 2026. No approvals were published
              then (<SourceLink s={S.imiGR} />).
            </li>
          </ol>
          <div className={`${para} mt-6`}>
            <p>
              What I could not find: Muscat has no public data on how fast new buildings fill, or on
              rents in new buildings. That data would settle this question.
            </p>
            <p>If you live in Muscat: is your building full, or half empty?</p>
          </div>
        </section>

        <WhatsAppOfferBox
          heading="Looking at a unit in Muscat?"
          body="Send me the project and the unit on WhatsApp. I will tell you what I know about the building and the developer."
          message="Hi Waleed, I read your Muscat supply and demand page. I am looking at: ..."
        />

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Sources</h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
            {sources.map((s) => (
              <li key={s.label}>
                <SourceLink s={s} />
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Last checked: October 2026. Personal view. Not investment advice. If you see a number
            here that is wrong or old, tell me on WhatsApp and I will check it.
          </p>
        </section>

        <div className="mt-12">
          <AuthorProfile variant="full" />
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default MuscatSupplyDemand2026;
