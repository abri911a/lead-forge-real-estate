import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyDetailsDialog from "./PropertyDetailsDialog";
import ContactOptionsDialog from "./ContactOptionsDialog";

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
  /** ISO date of the last price update in the database */
  updatedAt?: string;
}

const PropertyCard = ({ id, image, title, location, price, beds, baths, sqft, type, description, features, yearBuilt, status, updatedAt }: PropertyCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const isStock = !image || /unsplash\.com/.test(image);
  const priceDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" })
    : "";

  return (
    <>
      {/* No listing schema here (8 Nov 2026): the home cards hold Nov-2025 prices + stock photos; schema made them look like current facts. */}
      <PropertyDetailsDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        property={{ id, image, title, location, price, beds, baths, sqft, type, description, features, yearBuilt, status }}
      />
      <ContactOptionsDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
        property={{ id, title, location, price }}
      />
    <Card className="overflow-hidden border-warmGray transition-colors duration-300 hover:border-gold/60">
      {/* 12 Nov 2026: a stock photo under a real project name hurt trust ("Stock photo, not this project"),
          and the card was an empty box on networks that block Unsplash. No real photo = no photo:
          the card leads with the price and says how old that price is. A real (non-Unsplash) photo still shows. */}
      {isStock ? (
        <div className="px-6 pt-6">
          <p className="text-sm text-muted-foreground mb-2">{type}</p>
          <p className="text-3xl font-bold text-gold [font-variant-numeric:tabular-nums]">{price}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {priceDate ? `Price from ${priceDate}. ` : ""}Ask me for today's price.
          </p>
        </div>
      ) : (
        <Link to={`/property/${id}`} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden">
          <img
            src={image}
            alt={title}
            width={800}
            height={533}
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-luxury-dark/90 text-foreground px-3 py-1 rounded-md text-sm font-semibold">
              {type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-luxury-dark/90 text-gold px-4 py-1 rounded-md text-lg font-bold">
              {price}
            </span>
          </div>
        </Link>
      )}
      
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
            className="border-border bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
          >
            <Link to={`/property/${id}`} aria-label={`View details: ${title}`}>View Details</Link>
          </Button>
          <Button 
            className="bg-gold text-luxury-dark hover:bg-gold-light"
            onClick={() => setContactDialogOpen(true)}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Ask about it
          </Button>
        </div>
      </div>
    </Card>
    </>
  );
};

export default PropertyCard;
