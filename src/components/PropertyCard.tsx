import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyDetailsDialog from "./PropertyDetailsDialog";
import ContactOptionsDialog from "./ContactOptionsDialog";
import PropertySchema from "./PropertySchema";
import { optimizeImageUrl } from "@/lib/utils";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  description?: string;
  features?: string[];
  yearBuilt?: number;
  status?: string;
}

const PropertyCard = ({ id, image, title, location, price, beds, baths, sqft, type, description, features, yearBuilt, status }: PropertyCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <>
      <PropertySchema property={{ id, image, title, location, price, beds, baths, sqft, type, description, features, yearBuilt, status }} />
      <PropertyDetailsDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        property={{ id, image, title, location, price, beds, baths, sqft, type, description, features, yearBuilt, status }}
      />
      <ContactOptionsDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
      />
    <Card className="overflow-hidden border-warmGray transition-colors duration-300 hover:border-gold/60">
      {/* Photo + title open the property too: Clarity (17 Oct) showed repeated taps on the photo that did nothing.
          The photo link is hidden from screen readers so "View Details" stays the one announced link. */}
      <Link to={`/property/${id}`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
        <img
          src={optimizeImageUrl(image)}
          alt={title}
          width={800}
          height={533}
          loading="lazy"
          decoding="async"
          className="w-full h-64 object-cover"
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
      </Link>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          <Link to={`/property/${id}`} tabIndex={-1} className="hover:text-gold transition-colors">{title}</Link>
        </h3>
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
            asChild
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
          >
            <Link to={`/property/${id}`} aria-label={`View details: ${title}`}>View Details</Link>
          </Button>
          <Button 
            className="bg-gold text-luxury-dark hover:bg-gold-light"
            onClick={() => setContactDialogOpen(true)}
          >
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
