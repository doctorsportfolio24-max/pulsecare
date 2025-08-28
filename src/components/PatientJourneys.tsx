import { Star, Quote } from "lucide-react";

const PatientJourneys = () => {
  const journeys = [
    {
      name: "Sarah Mitchell",
      condition: "Chronic Stress & Anxiety",
      journey: "3 months",
      story: "After years of conventional treatments, HealNest's holistic approach finally gave me the tools to manage my anxiety naturally. The combination of meditation, herbal therapy, and community support transformed my life.",
      outcome: "95% reduction in anxiety episodes",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b734?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Michael Chen", 
      condition: "Digestive Issues & Low Energy",
      journey: "6 months",
      story: "The nutritional therapy program and organic meal plans restored my digestive health completely. I learned to listen to my body and nourish it with what it truly needs.",
      outcome: "Complete digestive healing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      condition: "Recovery from Burnout",
      journey: "4 months", 
      story: "HealNest taught me that healing isn't just about addressing symptoms—it's about creating a sustainable lifestyle. The yoga sessions in nature and mindfulness training gave me my life back.",
      outcome: "Returned to work with renewed energy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Patient <span className="text-primary">Journeys</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories of transformation from our healing community. 
            Each journey is unique, but the destination is the same: renewed vitality and wellbeing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <div key={index} className="group h-full">
                <div className="organic-card overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={journey.image} 
                      alt={journey.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      {[...Array(journey.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-earth fill-earth" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-6 flex-1">
                      "{journey.story}"
                    </blockquote>
                    
                    <div className="border-t border-primary/10 pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{journey.name}</h4>
                          <p className="text-sm text-muted-foreground">{journey.condition}</p>
                        </div>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {journey.journey}
                        </span>
                      </div>
                      <div className="mt-3 p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary">{journey.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourneys;