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
        "name": "Elite Estates Oman",
        "description": "Premium real estate investment advisory specializing in Oman's Integrated Tourism Complexes (ITCs), freehold properties, and foreign investment opportunities. Expert guidance for international buyers in Muscat, Al Mouj, and Special Economic Zones.",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "telephone": "+968-79136646",
        "email": "info@elite-estates.om",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Mouj",
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
          "First-Class Residency Card Requirements",
          "Al Mouj Muscat Properties",
          "Oman Vision 2040",
          "Special Economic Zone Investment",
          "GCC Property Markets"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/elite-estates-oman"
        ]
      };

    case 'localBusiness':
      return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Elite Estates Oman",
        "image": `${baseUrl}/logo.png`,
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Mouj",
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
          "name": "Elite Estates Team",
          "jobTitle": "Licensed Real Estate Advisors",
          "knowsAbout": [
            "Oman Property Markets",
            "Foreign Investment Regulations",
            "GCC Real Estate"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Elite Estates Oman",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": data?.datePublished || new Date().toISOString(),
        "dateModified": data?.dateModified || new Date().toISOString()
      };

    default:
      return null;
  }
};

export default StructuredData;
