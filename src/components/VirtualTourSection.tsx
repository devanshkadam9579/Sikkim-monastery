import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, Eye, Box, X, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MonasteryDashboard } from "./MonasteryDashboard";

export const VirtualTourSection = () => {
  const [selectedMonastery, setSelectedMonastery] = useState('rumtek');
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const monasteries = {
    rumtek: {
      name: "Rumtek Monastery",
      description: "The seat of His Holiness the 17th Karmapa",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757927938986!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzRfdGI5Qnc.!2m2!1d27.28854528167496!2d88.56161848386864!3f8.298585781742862!4f-2.8197228673674175!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1cj3d7bgzNsjr5IcdkwRbKlQbDowIZDz9/view?usp=drive_link"
    },
    pemayangtse: {
      name: "Pemayangtse Monastery", 
      description: "One of the oldest monasteries in Sikkim",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928063238!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f178.00000808604364!4f13.383876404318357!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1vr-nzpLm6bvyD_3wB56uXaGuP2DV8Cyy/view?usp=drive_link"
    },
    tashiding: {
      name: "Tashiding Monastery",
      description: "Sacred Buddhist monastery with spiritual significance",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928287865!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f88.29221245474356!4f-2.56917698782442!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1SmQu_yT2q1n0qOHD6pN-Y-ZWzKND432I/view?usp=drive_link"
    },
    enchey: {
      name: "Enchey Monastery",
      description: "Built on a site blessed by Lama Drupthob Karpo",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928369287!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUVF3WEFFMmVudUt3QUNhTTA.!2m2!1d27.33593677395685!2d88.61916587167339!3f280.9709995783807!4f8.958700100666903!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1SmQu_yT2q1n0qOHD6pN-Y-ZWzKND432I/view?usp=drive_link"
    },
    ralang: {
      name: "Ralang Monastery",
      description: "Historic monastery with beautiful architecture",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928436877!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDh5NUc4RGc.!2m2!1d27.3284964274141!2d88.33524768412993!3f286.5485288235051!4f-11.2650124203453!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1SmQu_yT2q1n0qOHD6pN-Y-ZWzKND432I/view?usp=drive_link"
    },
    dubdi: {
      name: "Dubdi Monastery",
      description: "Sikkim's oldest monastery founded in 1701",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928287865!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f88.29221245474356!4f-2.56917698782442!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1SmQu_yT2q1n0qOHD6pN-Y-ZWzKND432I/view?usp=drive_link"
    },
    tsuklakhang: {
      name: "Tsuklakhang Palace",
      description: "Royal Chapel and Monastery in Gangtok",
      streetView: "https://www.google.com/maps/embed?pb=!4v1757928369287!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUVF3WEFFMmVudUt3QUNhTTA.!2m2!1d27.33593677395685!2d88.61916587167339!3f280.9709995783807!4f8.958700100666903!5f0.7820865974627469",
      audioUrl: "https://drive.google.com/file/d/1SmQu_yT2q1n0qOHD6pN-Y-ZWzKND432I/view?usp=drive_link"
    }
  };

  const artifacts = {
    buddha: {
      name: "Tibetan Amoghasiddhi Buddha, 13th C CE",
      description: "This rare 13th-century bronze sculpture represents Amoghasiddhi, one of the five Dhyani Buddhas in Mahayana Buddhism. Amoghasiddhi is associated with the northern direction and represents the wisdom of accomplishment.",
      period: "13th Century CE",
      material: "Bronze with traces of gold",
      significance: "Amoghasiddhi Buddha embodies the transformation of jealousy into the wisdom of accomplishment. The green-colored Buddha helps practitioners overcome envy and achieve their spiritual goals.",
      location: "Minneapolis Institute of Art Collection",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> <iframe title="Tibetan Amoghasiddhi Buddha, 13th C CE" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a2c46e73a9294f32ab12520c6b87a079/embed"> </iframe> </div>`
    },
    crown: {
      name: "Karmapa Black Crown Hologram",
      description: "The sacred Black Crown is one of the most precious artifacts in Tibetan Buddhism, traditionally worn by the Karmapa, the head of the Karma Kagyu school. This holographic representation captures its mystical essence.",
      period: "Traditional Design (Timeless)",
      material: "Sacred materials with spiritual significance",
      significance: "The Black Crown represents the activity of all Buddhas and is said to be woven from the hair of dakinis (sky dancers). When worn by the Karmapa during ceremonies, it is believed to benefit all sentient beings.",
      location: "Karma Kagyu Lineage Tradition",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> <iframe title="Karmapa Black Crown Hologram - ཀརྨ་པ་མཁྱེན་ནོ།" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f617308db09e4d08b8b8d77740ed7ea1/embed"> </iframe> </div>`
    },
    bowl: {
      name: "Tibetan Singing Bowl",
      description: "Hand-forged singing bowls are essential instruments in Tibetan Buddhist practice, used for meditation, prayer, and healing ceremonies. The resonant tones are believed to promote deep relaxation and spiritual awakening.",
      period: "Traditional Craft (Various periods)",
      material: "Seven sacred metals including gold, silver, copper, tin, lead, iron, and mercury",
      significance: "The vibrational frequencies produced by singing bowls are used to align chakras, clear negative energy, and facilitate meditation. Each bowl is tuned to specific frequencies that correspond to different aspects of spiritual practice.",
      location: "Monastery Collections Worldwide",
      sketchfabEmbed: `<div class="sketchfab-embed-wrapper"> <iframe title="Tibetan Singing Bowl" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/52228c0d0cb44e6cacdeb3851e0743fc/embed"> </iframe> </div>`
    }
  };

  return (
    <section id="virtual-tour" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-monastery-section text-primary mb-6">
            VIRTUAL MONASTERY TOUR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the sacred halls and ancient wisdom through immersive 360° views 
            and detailed 3D models of precious artifacts
          </p>
        </div>

        <Tabs defaultValue="360-view" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="360-view" className="flex items-center gap-2">
              <Eye size={20} />
              360° View
            </TabsTrigger>
            <TabsTrigger value="3d-tour" className="flex items-center gap-2">
              <Box size={20} />
              3D Tour
            </TabsTrigger>
          </TabsList>

          <TabsContent value="360-view" className="space-y-8">
            {/* Monastery Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(monasteries).map(([key, monastery]) => (
                <Button
                  key={key}
                  variant={selectedMonastery === key ? "default" : "outline"}
                  onClick={() => setSelectedMonastery(key)}
                  className="rounded-full"
                >
                  {monastery.name}
                </Button>
              ))}
            </div>

            {/* Street View Embed */}
            <Card className="card-monastery">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{monasteries[selectedMonastery as keyof typeof monasteries].name}</span>
                  <div className="flex gap-2">
                    <Button 
                      className="btn-prayer flex items-center gap-2"
                      onClick={() => window.open(monasteries[selectedMonastery as keyof typeof monasteries].audioUrl, '_blank')}
                    >
                      <Volume2 size={16} />
                      Play Audio Tour
                    </Button>
                    <Button 
                      className="btn-mountain flex items-center gap-2"
                      onClick={() => setIsDashboardOpen(true)}
                    >
                      <MapPin size={16} />
                      Explore
                    </Button>
                  </div>
                </CardTitle>
                <p className="text-muted-foreground">
                  {monasteries[selectedMonastery as keyof typeof monasteries].description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src={monasteries[selectedMonastery as keyof typeof monasteries].streetView}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`360° view of ${monasteries[selectedMonastery as keyof typeof monasteries].name}`}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="3d-tour" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tibetan Amoghasiddhi Buddha */}
              <Card className="card-monastery">
                <CardHeader>
                  <CardTitle>Tibetan Amoghasiddhi Buddha</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    13th Century Bronze Buddha representing wisdom of accomplishment
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe 
                      title="Tibetan Amoghasiddhi Buddha, 13th C CE" 
                      style={{ border: 0 }}
                      allowFullScreen 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      src="https://sketchfab.com/models/a2c46e73a9294f32ab12520c6b87a079/embed?autostart=1"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 btn-mountain">
                        Explore Artifact
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">{artifacts.buddha.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Description</h4>
                            <p className="text-muted-foreground">{artifacts.buddha.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Historical Period</h4>
                            <p className="text-muted-foreground">{artifacts.buddha.period}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Material</h4>
                            <p className="text-muted-foreground">{artifacts.buddha.material}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Spiritual Significance</h4>
                            <p className="text-muted-foreground">{artifacts.buddha.significance}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Current Location</h4>
                            <p className="text-muted-foreground">{artifacts.buddha.location}</p>
                          </div>
                        </div>
                        <div className="h-[500px] rounded-lg overflow-hidden">
                          <iframe 
                            title="Tibetan Amoghasiddhi Buddha, 13th C CE" 
                            style={{ border: 0 }}
                            allowFullScreen 
                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                            src="https://sketchfab.com/models/a2c46e73a9294f32ab12520c6b87a079/embed?autostart=1"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Karmapa Black Crown */}
              <Card className="card-monastery">
                <CardHeader>
                  <CardTitle>Karmapa Black Crown</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Sacred crown of the Karmapa lineage holders
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe 
                      title="Karmapa Black Crown Hologram - ཀརྨ་པ་མཁྱེན་ནོ།" 
                      style={{ border: 0 }}
                      allowFullScreen 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      src="https://sketchfab.com/models/f617308db09e4d08b8b8d77740ed7ea1/embed?autostart=1"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 btn-mountain">
                        Explore Artifact
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">{artifacts.crown.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Description</h4>
                            <p className="text-muted-foreground">{artifacts.crown.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Historical Period</h4>
                            <p className="text-muted-foreground">{artifacts.crown.period}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Material</h4>
                            <p className="text-muted-foreground">{artifacts.crown.material}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Spiritual Significance</h4>
                            <p className="text-muted-foreground">{artifacts.crown.significance}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Lineage</h4>
                            <p className="text-muted-foreground">{artifacts.crown.location}</p>
                          </div>
                        </div>
                        <div className="h-[500px] rounded-lg overflow-hidden">
                          <iframe 
                            title="Karmapa Black Crown Hologram - ཀརྨ་པ་མཁྱེན་ནོ།" 
                            style={{ border: 0 }}
                            allowFullScreen 
                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                            src="https://sketchfab.com/models/f617308db09e4d08b8b8d77740ed7ea1/embed?autostart=1"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Tibetan Singing Bowl */}
              <Card className="card-monastery">
                <CardHeader>
                  <CardTitle>Tibetan Singing Bowl</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Sacred instrument for meditation and healing
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe 
                      title="Tibetan Singing Bowl" 
                      style={{ border: 0 }}
                      allowFullScreen 
                      allow="autoplay; fullscreen; xr-spatial-tracking" 
                      src="https://sketchfab.com/models/52228c0d0cb44e6cacdeb3851e0743fc/embed?autostart=1"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 btn-mountain">
                        Explore Artifact
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">{artifacts.bowl.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Description</h4>
                            <p className="text-muted-foreground">{artifacts.bowl.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Historical Period</h4>
                            <p className="text-muted-foreground">{artifacts.bowl.period}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Material</h4>
                            <p className="text-muted-foreground">{artifacts.bowl.material}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Spiritual Significance</h4>
                            <p className="text-muted-foreground">{artifacts.bowl.significance}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Location</h4>
                            <p className="text-muted-foreground">{artifacts.bowl.location}</p>
                          </div>
                        </div>
                        <div className="h-[500px] rounded-lg overflow-hidden">
                          <iframe 
                            title="Tibetan Singing Bowl" 
                            style={{ border: 0 }}
                            allowFullScreen 
                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                            src="https://sketchfab.com/models/52228c0d0cb44e6cacdeb3851e0743fc/embed?autostart=1"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Monastery Dashboard */}
      <MonasteryDashboard 
        monasteryKey={selectedMonastery}
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
    </section>
  );
};