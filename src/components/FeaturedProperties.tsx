import PropertyCard from "./PropertyCard";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    title: "ALAYA Ultra-Luxury 6BR Villa at Al Mouj",
    location: "Al Mouj, Muscat",
    price: "OMR 1,500,000",
    beds: 6,
    baths: 6,
    sqft: "907",
    type: "Villa",
    description: "Ultra-luxury villa featuring premium finishes, private pool, and stunning marina views. Built by Eagle Hills Muscat.",
    features: [
      "Private Swimming Pool",
      "Premium Marble Flooring",
      "Smart Home Automation",
      "Private Garden",
      "Built-in Wardrobes",
      "Gated Community",
      "Beach Access",
      "Marina Views"
    ],
    yearBuilt: 2024,
    status: "Under Construction"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Lavish 4BR Standalone Villa",
    location: "Sultan Haitham City, Muscat",
    price: "OMR 234,650",
    beds: 4,
    baths: 4,
    sqft: "3,500",
    type: "Villa",
    description: "Spacious standalone villa in the heart of Sultan Haitham City with modern architecture and premium amenities.",
    features: [
      "Private Garden",
      "Covered Parking",
      "Modern Kitchen",
      "Master Suite",
      "Maid's Room",
      "Smart Home Ready",
      "Energy Efficient",
      "Freehold"
    ],
    yearBuilt: 2023,
    status: "Available"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "3BHK Penthouse with Private Pool",
    location: "Sultan Haitham City, Muscat",
    price: "OMR 125,685",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    type: "Penthouse",
    description: "Exclusive penthouse with rooftop private pool and panoramic city views in Sultan Haitham City.",
    features: [
      "Private Rooftop Pool",
      "Panoramic City Views",
      "Premium Finishes",
      "Smart Lighting",
      "Spacious Balconies",
      "Modern Kitchen",
      "Gym Access",
      "24/7 Security"
    ],
    yearBuilt: 2023,
    status: "Available"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "3BHK Townhouse in Wadi Zaha",
    location: "Wadi Zaha, Sultan Haitham City",
    price: "OMR 125,683",
    beds: 3,
    baths: 3,
    sqft: "2,200",
    type: "Townhouse",
    description: "Modern townhouse in the sought-after Wadi Zaha community with contemporary design and family-friendly amenities.",
    features: [
      "Private Courtyard",
      "Two Parking Spaces",
      "Open Plan Living",
      "Modern Bathrooms",
      "Storage Room",
      "Community Pool",
      "Parks Nearby",
      "Freehold"
    ],
    yearBuilt: 2023,
    status: "Available"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "3BHK Apartment in Wadi Zaha",
    location: "Wadi Zaha, Sultan Haitham City",
    price: "OMR 92,179",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Apartment",
    description: "Bright and spacious 3-bedroom apartment in Wadi Zaha with modern amenities and excellent connectivity.",
    features: [
      "Built-in Wardrobes",
      "Modern Kitchen",
      "Balcony",
      "Covered Parking",
      "Community Facilities",
      "Close to Schools",
      "Shopping Nearby",
      "Freehold"
    ],
    yearBuilt: 2023,
    status: "Available"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    title: "3BHK Sky Villa Apartment",
    location: "Sultan Haitham City, Muscat",
    price: "OMR 120,412",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    type: "Apartment",
    description: "Elegant sky villa apartment with spacious balconies offering stunning city and mountain views.",
    features: [
      "Large Balconies",
      "Premium Finishes",
      "Smart Home Features",
      "City Views",
      "Modern Kitchen",
      "Storage Space",
      "Gym & Pool Access",
      "Freehold"
    ],
    yearBuilt: 2023,
    status: "Available"
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
