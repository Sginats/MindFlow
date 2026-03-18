import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhyFailSection from "@/components/WhyFailSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import DashboardPreview from "@/components/DashboardPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhyFailSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <DashboardPreview />
      <TestimonialsSection />
      <WaitlistSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
