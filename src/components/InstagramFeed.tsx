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
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {REELS.map((reel, index) => (
          <div
            key={index}
            className="aspect-[9/16] rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all shadow-md hover:shadow-xl"
          >
            <iframe
              src={reel.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              title={`Instagram Reel ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4">
        Click any reel to watch on Instagram
      </p>
    </div>
  );
};

export default InstagramFeed;
