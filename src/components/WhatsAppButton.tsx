import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+968 79136646";
  const message = "Hi! I'm interested in learning more about your properties.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-50 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-ink p-4 rounded-full shadow-2xl transition-colors duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      {/* Hover-only hint; the aria-label carries the meaning */}
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-luxury-dark text-foreground px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
