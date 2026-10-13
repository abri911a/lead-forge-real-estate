import { Instagram, Video, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import InstagramFeed from "./InstagramFeed";

const WHY_FOLLOW = [
  {
    icon: TrendingUp,
    title: "Numbers, explained",
    body: "Official numbers and project prices, in simple words. What they show, and what they do not.",
  },
  {
    icon: Video,
    title: "Project videos",
    body: "Short videos of projects, so you can see a place before you travel to it.",
  },
  {
    icon: CheckCircle,
    title: "Clear about what is not clear",
    body: "If a rule or a price is not confirmed yet, I say so.",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-luxury-darker">
      <div className="container mx-auto px-4">
        {/* Trust Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-gold font-semibold tracking-[0.06em] [font-variant-caps:all-small-caps]">
            <Instagram className="h-4 w-4" />
            <span>On Instagram</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Oman property, explained on Instagram
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Follow @waleedvlogs.om for project videos, price updates and buyer tips. Most posts are in Arabic.
          </p>
        </div>

        {/* Instagram Feed Preview */}
        <div className="mb-16 flex flex-col md:flex-row md:items-start gap-12">
          <div className="flex-1 min-w-0">
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
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-foreground">@waleedvlogs.om</h3>
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

            <Button asChild size="lg" className="bg-gold text-luxury-dark hover:bg-gold-light">
              <a href="https://www.instagram.com/waleedvlogs.om/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>

          {/* Instagram Grid */}
          <div className="flex-1 min-w-0">
            <InstagramFeed />
          </div>
        </div>

        {/* Why Follow: plain rows split by hairlines, no boxes */}
        <ul className="grid border-t border-border divide-y divide-border md:grid-cols-3 md:divide-y-0 md:divide-x">
          {WHY_FOLLOW.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex items-start gap-4 py-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <Icon className="h-5 w-5 text-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialProof;
