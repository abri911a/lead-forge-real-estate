import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Your Instagram reel URLs
  const REELS = [
    {
      url: "https://www.instagram.com/reel/DFvKKXWMEkn/",
      embedUrl: "https://www.instagram.com/reel/DFvKKXWMEkn/embed"
    },
    {
      url: "https://www.instagram.com/reel/DHEP3XIsZCP/",
      embedUrl: "https://www.instagram.com/reel/DHEP3XIsZCP/embed"
    },
    {
      url: "https://www.instagram.com/reel/DHWXkGXAvZw/",
      embedUrl: "https://www.instagram.com/reel/DHWXkGXAvZw/embed"
    },
    {
      url: "https://www.instagram.com/reel/DKFc7yXsNZh/",
      embedUrl: "https://www.instagram.com/reel/DKFc7yXsNZh/embed"
    }
  ];

  return (
    <div>
      <style>
        {`
          .instagram-reel-wrapper iframe {
            margin-top: -48px;
            height: calc(100% + 48px);
          }
        `}
      </style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {REELS.map((reel, index) => (
          <a
            key={index}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-reel-wrapper aspect-[9/16] rounded-xl overflow-hidden border-2 border-gold/30 hover:border-gold transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] block bg-black"
          >
            <iframe
              src={reel.embedUrl}
              className="w-full h-full pointer-events-none"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title={`Instagram Reel ${index + 1}`}
            />
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
