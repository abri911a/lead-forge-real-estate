import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StructuredData from "./StructuredData";

const FAQ = () => {
  // Rewritten 11 Oct 2026 to match the fact-checked guides (old answers had The Wave as a separate ITC,
  // OMR 33,250 studios, 6-9% yields, a "municipality" fee and a "10.8% growth" projection: all wrong or unsourced).
  const faqs = [
    {
      question: "Can foreigners buy property in Oman?",
      answer: "Yes, but only in named areas: mainly Integrated Tourism Complexes (ITCs) such as Al Mouj Muscat, Muscat Bay and Jebel Sifah, and some future cities such as Sultan Haitham City. Not every project in these areas gives the same title, so confirm freehold or usufruct per project. A qualifying purchase opens the sponsor-free Owner Residency, and from OMR 200,000 you can apply for the 10-year renewable Golden Residency."
    },
    {
      question: "What are Integrated Tourism Complexes (ITCs) in Oman?",
      answer: "ITCs are licensed developments where non-Omanis can own land or built units, under Royal Decree 12/2006. Examples are Al Mouj Muscat (once called The Wave), Muscat Bay, Jebel Sifah and Hawana Salalah. Ownership has rules: a sale is registered with the Ministry of Housing, and a plot must be built on within 4 years."
    },
    {
      question: "What is the minimum investment required for Oman property?",
      answer: "There is no single minimum. It depends on the area and the project. As examples with public prices: new Al Mouj apartments start from OMR 69,000 plus VAT (Azura III and IV, February 2026), and a Wadi Zaha studio in Sultan Haitham City was OMR 54,705 for 54 m2 in September 2026. Golden Residency needs OMR 200,000."
    },
    {
      question: "What rental yields can I expect from Oman properties?",
      answer: "It depends a lot on the area, the unit and the price you pay, so I do not give one number for Oman. In Al Mouj, a well-bought resale apartment rents for about 5 to 6% a year before costs, and about 3 to 4.5% after service charges and empty months. New launches yield less at today's prices."
    },
    {
      question: "What residency options come with buying property in Oman?",
      answer: "A qualifying property purchase opens the sponsor-free Owner Residency (ROP Decision 87/2026), which lasts while you own the unit. From OMR 200,000 of qualifying investment in a finished unit with a title deed, you can apply for the 10-year renewable Golden Residency, which can cover your family. Sultan Haitham City has its own rule: residency after 30% of the price is paid, before handover."
    },
    {
      question: "Which areas in Oman are worth looking at?",
      answer: "It depends on what you want. Al Mouj Muscat is an established ITC with high rents but slow price growth. Sultan Haitham City is a new government city at an early stage. Duqm is a special economic zone for business use, with usufruct of up to 50 years, not freehold. Send me your budget and goal and I will tell you what fits."
    },
    {
      question: "What are the property purchase costs and fees in Oman?",
      answer: "Registration is 3% of the value, paid to the Ministry of Housing, plus small fixed fees. A developer's first sale of a new residential unit also carries 5% VAT; a resale does not. In total, about 4 to 5% for a resale paid in cash, and about 9 to 12% for a new unit with a mortgage. If you rent the unit out, the landlord pays a 3% lease registration fee on the rent in Muscat."
    },
    {
      question: "Is there tax on property income in Oman?",
      answer: "Not today. From 1 January 2028, Royal Decree 56/2025 brings a 5% personal income tax on income above OMR 42,000 a year. Rental income and gains from selling property can count; your main home is exempt. Check your own case with a tax adviser."
    },
    {
      question: "What financing options are available for foreign buyers?",
      answer: "Some Omani banks lend to expatriates. At National Bank of Oman (June 2026), an expatriate can borrow up to 70% of the value, so at least 30% down, for up to 20 years. Many developers also offer payment plans during construction. Ask the bank and the developer for their current terms before you book."
    },
    {
      question: "What are the differences between freehold and usufruct properties?",
      answer: "Freehold is full, permanent ownership of the unit. Usufruct is a right to use the property for a fixed term, often 50 to 99 years, and it ends. Both are sold to foreigners in Oman. Before you sign, get the ownership type in writing."
    }
  ];

  const structuredFaqs = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return (
    <section id="faq" className="py-20 bg-luxury-dark">
      <StructuredData type="faqPage" data={{ faqs: structuredFaqs }} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers about Oman real estate for international buyers
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-warmGray/30">
                <AccordionTrigger className="text-left text-gold/90 hover:text-gold font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 rounded-lg border border-border bg-card/95 px-6 py-4 text-card-foreground leading-relaxed shadow-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Have more questions? <a href="#contact" className="text-gold hover:underline">Send me your question</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
