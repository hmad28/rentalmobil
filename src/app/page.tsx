import { BenefitsSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/BenefitsSection";
import { CarFleetSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/CarFleetSection";
import { CtaSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/CtaSection";
import { HeroSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/HeroSection";
import { SiteFooter } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteHeader";
import { TestimonialsSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/TestimonialsSection";
import { TrustStatsSection } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/TrustStatsSection";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStatsSection />
        <CarFleetSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
