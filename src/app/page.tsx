import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import Benefits from "@/components/Benefits";
import LearningTopics from "@/components/LearningTopics";
import Methodology from "@/components/Methodology";
import Transformation from "@/components/Transformation";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import WhatYouGet from "@/components/WhatYouGet";
import AudienceAndResults from "@/components/AudienceAndResults";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <ValueProposition />
      <Benefits />
      <LearningTopics />
      <Methodology />
      <Transformation />
      <Pricing />
      <Comparison />
      <WhatYouGet />
      <AudienceAndResults />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
