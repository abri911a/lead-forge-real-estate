import { MessageCircle } from "lucide-react";

// Early WhatsApp ask on the guide pages. The ad landing pages had their only labelled
// WhatsApp link ~90% down a long page; this puts a small, concrete offer right under the short answer.
// The wa.me href is picked up by the delegated tap listener in src/lib/adsTracking.ts.
const WHATSAPP_NUMBER = "96879136646";

interface WhatsAppOfferBoxProps {
  heading: string;
  body: string;
  message: string;
}

const WhatsAppOfferBox = ({ heading, body, message }: WhatsAppOfferBoxProps) => (
  <div className="border border-[#25D366]/40 bg-[#25D366]/5 rounded-lg p-6 mb-12">
    <h2 className="text-xl font-bold text-foreground mb-2">{heading}</h2>
    <p className="text-muted-foreground leading-relaxed mb-4">{body}</p>
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-5 py-3 rounded-lg transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
      Send on WhatsApp
    </a>
  </div>
);

export default WhatsAppOfferBox;
