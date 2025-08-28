import { Button } from "@/components/ui/button";
import { HandHeart, TreePine, Users, Sprout } from "lucide-react";

const VolunteerSection = () => {
  const activities = [
    {
      icon: <TreePine className="h-6 w-6 text-leaf" />,
      title: "Tree Planting",
      description: "Help us expand our healing forest and create more natural spaces for therapy."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Wellness Camps",
      description: "Support community wellness events and outdoor healing workshops."
    },
    {
      icon: <HandHeart className="h-6 w-6 text-accent" />,
      title: "Animal Care",
      description: "Assist with the care of our therapy animals and farm friends."
    },
    {
      icon: <Sprout className="h-6 w-6 text-earth" />,
      title: "Garden Maintenance",
      description: "Tend to our medicinal gardens and organic food production areas."
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Be Part of Our <span className="text-primary">Healing Movement</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community of passionate volunteers who help spread healing, sustainability, 
              and wellness throughout our region. Every contribution makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="organic-card p-8 nature-glow">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2940&auto=format&fit=crop" 
                  alt="Volunteers planting trees together"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Community Impact
                  </h4>
                  <p className="text-muted-foreground">
                    Over 500 volunteers have contributed 10,000+ hours to our healing mission, 
                    planting 2,000 trees and supporting 1,500+ community members.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-8">Volunteer Opportunities</h3>
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10">
                  <div className="p-2 bg-white rounded-full">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h4>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-leaf hover:bg-leaf/90 text-leaf-foreground px-12 py-6 text-lg rounded-full nature-glow mr-4 mb-4">
              <HandHeart className="h-5 w-5 mr-2" />
              Volunteer Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-12 py-6 text-lg rounded-full">
              Learn About Programs
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-leaf mb-2">2,000</div>
              <div className="text-muted-foreground">Trees Planted</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground">Volunteer Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;