import { useState, useRef, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { useProperties } from "@/hooks/useProperties";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, MapPin, Search } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const FeaturedProperties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [tempLocation, setTempLocation] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);
  
  const { data, isLoading, error } = useProperties({
    page: currentPage,
    pageSize: 9,
    location: selectedLocation,
  });

  // Listen for hero filter events
  useEffect(() => {
    const handleHeroFilter = (event: CustomEvent) => {
      const { location } = event.detail;
      if (location) {
        setSelectedLocation(location);
        setTempLocation(location);
        setCurrentPage(1);
      }
    };

    window.addEventListener("hero-filter-search", handleHeroFilter as EventListener);
    return () => {
      window.removeEventListener("hero-filter-search", handleHeroFilter as EventListener);
    };
  }, []);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextPage = () => {
    if (data && currentPage < data.totalPages) {
      setCurrentPage((prev) => prev + 1);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSearch = () => {
    setSelectedLocation(tempLocation);
    setCurrentPage(1);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} id="properties" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Explore our handpicked selection of premium properties across Oman's most desirable locations
          </p>
          
          {/* Location Filter */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-gold" />
            <Select value={tempLocation} onValueChange={setTempLocation}>
              <SelectTrigger className="w-[280px] border-gold/30 focus:border-gold">
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
              className="bg-gold text-luxury-dark hover:bg-gold-light"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {data && (
            <p className="text-muted-foreground text-sm mt-2">
              Showing {((currentPage - 1) * 9) + 1}-{Math.min(currentPage * 9, data.totalCount)} of {data.totalCount} properties
              {selectedLocation !== "all" && ` in ${selectedLocation}`}
            </p>
          )}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-64 w-full" />
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
              {data.properties.map((property) => (
                <PropertyCard
                  key={property.id}
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
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {data.totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-2">
                  {[...Array(data.totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Show first page, last page, current page and adjacent pages
                    if (
                      pageNumber === 1 ||
                      pageNumber === data.totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          onClick={() => {
                            setCurrentPage(pageNumber);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={
                            currentPage === pageNumber
                              ? "bg-gold text-luxury-dark hover:bg-gold-light"
                              : "border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                          }
                        >
                          {pageNumber}
                        </Button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return <span key={pageNumber} className="text-muted-foreground">...</span>;
                    }
                    return null;
                  })}
                </div>

                <Button
                  variant="outline"
                  onClick={handleNextPage}
                  disabled={currentPage === data.totalPages}
                  className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
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
