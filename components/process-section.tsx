"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Erstberatung",
      description:
        "Analyse Ihrer Ziele und Bedürfnisse, Auswahl der optimalen Unternehmensstruktur.",
      duration: "1-3 Tage",
    },
    {
      number: 2,
      title: "Firmengründung",
      description:
        "Beantragung der Lizenz, Registierung und Erledigung aller behördlichen Formalitäten.",
      duration: "2-3 Tage",
    },
    {
      number: 3,
      title: "Visum & Dokumente",
      description:
        "Beantragung Ihres Residenzvisums, Emirates ID und aller notwendigen Dokumente.",
      duration: "3-4 Tage",
    },
    {
      number: 4,
      title: "Geschäft aufnehmen",
      description:
        "Bankkontoeröffnung, Büroeinrichtung und Start Ihres Geschäftsbetriebs.",
      duration: "3-4 Tage",
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Enhanced background gradient with amber tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-900/50 to-slate-800/30 pointer-events-none" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-2/3 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Ablauf
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-white leading-tight">
            Ihre Firmengründung in 4 einfachen Schritten
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Unser strukturierter Prozess garantiert eine reibungslose und
            effiziente Gründung Ihres Unternehmens in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Multi-layered glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <CardContent className="relative p-4 sm:p-6 text-center h-full flex flex-col">
                {/* Number circle with enhanced styling */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-500/20 border border-amber-400/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <span className="text-amber-400 text-xl sm:text-2xl font-bold group-hover:text-amber-300 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-amber-50 transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Duration with enhanced styling */}
                <div className="flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors duration-300 bg-amber-400/10 group-hover:bg-amber-400/20 rounded-full px-3 py-2 border border-amber-400/20">
                  <Clock
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                    size={14}
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {step.duration}
                  </span>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-700 ease-out" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary card with enhanced glassmorphism */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 shadow-2xl hover:shadow-amber-500/15">
          {/* Multi-layered background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="relative p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Gesamtdauer:{" "}
                  <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    1-2 Wochen
                  </span>
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-base sm:text-lg leading-relaxed">
                  Die genaue Dauer hängt von der gewählten Freezone, der Art der
                  Lizenz und individuellen Faktoren ab. In dringenden Fällen
                  können Express-Optionen angeboten werden.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 shadow-lg relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10">
                    Jetzt Termin vereinbaren
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
