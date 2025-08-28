
import { Button } from "@/components/ui/button";
import { Leaf, Menu, Calendar } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 organic-card border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary sway-animation" />
            <span className="text-2xl font-bold gradient-text">HealNest</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#philosophy" className="text-foreground hover:text-primary transition-colors">Philosophy</a>
            <a href="#facilities" className="text-foreground hover:text-primary transition-colors">Facilities</a>
            <a href="#care" className="text-foreground hover:text-primary transition-colors">Holistic Care</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
            <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">Volunteer</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex border-primary/20 text-primary hover:bg-primary/10">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Visit
            </Button>
            <Button className="bg-primary hover:bg-primary/90 nature-glow rounded-full">
              Start Journey
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
