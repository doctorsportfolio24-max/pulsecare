
import { Button } from "@/components/ui/button";
import { Video, MessageCircle, Phone, Calendar, ArrowRight } from "lucide-react";

const VirtualCareHub = () => {
  return (
    <section id="virtual-care" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Virtual Care <span className="gradient-text">Hub</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with our medical experts from anywhere. Advanced telemedicine 
                platform with HD video, secure messaging, and real-time vital monitoring.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">HD Video Consultations</div>
                    <div className="text-muted-foreground text-sm">Crystal clear consultations with specialists</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Secure Messaging</div>
                    <div className="text-muted-foreground text-sm">HIPAA-compliant chat with your care team</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-muted-foreground text-sm">Round-the-clock medical assistance</div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 glow-effect group mr-4"
              >
                <Video className="h-5 w-5 mr-2" />
                Connect with Doctor Now
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button size="lg" variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Virtual Appointment
              </Button>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">Dr</span>
                    </div>
                    <div>
                      <div className="font-semibold">Dr. Sarah Johnson</div>
                      <div className="text-muted-foreground text-sm">Cardiologist • Available Now</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-success rounded-full pulse-glow"></div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Virtual Consultation Preview</div>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <Video className="h-12 w-12 text-primary/60" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button size="sm" className="bg-success hover:bg-success/90">
                      <Phone className="h-4 w-4 mr-2" />
                      Join Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCareHub;
