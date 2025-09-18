import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Route, Calendar, Info } from "lucide-react";

export const AIPlannerSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-monastery-section text-primary mb-6">
            AI TOUR PLANNER BOT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let our intelligent assistant plan your perfect spiritual journey from your city 
            to Sikkim's most sacred monasteries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA Card */}
          <Card className="card-monastery">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                🤖 Raahi Tour Planner
                <span className="text-sm bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                  Powered by Chatbase
                </span>
              </CardTitle>
              <p className="text-muted-foreground">
                Get personalized monastery recommendations, travel routes, and cultural insights
              </p>
            </CardHeader>
            <CardContent>
              <Button className="w-full btn-monastery" onClick={() => setOpen(true)}>
                Start Planning My Journey
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="space-y-6">
            <Card className="card-monastery hover-scale-102">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Route className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Custom Route Planning</h3>
                    <p className="text-muted-foreground">
                      Get optimized travel routes from your city to multiple monasteries, 
                      including transportation options and timing recommendations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-monastery hover-scale-102">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Monastery Information</h3>
                    <p className="text-muted-foreground">
                      Discover detailed information about each monastery's history, 
                      significance, visiting hours, and special ceremonies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-monastery hover-scale-102">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Festival Calendar</h3>
                    <p className="text-muted-foreground">
                      Plan your visit around special festivals and ceremonies for 
                      a more immersive spiritual experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-monastery hover-scale-102">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Info className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cultural Insights</h3>
                    <p className="text-muted-foreground">
                      Learn about Buddhist traditions, meditation practices, 
                      and proper monastery etiquette before your visit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full btn-monastery" onClick={() => setOpen(true)}>
              Raahi Tour Bot
            </Button>
          </div>
        </div>
      </div>

      {/* Chatbot Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[98vw] h-[97vh] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle>Raahi Tour Planner</DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6 h-full">
            <Card className="w-full h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full" style={{ minHeight: "80vh" }}>
                  <iframe
                    src="https://www.chatbase.co/chatbot-iframe/LCqeGDhvrr3i8S5hHSCKP"
                    width="100%"
                    style={{ height: "calc(100vh - 160px)", minHeight: "75vh", border: 0 }}
                    frameBorder={0}
                    title="Raahi Tour Planner Chatbot"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};