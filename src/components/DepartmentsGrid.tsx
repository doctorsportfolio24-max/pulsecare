
import { Button } from "@/components/ui/button";
import { Heart, Brain, Scissors, Baby, Eye, Bone, ArrowRight } from "lucide-react";

const departments = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Advanced heart care with 98% success rate in cardiac procedures",
    metrics: "500+ surgeries annually",
    color: "text-red-500"
  },
  {
    icon: Brain,
    name: "Neurology", 
    description: "Cutting-edge brain and nervous system treatments",
    metrics: "95% patient improvement rate",
    color: "text-purple-500"
  },
  {
    icon: Scissors,
    name: "Oncology",
    description: "Comprehensive cancer care with personalized treatment plans",
    metrics: "85% remission rate",
    color: "text-green-500"
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents",
    metrics: "24/7 NICU availability", 
    color: "text-blue-500"
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Advanced eye care and vision restoration services",
    metrics: "99% vision improvement rate",
    color: "text-cyan-500"
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Joint replacement and sports medicine excellence",
    metrics: "2 week average recovery",
    color: "text-orange-500"
  }
];

const DepartmentsGrid = () => {
  return (
    <section id="departments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Specialized <span className="gradient-text">Departments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class medical expertise across all specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className={`h-8 w-8 ${dept.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{dept.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold inline-block mb-6">
                    {dept.metrics}
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full group-hover:text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsGrid;
