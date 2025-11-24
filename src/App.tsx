import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

function App() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <HeroSection />
      <OurTeamSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
