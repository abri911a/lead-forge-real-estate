import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    name: "Al Mouj Muscat",
    description: "Luxury Waterfront Living Guide",
    path: "/al-mouj-guide",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
  },
  {
    name: "Sultan Haitham City",
    description: "Future Smart City Development",
    path: "/sultan-haitham-city-guide",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
  },
  {
    name: "Investment in Oman",
    description: "Complete Foreign Investor Guide",
    path: "/oman-investment-guide",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-luxury-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expert <span className="text-gold">Guides</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive guides to help you make informed investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guides.map((guide, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-warmGray">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{guide.name}</h3>
                  <p className="text-sm text-gold-light mb-4">{guide.description}</p>
                  <Button 
                    size="sm" 
                    className="bg-gold text-luxury-dark hover:bg-gold-light"
                    onClick={() => navigate(guide.path)}
                  >
                    Read Guide
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
