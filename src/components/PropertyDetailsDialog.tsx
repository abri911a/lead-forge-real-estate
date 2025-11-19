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

interface PropertyDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: {
    image: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    type: string;
  };
}

const PropertyDetailsDialog = ({ open, onOpenChange, property }: PropertyDetailsDialogProps) => {
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

  const features = [
    "Modern Kitchen with Premium Appliances",
    "Spacious Master Bedroom with Walk-in Closet",
    "Private Balcony with Stunning Views",
    "Premium Marble Flooring Throughout",
    "Smart Home Automation System",
    "Energy Efficient Windows",
    "Built-in Wardrobes in All Bedrooms",
    "Guest Bathroom & Powder Room",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold mb-2">{property.title}</DialogTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
            </div>
            <div>
              <Badge className="bg-gold text-luxury-dark hover:bg-gold-light text-lg px-4 py-1">
                {property.price}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Property Image Gallery */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-luxury-dark/90 text-gold border-gold">
                {property.type}
              </Badge>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex flex-col items-center gap-2 text-center">
              <Bed className="h-6 w-6 text-gold" />
              <span className="text-sm text-muted-foreground">Bedrooms</span>
              <span className="font-bold">{property.beds}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Bath className="h-6 w-6 text-gold" />
              <span className="text-sm text-muted-foreground">Bathrooms</span>
              <span className="font-bold">{property.baths}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Maximize className="h-6 w-6 text-gold" />
              <span className="text-sm text-muted-foreground">Area</span>
              <span className="font-bold">{property.sqft} sqft</span>
            </div>
          </div>

          <Separator />

          {/* Tabs for Details */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Property Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discover this exceptional {property.type.toLowerCase()} in the prestigious {property.location}. 
                  This stunning property offers {property.beds} spacious bedrooms and {property.baths} modern bathrooms 
                  across {property.sqft} square feet of meticulously designed living space. 
                  Perfect for families seeking luxury, comfort, and convenience in one of Oman's most sought-after locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Property Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-gold" />
                    <span className="text-sm">Property Type: <span className="font-medium">{property.type}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm">Year Built: <span className="font-medium">2023</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    <span className="text-sm">Status: <span className="font-medium">Available</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm">View: <span className="font-medium">Sea & City</span></span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-3 mt-4">
              <h3 className="text-lg font-semibold mb-3">Property Features</h3>
              <div className="grid gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="space-y-3 mt-4">
              <h3 className="text-lg font-semibold mb-3">Community Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-gold transition-colors">
                    <amenity.icon className="h-5 w-5 text-gold" />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Separator />

          {/* Contact Actions */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Interested in this property?</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button className="bg-gold text-luxury-dark hover:bg-gold-light">
                <Phone className="mr-2 h-4 w-4" />
                Call Agent
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-dark">
                <Mail className="mr-2 h-4 w-4" />
                Email Inquiry
              </Button>
            </div>
            <Button variant="secondary" className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Viewing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsDialog;
