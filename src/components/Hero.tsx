import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-villa.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury property in Oman" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-darker/95 via-luxury-dark/80 to-luxury-dark/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Your Gateway to
            <span className="block text-gold mt-2">Premium Real Estate</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover exclusive properties in Oman's most sought-after locations. 
            Let us help you find your perfect investment opportunity.
          </p>

          {/* Quick search form */}
          <div className="bg-card/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="muscat">Muscat</SelectItem>
                  <SelectItem value="salalah">Salalah</SelectItem>
                  <SelectItem value="sultan-haitham">Sultan Haitham City</SelectItem>
                  <SelectItem value="muscat-bay">Muscat Bay</SelectItem>
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

              <Button className="bg-gold text-luxury-dark hover:bg-gold-light w-full">
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="bg-gold text-luxury-dark hover:bg-gold-light">
              View All Properties
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-dark">
              Talk to Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
