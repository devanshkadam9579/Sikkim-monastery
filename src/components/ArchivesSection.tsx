import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, BookOpen, Users, Scroll } from "lucide-react";
import { useState } from "react";

export const ArchivesSection = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const magazines = [
    {
      id: "rinpoche",
      title: "Rinpoche Magazine",
      description: "Exclusive insights into the teachings of Guru Rinpoche",
      icon: "📖",
      type: "Digital Magazine",
      iframe: "https://online.visual-paradigm.com/share/book/rinpoche-magazine-2au3yzwduv?p=1"
    },
    {
      id: "rumtek",
      title: "Rumtek Magazine", 
      description: "Complete guide to Rumtek Monastery traditions and practices",
      icon: "📿",
      type: "Cultural Document",
      iframe: "https://online.visual-paradigm.com/share/book/rumtek-magazine-2av8nhvobc?p=1"
    },
    {
      id: "karmapa",
      title: "KARMAPA900 3rd Edition",
      description: "Commemorative edition celebrating 900 years of Karmapa lineage", 
      icon: "👑",
      type: "Historical Archive",
      iframe: "https://online.visual-paradigm.com/share/book/karmapa900-3rdedition-e-2av90tnago?p=1"
    }
  ];

  const archiveCategories = [
    {
      icon: <BookOpen className="text-primary" size={32} />,
      title: "Sacred Manuscripts",
      description: "Ancient Buddhist texts and scriptures preserved through centuries",
      items: "127 Manuscripts",
      color: "bg-primary/10"
    },
    {
      icon: <FileText className="text-secondary" size={32} />,
      title: "Festival Magazines",
      description: "Detailed documentation of Sikkim's spiritual festivals and celebrations",
      items: "45 Publications",
      color: "bg-secondary/10"
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Notable Personalities",
      description: "Biographies and teachings of renowned lamas and spiritual leaders",
      items: "23 Profiles",
      color: "bg-accent/10"
    },
    {
      icon: <Scroll className="text-primary" size={32} />,
      title: "Historical Documents",
      description: "Rare documents chronicling the history of monasteries in Sikkim",
      items: "89 Documents",
      color: "bg-primary/10"
    }
  ];


  return (
    <section id="archives" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-monastery-section text-primary mb-6">
            DIGITAL ARCHIVES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the Past, Preserve the Spirit - A treasure trove of sacred knowledge, 
            cultural heritage, and spiritual wisdom
          </p>
        </div>

        {/* Archive Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {archiveCategories.map((category, index) => (
            <Card key={index} className="card-monastery text-center hover-scale-102">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <span className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-medium">
                  {category.items}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital Magazine Collection */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Digital Magazine Collection</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {magazines.map((magazine) => (
              <Card key={magazine.id} className="card-monastery hover-scale-102 transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{magazine.icon}</div>
                  <CardTitle className="text-lg">{magazine.title}</CardTitle>
                  <span className="text-sm text-secondary font-medium">{magazine.type}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{magazine.description}</p>
                  <Button 
                    className="w-full btn-monastery transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    onClick={() => setOpenModal(magazine.id)}
                  >
                    Explore Archives
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal Dialogs */}
        {magazines.map((magazine) => (
          <Dialog key={`modal-${magazine.id}`} open={openModal === magazine.id} onOpenChange={(open) => !open && setOpenModal(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] animate-fade-in">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">{magazine.icon}</span>
                  {magazine.title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-hidden">
                <iframe 
                  frameBorder="0" 
                  allowTransparency={true} 
                  allowFullScreen={true} 
                  className="w-full h-full rounded-lg"
                  style={{ height: '480px', minHeight: '480px' }}
                  src={magazine.iframe}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}


        {/* Search and Browse */}
        <Card className="card-monastery">
          <CardHeader>
            <CardTitle className="text-center">Explore All Archives</CardTitle>
            <p className="text-center text-muted-foreground">
              Search through our comprehensive digital library
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search manuscripts, festivals, personalities..." 
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div>
                <a id="078b326a-078e-40dc-97b3-0bc37ed994c1" 
                   style={{cursor: 'pointer', position: 'relative', display: 'inline-block'}} 
                   href="https://online.visual-paradigm.com/share/book/rinpoche-magazine-2au3yzwduv?p=1" 
                   target="_blank">
                  <Button className="btn-monastery px-8">
                    Search Archives
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="outline" className="rounded-full">All Categories</Button>
              <Button variant="outline" className="rounded-full">Manuscripts</Button>
              <Button variant="outline" className="rounded-full">Festivals</Button>
              <Button variant="outline" className="rounded-full">Personalities</Button>
              <Button variant="outline" className="rounded-full">History</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Flipbook Scripts */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(d,eid,url){var sns=d.getElementsByTagName('script');var st=window.vfbkembbs||sns[sns.length-1];var e=d.createElement('script');e.type='text/javascript';e.src='https://cdn-v17-3.visual-paradigm.com/diagrams/js/embed.js';e.onload=function(){VFBKEMBW2(eid,url);};e.onreadystatechange=function(){if (this.readyState==='complete'){VFBKEMBW2(eid,url);}};st.parentNode.insertBefore(e,st);})(document,'078b326a-078e-40dc-97b3-0bc37ed994c0','https://online.visual-paradigm.com/share/book/rinpoche-magazine-2au3yzwduv?p=1'); (function(d,eid,url){var sns=d.getElementsByTagName('script');var st=window.vfbkembbs||sns[sns.length-1];var e=d.createElement('script');e.type='text/javascript';e.src='https://cdn-v17-3.visual-paradigm.com/diagrams/js/embed.js';e.onload=function(){VFBKEMBW2(eid,url);};e.onreadystatechange=function(){if (this.readyState==='complete'){VFBKEMBW2(eid,url);}};st.parentNode.insertBefore(e,st);})(document,'078b326a-078e-40dc-97b3-0bc37ed994c1','https://online.visual-paradigm.com/share/book/rinpoche-magazine-2au3yzwduv?p=1');`
        }}
      />
    </section>
  );
};