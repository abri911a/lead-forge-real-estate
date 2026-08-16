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
  "Can GCC Citizens Buy Property in Oman Outside ITCs? 2026 Guide | Waleed Property";
const description =
  "Yes. Royal Decree 21/2004 lets Saudi, Emirati, Kuwaiti, Qatari and Bahraini citizens own property and land across most of Oman, no ITC needed. The prohibited areas, the 4-year land rule, and how developer gating really works. By a Oman property advisor.";
const canonical =
  "https://waleedproperty.com/can-gcc-citizens-buy-property-in-oman";
const ogTitle = "Can GCC Citizens Buy Property in Oman Outside ITCs?";
const ogDescription =
  "GCC citizens can own almost anywhere in Oman since 2004. The prohibited areas, the land rules, and the projects that actually sell to GCC buyers.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Can GCC Citizens Buy Property in Oman Outside ITCs?",
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
    "Property ownership rights of GCC citizens in Oman under Royal Decree 21/2004, including prohibited areas, land development rules, and the 2026 registry changes",
};

const faqs = [
  {
    q: "Can Saudis, Emiratis, Kuwaitis, Qataris and Bahrainis buy property outside ITCs in Oman?",
    a: "Yes. Royal Decree 21/2004 gives GCC citizens near-national treatment on real estate. They can buy built property and land across most of Oman for residence or investment, and most mainstream Muscat projects sell to them directly.",
  },
  {
    q: "Where can a GCC citizen NOT buy in Oman?",
    a: "The prohibited areas for all non-Omanis: Musandam, Al Buraimi, Al Dhahirah, Al Wusta, Dhofar except Salalah, the wilayats of Liwa, Shinas and Masirah, Jabal Al Akhdar and Jabal Shams, islands, and areas near palaces and security or military sites. Agricultural land is off-limits everywhere.",
  },
  {
    q: "Can a GCC citizen buy land in Oman, not just apartments?",
    a: "Yes. But vacant land must be developed within 4 years of registration, and it cannot be sold before that without approval from the competent authority. Built property has no such lock.",
  },
  {
    q: "Can a GCC company buy property in Oman?",
    a: "Yes, if the company is 100% owned by GCC nationals. Mixed-ownership companies do not qualify under the GCC route.",
  },
  {
    q: "Do GCC buyers get residency through property in Oman?",
    a: "They do not need it. GCC citizens already enter and reside in Oman freely under the GCC framework. The 2026 owner visa and residency scheme is built for non-GCC foreigners.",
  },
  {
    q: "What fee does a GCC buyer pay when registering a purchase?",
    a: "The ministry fee schedule sets 3% on sale registration. Some fee lines differ by case, so confirm your exact rate with the Ministry of Housing and Urban Planning before transfer.",
  },
  {
    q: "Did Oman open property ownership to all foreigners in 2026?",
    a: "No. The ministry clarified in June 2026 that non-GCC ownership stays limited to designated areas like ITCs and the new cities. The 2026 laws changed registration and residency, not who can own. GCC rights were already broad and did not change.",
  },
  {
    q: "Can GCC citizens rent out property they buy in Oman?",
    a: "Yes. The 2004 decree covers ownership for investment as well as residence, so buy-to-let is allowed.",
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

const CanGccCitizensBuyPropertyInOman = () => {
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
              GCC Buyer Guide · July 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Can GCC Citizens Buy Property in Oman Outside ITCs?
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
              Yes. Since 2004, citizens of Saudi Arabia, the UAE, Kuwait,
              Qatar and Bahrain can own built property and land across most of
              Oman, close to how Omanis do. No ITC needed. Two exceptions
              matter: a list of prohibited areas, and agricultural land. And
              vacant land must be built on within 4 years. Updated July 2026
              by Waleed Al Abri, a real estate advisor in Oman.
            </p>
          </div>

          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* The law */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The law GCC buyers stand on
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most guides treat GCC buyers like regular foreigners and point
              them at ITC zones. That is wrong, and it hides most of the
              market from them.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The actual law is Royal Decree 21/2004. It applies the GCC
              Economic Agreement in Oman and gives GCC citizens near-national
              treatment on real estate. It is still in force. What it covers:
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • <strong>Who:</strong> GCC individuals, and companies owned
                100% by GCC nationals.
              </li>
              <li>
                • <strong>What:</strong> built property and land, for
                residence or for investment. Renting out what you buy is
                allowed.
              </li>
              <li>
                • <strong>How:</strong> by purchase, will, or inheritance.
                Buyers must be 21 or older.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This is a different legal lane from the one non-GCC foreigners
              use. For that lane, see:{" "}
              <a
                href="/can-foreigners-buy-property-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Can foreigners buy property in Oman?
              </a>
            </p>
          </div>

          {/* Where not */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              Where you cannot buy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Royal Decree 29/2018 closes certain areas to all non-Omanis,
              and GCC citizens fall inside that. The prohibited list:
            </p>
            <ul className="space-y-2 text-foreground mb-4">
              <li>• Musandam, Al Buraimi, Al Dhahirah, and Al Wusta</li>
              <li>• Dhofar, except the wilayat of Salalah</li>
              <li>• The wilayats of Liwa, Shinas, and Masirah</li>
              <li>
                • Jabal Al Akhdar, Jabal Shams, and designated mountain areas
              </li>
              <li>• Islands</li>
              <li>
                • Areas near royal palaces and security or military sites, and
                designated heritage quarters
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              On top of that, agricultural land is closed to all non-Omanis
              everywhere in the country. Everything else, including almost all
              of Muscat, is open.
            </p>
          </div>

          {/* Land rule */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The 4-year land rule
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buying a ready apartment or house is simple: you can resell it
              whenever you want. Vacant land carries conditions:
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • You must develop the land within 4 years of registration.
                Extensions are possible for genuine cause.
              </li>
              <li>
                • You cannot sell it before developing it, or before the 4
                years pass, without approval from the competent authority.
              </li>
              <li>
                • If the land stays undeveloped, the State can take it back,
                at the lower of what you paid or its value at the time. Land
                banking does not work here.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The rule exists to stop speculation on empty plots. If your plan
              is buy-and-build, it will not bother you.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              GCC citizen vs non-GCC foreigner
            </h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gold"></TableHead>
                    <TableHead className="text-gold">GCC citizen</TableHead>
                    <TableHead className="text-gold">
                      Non-GCC foreigner
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Where</TableCell>
                    <TableCell>
                      Most of Oman, except the prohibited areas above
                    </TableCell>
                    <TableCell>
                      Designated locations only: ITCs, the new cities such as
                      Sultan Haitham City, and approved neighbourhoods
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">What</TableCell>
                    <TableCell>
                      Built property and land, residence or investment. No
                      agricultural land.
                    </TableCell>
                    <TableCell>
                      Units in eligible projects. Freehold or usufruct varies
                      per project.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Land</TableCell>
                    <TableCell>
                      Allowed, with the 4-year development rule
                    </TableCell>
                    <TableCell>
                      Generally not available outside designated projects
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Residency</TableCell>
                    <TableCell>
                      Not needed. GCC citizens already enter and reside freely.
                    </TableCell>
                    <TableCell>
                      Ownership can anchor the sponsor-free Owner Residency
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Practical */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              What buying actually looks like
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a GCC buyer, the useful question is not "is this project an
              ITC?" It is two questions: is the area allowed, and does this
              developer sell to GCC nationals? In Muscat, most mainstream
              projects do. Many non-ITC buildings in Ghala, Bousher, Al Khoudh
              and Mawaleh sell on an "Omani and GCC" basis. Some buildings run
              two tiers in one tower: freehold for Omanis and GCC, long
              usufruct for other foreigners.
            </p>
            <ul className="space-y-3 text-foreground mb-4">
              <li>
                • <strong>Process:</strong> the ministry runs a GCC ownership
                service through its Amlak platform. The application costs OMR
                5 and takes around 10 working days, then the purchase
                registers normally.
              </li>
              <li>
                • <strong>New since May 2026:</strong> the Real Estate
                Registry Law (Royal Decree 56/2026) moved Oman to electronic
                title deeds, with an English copy on request, and a
                preliminary register that records off-plan purchases before
                handover.
              </li>
              <li>
                • <strong>Financing:</strong> if you live and earn in Oman,
                local banks treat you like any resident buyer. Buying from
                Riyadh or Dubai without Omani income is case by case: expect a
                larger deposit and a shorter term.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Buying off-plan? Read this first:{" "}
              <a
                href="/is-off-plan-property-safe-in-oman"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                Is off-plan property safe in Oman?
              </a>
            </p>
          </div>

          {/* 2026 confusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-4">
              The 2026 confusion, cleared up
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2026 some sites reported that Oman opened property ownership
              to all foreigners nationwide. The ministry publicly corrected
              this in June 2026: non-GCC ownership stays limited to designated
              areas. What actually changed in 2026 was registration (the new
              registry law) and residency rules (the owner visa). Who can own
              did not change.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For GCC citizens none of this noise matters. Your rights were
              already broad in 2004, and they still are. I re-check this page
              quarterly against the current rules.
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
              If you are a GCC national looking at Muscat, your options are
              wider than the property portals suggest. The work is matching
              you to projects that actually sell to GCC buyers, in areas that
              are actually allowed, at prices that are actually current. That
              is what I do.
            </p>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For current numbers, see:{" "}
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
                  href="https://wa.me/96879136646?text=Hi%20Waleed%2C%20I%20am%20a%20GCC%20national%20interested%20in%20Oman%20property."
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

export default CanGccCitizensBuyPropertyInOman;
