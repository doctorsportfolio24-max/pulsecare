import { Leaf, Droplets, Sun, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const EcoFacilities = () => {
  const facilities = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf" />,
      title: "Green Architecture",
      description: "Living walls, natural materials, and sustainable design create healing spaces in harmony with nature.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Droplets className="h-8 w-8 text-accent" />,
      title: "Pure Air Systems",
      description: "Advanced air purification using plants and natural filtration to maintain the cleanest environment.",
      image: "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Sun className="h-8 w-8 text-earth" />,
      title: "Solar Energy",
      description: "100% renewable energy powers our facility, reducing our footprint while maximizing healing potential.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Organic Nutrition",
      description: "Farm-to-table meals using ingredients from our healing gardens and local organic partnerships.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Eco-Friendly <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to environmental stewardship creates the perfect healing environment 
            while preserving the planet for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="group">
              <div className="organic-card overflow-hidden h-full transition-all duration-300 hover:nature-glow hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-full backdrop-blur-sm">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{facility.description}</p>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoFacilities;