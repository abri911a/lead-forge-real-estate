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
    },
    {
      url: "https://www.instagram.com/reel/DJo7EGOMr5X/",
      embedUrl: "https://www.instagram.com/reel/DJo7EGOMr5X/embed"
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {REELS.map((reel, index) => (
        <a
          key={index}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square rounded-lg overflow-hidden border border-border group relative bg-warmGray/10"
        >
          <iframe
            src={reel.embedUrl}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            title={`Instagram Reel ${index + 1}`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
        </a>
      ))}
      
      {/* Fill remaining slots with placeholders */}
      {[...Array(Math.max(0, 9 - REELS.length))].map((_, index) => (
        <a
          key={`placeholder-${index}`}
          href="https://www.instagram.com/waleedvlogs.om/"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square bg-warmGray/20 rounded-lg hover:opacity-75 transition-opacity flex items-center justify-center group border border-border"
        >
          <Instagram className="h-8 w-8 text-gold/50 group-hover:text-gold transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
