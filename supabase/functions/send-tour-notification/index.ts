import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TourNotificationRequest {
  visitorName: string;
  visitorEmail: string;
  visitorPhone?: string;
  propertyTitle: string;
  tourDate: string;
  tourTime: string;
  tourType: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      visitorName,
      visitorEmail,
      visitorPhone,
      propertyTitle,
      tourDate,
      tourTime,
      tourType,
      notes,
    }: TourNotificationRequest = await req.json();

    console.log("Sending tour notification email for:", propertyTitle);

    const adminEmail = Deno.env.get("ADMIN_EMAIL");
    
    if (!adminEmail) {
      console.error("ADMIN_EMAIL not configured");
      throw new Error("Admin email not configured");
    }

    const emailResponse = await resend.emails.send({
      from: "Waleed Realestate <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New Tour Request: ${propertyTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Tour Request
          </h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Property Details</h2>
            <p style="margin: 5px 0;"><strong>Property:</strong> ${propertyTitle}</p>
            <p style="margin: 5px 0;"><strong>Tour Date:</strong> ${new Date(tourDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p style="margin: 5px 0;"><strong>Tour Time:</strong> ${tourTime}</p>
            <p style="margin: 5px 0;"><strong>Tour Type:</strong> ${tourType}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Visitor Information</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${visitorName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${visitorEmail}">${visitorEmail}</a></p>
            ${visitorPhone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${visitorPhone}">${visitorPhone}</a></p>` : ''}
            ${notes ? `
              <div style="margin-top: 15px;">
                <strong>Additional Notes:</strong>
                <p style="background-color: #f9f9f9; padding: 10px; border-left: 3px solid #D4AF37; margin: 5px 0;">
                  ${notes}
                </p>
              </div>
            ` : ''}
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #D4AF37; border-radius: 8px; text-align: center;">
            <p style="color: #1a1a1a; margin: 0; font-weight: bold;">
              ⚡ Respond quickly to convert this lead!
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
            <p>This notification was sent from Waleed Property</p>
            <p>Contact: +968-79136646</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-tour-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
