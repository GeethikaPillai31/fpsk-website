import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ValuesSection } from "@/components/ValuesSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <HeroSection />
      <ValuesSection />
      <OurTeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
