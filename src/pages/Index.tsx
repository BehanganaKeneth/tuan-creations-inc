
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VisionMission } from "@/components/VisionMission";
import { ProblemSection } from "@/components/ProblemSection";
import { DivisionsSection } from "@/components/DivisionsSection";
import { BusinessModel } from "@/components/BusinessModel";
import { ExecutionRoadmap } from "@/components/ExecutionRoadmap";
import { WhyDifferent } from "@/components/WhyDifferent";
import { ImmediatePriorities } from "@/components/ImmediatePriorities";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30">
      <Navigation />
      <HeroSection />
      <VisionMission />
      <ProblemSection />
      <DivisionsSection />
      <BusinessModel />
      <ExecutionRoadmap />
      <WhyDifferent />
      <ImmediatePriorities />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
