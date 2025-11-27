import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-villa.jpg";
import { useState } from "react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Dispatch custom event with filter data
      const event = new CustomEvent("hero-filter-search", { 
        detail: { location, propertyType } 
      });
      window.dispatchEvent(event);
    }
  };

  const handleViewAll = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Dispatch event to reset filters
      const event = new CustomEvent("hero-filter-reset");
      window.dispatchEvent(event);
    }
  };
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury property in Oman" 
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-darker/95 via-luxury-dark/80 to-luxury-dark/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Your Gateway to</span>
            <span className="block text-gold mt-2 drop-shadow-lg">Premium Real Estate</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Discover exclusive properties in Oman's most sought-after locations. 
            Let us help you find your perfect investment opportunity.
          </p>

          {/* Quick search form */}
          <div className="bg-card/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                  <SelectItem value="Land">Land</SelectItem>
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Muscat">Muscat</SelectItem>
                  <SelectItem value="Salalah">Salalah</SelectItem>
                  <SelectItem value="Sohar">Sohar</SelectItem>
                  <SelectItem value="Nizwa">Nizwa</SelectItem>
                  <SelectItem value="Sur">Sur</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Bed</SelectItem>
                  <SelectItem value="2">2 Beds</SelectItem>
                  <SelectItem value="3">3 Beds</SelectItem>
                  <SelectItem value="4">4+ Beds</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                className="bg-gold text-luxury-dark hover:bg-gold-light w-full"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-gold text-luxury-dark hover:bg-gold-light"
              onClick={handleViewAll}
            >
              View All Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
              onClick={() => {
                const profileSection = document.getElementById("agent-profile");
                if (profileSection) {
                  profileSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Talk to Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
