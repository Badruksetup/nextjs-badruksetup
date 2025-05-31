"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  CreditCard,
  DollarSign,
  Globe,
  Handshake,
  Percent,
  Shield,
  UserCheck,
} from "lucide-react";

export function WhyDubaiSection() {
  const benefits = [
    {
      icon: Percent,
      title: "0% Körperschaftssteuer",
      description:
        "Keine Besteuerung von Unternehmensgewinnen in den meisten Freezones.",
    },
    {
      icon: UserCheck,
      title: "100% Eigentum",
      description:
        "Volle Eigentumsrechte ohne lokalen Partner in Freezone-Unternehmen.",
    },
    {
      icon: CreditCard,
      title: "Residenzvisum",
      description:
        "Inklusive Aufenthaltserlaubnis für Unternehmer und Familie.",
    },
    {
      icon: Globe,
      title: "Strategische Lage",
      description:
        "Idealer Standort für Geschäfte in Europa, Asien und Afrika.",
    },
    {
      icon: Shield,
      title: "Politische Stabilität",
      description: "Sicherer Rechtsrahmen und stabile politische Verhältnisse.",
    },
    {
      icon: DollarSign,
      title: "Kapitalflusssicherheit",
      description:
        "Keine Beschränkungen bei Gewinnausschüttung oder Kapitaltransfer.",
    },
    {
      icon: Building,
      title: "Moderne Infrastruktur",
      description: "Weltklasse-Büroflächen, Logistik und Technologie.",
    },
    {
      icon: Handshake,
      title: "Networking",
      description:
        "Zugang zu einem dynamischen internationalen Business-Ökosystem.",
    },
  ];

  return (
    <section id="why-dubai" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Vorteile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-white leading-tight">
            Warum eine Firmengründung in Dubai?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Die Vereinigten Arabischen Emirate bieten einzigartige Vorteile für
            Unternehmer und Investoren.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Multi-layered glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <CardContent className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                {/* Icon container with enhanced styling */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <benefit.icon
                    className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300"
                    size={20}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-amber-50 transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-700 ease-out" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
}
