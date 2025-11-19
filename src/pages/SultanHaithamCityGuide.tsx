import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import AuthorProfile from "@/components/AuthorProfile";
import BacklinkResources from "@/components/BacklinkResources";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Home, Building2, Wifi, Trees, 
  Zap, Car, GraduationCap, ShoppingBag, TrendingUp 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SultanHaithamCityGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <StructuredData 
        type="article" 
        data={{
          title: "Sultan Haitham City: Oman's Future Smart City Investment Guide (2025)",
          description: "Complete guide to Sultan Haitham City - Oman's new smart city development, property investment opportunities, amenities, and future growth prospects",
          datePublished: "2025-01-19",
          dateModified: "2025-01-19"
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wide">Future Living 2025</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Sultan Haitham City: Oman's New Smart City
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: January 19, 2025 | By Waleed Al-Balushi - Licensed Real Estate Advisor
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">Vision 2040 Flagship Project</h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              <strong>Sultan Haitham City</strong> is Oman's groundbreaking smart city development, part of the nation's Vision 2040 economic diversification strategy. Located 30 km south of Muscat, this 1,600-hectare planned community will accommodate 200,000+ residents with cutting-edge infrastructure, sustainable design, and integrated smart technologies. The city represents a unique ground-floor investment opportunity in one of the GCC's most ambitious urban development projects.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">1,600</div>
                <div className="text-sm text-muted-foreground">Hectares</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">200K+</div>
                <div className="text-sm text-muted-foreground">Residents Planned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">2025-2035</div>
                <div className="text-sm text-muted-foreground">Development Phase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-muted-foreground">Freehold</div>
              </div>
            </div>
          </div>

          {/* Author Profile */}
          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Smart City Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Wifi className="h-8 w-8" />
              Smart City Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Sustainable Energy</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 100% renewable energy powered</li>
                  <li>• Solar panel integration on all buildings</li>
                  <li>• Smart grid technology</li>
                  <li>• Energy-efficient building standards</li>
                  <li>• Green building certifications</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Connected Infrastructure</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 5G network throughout</li>
                  <li>• IoT-enabled smart homes</li>
                  <li>• Automated waste management</li>
                  <li>• Smart traffic systems</li>
                  <li>• Centralized city management platform</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trees className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Green Spaces</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 40% dedicated to green areas</li>
                  <li>• Central park (200+ hectares)</li>
                  <li>• Walking and cycling paths</li>
                  <li>• Urban farming zones</li>
                  <li>• Water conservation systems</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Smart Mobility</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Electric vehicle charging network</li>
                  <li>• Autonomous vehicle infrastructure</li>
                  <li>• Integrated public transit</li>
                  <li>• Bike-sharing programs</li>
                  <li>• Pedestrian-first design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Property Investment Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Home className="h-8 w-8" />
              Property Investment Opportunities
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Smart Apartments</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 60,000 - OMR 250,000 (Pre-launch pricing)</li>
                  <li>• <strong>Size:</strong> 70 sqm - 180 sqm</li>
                  <li>• <strong>Types:</strong> Studio, 1BR, 2BR, 3BR with smart home features</li>
                  <li>• <strong>Expected Yield:</strong> 7-9% annually (upon completion)</li>
                  <li>• <strong>Features:</strong> IoT-enabled, energy efficient, balconies with views</li>
                </ul>
                <p className="text-foreground">
                  All apartments come equipped with smart home systems, solar panels, and EV charging access. Expected handover: Phase 1 starting 2027.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Eco Townhouses</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 120,000 - OMR 350,000</li>
                  <li>• <strong>Size:</strong> 140 sqm - 250 sqm</li>
                  <li>• <strong>Types:</strong> 2BR, 3BR, 4BR sustainable homes</li>
                  <li>• <strong>Expected Yield:</strong> 6-8% annually</li>
                  <li>• <strong>Features:</strong> Private gardens, solar roofs, rainwater harvesting</li>
                </ul>
                <p className="text-foreground">
                  Designed for modern families with emphasis on sustainability and community living. Green building certified with zero-carbon targets.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Luxury Smart Villas</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 300,000 - OMR 1,200,000+</li>
                  <li>• <strong>Size:</strong> 250 sqm - 800+ sqm</li>
                  <li>• <strong>Types:</strong> Premium villas with advanced automation</li>
                  <li>• <strong>Expected Yield:</strong> 5-7% annually</li>
                  <li>• <strong>Features:</strong> Full smart home integration, private pools, home automation</li>
                </ul>
                <p className="text-foreground">
                  Flagship residences showcasing cutting-edge technology, sustainable living, and luxury amenities. Limited availability in prime locations.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">Commercial & Retail Spaces</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Price Range:</strong> OMR 150,000 - OMR 800,000</li>
                  <li>• <strong>Size:</strong> 50 sqm - 500+ sqm</li>
                  <li>• <strong>Types:</strong> Retail units, offices, co-working spaces</li>
                  <li>• <strong>Expected Yield:</strong> 8-12% annually</li>
                  <li>• <strong>Features:</strong> High foot traffic areas, modern design, flexible layouts</li>
                </ul>
                <p className="text-foreground">
                  Prime commercial opportunities in the city center and mixed-use zones. Ideal for businesses targeting the growing resident population.
                </p>
              </div>
            </div>
          </div>

          {/* Master Plan & Development Phases */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              Development Phases & Timeline
            </h2>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Phase 1 (2025-2027) - Foundation</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Core infrastructure development</li>
                  <li>• First residential communities (5,000 units)</li>
                  <li>• Essential services and amenities</li>
                  <li>• Central business district foundation</li>
                  <li>• Main road networks and utilities</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Phase 2 (2027-2030) - Expansion</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Additional 15,000 residential units</li>
                  <li>• Shopping malls and entertainment centers</li>
                  <li>• International schools and healthcare facilities</li>
                  <li>• Public transportation network</li>
                  <li>• Technology and innovation parks</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Phase 3 (2030-2035) - Completion</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Final residential developments</li>
                  <li>• Cultural and recreational facilities</li>
                  <li>• University campus and research centers</li>
                  <li>• Premium hospitality and tourism infrastructure</li>
                  <li>• Full smart city features activated</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amenities & Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <ShoppingBag className="h-8 w-8" />
              Planned Amenities & Facilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Education</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• International schools (British, American, IB)</li>
                  <li>• University campus with tech focus</li>
                  <li>• Vocational training centers</li>
                  <li>• Early childhood education centers</li>
                  <li>• Online learning hubs</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Retail & Dining</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Central shopping district</li>
                  <li>• Neighborhood retail centers</li>
                  <li>• International restaurants</li>
                  <li>• Farmers markets</li>
                  <li>• Entertainment complexes</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Business & Innovation</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Technology park for startups</li>
                  <li>• Co-working spaces</li>
                  <li>• Innovation labs and incubators</li>
                  <li>• Conference centers</li>
                  <li>• Business support services</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trees className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Recreation</h3>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Central park with lake</li>
                  <li>• Sports complexes and stadiums</li>
                  <li>• Cycling and jogging trails</li>
                  <li>• Community centers</li>
                  <li>• Arts and culture venues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8" />
              Why Invest in Sultan Haitham City?
            </h2>
            
            <div className="space-y-4">
              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Ground-Floor Opportunity</h3>
                <p className="text-muted-foreground">
                  Early investors benefit from pre-launch pricing with significant appreciation potential as the city develops. Historical data from similar projects shows 40-60% value growth from launch to completion.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Government-Backed Development</h3>
                <p className="text-muted-foreground">
                  Part of Oman Vision 2040 with full government support and guaranteed infrastructure investment. Project backed by sovereign wealth fund ensuring completion and long-term success.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">Future-Proof Living</h3>
                <p className="text-muted-foreground">
                  Smart city infrastructure and sustainable design ensure properties remain cutting-edge and desirable for decades. Built for 21st-century living with technology integration from day one.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">High Growth Potential</h3>
                <p className="text-muted-foreground">
                  Expected to become Oman's second-largest city, attracting businesses, professionals, and families. Projected rental yields of 7-9% once operational, with strong capital appreciation prospects.
                </p>
              </div>

              <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">100% Freehold & Residency Benefits</h3>
                <p className="text-muted-foreground">
                  Foreign ownership allowed with freehold titles. Property investment qualifies for Oman residency visa programs, providing long-term residency rights for investors and their families.
                </p>
              </div>
            </div>
          </div>

          {/* Location & Access */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              Location & Access
            </h2>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Strategic Positioning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Key Distances:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• 30 km south of Muscat city center</li>
                    <li>• 25 min to Muscat International Airport</li>
                    <li>• 20 min to Muscat Expressway</li>
                    <li>• 35 min to Al Mouj Muscat</li>
                    <li>• 40 min to Port Sultan Qaboos</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">Future Connectivity:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Direct highway connection (under construction)</li>
                    <li>• Metro line extension planned</li>
                    <li>• High-speed rail connectivity (future)</li>
                    <li>• Integrated with national road network</li>
                    <li>• Smart mobility infrastructure throughout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gold mb-4">
              Be Part of Oman's Smart City Future
            </h2>
            <p className="text-muted-foreground mb-6">
              Secure your investment in Sultan Haitham City with exclusive pre-launch pricing and payment plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/#properties')}
                className="bg-gold text-luxury-dark hover:bg-gold-light"
              >
                View Available Units
              </Button>
              <Button 
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                onClick={() => navigate('/')}
              >
                Schedule Consultation
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

export default SultanHaithamCityGuide;