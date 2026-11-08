import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'faqPage' | 'article';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    // 8 Nov 2026: each block now replaces only ITSELF. Before, every block deleted all the others,
    // so the home page kept only the last one (FAQPage) and Google never saw the business block.
    const id = `structured-data-${type}`;
    document.getElementById(id)?.remove();

    const structuredData = getStructuredData(type, data);

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.setAttribute('data-component', 'structured-data');
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [type, data]);

  return null;
};

const getStructuredData = (type: string, data?: any) => {
  const baseUrl = window.location.origin;

  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Waleed Property",
        "description": "Independent advice for foreign and GCC buyers of property in Oman: where you can own, what it costs, and which homes give residency. Buyers pay nothing; the developer pays the broker commission.",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "telephone": "+96879136646",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Muscat",
          "addressCountry": "OM"
        },
        "areaServed": { "@type": "Country", "name": "Oman" },
        "serviceType": [
          "Integrated Tourism Complex Investment",
          "Freehold Property Sales",
          "Foreign Investment Advisory",
          "Oman Residency Visa Guidance",
          "Real Estate Investment Consulting"
        ],
        "knowsAbout": [
          "Oman Real Estate Investment",
          "Integrated Tourism Complexes (ITCs)",
          "Foreign Ownership Regulations in Oman",
          "Oman Golden Residency Programme (OMR 200,000, 10-year)",
          "Property Owner Residency (ROP Decision 87/2026)",
          "Al Mouj Muscat Properties",
          "Oman Vision 2040",
          "GCC Property Markets"
        ],
        "founder": { "@type": "Person", "name": "Waleed Al Abri", "jobTitle": "Real Estate Advisor" },
        "sameAs": [
          "https://www.instagram.com/waleedvlogs.om/"
        ]
      };




    case 'faqPage':
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data?.faqs || []
      };

    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data?.title || "Oman Real Estate Investment Guide",
        "description": data?.description || "Expert guidance on property investment in Oman",
        "author": {
          "@type": "Person",
          "name": "Waleed Al Abri",
          "jobTitle": "Real Estate Advisor",
          "description": "Real estate advisor working with foreign and GCC buyers in Oman",
          "affiliation": {
            "@type": "Organization",
            "name": "Waleed Property"

          },
          "knowsAbout": [
            "Oman Property Markets",
            "Integrated Tourism Complexes (ITCs)",
            "Foreign Investment Regulations in Oman",
            "Oman Golden Residency Programme (OMR 200,000, 10-year)",
            "Property Owner Residency (ROP Decision 87/2026)",

            "GCC Real Estate Investment",
            "Al Mouj Muscat Properties",
            "Sultan Haitham City Development"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Waleed Property",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": data?.datePublished || new Date().toISOString(),
        "dateModified": data?.dateModified || new Date().toISOString(),
        "inLanguage": "en",
        "about": [
          "Oman Real Estate Investment",
          "Integrated Tourism Complexes",
          "Foreign Property Ownership in Oman"
        ]
      };

    default:
      return null;
  }
};

export default StructuredData;
