import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Your Trusted Partner in <span className="text-gold">Oman Real Estate</span>
            </h2>
            <p className="text-foreground/90 text-xl leading-relaxed mb-10 font-medium">
              We specialize in helping international investors and Gulf nationals discover exceptional 
              real estate opportunities across Oman. From luxury villas to smart investment properties, 
              we guide you every step of the way.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Expert Market Knowledge</h3>
                  <p className="text-foreground/80 text-base leading-relaxed">Deep understanding of Oman's property regulations and market trends</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Personalized Service</h3>
                  <p className="text-foreground/80 text-base leading-relaxed">Tailored property solutions matching your investment goals and lifestyle</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">End-to-End Support</h3>
                  <p className="text-foreground/80 text-base leading-relaxed">From property search to final ownership transfer, we handle everything</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gold text-luxury-dark hover:bg-gold-light text-base px-8 py-6 font-semibold">
                Learn More About Us
              </Button>
              <Button variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-luxury-dark text-base px-8 py-6 font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Luxury real estate"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-xl border border-warmGray">
              <div className="text-3xl font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Properties Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
