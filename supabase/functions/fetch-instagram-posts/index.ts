import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { postUrls } = await req.json();

    if (!postUrls || !Array.isArray(postUrls)) {
      return new Response(
        JSON.stringify({ error: 'postUrls array is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Fetch embed data for each post using Instagram's oEmbed API
    const embedPromises = postUrls.map(async (url: string) => {
      try {
        const oembedUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=${Deno.env.get('INSTAGRAM_ACCESS_TOKEN') || ''}`;
        
        // Try without access token first (works for public posts)
        const simpleUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(simpleUrl);
        
        if (!response.ok) {
          console.error(`Failed to fetch embed for ${url}:`, response.status);
          return null;
        }
        
        const data = await response.json();
        return {
          url,
          html: data.html,
          thumbnail_url: data.thumbnail_url,
          author_name: data.author_name,
        };
      } catch (error) {
        console.error(`Error fetching embed for ${url}:`, error);
        return null;
      }
    });

    const embeds = (await Promise.all(embedPromises)).filter(Boolean);

    return new Response(
      JSON.stringify({ embeds }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred', details: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
