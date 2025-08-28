
import { Button } from "@/components/ui/button";
import { Sunrise, ArrowRight, TreePine } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="nature-hero min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="floating-leaf mb-8">
            <TreePine className="h-16 w-16 mx-auto mb-6 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Healing through Nature,
            <span className="block text-primary">Balance, and Care</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Discover holistic wellness in harmony with nature. Experience healing that nurtures your mind, body, and spirit in our tranquil sanctuary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 nature-glow group px-10 py-6 text-lg rounded-full"
            >
              <Sunrise className="h-5 w-5 mr-2" />
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-10 py-6 text-lg rounded-full"
            >
              Explore Our Gardens
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="organic-card p-8 gentle-pulse">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Healing</div>
            </div>
            <div className="organic-card p-8 gentle-pulse">
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Lives Transformed</div>
            </div>
            <div className="organic-card p-8 gentle-pulse">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Natural Approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
