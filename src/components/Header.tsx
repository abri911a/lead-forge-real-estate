import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";

const GET_STARTED_WHATSAPP = `https://wa.me/96879136646?text=${encodeURIComponent(
  "Hi Waleed, I want to buy property in Oman. My budget is: ... My nationality is: ...",
)}`;

const CONTACT_WHATSAPP = `https://wa.me/96879136646?text=${encodeURIComponent("Hi Waleed, I have a question about property in Oman: ...")}`;

const Header = () => {
  const isHome = useLocation().pathname === "/";
  return (
    <header className="sticky top-0 z-50 bg-luxury-dark/95 backdrop-blur-sm border-b border-warmGray">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-warmGray">
          <div className="flex items-center gap-4">
            <a href="tel:+96879136646" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              <span>+968 79136646</span>
            </a>
            <a
              href="https://www.instagram.com/waleedvlogs.om/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @waleedvlogs.om on Instagram"
              className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">@waleedvlogs.om</span>
            </a>
          </div>
          <div className="hidden md:block">
            {/* "/#properties", not "#properties": the section exists only on the home page */}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-luxury-dark"
            >
              <a href="/#properties">Schedule Viewing</a>
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between gap-3 py-3 md:py-4">
          <a href="/" className="text-lg sm:text-2xl font-bold text-gold whitespace-nowrap">
            WALEED PROPERTY
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="/" className="text-foreground hover:text-gold transition-colors">Home</a></li>
            <li><a href="/#properties" className="text-foreground hover:text-gold transition-colors">Properties</a></li>
            <li><a href="/#projects" className="text-foreground hover:text-gold transition-colors">Projects</a></li>
            <li><a href="/#about" className="text-foreground hover:text-gold transition-colors">About</a></li>
            {/* No contact section exists on the site; WhatsApp is the contact channel (counted as whatsapp_tap) */}
            <li><a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors">Contact</a></li>
          </ul>

          {isHome ? (
            <Button
              className="bg-gold text-luxury-dark hover:bg-gold-light"
              onClick={() => {
                const propertiesSection = document.getElementById("properties");
                if (propertiesSection) {
                  propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Get Started
            </Button>
          ) : (
            // #properties exists only on the home page; elsewhere the button used to do nothing
            <Button asChild className="bg-gold text-luxury-dark hover:bg-gold-light">
              <a href={GET_STARTED_WHATSAPP} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
