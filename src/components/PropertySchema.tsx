import { useEffect } from "react";

interface PropertySchemaProps {
  property: {
    id: string;
    title: string;
    description?: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    type: string;
    image: string;
    yearBuilt?: number;
    status?: string;
    features?: string[];
  };
}

const PropertySchema = ({ property }: PropertySchemaProps) => {
  useEffect(() => {
    // Extract numeric price from string (e.g., "$500,000" -> 500000)
    const numericPrice = property.price.replace(/[^0-9]/g, '');
    
    // Extract numeric sqft
    const numericSqft = property.sqft.replace(/[^0-9]/g, '');
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Apartment",
      "@id": `https://waleedproperty.com/property/${property.id}`,
      name: property.title,
      description: property.description || `${property.beds} bedroom, ${property.baths} bathroom ${property.type.toLowerCase()} in ${property.location}`,
      url: `https://waleedproperty.com/property/${property.id}`,
      image: property.image,
      address: {
        "@type": "PostalAddress",
        addressLocality: property.location,
        addressCountry: "OM"
      },
      geo: {
        "@type": "GeoCoordinates",
        addressCountry: "OM"
      },
      numberOfRooms: property.beds,
      numberOfBedrooms: property.beds,
      numberOfBathroomsTotal: property.baths,
      floorSize: {
        "@type": "QuantitativeValue",
        value: numericSqft,
        unitCode: "FTK" // square foot
      },
      amenityFeature: property.features?.map(feature => ({
        "@type": "LocationFeatureSpecification",
        name: feature
      })) || [],
      ...(property.yearBuilt && {
        yearBuilt: property.yearBuilt
      }),
      offers: {
        "@type": "Offer",
        price: numericPrice,
        priceCurrency: "OMR",
        availability: property.status === "Available" 
          ? "https://schema.org/InStock" 
          : "https://schema.org/OutOfStock",
        priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 6)).toISOString().split('T')[0],
        seller: {
          "@type": "RealEstateAgent",
          name: "Waleed Property",
          url: "https://waleedproperty.com",
          telephone: "+968-YOUR-PHONE",
          email: "info@waleedproperty.com"
        }
      },
      ...(property.status && {
        category: property.type
      })
    };

    // Create or update script tag
    let scriptTag = document.getElementById(`property-schema-${property.id}`) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = `property-schema-${property.id}`;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

    // Cleanup
    return () => {
      const existingScript = document.getElementById(`property-schema-${property.id}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [property]);

  return null; // This component doesn't render anything visible
};

export default PropertySchema;
