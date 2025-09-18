import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">🏔️</div>
            <span className="text-xl font-bold text-foreground">{t("app_title")}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('virtual-tour')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_virtual_tour")}
            </button>
            <button 
              onClick={() => scrollToSection('ai-planner')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_ai_planner")}
            </button>
            <button 
              onClick={() => scrollToSection('archives')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_archives")}
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_events")}
            </button>
            <button 
              onClick={() => scrollToSection('marketplace')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_marketplace")}
            </button>
            <button 
              onClick={() => scrollToSection('map')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_map")}
            </button>
            <div className="flex items-center gap-2 pl-4">
              <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>
                EN
              </Button>
              <Button variant={language === 'ne' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('ne')}>
                NE
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('virtual-tour')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_virtual_tour")}
              </button>
              <button 
                onClick={() => scrollToSection('ai-planner')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_ai_planner")}
              </button>
              <button 
                onClick={() => scrollToSection('archives')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_archives")}
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_events")}
              </button>
              <button 
                onClick={() => scrollToSection('marketplace')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_marketplace")}
              </button>
              <button 
                onClick={() => scrollToSection('map')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {t("nav_map")}
              </button>
              <div className="flex items-center gap-2 pt-2">
                <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')}>
                  EN
                </Button>
                <Button variant={language === 'ne' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('ne')}>
                  NE
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};