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
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted GCC Property Resources
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
            Connect with leading property portals and market resources across the Gulf region. 
            These platforms provide additional insights into Oman and GCC real estate investments.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-b border-border md:border-b-0">
          {gccPortals.map((portal) => (
            <li key={portal.url} className="border-t border-border py-5 md:[&:nth-last-child(-n+2)]:border-b">
              <span className="text-xs text-gold font-semibold uppercase tracking-wide">
                {portal.category}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-1 mb-1">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                >
                  {portal.name}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">
                {portal.description}
              </p>
              <a
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                Visit Portal <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 bg-warmGray/10 border border-gold/20 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-3">Partner With Us</h3>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch] mb-4">
            Are you a property portal, an agency or an investment platform in the GCC?
            Email me at info@waleedproperty.com.
          </p>
          <Button asChild className="bg-gold text-luxury-dark hover:bg-gold-light">
            <a href="mailto:info@waleedproperty.com?subject=Partnership">Email me about a partnership</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BacklinkResources;
