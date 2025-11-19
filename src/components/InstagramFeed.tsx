import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Your Instagram reel URLs
  const REELS = [
    "https://www.instagram.com/reel/DFvKKXWMEkn/",
    "https://www.instagram.com/reel/DHEP3XIsZCP/",
    "https://www.instagram.com/reel/DHWXkGXAvZw/",
    "https://www.instagram.com/reel/DKFc7yXsNZh/",
    "https://www.instagram.com/reel/DJo7EGOMr5X/",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {REELS.map((url, index) => {
          const reelId = url.split('/reel/')[1]?.split('/')[0];
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden border border-gold/20 group relative bg-black hover:border-gold transition-all"
            >
              <blockquote
                className="instagram-media w-full h-full"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#000',
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <Instagram className="h-12 w-12 text-gold/60" />
                </div>
              </blockquote>
            </a>
          );
        })}
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4">
        Click any reel to watch on Instagram
      </p>
    </div>
  );
};

export default InstagramFeed;
