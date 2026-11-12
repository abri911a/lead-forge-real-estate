import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const guides = [
  {
    name: "Al Mouj Muscat",
    description: "Prices, ownership and residency",
    path: "/al-mouj-guide"
  },
  {
    name: "Sultan Haitham City",
    description: "Official facts, prices and the 30% residency rule",
    path: "/sultan-haitham-city-guide"
  },
  {
    name: "Investment in Oman",
    description: "Where you can buy, costs, tax and residency",
    path: "/oman-investment-guide"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-luxury-darker">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Buyer Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive guides to help you make informed investment decisions
          </p>
        </div>

        {/* 12 Nov 2026: no stock photos. Plain rows on phones, three columns split by hairlines from md up */}
        <ul className="divide-y divide-border border-t border-border md:grid md:grid-cols-3 md:divide-y-0 md:divide-x">
          {guides.map((guide) => (
            <li key={guide.path} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <div className="flex min-w-0 flex-col items-start">
                <h3 className="text-xl font-bold text-foreground mb-1"><Link to={guide.path} tabIndex={-1} className="hover:text-gold transition-colors">{guide.name}</Link></h3>
                <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-border bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
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
