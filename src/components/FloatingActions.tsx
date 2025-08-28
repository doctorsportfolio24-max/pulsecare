
import { Button } from "@/components/ui/button";
import { Calendar, Mountain } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <Button 
        size="lg"
        className="bg-primary hover:bg-primary/90 nature-glow rounded-full shadow-2xl floating-leaf"
      >
        <Mountain className="h-5 w-5 mr-2" />
        Book Wellness Retreat
      </Button>
      
      <Button 
        size="lg"
        className="bg-accent hover:bg-accent/90 gentle-pulse rounded-full shadow-2xl"
      >
        <Calendar className="h-5 w-5 mr-2" />
        Schedule Visit
      </Button>
    </div>
  );
};

export default FloatingActions;
