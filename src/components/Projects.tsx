import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const guides = [
  {
    name: "Al Mouj Muscat",
    description: "Prices, ownership and residency",
    path: "/al-mouj-guide",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=70&auto=format"
  },
  {
    name: "Sultan Haitham City",
    description: "Official facts, prices and the 30% residency rule",
    path: "/sultan-haitham-city-guide",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=70&auto=format"
  },
  {
    name: "Investment in Oman",
    description: "Where you can buy, costs, tax and residency",
    path: "/oman-investment-guide",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=70&auto=format"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-luxury-darker">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Buyer <span className="text-gold">Guides</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive guides to help you make informed investment decisions
          </p>
        </div>

        {/* A list on phones (thumbnail left, text right), three columns from md up */}
        <ul className="divide-y divide-border md:grid md:grid-cols-3 md:gap-8 md:divide-y-0">
          {guides.map((guide) => (
            <li key={guide.path} className="flex gap-4 py-5 first:pt-0 last:pb-0 md:flex-col md:py-0">
              <img
                src={guide.image}
                alt={guide.name}
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                className="h-24 w-24 flex-shrink-0 rounded-md border border-border object-cover sm:h-32 sm:w-32 md:h-48 md:w-full"
              />
              <div className="flex min-w-0 flex-col items-start">
                <h3 className="text-xl font-bold text-foreground mb-1">{guide.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-gold bg-transparent text-gold hover:bg-gold hover:text-luxury-dark"
                >
                  <Link to={guide.path}>Read Guide</Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
