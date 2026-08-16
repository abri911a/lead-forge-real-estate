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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const title =
  "Is Off-Plan Property Safe in Oman? The 2026 Escrow Law (RD 79/2025) | Waleed Property";
const description =
  "Safer than before, not risk-free. Oman's new Real Estate Regulation Law (Royal Decree 79/2025, in force 10 March 2026) replaced the 2018 escrow law. How the escrow works, what it does not cover, and the 5 checks before you pay a deposit. By a Oman property advisor.";
const canonical = "https://waleedproperty.com/is-off-plan-property-safe-in-oman";
const ogTitle =
  "Is Off-Plan Property Safe in Oman? The 2026 Escrow Law Explained";
const ogDescription =
  "Royal Decree 79/2025 replaced the 2018 escrow law. How your money is protected, what escrow does not do, and the 5 checks before any deposit.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Is Off-Plan Property Safe in Oman? The 2026 Escrow Law Explained",
  author: {
    "@type": "Person",
    name: "Waleed Al Abri",
    jobTitle: "Real Estate Advisor",
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
  about:
    "Off-plan buyer protection in Oman under Royal Decree 79/2025, the Real Estate Regulation Law, including escrow accounts, buyer checks, and remaining risks",
};

const faqs = [
  {
    q: "What law protects off-plan buyers in Oman?",
    a: "Royal Decree 79/2025, the Real Estate Regulation Law, in force since 10 March 2026. It replaced the 2018 escrow law and carries the escrow system inside it.",
  },
  {
    q: "Is the 2018 escrow law (Royal Decree 30/2018) still valid?",
    a: "No. It was repealed by Royal Decree 79/2025 on 10 March 2026. Many online guides still cite it as current law. They are out of date.",
  },
  {
    q: "Where does my off-plan payment go in Oman?",
    a: "Into an escrow account held in the project's name at a licensed bank, not the developer's own account. Confirm the account details before paying anything.",
  },
  {
    q: "When can the developer withdraw my off-plan payments?",
    a: "Only against construction milestones certified by the project's consultant. If the building does not progress, the money does not move.",
  },
  {
    q: "Does escrow guarantee my apartment gets built?",
    a: "No. Escrow controls the money flow. It does not guarantee completion, and it does not give you title. Registration does that.",
  },
  {
    q: "What happens if an Oman developer goes bankrupt?",
    a: "The escrow account is protected from seizure except by court order, but buyers hold no special priority over other creditors. It is the real gap in the system, and one more reason to check the project before paying.",
  },
  {
    q: "How do I check that an Oman project is registered and has escrow?",
    a: "There is no public lookup portal yet. Ask the developer for its ministry licence, the project registration, and the escrow account details, and confirm your contract names that account.",
  },
  {
    q: "Is there protection after handover in Oman?",
    a: "Yes. Under the current executive rules, 5% of each unit's value stays in escrow for one year after registration to cover defects.",
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

const IsOffPlanPropertySafeInOman = () => {
  return (
    <div className="dark min-h-screen bg-luxury-dark text-foreground">
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
              Buyer Protection Guide · July 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Is Off-Plan Property Safe in Oman? The 2026 Escrow Law Explained
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Updated July 2026 · By Waleed Al Abri — Real Estate
              Advisor
            </p>
          </div>

          {/* Snippet box */}
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
            <p className="text-foreground leading-relaxed">
              Safer than it used to be, not risk-free. Since 10 March 2026,
              Royal Decree 79/2025 requires every off-plan project to hold
              buyer payments in an escrow account at a licensed bank, released
              only against certified construction progress. The protection is
              real, but it is not a completion guarantee. Verify the escrow
              before you pay. Updated July 2026 by Waleed Al Abri, a real
              estate advisor in Oman.
            </p>
          </div>

          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Law changed */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The law changed in March 2026, and most guides missed it
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most articles you will find online still point to Royal Decree
              30/2018 as the law protecting off-plan buyers in Oman. That law
              is repealed. If a guide quotes it as current, the guide is out
              of date.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The new law is Royal Decree 79/2025, the Real Estate Regulation
              Law. It took effect on 10 March 2026 and replaced three older
              laws at once: the 2018 escrow law, the 1986 brokerage law, and
              the 1989 apartment ownership law. One law now covers the whole
              chain.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gold"></TableHead>
                    <TableHead className="text-gold">
                      Old law (RD 30/2018, repealed)
                    </TableHead>
                    <TableHead className="text-gold">
                      New law (RD 79/2025, in force 10 Mar 2026)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Status</TableCell>
                    <TableCell>Repealed</TableCell>
                    <TableCell>The law in force today</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Scope</TableCell>
                    <TableCell>Escrow accounts only</TableCell>
                    <TableCell>
                      Escrow, brokerage, and apartment ownership in one
                      framework
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Developer entry
                    </TableCell>
                    <TableCell>Open an escrow account</TableCell>
                    <TableCell>
                      Licence and financial guarantees required BEFORE
                      launching a project, plus ongoing disclosures
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Contracts</TableCell>
                    <TableCell>Not covered</TableCell>
                    <TableCell>
                      Every off-plan contract must be registered in the real
                      estate register
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Enforcement</TableCell>
                    <TableCell>Ministry administrative route</TableCell>
                    <TableCell>
                      Ministry of Housing with judicial enforcement powers,
                      criminal penalties, and licence revocation
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* How escrow protects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              How the escrow protects your money
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The mechanics are simple, and they matter.
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • Your payments go into an escrow account held in the
                project's name at a licensed bank. Not into the developer's
                own account.
              </li>
              <li>
                • The developer can only withdraw against construction
                milestones, certified by the project's consultant. No
                progress, no money.
              </li>
              <li>
                • The account is protected from seizure. Nobody can garnish it
                except by court order.
              </li>
              <li>
                • Under the current executive rules, 5% of each unit's value
                stays in the account for one year after your unit is
                registered, to cover defects.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This is the single biggest difference between buying off-plan in
              Oman today and buying five years ago. The money follows the
              concrete.
            </p>
          </div>

          {/* What escrow does not do */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What escrow does not do
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I sell off-plan property, and I will still tell you this
              plainly.
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • Escrow is not a completion guarantee. It controls the flow
                of money. It does not force a project to finish.
              </li>
              <li>
                • Escrow is not title. Your unit becomes yours through
                registration, not through the escrow account.
              </li>
              <li>
                • If the developer goes bankrupt, you have no special
                priority. You stand with the other ordinary creditors. The
                escrow rules make that scenario less likely; they do not make
                it painless.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              So the law does its part. The rest is on you, before you sign.
            </p>
          </div>

          {/* 5 checks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The 5 checks before you pay any deposit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There is no public website yet where you can look up a project's
              escrow status. So you check it the direct way:
            </p>
            <ol className="space-y-3 text-foreground mb-4 list-decimal list-inside">
              <li>
                Ask the developer for its licence from the Ministry of Housing
                and Urban Planning, and the project's registration. Both are
                mandatory under the new law.
              </li>
              <li>
                Ask for the escrow account details: the bank's name and an
                account in the project's name. A separate account per project.
              </li>
              <li>
                Never pay into a personal account or the developer's general
                company account. If they push for it, walk away.
              </li>
              <li>
                Confirm the payment clause in your sale contract names that
                same escrow account.
              </li>
              <li>
                Treat heavy advertising as a soft signal, not proof.
                Advertising spend from escrow is capped and needs ministry
                approval, so a project selling hard on borrowed glamour
                deserves a second look.
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              I run these checks for clients before any deposit. It takes a
              phone call and two documents. Skipping it is how people get
              hurt.
            </p>
          </div>

          {/* Still settling */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What is still settling
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The law is new. Two things to know:
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • The detailed executive regulations are still being written.
                Until they issue, the 2019 executive rules keep applying.
                Expect the new regulations by around March 2027, and expect
                some mechanics to change with them.
              </li>
              <li>
                • Projects sold before the law had a window to register their
                existing contracts. If you bought pre-2026, ask the developer
                whether your contract is now in the real estate register. That
                one question tells you a lot.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Related reading:{" "}
              <a
                href="/can-foreigners-buy-property-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Can foreigners buy property in Oman?
              </a>{" "}
              and{" "}
              <a
                href="/oman-residency-by-property"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Oman residency by property
              </a>
              . I re-check this page quarterly and update it when the
              regulations land.
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
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The law reads well on paper. Whether a specific project actually
              has its licence, its registration, and a real escrow account is
              a different question, and it is answerable in a day. Before you
              pay any deposit, I verify those three things for clients.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                <a
                  href="https://wa.me/96879136646?text=Hi%20Waleed%2C%20I%20want%20to%20check%20an%20off-plan%20project%20before%20paying."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a consultation with Waleed Al Abri, real
                  estate advisor in Oman
                </a>
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

export default IsOffPlanPropertySafeInOman;
