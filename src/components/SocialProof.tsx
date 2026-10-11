import { Instagram, Video, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramFeed from "./InstagramFeed";

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-luxury-dark via-warmGray/5 to-luxury-dark">
      <div className="container mx-auto px-4">
        {/* Trust Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-4">
            <Instagram className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">On Instagram</span>
          </div>
          <h2 className="text-4xl font-bold text-gold mb-4">
            Oman property, explained on Instagram
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Follow @waleedvlogs.om for project videos, price updates and buyer tips. Most posts are in Arabic.
          </p>
        </div>

        {/* Instagram Feed Preview */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                  <img
                    src="/img/waleed-profile-224.webp"
                    width={112}
                    height={112}
                    loading="lazy"
                    decoding="async"
                    alt="Waleed Al Abri - Waleed Property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold">@waleedvlogs.om</h3>
                  <p className="text-muted-foreground">Waleed Al Abri, real estate advisor in Muscat</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Videos of projects in Muscat and Sultan Haitham City</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Price updates, with the date and the source</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-foreground">Ownership and residency rules, in plain words</span>
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

            {/* Instagram Grid */}
            <div className="flex-1">
              <InstagramFeed />
            </div>
          </div>
        </div>

        {/* Why Follow Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Numbers, explained</h3>
            <p className="text-muted-foreground">
              Official numbers and project prices, in simple words. What they show, and what they do not.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Project videos</h3>
            <p className="text-muted-foreground">
              Short videos of projects, so you can see a place before you travel to it.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-gold mb-3">Clear about what is not clear</h3>
            <p className="text-muted-foreground">
              If a rule or a price is not confirmed yet, I say so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
