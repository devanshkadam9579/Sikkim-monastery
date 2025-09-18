import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VirtualTourSection } from "@/components/VirtualTourSection";
import { AIPlannerSection } from "@/components/AIPlannerSection";
import { ArchivesSection } from "@/components/ArchivesSection";
import { EventsSection } from "@/components/EventsSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { MapSection } from "@/components/MapSection";
import { WeatherSection } from "@/components/WeatherSection";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VirtualTourSection />
        <WeatherSection />
        <AIPlannerSection />
        <ArchivesSection />
        <EventsSection />
        <MarketplaceSection />
        <MapSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
