import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-darker border-t border-warmGray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">WALEED REALESTATE</h3>
            <p className="text-muted-foreground mb-4">
              Your gateway to premium real estate investments in Oman
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-warmGray p-2 rounded hover:bg-gold hover:text-luxury-dark transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-warmGray p-2 rounded hover:bg-gold hover:text-luxury-dark transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-warmGray p-2 rounded hover:bg-gold hover:text-luxury-dark transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-warmGray p-2 rounded hover:bg-gold hover:text-luxury-dark transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-gold transition-colors">Home</a></li>
              <li><a href="/#properties" className="text-muted-foreground hover:text-gold transition-colors">Properties</a></li>
              <li><a href="/#projects" className="text-muted-foreground hover:text-gold transition-colors">Projects</a></li>
              <li><a href="/#about" className="text-muted-foreground hover:text-gold transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Location Guides</h4>
            <ul className="space-y-2">
              <li><a href="/oman-investment-guide" className="text-muted-foreground hover:text-gold transition-colors">Oman Investment Guide</a></li>
              <li><a href="/al-mouj-guide" className="text-muted-foreground hover:text-gold transition-colors">Al Mouj Muscat</a></li>
              <li><a href="/sultan-haitham-city-guide" className="text-muted-foreground hover:text-gold transition-colors">Sultan Haitham City</a></li>
              <li><a href="/oman-property-prices-2026" className="text-muted-foreground hover:text-gold transition-colors">Oman property prices 2026</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Muscat, Oman</li>
              <li><a href="tel:+96879136646" className="hover:text-gold transition-colors">+968 7913 6646</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warmGray mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Waleed Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
