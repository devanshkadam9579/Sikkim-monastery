import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/src/assets/footer-landscape.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏔️</span>
              <span className="text-xl font-bold">SIKKIM MONASTERIES</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your gateway to spiritual discovery in the heart of the Himalayas. 
              Explore ancient wisdom and sacred traditions.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="secondary" className="p-2">
                <Facebook size={16} />
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Instagram size={16} />
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Twitter size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#virtual-tour" className="hover:text-secondary transition-colors">Virtual Tours</a></li>
              <li><a href="#ai-planner" className="hover:text-secondary transition-colors">AI Trip Planner</a></li>
              <li><a href="#archives" className="hover:text-secondary transition-colors">Digital Archives</a></li>
              <li><a href="#events" className="hover:text-secondary transition-colors">Festival Calendar</a></li>
              <li><a href="#marketplace" className="hover:text-secondary transition-colors">Marketplace</a></li>
              <li><a href="#map" className="hover:text-secondary transition-colors">Interactive Map</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Travel Guidelines</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Monastery Etiquette</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Buddhist Teachings</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Photography Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Volunteer Programs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Monasteries</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-secondary" />
                <div>
                  <p className="text-sm">Tourism Department</p>
                  <p className="text-sm">Gangtok, Sikkim 737101</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <p className="text-sm">+91 3592 202688</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <p className="text-sm">info@sikkimmonasteries.in</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Scan to Chat</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Connect with us instantly via WhatsApp or get quick access to our mobile guide.
            </p>
            <div className="bg-white p-3 rounded-lg inline-block">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMCAwSDEwMFYxMDBIMFYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNOSA5SDkxVjkxSDlWOVoiIGZpbGw9IiNGRkZGRkYiLz4KPHA+PHBhdGggZD0iTTE4IDE4SDI3VjI3SDE4VjE4WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTM2IDE4SDQ1VjI3SDM2VjE4WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTU0IDE4SDYzVjI3SDU0VjE4WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTcyIDM2SDgxVjQ1SDcyVjM2WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTE4IDU0SDI3VjYzSDE4VjU0WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTcyIDU0SDgxVjYzSDcyVjU0WiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTE4IDcySDI3VjgxSDE4VjcyWiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTM2IDcySDQ1VjgxSDM2VjcyWiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPHA+PHBhdGggZD0iTTU0IDcySDYzVjgxSDU0VjcyWiIgZmlsbD0iIzAwMDAwMCIvPjwvcD4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="QR Code"
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Sikkim Monastery Travel Guide. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};