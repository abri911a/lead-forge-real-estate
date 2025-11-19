import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyDetailsDialog from "./PropertyDetailsDialog";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
}

const PropertyCard = ({ image, title, location, price, beds, baths, sqft, type }: PropertyCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <PropertyDetailsDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        property={{ image, title, location, price, beds, baths, sqft, type }}
      />
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-warmGray">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gold text-luxury-dark px-3 py-1 rounded-full text-sm font-semibold">
            {type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-luxury-dark/90 text-gold px-4 py-1 rounded-full text-lg font-bold">
            {price}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-6 pb-4 border-b border-warmGray">
          <div className="flex items-center gap-2">
            <Bed className="h-5 w-5 text-gold" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-5 w-5 text-gold" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-5 w-5 text-gold" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
            onClick={() => setDialogOpen(true)}
          >
            View Details
          </Button>
          <Button className="bg-gold text-luxury-dark hover:bg-gold-light">
            <Phone className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    </Card>
    </>
  );
};

export default PropertyCard;
