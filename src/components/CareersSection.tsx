
import { Button } from "@/components/ui/button";
import { Stethoscope, Cpu, ArrowRight, Users } from "lucide-react";

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of <span className="gradient-text">Healthcare</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of a revolutionary team that's transforming patient care through innovation and compassion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-xl hover:glow-effect transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Medical Professionals</h3>
                <p className="text-muted-foreground mb-6">
                  Join our world-class medical team and make a difference in patients' lives
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div>• Competitive compensation packages</div>
                  <div>• State-of-the-art facilities</div>
                  <div>• Continuing education support</div>
                  <div>• Research opportunities</div>
                </div>
              </div>
              <Button className="w-full group-hover:glow-effect">
                <Stethoscope className="h-4 w-4 mr-2" />
                Apply as Doctor
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="glass-card p-8 rounded-xl hover:glow-effect transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Cpu className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tech Innovators</h3>
                <p className="text-muted-foreground mb-6">
                  Shape the future of healthcare technology and digital innovation
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div>• Cutting-edge AI/ML projects</div>
                  <div>• Flexible remote work options</div>
                  <div>• Innovation labs access</div>
                  <div>• Patent opportunities</div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 group-hover:glow-effect">
                <Cpu className="h-4 w-4 mr-2" />
                Apply as Tech Talent
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15</div>
                <div className="text-sm text-muted-foreground">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
