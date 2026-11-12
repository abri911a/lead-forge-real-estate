import { useState, useRef, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { useProperties } from "@/hooks/useProperties";
import { Button } from "./ui/button";
import { MapPin, Search } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const FeaturedProperties = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  // 8 Nov 2026: 9 cards were ~5,300 px on a phone (about 6 screens). Show 3, the rest on tap.
  const [showAll, setShowAll] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("all");
  const [tempLocation, setTempLocation] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);
  
  const { data, isLoading, error } = useProperties({
    page: 1,
    pageSize: 9,
    location: selectedLocation,
    propertyType: selectedPropertyType,
  });

  // Listen for hero filter events
  useEffect(() => {
    const handleHeroFilter = (event: CustomEvent) => {
      const { location, propertyType } = event.detail;
      if (location) {
        setSelectedLocation(location);
        setTempLocation(location);
      }
      if (propertyType) {
        setSelectedPropertyType(propertyType);
      }
    };

    const handleFilterReset = () => {
      setSelectedLocation("all");
      setSelectedPropertyType("all");
      setTempLocation("all");
    };

    window.addEventListener("hero-filter-search", handleHeroFilter as EventListener);
    window.addEventListener("hero-filter-reset", handleFilterReset);
    
    return () => {
      window.removeEventListener("hero-filter-search", handleHeroFilter as EventListener);
      window.removeEventListener("hero-filter-reset", handleFilterReset);
    };
  }, []);

  const handleSearch = () => {
    setSelectedLocation(tempLocation);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section ref={sectionRef} id="properties" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6">
            Some of the properties I can help you buy. Ask me for the current price before you decide.
          </p>
          
          {/* Location Filter */}
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
            <Select value={tempLocation} onValueChange={setTempLocation}>
              <SelectTrigger aria-label="Filter by location" className="h-11 min-w-0 flex-1 sm:flex-none sm:w-[280px] border-gold/30 focus:border-gold">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Muscat">Muscat</SelectItem>
                <SelectItem value="Salalah">Salalah</SelectItem>
                <SelectItem value="Sohar">Sohar</SelectItem>
                <SelectItem value="Nizwa">Nizwa</SelectItem>
                <SelectItem value="Sur">Sur</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={handleSearch}
              variant="outline"
              className="h-11 border-border bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {data && (
            <p className="text-muted-foreground text-sm mt-2">
              Showing {showAll ? Math.min(9, data.totalCount) : Math.min(3, data.totalCount)} of {data.totalCount} properties
              {selectedLocation !== "all" && ` in ${selectedLocation}`}
            </p>
          )}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-destructive">
            <p>Failed to load properties. Please try again later.</p>
          </div>
        )}

        {data && data.properties.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAll ? data.properties : data.properties.slice(0, 3)).map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  image={property.image_url}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  type={property.property_type}
                  description={property.description || undefined}
                  features={property.features || undefined}
                  yearBuilt={property.year_built || undefined}
                  status={property.status || undefined}
                  updatedAt={property.updated_at}
                />
              ))}
            </div>
            {!showAll && data.properties.length > 3 && (
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(true)}
                  className="h-11 border-border bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
                >
                  Show {data.properties.length - 3} more properties
                </Button>
              </div>
            )}
          </>
        )}

        {data && data.properties.length === 0 && (
          <div className="text-center text-muted-foreground">
            <p>No properties found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
