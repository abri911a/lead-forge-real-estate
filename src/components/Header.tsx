import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-luxury-dark/95 backdrop-blur-sm border-b border-warmGray">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-warmGray">
          <div className="flex items-center gap-6">
            <a href="tel:+96879136646" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              <span>+968 79136646</span>
            </a>
            <a href="mailto:info@omanproperty.com" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@omanproperty.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-dark">
              Schedule Viewing
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-gold">
            ELITE ESTATES
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="/" className="text-foreground hover:text-gold transition-colors">Home</a></li>
            <li><a href="#properties" className="text-foreground hover:text-gold transition-colors">Properties</a></li>
            <li><a href="#projects" className="text-foreground hover:text-gold transition-colors">Projects</a></li>
            <li><a href="#about" className="text-foreground hover:text-gold transition-colors">About</a></li>
            <li><a href="#contact" className="text-foreground hover:text-gold transition-colors">Contact</a></li>
          </ul>

          <Button className="bg-gold text-luxury-dark hover:bg-gold-light">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
