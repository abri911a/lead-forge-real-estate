import PropertyCard from "./PropertyCard";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    title: "Luxury Villa in Sultan Haitham City",
    location: "Sultan Haitham City, Muscat",
    price: "OMR 185,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Modern Townhouse in Muscat Bay",
    location: "Muscat Bay",
    price: "OMR 145,000",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    type: "Townhouse"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Beachfront Apartment in Hawana Salalah",
    location: "Hawana Salalah",
    price: "OMR 95,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    type: "Apartment"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Standalone Villa in Jebel Sifah",
    location: "Jebel Sifah",
    price: "OMR 220,000",
    beds: 5,
    baths: 4,
    sqft: "4,000",
    type: "Villa"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Luxury Apartment in Qurom",
    location: "Qurom, Muscat",
    price: "OMR 125,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    type: "Apartment"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    title: "Eco Villa in Sustainable City",
    location: "Sustainable City",
    price: "OMR 165,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "Villa"
  }
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties across Oman's most desirable locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
