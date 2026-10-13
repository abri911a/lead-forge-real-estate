import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const TALK_WHATSAPP = `https://wa.me/96879136646?text=${encodeURIComponent(
  "Hi Waleed, I want to buy property in Oman. My budget is: ... My nationality is: ...",
)}`;

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
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
      propertiesSection.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      // Dispatch event to reset filters
      const event = new CustomEvent("hero-filter-reset");
      window.dispatchEvent(event);
    }
  };
  return (
    <section className="relative min-h-[90dvh] py-16 md:py-0 flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero/hero-villa-1440.webp"
          srcSet="/hero/hero-villa-640.webp 640w, /hero/hero-villa-960.webp 960w, /hero/hero-villa-1440.webp 1440w"
          sizes="100vw"
          alt="Luxury property in Oman"
          width={1440}
          height={810}
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-darker/95 via-luxury-dark/80 to-luxury-dark/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        {/* Phones: CSS order shows the CTAs above the search form, so they sit above the fold.
            DOM order (and innerText) is unchanged. */}
        <div className="max-w-3xl flex flex-col">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Property in Oman</span>
            <span className="block text-gold mt-2 drop-shadow-lg">for foreign and GCC buyers</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            I help you check three things before you pay: where you can own,
            what it really costs, and whether it gives residency.
          </p>

          {/* Quick search form */}
          <div className="order-2 md:order-none bg-card/95 backdrop-blur-sm p-6 rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger aria-label="Property type">
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
                <SelectTrigger aria-label="Location">
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


              <Button 
                className="h-11 bg-gold text-luxury-dark hover:bg-gold-light w-full"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="order-1 md:order-none flex flex-wrap gap-4 mb-8 md:mb-0 md:mt-8">
            <Button 
              size="lg" 
              className="bg-gold text-luxury-dark hover:bg-gold-light"
              onClick={handleViewAll}
            >
              View All Properties
            </Button>
            {/* Was a scroll to the bio card, which has no contact action */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
            >
              <a href={TALK_WHATSAPP} target="_blank" rel="noopener noreferrer">
                Talk to Waleed
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
