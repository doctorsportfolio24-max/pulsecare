import { Heart, Waves, TreePine } from "lucide-react";

const HealingPhilosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Healing <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in the profound connection between mind, body, and nature. 
              Our approach integrates ancient wisdom with modern understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Mind-Body Connection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding that emotional and mental wellbeing directly impacts physical health. 
                    We address the whole person, not just symptoms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Waves className="h-6 w-6 text-accent ripple-effect" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Natural Rhythms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aligning with nature's cycles and wisdom. Our treatments honor the body's 
                    innate ability to heal when given the right environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-leaf/10 rounded-full">
                  <TreePine className="h-6 w-6 text-leaf sway-animation" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Sustainable Wellness</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building lasting health through sustainable practices that nurture both 
                    personal wellbeing and environmental harmony.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="organic-card p-8 nature-glow">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop" 
                     alt="Peaceful nature scene with morning light" 
                     className="w-full h-80 object-cover rounded-2xl mb-6" />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    "In every walk with nature, one receives far more than they seek."
                  </h4>
                  <p className="text-muted-foreground">- John Muir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingPhilosophy;