import { Instagram, Users, Video, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-luxury-dark via-warmGray/5 to-luxury-dark">
      <div className="container mx-auto px-4">
        {/* Trust Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">Trusted by 50,000+ Followers</span>
          </div>
          <h2 className="text-4xl font-bold text-gold mb-4">
            Expert Insights from Oman's Leading Real Estate Influencer
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Follow @waleedvlogs.om for daily market updates, property tours, investment tips, and exclusive opportunities in Oman's real estate market
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-gold/20 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <Users className="h-8 w-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Active Followers</div>
          </div>

          <div className="bg-card border border-gold/20 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <Video className="h-8 w-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Property Videos</div>
          </div>

          <div className="bg-card border border-gold/20 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>

          <div className="bg-card border border-gold/20 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <CheckCircle className="h-8 w-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Successful Deals</div>
          </div>
        </div>

        {/* Instagram Feed Preview */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-luxury-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold">@waleedvlogs.om</h3>
                  <p className="text-muted-foreground">Oman Real Estate Expert & Market Analyst</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Daily property tours and market insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Exclusive investment opportunities and off-market deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Expert analysis on Oman Vision 2040 developments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Live Q&A sessions with foreign investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Behind-the-scenes of luxury developments</span>
                </li>
              </ul>

              <a 
                href="https://www.instagram.com/waleedvlogs.om/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </Button>
              </a>
            </div>

            {/* Instagram Grid Placeholder */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <a
                    key={item}
                    href="https://www.instagram.com/waleedvlogs.om/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-warmGray/20 rounded-lg hover:opacity-75 transition-opacity flex items-center justify-center group border border-border"
                  >
                    <Instagram className="h-8 w-8 text-gold/50 group-hover:text-gold transition-colors" />
                  </a>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Click any image to view our Instagram feed
              </p>
            </div>
          </div>
        </div>

        {/* Why Follow Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Market Trends First</h3>
            <p className="text-muted-foreground">
              Get real-time updates on Oman's property market, price movements, and emerging investment hotspots before they hit mainstream news.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Virtual Property Tours</h3>
            <p className="text-muted-foreground">
              Experience properties through high-quality video tours from Al Mouj to Sultan Haitham City, saving you time and travel costs.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Verified Opportunities</h3>
            <p className="text-muted-foreground">
              Only genuine, vetted properties and developers featured. No misleading information—just honest insights from years of market experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
