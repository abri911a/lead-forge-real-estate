import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    name: "Muscat Bay",
    description: "Where Elegance Meets Vibrant Living",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
  },
  {
    name: "Sultan Haitham City",
    description: "Your New Living Destination",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
  },
  {
    name: "Sustainable City",
    description: "Modern Urban Development Hub",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80"
  },
  {
    name: "Hawana Salalah",
    description: "Lush, Serene Khareef Escape",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-luxury-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover Oman's most prestigious residential developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-warmGray">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-sm text-gold-light mb-4">{project.description}</p>
                  <Button size="sm" className="bg-gold text-luxury-dark hover:bg-gold-light">
                    Explore Project
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
