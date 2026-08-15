import { AboutSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/AboutSection";
import { BenefitsSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/BenefitsSection";
import { CarFleetSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/CarFleetSection";
import { CtaSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/CtaSection";
import { HeroSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/HeroSection";
import { MotorFleetSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/MotorFleetSection";
import { SiteFooter } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteHeader";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader />
      <main>
        <HeroSection />
        <CarFleetSection />
        <MotorFleetSection />
        <AboutSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
