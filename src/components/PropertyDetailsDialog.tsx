import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bed, Bath, Maximize, MapPin, Phone, Mail, 
  Calendar, Home, Car, Trees, Wifi, Dumbbell,
  Shield, Wind, Droplet, Zap, CheckCircle2
} from "lucide-react";
import ContactOptionsDialog from "./ContactOptionsDialog";
import TourBooking from "./TourBooking";
import PropertySchema from "./PropertySchema";

interface PropertyDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: {
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
  };
}

const PropertyDetailsDialog = ({ open, onOpenChange, property }: PropertyDetailsDialogProps) => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  
  const amenities = [
    { icon: Wifi, label: "High Speed WiFi" },
    { icon: Car, label: "2 Parking Spaces" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Trees, label: "Garden & Park" },
    { icon: Wind, label: "Central A/C" },
    { icon: Droplet, label: "Swimming Pool" },
    { icon: Zap, label: "Solar Panels" },
  ];

  const propertyFeatures = property.features || [
    "Modern Kitchen with Premium Appliances",
    "Spacious Master Bedroom with Walk-in Closet",
    "Private Balcony with Stunning Views",
    "Premium Marble Flooring Throughout",
    "Smart Home Automation System",
    "Energy Efficient Windows",
    "Built-in Wardrobes in All Bedrooms",
  ];

  return (
    <>
      <PropertySchema property={{
        id: property.id,
        image: property.image,
        title: property.title,
        location: property.location,
        price: property.price,
        beds: property.beds,
        baths: property.baths,
        sqft: property.sqft,
        type: property.type,
        description: property.description,
        features: property.features,
        yearBuilt: property.yearBuilt,
        status: property.status
      }} />
      <ContactOptionsDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
      />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1 w-full">
              <DialogTitle className="text-xl sm:text-2xl font-bold mb-2 pr-8 sm:pr-0">{property.title}</DialogTitle>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">{property.location}</span>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <Badge className="bg-gold text-luxury-dark hover:bg-gold-light text-base sm:text-lg px-3 py-1 sm:px-4 whitespace-nowrap">
                {property.price}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* Property Image Gallery */}
          <div className="relative overflow-hidden rounded-lg -mx-4 sm:mx-0">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
              <Badge className="bg-luxury-dark/90 text-gold border-gold text-xs sm:text-sm">
                {property.type}
              </Badge>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 bg-muted/50 rounded-lg">
            <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
              <Bed className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              <span className="text-xs sm:text-sm text-muted-foreground">Bedrooms</span>
              <span className="font-bold text-sm sm:text-base">{property.beds}</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
              <Bath className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              <span className="text-xs sm:text-sm text-muted-foreground">Bathrooms</span>
              <span className="font-bold text-sm sm:text-base">{property.baths}</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
              <Maximize className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              <span className="text-xs sm:text-sm text-muted-foreground">Area</span>
              <span className="font-bold text-sm sm:text-base">{property.sqft} sqft</span>
            </div>
          </div>

          <Separator />

          {/* Tabs for Details */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 py-2 sm:px-3">Overview</TabsTrigger>
              <TabsTrigger value="features" className="text-xs sm:text-sm px-2 py-2 sm:px-3">Features</TabsTrigger>
              <TabsTrigger value="amenities" className="text-xs sm:text-sm px-2 py-2 sm:px-3">Amenities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 mt-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Property Description</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {property.description || `Discover this exceptional ${property.type.toLowerCase()} in the prestigious ${property.location}. 
                  This stunning property offers ${property.beds} spacious bedrooms and ${property.baths} modern bathrooms 
                  across ${property.sqft} square feet of meticulously designed living space. 
                  Perfect for families seeking luxury, comfort, and convenience in one of Oman's most sought-after locations.`}
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Property Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-gold" />
                    <span className="text-sm">Property Type: <span className="font-medium">{property.type}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm">Year Built: <span className="font-medium">{property.yearBuilt || 2023}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span className="text-sm">Status: <span className="font-medium">{property.status || "Available"}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm">View: <span className="font-medium">Sea & City</span></span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-3 mt-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Property Features</h3>
              <div className="grid gap-2">
                {propertyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-3 mt-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Community Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-border hover:border-gold transition-colors">
                    <amenity.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Separator />

          {/* Tour Booking Section */}
          <TourBooking propertyId={property.id} propertyTitle={property.title} />

          <Separator />

          {/* Contact Actions */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">Interested in this property?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <Button 
                className="bg-gold text-luxury-dark hover:bg-gold-light text-sm sm:text-base"
                onClick={() => setContactDialogOpen(true)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Agent
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-luxury-dark text-sm sm:text-base"
                onClick={() => setContactDialogOpen(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Inquiry
              </Button>
            </div>
            <Button 
              variant="secondary" 
              className="w-full text-sm sm:text-base"
              onClick={() => setContactDialogOpen(true)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Viewing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default PropertyDetailsDialog;
