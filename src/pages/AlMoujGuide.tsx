import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import AuthorProfile from "@/components/AuthorProfile";
import BacklinkResources from "@/components/BacklinkResources";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Home, Ship, Target, ShoppingBag, 
  Utensils, GraduationCap, Heart, Waves, TrendingUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AlMoujGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <Helmet>
        <title>Al Mouj Muscat Guide (2026) | Luxury Waterfront Living & ITC Investment</title>
        <meta name="description" content="Complete guide to Al Mouj Muscat — Oman's premier Integrated Tourism Complex. Marina, golf course, freehold villas and apartments for foreign buyers, plus 5-8% rental yields." />
        <link rel="canonical" href="https://waleedproperty.com/al-mouj-guide" />
        <meta property="og:title" content="Al Mouj Muscat Guide (2026) | Luxury Waterfront Living & ITC Investment" />
        <meta property="og:description" content="Inside Al Mouj Muscat: amenities, freehold property options, and investment returns for international buyers in Oman's flagship ITC." />
        <meta property="og:url" content="https://waleedproperty.com/al-mouj-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Al Mouj Muscat Guide (2026) | Luxury Waterfront Living & ITC Investment" />
        <meta name="twitter:description" content="Inside Al Mouj Muscat: amenities, freehold property options, and investment returns for international buyers." />
      </Helmet>
      <StructuredData 
        type="article" 
        data={{
          title: "Al Mouj Muscat: Complete Living & Investment Guide (2026)",
          description: "Discover everything about Al Mouj Muscat - luxury waterfront living, property investment opportunities, amenities, and lifestyle in Oman's premier ITC",
          datePublished: "2025-01-19",
          dateModified: "2026-06-10"
        }}
      />


      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wide">Location Guide 2025</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Al Mouj Muscat: Your Complete Living Guide
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: January 19, 2025 | By Waleed Al Abri - Licensed Real Estate Advisor
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">At a Glance</h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              <strong>Al Mouj Muscat</strong> is Oman's premier waterfront Integrated Tourism Complex (ITC) offering luxury lifestyle living just 10 minutes from Muscat International Airport. This 100% freehold community features an 18-hole championship golf course, private marina with 140+ berths, international schools, and world-class amenities across 230+ hectares of prime waterfront real estate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">230+</div>
                <div className="text-sm text-muted-foreground">Hectares</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">140+</div>
                <div className="text-sm text-muted-foreground">Marina Berths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">10min</div>
                <div className="text-sm text-muted-foreground">From Airport</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">6-7%</div>
                <div className="text-sm text-muted-foreground">Rental Yield</div>
              </div>
            </div>
          </div>

          {/* Author Profile */}
          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Property Investment Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Home className="h-8 w-8" />
              Property Investment in Al Mouj
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Apartments</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 80,000 - OMR 350,000</li>
                  <li>• <strong>Size:</strong> 80 sqm - 200 sqm</li>
                  <li>• <strong>Types:</strong> Studio, 1BR, 2BR, 3BR with marina or golf views</li>
                  <li>• <strong>Rental Yield:</strong> 6-7% annually</li>
                  <li>• <strong>Features:</strong> Fully furnished options, balconies, parking included</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Townhouses</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 180,000 - OMR 450,000</li>
                  <li>• <strong>Size:</strong> 150 sqm - 300 sqm</li>
                  <li>• <strong>Types:</strong> 2BR, 3BR, 4BR with private gardens</li>
                  <li>• <strong>Rental Yield:</strong> 5-6% annually</li>
                  <li>• <strong>Features:</strong> Private parking, terrace, garden access</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Luxury Villas</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 500,000 - OMR 2,500,000+</li>
                  <li>• <strong>Size:</strong> 300 sqm - 1,000+ sqm</li>
                  <li>• <strong>Types:</strong> Waterfront, golf course, lakeside villas</li>
                  <li>• <strong>Rental Yield:</strong> 4-6% annually</li>
                  <li>• <strong>Features:</strong> Private pools, gardens, maid rooms, smart home systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amenities & Lifestyle */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Waves className="h-8 w-8" />
              Lifestyle & Amenities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Ship className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Marina & Waterfront</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 140+ berth private marina</li>
                  <li>• Yacht club and water sports</li>
                  <li>• Waterfront promenades</li>
                  <li>• Beach access</li>
                  <li>• Fishing and diving facilities</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Al Mouj Golf</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 18-hole championship course</li>
                  <li>• Designed by Greg Norman</li>
                  <li>• Practice facilities & academy</li>
                  <li>• Pro shop and clubhouse</li>
                  <li>• Restaurant with views</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Shopping & Retail</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Al Mouj Mall (coming soon)</li>
                  <li>• Supermarkets & grocery stores</li>
                  <li>• Boutique shopping</li>
                  <li>• Pharmacy and healthcare</li>
                  <li>• Banks and ATMs</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Dining & Entertainment</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 20+ restaurants & cafes</li>
                  <li>• Waterfront dining venues</li>
                  <li>• International cuisines</li>
                  <li>• Beach clubs</li>
                  <li>• Events and concerts</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Education</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Al Mouj International School</li>
                  <li>• British & American curricula</li>
                  <li>• Nurseries & kindergartens</li>
                  <li>• Close to top schools in Muscat</li>
                  <li>• Education support services</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Health & Wellness</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Medical centers on-site</li>
                  <li>• Fitness centers & gyms</li>
                  <li>• Yoga and wellness studios</li>
                  <li>• Swimming pools</li>
                  <li>• Running & cycling tracks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location & Connectivity */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              Location & Connectivity
            </h2>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Strategic Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Key Distances:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 10 min to Muscat International Airport</li>
                    <li>• 15 min to Muscat City Center (MQ)</li>
                    <li>• 20 min to Old Muscat & Mutrah Souq</li>
                    <li>• 25 min to Qurum Business District</li>
                    <li>• 30 min to Sultan Qaboos Port</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">Transportation:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Direct highway access (Sultan Qaboos Highway)</li>
                    <li>• Taxi services available 24/7</li>
                    <li>• Car rental facilities</li>
                    <li>• Future metro connection planned</li>
                    <li>• Ample parking throughout community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8" />
              Why Invest in Al Mouj?
            </h2>
            
            <div className="space-y-4">
              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">100% Freehold Ownership</h3>
                <p className="text-muted-foreground">
                  Foreign nationals can own property outright with full ownership rights, no restrictions on resale, and eligibility for Oman residency visa programs.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Strong Rental Market</h3>
                <p className="text-muted-foreground">
                  High demand from expats and professionals working in Muscat ensures consistent rental income with yields of 5-7% annually.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Quality of Life</h3>
                <p className="text-muted-foreground">
                  Gated community with 24/7 security, world-class amenities, and a vibrant international community make it ideal for families and retirees.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Capital Appreciation</h3>
                <p className="text-muted-foreground">
                  Established ITC with proven track record, continuous development, and strategic location near airport and business districts drive long-term value growth.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gold mb-4">
              Ready to Explore Al Mouj Properties?
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover available properties in Al Mouj Muscat or schedule a viewing with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/#properties')}
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                View Properties
              </Button>
              <Button 
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                onClick={() => navigate('/')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <BacklinkResources />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AlMoujGuide;