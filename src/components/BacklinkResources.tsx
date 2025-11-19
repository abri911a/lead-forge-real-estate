import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BacklinkResources = () => {
  const gccPortals = [
    {
      name: "Property Finder",
      description: "Leading property portal across GCC markets",
      url: "https://www.propertyfinder.om",
      category: "Property Listing Portal"
    },
    {
      name: "Bayut Oman",
      description: "Comprehensive real estate platform for Oman",
      url: "https://www.bayut.om",
      category: "Property Listing Portal"
    },
    {
      name: "Oman Observer Real Estate",
      description: "Trusted news source for Oman property market",
      url: "https://www.omanobserver.om",
      category: "News & Market Insights"
    },
    {
      name: "Times of Oman Property",
      description: "Real estate news and investment opportunities",
      url: "https://timesofoman.com",
      category: "News & Market Insights"
    },
    {
      name: "Invest in Oman",
      description: "Official investment promotion agency",
      url: "https://www.investoman.om",
      category: "Government Resource"
    },
    {
      name: "Special Economic Zone at Duqm",
      description: "Official SEZAD investment opportunities",
      url: "https://www.duqm.gov.om",
      category: "Government Resource"
    }
  ];

  return (
    <section className="py-16 bg-luxury-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Trusted GCC Property Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with leading property portals and market resources across the Gulf region. 
            These platforms provide additional insights into Oman and GCC real estate investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gccPortals.map((portal, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:border-gold transition-colors">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wide">
                    {portal.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                    {portal.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {portal.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full border-gold text-gold hover:bg-gold hover:text-luxury-dark"
                    onClick={() => window.open(portal.url, '_blank', 'noopener,noreferrer')}
                  >
                    Visit Portal <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-warmGray/10 border border-gold/20 rounded-lg">
          <h3 className="text-xl font-semibold text-gold mb-3">Partner With Us</h3>
          <p className="text-muted-foreground mb-4">
            Are you a GCC property portal, real estate agency, or investment platform? 
            We welcome partnership opportunities to expand our network and provide better 
            service to international investors across the Gulf region.
          </p>
          <Button className="bg-gold text-luxury-dark hover:bg-gold-light">
            Contact for Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BacklinkResources;
