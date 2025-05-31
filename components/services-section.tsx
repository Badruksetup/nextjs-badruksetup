"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  CheckCircle,
  CreditCard,
  FileText,
  Headphones,
  MapPin,
  TrendingUp,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Unternehmensberatung & Strukturwahl",
      description:
        "Individuelle Beratung zur optimalen Rechtsform (Freezone/Mainland) und Geschäftsstruktur für Ihr Vorhaben.",
      features: [
        "Freezone vs. Mainland Analyse",
        "Branchenspezifische Beratung",
        "Steueroptimierte Strukturen",
      ],
    },
    {
      icon: FileText,
      title: "Lizenzbeantragung & Firmenregistrierung",
      description:
        "Professionelle Abwicklung aller behördlichen Verfahren für eine reibungslose Gründung.",
      features: [
        "Auswahl der passenden Lizenz",
        "Behördliche Anträge",
        "Notarielle Beglaubigungen",
      ],
    },
    {
      icon: CreditCard,
      title: "Visum für Inhaber & Familie",
      description:
        "Beantragung der Aufenthaltserlaubnis für Sie und Ihre Familie inklusive aller notwendigen Schritte.",
      features: ["Einreisevisum", "Emirates ID", "Medizinische Untersuchung"],
    },
    {
      icon: Building2,
      title: "Bankkontoeröffnung",
      description:
        "Unterstützung bei der Eröffnung eines Geschäftskontos bei führenden Banken in den VAE.",
      features: [
        "Auswahl der passenden Bank",
        "Dokumentenvorbereitung",
        "Persönliche Begleitung",
      ],
    },
    {
      icon: MapPin,
      title: "Büro-/Flexidesk-Lösungen",
      description:
        "Vermittlung von flexiblen Büroräumen und virtuellen Büroadressen gemäß Ihren Anforderungen.",
      features: [
        "Virtuelle Büroadresse",
        "Flexible Coworking Spaces",
        "Dedizierte Büroflächen",
      ],
    },
    {
      icon: Headphones,
      title: "Ansprechpartner in Dubai",
      description:
        "Persönlicher Ansprechpartner vor Ort für alle Belange während und nach der Gründung.",
      features: [
        "Lokale Expertise",
        "Deutschsprachige Betreuung",
        "Persönliche Begleitung",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-white leading-tight">
            Unsere Komplettlösung für Ihre Firmengründung
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Von der ersten Beratung bis zur vollständigen Betriebsbereitschaft –
            wir kümmern uns um alles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
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

              <CardContent className="relative p-6 sm:p-8 h-full flex flex-col">
                {/* Icon container with enhanced styling */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <service.icon
                    className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300"
                    size={24}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-amber-50 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm sm:text-base"
                      >
                        <CheckCircle
                          className="text-amber-400 group-hover:text-amber-300 mr-2 mt-1 flex-shrink-0 transition-colors duration-300"
                          size={16}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-700 ease-out" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[0px] border-b-[0px] border-l-transparent border-b-amber-400/0 group-hover:border-l-[20px] group-hover:border-b-[20px] group-hover:border-b-amber-400/20 transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
