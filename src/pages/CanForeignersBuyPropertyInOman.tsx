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

const title =
  "Can Foreigners Buy Property in Oman? 2026 Ownership & Residency Guide | Waleed Property";
const description =
  "Yes, foreigners can buy property in Oman. A 2026 guide to ITC freehold vs usufruct, which zones allow foreign ownership, residency by property, and the escrow law. By a licensed Oman advisor.";
const canonical =
  "https://waleedproperty.com/can-foreigners-buy-property-in-oman";
const ogTitle = "Can Foreigners Buy Property in Oman? A 2026 Guide";
const ogDescription =
  "Where foreigners can own, freehold vs usufruct, residency by property, and how your money is protected.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can Foreigners Buy Property in Oman? A 2026 Guide",
  author: {
    "@type": "Person",
    name: "Waleed Al Abri",
    jobTitle: "Licensed Real Estate Advisor",
  },
  datePublished: "2026-06-23",
  dateModified: "2026-07-16",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Waleed Property" },
  about: "Foreign property ownership and residency rules in Oman in 2026",
};

const faqs = [
  {
    q: "Can foreigners buy property in Oman?",
    a: "Yes. Under Royal Decree 29/2018, foreigners can own property in designated ITC zones and other eligible areas. Most foreign-owned units are freehold, but some projects offer only usufruct, so confirm the ownership type for the specific unit.",
  },
  {
    q: "Can foreigners own freehold, or only leasehold?",
    a: "Both exist. In ITC freehold zones such as Muscat Hills, Muscat Bay and Telal Al Qurm, foreigners can own full freehold. Elsewhere, or in some ITC projects, the offer to non-GCC buyers may be a 50 to 99 year usufruct rather than freehold. An ITC zone does not automatically mean freehold is available.",
  },
  {
    q: "Does buying property in Oman give me residency?",
    a: "A freehold purchase in an ITC zone grants property-investor residency with no minimum value, tied to ownership and covering family. From OMR 200,000 of qualifying investment you can apply for the 10-year renewable Golden Residency. The old 250,000 and 500,000 tiers were replaced in September 2025. A June 2026 reform also lets off-plan buyers start an owner visa before handover.",
  },
  {
    q: "Which areas in Oman can foreigners buy in?",
    a: "Mainly ITC zones, including Muscat Hills, Muscat Bay, Al Mouj, Telal Al Qurm, and select Sultan Haitham City projects. GCC nationals can buy in more areas. Jabal Al Akhdar and strategic zones are off-limits.",
  },
  {
    q: "Is my money safe when buying off-plan in Oman?",
    a: "Royal Decree 79/2025 requires developers to hold off-plan payments in an escrow account released against construction milestones. Enforcement is uneven, so always confirm the escrow account exists before you pay a deposit.",
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

const CanForeignersBuyPropertyInOman = () => {
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
              Buyer Guide · June 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Can Foreigners Buy Property in Oman? A 2026 Guide
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Updated June 2026 · By Waleed Al Abri — Licensed Real Estate
              Advisor
            </p>
          </div>

          {/* Short answer */}
          <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">Short answer</h2>
            <p className="text-foreground leading-relaxed">
              Yes. Foreigners can own property in Oman, but where and how
              depends on the zone and your nationality. Non-Omani buyers can
              own in designated Integrated Tourism Complex (ITC) zones and
              other eligible areas, usually as freehold but sometimes only as
              usufruct, under Royal Decree 29/2018. Buying a qualifying
              freehold also opens a path to residency. Updated June 2026 by
              Waleed Al Abri, a licensed real estate advisor in Oman.
            </p>
          </div>

          {/* Author */}
          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Three meanings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The three things "ownership" can actually mean
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most confusion here comes from treating one word, "ownership",
              as if it means one thing. In Oman it means three different
              things, and the difference decides your exit, your inheritance,
              and your residency.
            </p>
            <ul className="space-y-2 text-foreground mb-4">
              <li>
                • <strong>Freehold (تملك حر):</strong> full, permanent,
                transferable ownership of the unit. This is what most foreign
                investors want, and what residency programs are built around.
              </li>
              <li>
                • <strong>Usufruct (حق منفعة):</strong> a long-term right to
                use the property, typically 50 to 99 years. It is not
                freehold. You hold it for the term, not forever.
              </li>
              <li>
                • <strong>Lease (إيجار):</strong> a rental right only. No
                ownership.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Before you sign anything, get the ownership type in writing. A
              glossy brochure that says "foreigners welcome" can still mean a
              99-year usufruct, not freehold.
            </p>
          </div>

          {/* Where foreigners can buy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Where foreigners can buy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under Royal Decree 29/2018, non-Omanis can own in designated
              zones, mainly ITC (Integrated Tourism Complex) developments.
              The important catch: an ITC zone sets the legal framework, it
              does not guarantee freehold is on offer. Some projects inside
              an ITC zone sell only usufruct or lease to non-GCC buyers.
              Always confirm the specific tier for the specific unit.
            </p>
            <p className="text-foreground font-semibold mb-2">
              Zones where foreigners can currently buy freehold (June 2026)
              include:
            </p>
            <ul className="space-y-2 text-foreground mb-4">
              <li>• Muscat Hills</li>
              <li>• Muscat Bay</li>
              <li>• Al Mouj</li>
              <li>• Telal Al Qurm</li>
              <li>• Select projects in Sultan Haitham City</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Outside ITC and other eligible zones, non-GCC foreigners
              generally cannot buy. Certain areas are off-limits entirely,
              including Jabal Al Akhdar and designated strategic or military
              zones.
            </p>
          </div>

          {/* GCC wider rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              GCC nationals get wider rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your nationality changes the map. GCC nationals (from Saudi
              Arabia, the UAE, Kuwait, Bahrain, and Qatar) can own across
              more of Oman and are treated closer to Omani citizens in many
              areas, not just inside ITC zones. Non-GCC foreigners are the
              group practically limited to ITC and eligible developments. If
              you are a GCC buyer, your options are broader than a quick web
              search suggests, so it is worth checking area by area. Full
              guide:{" "}
              <a
                href="/can-gcc-citizens-buy-property-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Can GCC citizens buy property in Oman outside ITCs?
              </a>
            </p>
          </div>

          {/* Residency */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Buying property as a route to residency
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A qualifying purchase can give you residency in Oman. There are
              two separate programs, and they are often confused.
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • <strong>Property-investor residency:</strong> granted on a
                freehold purchase in an ITC zone, with no minimum value. It
                is tied to ownership, renews while the property stays in your
                name, and covers your family. This is the honest answer for
                most buyers under OMR 200,000.
              </li>
              <li>
                • <strong>Golden Residency:</strong> the premium tier. From
                OMR 200,000 of qualifying investment you can apply for the
                10-year renewable Golden Residency. The old 250,000 and
                500,000 tiers were replaced in September 2025.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In June 2026 Oman updated the rules (Royal Oman Police Decision
              87/2026, effective 22 June 2026). The headline change for
              buyers: owner visa and owner residency are now issued without a
              local sponsor, on a certificate from the competent authority,
              and an off-plan unit whose registration is not yet complete can
              now qualify for a renewable owner visa rather than making you
              wait until handover. The grant extends to a spouse and
              first-degree relatives and ends if you sell.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full guide:{" "}
              <a
                href="/oman-residency-by-property"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Oman residency by property
              </a>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              One thing to be clear about: this reform changes residency
              rights, not who is allowed to own. For a non-GCC foreigner,
              qualifying still means buying in an ITC or eligible zone. The
              exact conditions are new and still settling, so confirm the
              current position for your nationality and budget before you
              rely on it. That is part of what I check for clients.
            </p>
          </div>

          {/* Money protection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Is your money protected?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Two protections matter most.
            </p>
            <ul className="space-y-3 text-foreground">
              <li>
                • <strong>Escrow (Royal Decree 79/2025):</strong> developers
                selling off-plan must hold your payments in a dedicated
                escrow account, released against construction milestones. In
                practice enforcement is uneven, so before paying any deposit,
                ask for the escrow account details and confirm the account
                exists. It is the single most important check a foreign buyer
                can make.{" "}
                <a
                  href="/is-off-plan-property-safe-in-oman"
                  className="text-gold underline underline-offset-2 hover:text-gold-light"
                >
                  Full guide: the 2026 escrow law
                </a>
                .
              </li>
              <li>
                • <strong>Structural warranty (Civil Code Article 634):</strong>{" "}
                the developer carries a 10-year liability for structural
                defects. Keep your contract and handover documents.
              </li>
            </ul>
          </div>

          {/* Costs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What it costs to buy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the purchase price, budget for transfer and registration
              fees and any service charges on the building. Prices themselves
              vary widely by area, from entry apartments around OMR 19,700 to
              premium ITC freehold well above OMR 100,000. For a current
              area-by-area breakdown, see the companion guide:{" "}
              <a
                href="/oman-property-prices-2026"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Oman property prices 2026
              </a>
              .
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
              Talk to a licensed Oman advisor
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The rules read simply on a page and get complicated on a
              specific deal: which projects actually offer freehold to your
              nationality, whether the residency path holds for your budget,
              and whether the escrow is real. If you are a GCC or foreign
              buyer, I will give you a straight read on your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                <a
                  href="https://wa.me/96879136646?text=Hi%20Waleed%2C%20I%20have%20a%20question%20about%20foreigners%20buying%20property%20in%20Oman."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a consultation
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

export default CanForeignersBuyPropertyInOman;
