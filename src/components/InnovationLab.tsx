
import { Button } from "@/components/ui/button";
import { Bot, Microscope, Scan, Cpu, ArrowRight } from "lucide-react";

const innovations = [
  {
    icon: Bot,
    title: "AI Diagnostics",
    description: "Machine learning algorithms that analyze medical imaging with 99.2% accuracy",
    metric: "15 min faster diagnosis"
  },
  {
    icon: Scan,
    title: "Robotic Surgery",
    description: "Precision robotic systems enabling minimally invasive procedures",
    metric: "50% reduced recovery time"
  },
  {
    icon: Cpu,
    title: "Smart OR Technology",
    description: "IoT-enabled operating rooms with real-time vital monitoring",
    metric: "30% improved outcomes"
  },
  {
    icon: Microscope,
    title: "Nanotechnology",
    description: "Targeted drug delivery systems at the cellular level",
    metric: "90% treatment efficacy"
  }
];

const InnovationLab = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation <span className="gradient-text">Laboratory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering medical technologies that transform patient care and save lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary wave-animation" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {innovation.metric}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
