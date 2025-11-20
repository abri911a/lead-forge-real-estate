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
    const { sitemapUrl, siteUrl, refreshToken } = await req.json();
    
    const clientId = Deno.env.get('GOOGLE_CLIENT_ID');
    const clientSecret = Deno.env.get('GOOGLE_CLIENT_SECRET');

    if (!clientId || !clientSecret) {
      throw new Error('Google credentials not configured');
    }

    if (!refreshToken) {
      throw new Error('Refresh token is required');
    }

    console.log('Getting access token...');
    
    // Exchange refresh token for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error('Token exchange failed:', error);
      throw new Error(`Failed to get access token: ${error}`);
    }

    const { access_token } = await tokenResponse.json();
    console.log('Access token obtained successfully');

    // Submit sitemap to Google Search Console
    const submitUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
    
    console.log('Submitting sitemap to:', submitUrl);
    
    const submitResponse = await fetch(submitUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!submitResponse.ok) {
      const error = await submitResponse.text();
      console.error('Sitemap submission failed:', error);
      throw new Error(`Failed to submit sitemap: ${error}`);
    }

    console.log('Sitemap submitted successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Sitemap submitted successfully to Google Search Console',
        sitemapUrl,
        siteUrl 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-sitemap function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Check function logs for more information'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
