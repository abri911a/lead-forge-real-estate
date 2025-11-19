import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StructuredData from "./StructuredData";

const FAQ = () => {
  const faqs = [
    {
      question: "Can foreigners buy property in Oman?",
      answer: "Yes, foreign nationals can purchase property in Oman in designated areas including Integrated Tourism Complexes (ITCs) like Al Mouj Muscat, The Wave, and Special Economic Zones. As of 2025, ITCs offer 100% freehold ownership to international buyers with no restrictions. Investment of OMR 500,000+ in approved properties qualifies for the First-Class Residency Card program."
    },
    {
      question: "What are Integrated Tourism Complexes (ITCs) in Oman?",
      answer: "Integrated Tourism Complexes (ITCs) are government-designated mixed-use developments that allow 100% foreign ownership of residential properties. Major ITCs include Al Mouj Muscat, The Wave, and Jebel Sifah. As of 2025, ITCs offer rental yields of 5-8%, competitive with Dubai and Abu Dhabi but with significantly lower entry costs starting from OMR 80,000 for apartments."
    },
    {
      question: "What is the minimum investment required for Oman property?",
      answer: "Minimum investment varies by property type and location. Studio apartments in Sultan Haitham City start from OMR 33,250, while luxury villas in Al Mouj range from OMR 1,500,000. For the First-Class Residency Card, minimum property investment is OMR 500,000 (~USD 1.3 million) in approved freehold areas."
    },
    {
      question: "What rental yields can I expect from Oman properties?",
      answer: "Rental yields in Oman's prime locations average 5-8% gross annually. Al Mouj Muscat properties typically yield 6-7%, while emerging areas like Sultan Haitham City offer potential for 7-9% as infrastructure develops. These yields are competitive with Dubai (4-6%) and Abu Dhabi (5-7%) with lower purchase prices."
    },
    {
      question: "What is the Oman First-Class Residency Card?",
      answer: "The First-Class Residency Card is a 10-year renewable visa available to foreign investors who purchase property valued at OMR 500,000 or more in designated freehold areas. It includes benefits such as residency for family members, business ownership rights, and no sponsor requirements. This program aligns with Oman Vision 2040 to attract foreign investment."
    },
    {
      question: "Which areas in Oman offer the best investment opportunities?",
      answer: "Top investment locations include: (1) Al Mouj Muscat - established waterfront ITC with marina, golf course, and 24/7 security; (2) Sultan Haitham City - Oman's flagship smart city with flexible payment plans and freehold ownership; (3) Duqm Special Economic Zone - industrial and logistics hub with commercial opportunities; (4) Salalah - tourism-driven market with seasonal demand."
    },
    {
      question: "What are the property purchase costs and fees in Oman?",
      answer: "Total acquisition costs typically include: property price, 3% municipality registration fee, legal fees (0.5-1% of property value), and agent commission (typically 2-3% paid by seller). Buyer closing costs average 4-5% of purchase price. Annual property tax is minimal. Foreign buyers should budget an additional 5-6% for due diligence and legal advisory."
    },
    {
      question: "How does Oman Vision 2040 impact real estate investment?",
      answer: "Oman Vision 2040 is the government's economic diversification strategy targeting tourism, logistics, and manufacturing sectors. For real estate, this means significant infrastructure investment in ITCs and Special Economic Zones, streamlined foreign ownership regulations, and targeted development of smart cities like Sultan Haitham City. The plan projects 10.8% annual real estate market growth through 2030."
    },
    {
      question: "What financing options are available for foreign buyers?",
      answer: "Foreign buyers can access mortgage financing from select Omani banks with 20-30% down payment requirements. Interest rates typically range 4-5.5% for conventional mortgages. Some developers offer payment plans: 20% down payment, installments during construction, and 2-year post-handover grace periods. International buyers should verify eligibility requirements with lenders directly."
    },
    {
      question: "What are the differences between freehold and usufruct properties?",
      answer: "Freehold ownership grants full property rights indefinitely, available in ITCs and designated zones for foreigners. Usufruct rights grant usage rights for 50-99 years without land ownership, common in non-ITC areas. For investment purposes, freehold properties in ITCs offer better resale liquidity, clearer title transfer, and qualification for residency visa programs. Usufruct may have restrictions on modifications and subletting."
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
              Expert answers about Oman real estate investment for international buyers
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Have more questions? <a href="#contact" className="text-gold hover:underline">Contact our expert advisors</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
