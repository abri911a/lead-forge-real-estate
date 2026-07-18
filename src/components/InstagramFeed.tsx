import { Instagram, Play } from "lucide-react";
import reelDFvKKXWMEkn from "@/assets/reel-DFvKKXWMEkn.webp";
import reelDHEP3XIsZCP from "@/assets/reel-DHEP3XIsZCP.webp";
import reelDHWXkGXAvZw from "@/assets/reel-DHWXkGXAvZw.webp";
import reelDKFc7yXsNZh from "@/assets/reel-DKFc7yXsNZh.webp";

const InstagramFeed = () => {
  // Static reel covers link out to Instagram — no live embeds.
  // Live IG embeds cost ~1.3MB (4x duplicate CSS + images) and set
  // third-party cookies; the facade keeps the page self-contained.
  // To refresh a cover: replace the matching src/assets/reel-<id>.webp.
  const REELS = [
    {
      url: "https://www.instagram.com/reel/DFvKKXWMEkn/",
      cover: reelDFvKKXWMEkn,
      label: "Property mistake that cost buyers their savings"
    },
    {
      url: "https://www.instagram.com/reel/DHEP3XIsZCP/",
      cover: reelDHEP3XIsZCP,
      label: "The question to ask before buying off-plan property"
    },
    {
      url: "https://www.instagram.com/reel/DHWXkGXAvZw/",
      cover: reelDHWXkGXAvZw,
      label: "Before you buy: apartment or land?"
    },
    {
      url: "https://www.instagram.com/reel/DKFc7yXsNZh/",
      cover: reelDKFc7yXsNZh,
      label: "The biggest lie at property exhibitions"
    }
  ];

  return (
    <div>
      {/* Animated Section Title */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4 animate-fade-in">
          <div className="relative">
            <Instagram className="h-10 w-10 text-gold animate-pulse" />
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Latest Reels
          </h3>
        </div>
        <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Explore our featured property tours and market insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {REELS.map((reel) => (
          <a
            key={reel.url}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch on Instagram: ${reel.label}`}
            className="group relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-gold/30 hover:border-gold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 block bg-black"
          >
            <img
              src={reel.cover}
              alt={reel.label}
              width={360}
              height={640}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-luxury-dark/40">
              <span className="flex items-center gap-2 bg-gold text-luxury-dark px-4 py-2 rounded-full font-semibold text-sm">
                <Play className="h-4 w-4" />
                Watch on Instagram
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Click any reel to watch on Instagram
      </p>
    </div>
  );
};

export default InstagramFeed;
