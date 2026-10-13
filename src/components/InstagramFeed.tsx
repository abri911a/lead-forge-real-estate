import { Play } from "lucide-react";
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
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Latest Reels
        </h3>
        <p className="text-muted-foreground">
          Explore our featured property tours and market insights
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl">
        {REELS.map((reel) => (
          <a
            key={reel.url}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch on Instagram: ${reel.label}`}
            className="group relative block aspect-[9/16] overflow-hidden rounded-xl border-2 border-gold/30 bg-luxury-darker transition-colors duration-300 hover:border-gold"
          >
            <img
              src={reel.cover}
              alt={reel.label}
              width={360}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* Always-visible play badge: the hover overlay below is a desktop extra, not the only cue */}
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-luxury-dark/80 text-gold"
            >
              <Play className="h-4 w-4 fill-current" />
            </span>
            <div className="absolute inset-0 flex items-center justify-center bg-luxury-dark/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="flex items-center gap-2 whitespace-nowrap bg-gold text-luxury-dark px-4 py-2 rounded-full font-semibold text-sm">
                <Play className="h-4 w-4" />
                Watch on Instagram
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-6">
        Click any reel to watch on Instagram
      </p>
    </div>
  );
};

export default InstagramFeed;
