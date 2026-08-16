import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'faqPage' | 'article';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => {
      if (script.getAttribute('data-component') === 'structured-data') {
        script.remove();
      }
    });

    const structuredData = getStructuredData(type, data);
    
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-component', 'structured-data');
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const cleanupScripts = document.querySelectorAll('script[data-component="structured-data"]');
      cleanupScripts.forEach(s => s.remove());
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
        "description": "Premium real estate investment advisory specializing in Oman's Integrated Tourism Complexes (ITCs), freehold properties, and foreign investment opportunities. Expert guidance for international buyers in Muscat, Al Mouj, and Special Economic Zones.",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "telephone": "+968-79136646",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Muscat",
          "addressCountry": "OM"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Muscat"
          },
          {
            "@type": "City",
            "name": "Duqm"
          },
          {
            "@type": "City",
            "name": "Salalah"
          }
        ],
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
          "Special Economic Zone Investment",
          "GCC Property Markets"
        ],
        "sameAs": [
          "https://www.instagram.com/waleedvlogs.om/"
        ]
      };


    case 'localBusiness':
      return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Waleed Property",
        "image": `${baseUrl}/logo.png`,
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Muscat",
          "addressCountry": "OM"
        },
        "telephone": "+968-79136646",
        "openingHours": "Mo-Su 09:00-18:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.5880",
          "longitude": "58.3829"
        }
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
            "Sultan Haitham City Development",
            "Special Economic Zone Investment"
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
