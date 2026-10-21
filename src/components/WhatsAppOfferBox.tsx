import { MessageCircle } from "lucide-react";
import PublishedInStrip from "@/components/PublishedInStrip";

// Early WhatsApp ask on the guide pages. The ad landing pages had their only labelled
// WhatsApp link ~90% down a long page; this puts a small, concrete offer right under the short answer.
// The wa.me href is picked up by the delegated tap listener in src/lib/adsTracking.ts.
const WHATSAPP_NUMBER = "96879136646";

interface WhatsAppOfferBoxProps {
  heading: string;
  body: string;
  message: string;
  // Ad landing pages: show where Waleed's articles were published, next to the ask.
  showPublications?: boolean;
  buttonLabel?: string;
}

const WhatsAppOfferBox = ({ heading, body, message, showPublications = false, buttonLabel = "Send on WhatsApp" }: WhatsAppOfferBoxProps) => (
  <div className="border border-whatsapp/40 bg-whatsapp/5 rounded-lg p-6 mb-12">
    <h2 className="text-xl font-bold text-foreground mb-2">{heading}</h2>
    <p className="text-muted-foreground leading-relaxed mb-4">{body}</p>
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-ink font-semibold px-5 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-dark"
    >
      <MessageCircle className="h-5 w-5" />
      {buttonLabel}
    </a>
    {showPublications && (
      <PublishedInStrip variant="inline" className="mt-4 pt-3 border-t border-whatsapp/20" />
    )}
  </div>
);

export default WhatsAppOfferBox;
