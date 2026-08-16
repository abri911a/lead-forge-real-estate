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
  "Does Buying Property in Oman Give You Residency? 2026 Owner Visa & Golden Visa Rules | Waleed Property";
const description =
  "Yes, if it qualifies. The 2026 guide to Oman residency by property: the new sponsor-free owner visa (ROP 87/2026), off-plan buyer visas, family inclusion, and the 10-year Golden Residency at OMR 200,000. By a Oman property advisor.";
const canonical = "https://waleedproperty.com/oman-residency-by-property";
const ogTitle =
  "Does Buying Property in Oman Give You Residency? The 2026 Rules";
const ogDescription =
  "The new sponsor-free owner residency, off-plan visas before handover, and the 10-year Golden Residency, explained by a Oman property advisor.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Does Buying Property in Oman Give You Residency? The 2026 Rules",
  author: {
    "@type": "Person",
    name: "Waleed Al Abri",
    jobTitle: "Real Estate Advisor",
  },
  datePublished: "2026-07-16",
  dateModified: "2026-08-16",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
  about:
    "Oman residency and visa rules for foreign property owners in 2026, including ROP Decision 87/2026 and the Golden Residency programme",
};

const faqs = [
  {
    q: "Does buying property in Oman give me residency?",
    a: "Yes, if the purchase qualifies. A qualifying property purchase entitles you to a sponsor-free Property Owner Residency under ROP Decision 87/2026 (June 2026), and your spouse and first-degree relatives are included.",
  },
  {
    q: "Is there a minimum property value for residency in Oman?",
    a: "No minimum is stated for the standard owner route. The Golden Residency needs OMR 200,000 of qualifying investment and gives a 10-year renewable residency. The old 250,000 and 500,000 tiers were replaced in September 2025.",
  },
  {
    q: "Can off-plan buyers get residency in Oman before handover?",
    a: "Since June 2026, off-plan buyers whose registration is not complete can get a sponsor-free visa of 6 to 12 months, renewable. Full owner residency follows once registration completes.",
  },
  {
    q: "Do I need a local sponsor for an Oman property visa?",
    a: "No. Since ROP Decision 87/2026 took effect on 22 June 2026, the owner visa and residency are issued without a sponsor, on a certificate from the competent authority.",
  },
  {
    q: "What happens to my residency if I sell my Oman property?",
    a: "It ends automatically when the title transfers, for you and your family. The Owner Residency is tied to ownership.",
  },
  {
    q: "Can I buy any property in Oman and get residency?",
    a: "No. The 2026 change eased residency rules, not ownership rules. Non-GCC foreigners still buy in ITC zones and other eligible areas, and the purchase must qualify.",
  },
  {
    q: "Should I go for Owner Residency or Golden Residency in Oman?",
    a: "Owner Residency works at any stated value and lasts while you own the property. Golden Residency needs OMR 200,000 and runs 10 years, renewable. Under OMR 200,000, the owner route is the practical answer.",
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

const OmanResidencyByProperty = () => {
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
              Residency Guide · July 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Does Buying Property in Oman Give You Residency? The 2026 Rules
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Updated July 2026 · By Waleed Al Abri — Real Estate
              Advisor
            </p>
          </div>

          {/* Short answer */}
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">Short answer</h2>
            <p className="text-foreground leading-relaxed">
              Yes, if the property qualifies. Oman ties residency to property
              through two separate programs. Since 22 June 2026 (Royal Oman
              Police Decision 87/2026), owners get residency without a local
              sponsor, family is included, and off-plan buyers can get a
              renewable visa before handover. Updated July 2026 by Waleed Al
              Abri, a real estate advisor in Oman.
            </p>
          </div>

          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Two programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Two programs, not one
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oman has two residency-by-property programs. Buyers mix them up,
              and the difference decides what you actually get.
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • <strong>Property Owner Residency:</strong> comes with a
                qualifying property purchase. No minimum value is stated in
                the rules. It is valid as long as you own the property and
                ends when you sell. Your spouse and first-degree relatives are
                included.
              </li>
              <li>
                • <strong>Golden Residency:</strong> the investment program.
                OMR 200,000 of qualifying investment, property included, gives
                a 10-year renewable residency. Oman replaced the old two-tier
                system (250,000 for 5 years, 500,000 for 10) with this single
                tier in September 2025. Many guides still quote the old
                numbers.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Most buyers under OMR 200,000 are looking at the first one. That
              is the honest starting point.
            </p>
          </div>

          {/* What changed */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What changed in June 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On 22 June 2026, ROP Decision 87/2026 took effect (Official
              Gazette 1653). It amended the residence rules for foreign
              property owners. Three changes matter:
            </p>
            <ol className="space-y-3 text-foreground mb-4 list-decimal list-inside">
              <li>
                <strong>No sponsor needed.</strong> The owner visa and owner
                residency are now issued without a local sponsor, on a
                certificate from the competent authority.
              </li>
              <li>
                <strong>Off-plan buyers stopped waiting.</strong> If your
                unit's registration is not complete yet, you can get a
                sponsor-free visa of 6 to 12 months, renewable for similar
                periods. Before this, off-plan buyers had no clean path until
                handover.
              </li>
              <li>
                <strong>Family is covered.</strong> The visa and residency
                extend to your spouse and first-degree relatives. If a company
                owns the unit, its legal representative can get it.
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Two conditions to know. You must enter Oman within 3 months of
              the visa being issued. And on the visa route, each entry allows
              a stay of up to 3 months. Related:{" "}
              <a
                href="/is-off-plan-property-safe-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Is off-plan property safe in Oman?
              </a>
            </p>
          </div>

          {/* Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Which permit your purchase gets you
            </h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gold">You bought</TableHead>
                    <TableHead className="text-gold">What you can get</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      A registered unit in an ITC or eligible zone, any value
                    </TableCell>
                    <TableCell>
                      Property Owner Residency. Sponsor-free. Valid while you
                      own it. Family included.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      An off-plan unit, registration not complete
                    </TableCell>
                    <TableCell>
                      Sponsor-free visa, 6 to 12 months, renewable. Bridges
                      you until registration.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Property worth OMR 200,000 or more, with title deed
                    </TableCell>
                    <TableCell>
                      10-year Golden Residency, renewable
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>A unit through your company</TableCell>
                    <TableCell>
                      The company's legal representative can get the visa and
                      residency
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* What didn't change */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What the new rules did not change
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The June 2026 decision changed residency rights. It did not
              change who can own property. If you are a non-GCC foreigner, you
              still buy in ITC zones and other eligible areas, and some
              projects offer usufruct instead of freehold. That is a separate
              topic with its own traps, and I wrote a full guide:{" "}
              <a
                href="/can-foreigners-buy-property-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Can foreigners buy property in Oman?
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Ministry of Housing and Urban Planning said this directly in
              late June 2026, after some coverage suggested Oman had opened
              ownership to foreigners nationwide. It had not. Ownership by
              non-Omanis stays limited to designated locations: Integrated
              Tourism Complexes, future cities such as Sultan Haitham City, Al
              Thuraya City and Al Jabal Al Aali, and integrated residential
              neighbourhoods such as Surouh. The new Real Estate Registry Law
              (Royal Decree 56/2026, in force 18 May 2026) changed how
              ownership is registered and proved, not who may own or where.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Two more things stayed the same. Approval is not automatic,
              security screening by nationality still applies. And the
              residency is tied to the title. Sell the property and the
              residency ends automatically, for you and your family.
            </p>
          </div>

          {/* Unclear */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What is still unclear
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These rules are new. Four points are not settled yet:
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • <strong>Usufruct holders.</strong> The rules talk about
                owning a real estate unit. Whether a 50 to 99 year usufruct
                counts as ownership for residency has not been tested. If you
                are buying usufruct, do not assume residency. Confirm first.
              </li>
              <li>
                • <strong>The old family threshold.</strong> Earlier rules
                tied family inclusion to property value. The new decision
                states no value gate, but nobody has confirmed the old
                threshold is fully gone.
              </li>
              <li>
                • <strong>The certificate.</strong> Residency is issued on a
                certificate from the competent authority. Which body issues it
                and how long it takes is not yet spelled out.
              </li>
              <li>
                • <strong>The Golden route's zone scope.</strong> Official
                summaries differ on whether qualifying property must sit
                inside an ITC or can be outside one. Until that settles,
                assume ITC and confirm case by case.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              I re-check this page quarterly and update it when these settle.
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
              The rules are new and the paperwork behind them is still
              settling. Whether your budget and nationality get you the owner
              permit or the Golden tier, and whether a specific project
              qualifies at all, is a case-by-case check. I do that check for
              clients before they commit money.
            </p>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For current market context, see:{" "}
              <a
                href="/oman-property-prices-2026"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Oman property prices 2026
              </a>
              .
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                <a
                  href="https://wa.me/96879136646?text=Hi%20Waleed%2C%20I%20have%20a%20question%20about%20Oman%20residency%20by%20property."
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

export default OmanResidencyByProperty;
