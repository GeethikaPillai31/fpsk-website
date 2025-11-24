import { HeroSection } from "@/components/HeroSection";
import { ValuesSection } from "@/components/ValuesSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <OurTeamSection />
      <ServicesSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
