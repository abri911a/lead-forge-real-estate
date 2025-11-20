import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TourRequestData {
  property_id: string;
  property_title: string;
  visitor_name: string;
  visitor_email: string;
  visitor_phone: string | null;
  tour_date: string;
  tour_time: string;
  tour_type: "in-person" | "video-chat";
}

// Rate limiting: 3 requests per hour per identifier (IP + email combo)
const RATE_LIMIT = 3;
const RATE_WINDOW_MINUTES = 60;

async function checkRateLimit(
  supabase: any,
  identifier: string
): Promise<{ allowed: boolean; remaining: number }> {
  const windowStart = new Date();
  windowStart.setMinutes(windowStart.getMinutes() - RATE_WINDOW_MINUTES);

  // Check existing rate limit records
  const { data, error } = await supabase
    .from("tour_request_rate_limits")
    .select("request_count, window_start")
    .eq("identifier", identifier)
    .gte("window_start", windowStart.toISOString())
    .order("window_start", { ascending: false })
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Rate limit check error:", error);
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (!data) {
    // No existing record, create new one
    await supabase.from("tour_request_rate_limits").insert({
      identifier,
      request_count: 1,
      window_start: new Date().toISOString(),
    });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (data.request_count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  // Increment counter
  await supabase
    .from("tour_request_rate_limits")
    .update({ request_count: data.request_count + 1 })
    .eq("identifier", identifier)
    .gte("window_start", windowStart.toISOString());

  return { allowed: true, remaining: RATE_LIMIT - data.request_count - 1 };
}

function validateTourRequest(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.property_id || typeof data.property_id !== "string") {
    errors.push("Invalid property_id");
  }
  if (!data.property_title || typeof data.property_title !== "string") {
    errors.push("Invalid property_title");
  }
  if (!data.visitor_name || typeof data.visitor_name !== "string" || data.visitor_name.trim().length === 0) {
    errors.push("Invalid visitor_name");
  }
  if (!data.visitor_email || typeof data.visitor_email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.visitor_email)) {
    errors.push("Invalid visitor_email");
  }
  if (data.visitor_phone && typeof data.visitor_phone !== "string") {
    errors.push("Invalid visitor_phone");
  }
  if (!data.tour_date || typeof data.tour_date !== "string") {
    errors.push("Invalid tour_date");
  }
  if (!data.tour_time || typeof data.tour_time !== "string") {
    errors.push("Invalid tour_time");
  }
  if (!["in-person", "video-chat"].includes(data.tour_type)) {
    errors.push("Invalid tour_type");
  }

  return { valid: errors.length === 0, errors };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const requestData: TourRequestData = await req.json();

    // Validate input
    const validation = validateTourRequest(requestData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const identifier = `${clientIP}-${requestData.visitor_email}`;

    // Check rate limit
    const rateLimit = await checkRateLimit(supabase, identifier);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({ 
          error: "Rate limit exceeded. Please try again later.",
          retryAfter: RATE_WINDOW_MINUTES * 60 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": String(RATE_WINDOW_MINUTES * 60)
          } 
        }
      );
    }

    // Insert tour request
    const { data: tourRequest, error: insertError } = await supabase
      .from("tour_requests")
      .insert({
        property_id: requestData.property_id,
        property_title: requestData.property_title,
        visitor_name: requestData.visitor_name.trim(),
        visitor_email: requestData.visitor_email.trim().toLowerCase(),
        visitor_phone: requestData.visitor_phone?.trim() || null,
        tour_date: requestData.tour_date,
        tour_time: requestData.tour_time,
        tour_type: requestData.tour_type,
        status: "pending",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to submit tour request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email
    try {
      await fetch(`${supabaseUrl}/functions/v1/send-tour-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseServiceKey}`,
        },
        body: JSON.stringify(requestData),
      });
    } catch (notificationError) {
      console.error("Notification error:", notificationError);
      // Don't fail the request if notification fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: tourRequest,
        rateLimitRemaining: rateLimit.remaining 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
