import { Users, Brain, Flower, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const HolisticCare = () => {
  const therapies = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Yoga & Movement",
      description: "Gentle yoga flows, tai chi, and mindful movement practices in our serene outdoor pavilions.",
      features: ["Sunrise Sessions", "All Levels Welcome", "Nature Settings"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e1f?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Brain className="h-12 w-12 text-accent" />,
      title: "Meditation & Mindfulness",
      description: "Guided meditation, breathwork, and mindfulness training to cultivate inner peace and clarity.",
      features: ["Silent Retreats", "Group Sessions", "Personal Guidance"],
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Flower className="h-12 w-12 text-leaf" />,
      title: "Herbal Medicine",
      description: "Traditional plant-based healing using herbs from our certified organic medicinal gardens.",
      features: ["Custom Blends", "Garden Tours", "Educational Workshops"],
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2940&auto=format&fit=crop"
    },
    {
      icon: <Activity className="h-12 w-12 text-earth" />,
      title: "Nutritional Therapy",
      description: "Personalized nutrition plans using whole foods, healing recipes, and mindful eating practices.",
      features: ["Meal Planning", "Cooking Classes", "Garden-to-Table"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section id="care" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Holistic <span className="text-primary">Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrative therapies that address your complete wellbeing, combining ancient wisdom 
            with modern understanding for lasting transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {therapies.map((therapy, index) => (
            <div key={index} className="group">
              <div className="organic-card overflow-hidden h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={therapy.image} 
                      alt={therapy.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4 floating-leaf">
                        {therapy.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">{therapy.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{therapy.description}</p>
                      <ul className="space-y-2 mb-6">
                        {therapy.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 rounded-full w-full">
                      Join a Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolisticCare;