import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InstagramPost {
  url: string;
  html: string;
  thumbnail_url?: string;
  author_name?: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Add your Instagram post URLs here
  const POST_URLS = [
    "https://www.instagram.com/p/YOUR_POST_ID_1/",
    "https://www.instagram.com/p/YOUR_POST_ID_2/",
    "https://www.instagram.com/p/YOUR_POST_ID_3/",
    "https://www.instagram.com/p/YOUR_POST_ID_4/",
    "https://www.instagram.com/p/YOUR_POST_ID_5/",
    "https://www.instagram.com/p/YOUR_POST_ID_6/",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-instagram-posts', {
          body: { postUrls: POST_URLS }
        });

        if (error) throw error;
        
        if (data?.embeds) {
          setPosts(data.embeds);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have valid post URLs (not the placeholder ones)
    if (POST_URLS.some(url => !url.includes('YOUR_POST_ID'))) {
      fetchPosts();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square bg-warmGray/20 rounded-lg animate-pulse border border-border"
          />
        ))}
      </div>
    );
  }

  // If no posts loaded, show placeholder grid linking to Instagram
  if (posts.length === 0) {
    return (
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
        <p className="col-span-3 text-center text-sm text-muted-foreground mt-2">
          Click to view our Instagram feed
        </p>
      </div>
    );
  }

  // Display actual Instagram posts
  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.slice(0, 9).map((post, index) => (
        <a
          key={index}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square rounded-lg hover:opacity-75 transition-opacity overflow-hidden border border-border group relative"
        >
          {post.thumbnail_url ? (
            <img 
              src={post.thumbnail_url} 
              alt="Instagram post"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-warmGray/20 flex items-center justify-center">
              <Instagram className="h-8 w-8 text-gold/50 group-hover:text-gold transition-colors" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      ))}
      {posts.length < 9 && [...Array(9 - posts.length)].map((_, index) => (
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
