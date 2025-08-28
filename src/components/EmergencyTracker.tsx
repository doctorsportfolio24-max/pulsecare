
import { Clock, AlertTriangle, Users, Activity } from "lucide-react";

const EmergencyTracker = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Emergency <span className="gradient-text">Status Center</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time emergency room status and wait times
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-success" />
                </div>
                <div className="text-3xl font-bold text-success mb-2">12 min</div>
                <div className="text-sm text-muted-foreground">Average Wait Time</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-warning" />
                </div>
                <div className="text-3xl font-bold text-warning mb-2">8</div>
                <div className="text-sm text-muted-foreground">Patients in Queue</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="h-8 w-8 text-primary pulse-glow" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">Available</div>
                <div className="text-sm text-muted-foreground">Trauma Bay Status</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emergency/10 rounded-full flex items-center justify-center emergency-pulse">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-emergency mb-2">Active</div>
                <div className="text-sm text-muted-foreground">Emergency Alert</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="text-foreground font-semibold">2 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyTracker;
