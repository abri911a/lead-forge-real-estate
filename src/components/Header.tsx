import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const GET_STARTED_WHATSAPP = `https://wa.me/96879136646?text=${encodeURIComponent(
  "Hi Waleed, I want to buy property in Oman. My budget is: ... My nationality is: ...",
)}`;

const CONTACT_WHATSAPP = `https://wa.me/96879136646?text=${encodeURIComponent("Hi Waleed, I have a question about property in Oman: ...")}`;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#properties", label: "Properties" },
  { href: "/#projects", label: "Guides" },
  { href: "/#about", label: "About" },
];

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
        <nav className="flex items-center justify-between gap-2 sm:gap-3 py-3 md:py-4">
          <a href="/" className="font-display text-sm min-[360px]:text-base sm:text-2xl font-semibold tracking-[0.04em] text-gold whitespace-nowrap">
            WALEED PROPERTY
          </a>
          
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-foreground hover:text-gold transition-colors">{l.label}</a></li>
            ))}
            {/* No contact section exists on the site; WhatsApp is the contact channel (counted as whatsapp_tap) */}
            <li><a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors">Contact</a></li>
          </ul>

          <div className="flex items-center gap-0.5 sm:gap-1">
          {isHome ? (
            <Button
              className="bg-gold text-luxury-dark hover:bg-gold-light h-9 px-2.5 min-[360px]:px-3 sm:h-10 sm:px-4"
              onClick={() => {
                const propertiesSection = document.getElementById("properties");
                if (propertiesSection) {
                  propertiesSection.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Get Started
            </Button>
          ) : (
            // #properties exists only on the home page; elsewhere the button used to do nothing
            <Button asChild className="bg-gold text-luxury-dark hover:bg-gold-light h-9 px-2.5 min-[360px]:px-3 sm:h-10 sm:px-4">
              <a href={GET_STARTED_WHATSAPP} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          )}

          {/* Below lg the link row is hidden (at 768 it pushed Get Started off-screen), so this is the way to reach the links */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-11 w-9 text-gold" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            {/* "dark": the sheet renders in a portal outside the page's .dark wrapper */}
            <SheetContent side="right" className="dark w-72 bg-luxury-dark border-warmGray text-foreground">
              <SheetTitle className="text-foreground">Menu</SheetTitle>
              <ul className="mt-6 flex flex-col">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a href={l.href} className="block py-3 text-lg text-foreground hover:text-gold transition-colors">{l.label}</a>
                    </SheetClose>
                  </li>
                ))}
                <li>
                  <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="block py-3 text-lg text-foreground hover:text-gold transition-colors">
                    Contact on WhatsApp
                  </a>
                </li>
                <li>
                  <a href="tel:+96879136646" className="flex items-center gap-2 py-3 text-muted-foreground hover:text-gold transition-colors">
                    <Phone className="h-4 w-4" /> +968 79136646
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
