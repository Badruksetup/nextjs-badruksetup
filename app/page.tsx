"use client";
import { CalculatorSection } from "@/components/calculator-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";

import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";
import { WhyDubaiSection } from "@/components/why-dubai-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <CalculatorSection />
      <WhyDubaiSection />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
