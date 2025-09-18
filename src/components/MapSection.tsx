import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Mountain } from "lucide-react";
import Map from "./Map";

export const MapSection = () => {
  const monasteries = [
    { name: "Rumtek Monastery", location: "East Sikkim", established: "1966" },
    { name: "Pemayangtse Monastery", location: "West Sikkim", established: "1705" },
    { name: "Enchey Monastery", location: "Gangtok", established: "1909" },
    { name: "Tashiding Monastery", location: "West Sikkim", established: "1641" },
    { name: "Ralang Monastery", location: "South Sikkim", established: "1768" }
  ];

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-monastery-section text-primary mb-6">
            EXPLORE SIKKIM MAP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through the sacred landscapes of Sikkim with our interactive 3D map 
            featuring all major monasteries and spiritual sites
          </p>
        </div>

        {/* 3D Interactive Map */}
        <Card className="card-monastery mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Mountain className="text-primary" size={24} />
              Interactive 3D Map of Sikkim Monasteries
            </CardTitle>
            <p className="text-muted-foreground">
              Click on monastery pins to view details, virtual tours, and navigation options
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 lg:h-[600px] rounded-lg overflow-hidden border border-border bg-muted/20">
              <Map />
            </div>
          </CardContent>
        </Card>

        {/* Monastery List */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="card-monastery">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="text-accent" size={24} />
                Featured Monasteries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monasteries.map((monastery, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/20 transition-colors">
                    <div>
                      <h4 className="font-semibold">{monastery.name}</h4>
                      <p className="text-sm text-muted-foreground">{monastery.location} • Est. {monastery.established}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Navigation size={14} />
                        Navigate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-monastery">
            <CardHeader>
              <CardTitle>Map Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Monastery Locations</h4>
                  <p className="text-sm text-muted-foreground">
                    Precise GPS coordinates and detailed location information for all major monasteries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Navigation className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Navigation & Routes</h4>
                  <p className="text-sm text-muted-foreground">
                    Get turn-by-turn directions and optimal routes between monasteries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mountain className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3D Terrain View</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience the majestic Himalayan landscape in stunning 3D detail
                  </p>
                </div>
              </div>

              <Button className="w-full btn-mountain">
                Download Offline Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};