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

function SectionDivider({ variant = "default" }: { variant?: "default" | "accent" | "subtle" }) {
  const gradients = {
    default: "from-transparent via-blue-500/20 to-transparent",
    accent: "from-transparent via-violet-500/20 to-transparent",
    subtle: "from-transparent via-white/[0.06] to-transparent",
  };

  return (
    <div className="relative h-px w-full">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradients[variant]}`} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="accent" />
      <ProblemSection />
      <SectionDivider variant="subtle" />
      <WhyFailSection />
      <SectionDivider variant="default" />
      <SolutionSection />
      <SectionDivider variant="subtle" />
      <FeaturesSection />
      <SectionDivider variant="accent" />
      <HowItWorksSection />
      <SectionDivider variant="subtle" />
      <UseCasesSection />
      <SectionDivider variant="default" />
      <DashboardPreview />
      <SectionDivider variant="subtle" />
      <TestimonialsSection />
      <SectionDivider variant="accent" />
      <WaitlistSection />
      <SectionDivider variant="subtle" />
      <FAQSection />
      <SectionDivider variant="default" />
      <CTASection />
      <Footer />
    </main>
  );
}
