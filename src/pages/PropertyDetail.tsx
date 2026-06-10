import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Bed, Bath, Calendar, CheckCircle2, Home, MapPin, Maximize, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SeoHead from "@/components/SeoHead";
import PropertySchema from "@/components/PropertySchema";
import ContactOptionsDialog from "@/components/ContactOptionsDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [contactOpen, setContactOpen] = useState(false);

  const { data: property, isLoading, error } = useQuery({
    queryKey: ["property", id],
    enabled: Boolean(id),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id!)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const title = property ? `${property.title} | Waleed Property` : "Property Details | Waleed Property";
  const description = property?.description || (property ? `${property.beds} bedroom, ${property.baths} bathroom ${property.property_type} in ${property.location}. View price, features, location, and schedule a private viewing with Waleed Property.` : "View Oman property details, features, price, location, and schedule a private viewing with Waleed Property.");
  const canonical = `https://waleedproperty.com/property/${id ?? ""}`;
  const features = Array.isArray(property?.features) ? property.features.filter((feature): feature is string => typeof feature === "string") : [];

  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <SeoHead title={title} description={description} canonical={canonical} type="article" image={property?.image_url} />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        {property?.image_url && <meta property="og:image" content={property.image_url} />}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        {property?.image_url && <meta name="twitter:image" content={property.image_url} />}
      </Helmet>

      {property && (
        <PropertySchema
          property={{
            id: property.id,
            image: property.image_url,
            title: property.title,
            location: property.location,
            price: property.price,
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
            type: property.property_type,
            description: property.description || undefined,
            features,
            yearBuilt: property.year_built || undefined,
            status: property.status || undefined,
          }}
        />
      )}

      <Header />
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/#properties" className="text-gold hover:underline">← Back to properties</Link>

          {isLoading && <p className="mt-8 text-muted-foreground">Loading property details...</p>}
          {error && <p className="mt-8 text-destructive">Property could not be loaded.</p>}

          {property && (
            <article className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-gold text-luxury-dark hover:bg-gold-light">{property.property_type}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">{property.title}</h1>
                  <p className="flex items-center gap-2 text-muted-foreground text-lg">
                    <MapPin className="h-5 w-5" />
                    {property.location}
                  </p>
                </div>

                <img src={property.image_url} alt={property.title} className="w-full rounded-lg object-cover max-h-[560px]" />

                <Card className="p-6 border-warmGray">
                  <h2 className="text-2xl font-bold text-gold mb-4">Property Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description || `Discover this ${property.property_type.toLowerCase()} in ${property.location}, offering ${property.beds} bedrooms, ${property.baths} bathrooms, and ${property.sqft} square feet of living space.`}
                  </p>
                </Card>

                {features.length > 0 && (
                  <Card className="p-6 border-warmGray">
                    <h2 className="text-2xl font-bold text-gold mb-4">Features</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex gap-3 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              <aside className="space-y-6">
                <Card className="p-6 border-warmGray sticky top-28">
                  <p className="text-3xl font-bold text-gold mb-6">{property.price}</p>
                  <div className="grid grid-cols-3 gap-4 border-y border-warmGray py-5 mb-6 text-center">
                    <div><Bed className="h-5 w-5 mx-auto text-gold mb-2" /><p className="font-semibold">{property.beds}</p><p className="text-xs text-muted-foreground">Beds</p></div>
                    <div><Bath className="h-5 w-5 mx-auto text-gold mb-2" /><p className="font-semibold">{property.baths}</p><p className="text-xs text-muted-foreground">Baths</p></div>
                    <div><Maximize className="h-5 w-5 mx-auto text-gold mb-2" /><p className="font-semibold">{property.sqft}</p><p className="text-xs text-muted-foreground">sqft</p></div>
                  </div>
                  <div className="space-y-3 text-sm mb-6">
                    <p className="flex gap-2"><Home className="h-4 w-4 text-gold" /> Type: {property.property_type}</p>
                    {property.year_built && <p className="flex gap-2"><Calendar className="h-4 w-4 text-gold" /> Year built: {property.year_built}</p>}
                    {property.status && <p className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Status: {property.status}</p>}
                  </div>
                  <Button className="w-full bg-gold text-luxury-dark hover:bg-gold-light" onClick={() => setContactOpen(true)}>
                    <Phone className="mr-2 h-4 w-4" /> Contact Waleed
                  </Button>
                </Card>
              </aside>
            </article>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactOptionsDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default PropertyDetail;