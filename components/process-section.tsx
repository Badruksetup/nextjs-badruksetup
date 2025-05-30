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
      duration: "5-10 Tage",
    },
    {
      number: 3,
      title: "Visum & Dokumente",
      description:
        "Beantragung Ihres Residenzvisums, Emirates ID und aller notwendigen Dokumente.",
      duration: "7-14 Tage",
    },
    {
      number: 4,
      title: "Geschäft aufnehmen",
      description:
        "Bankkontoeröffnung, Büroeinrichtung und Start Ihres Geschäftsbetriebs.",
      duration: "3-7 Tage",
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-slate-900/40 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">
            Ablauf
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">
            Ihre Firmengründung in 4 einfachen Schritten
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Unser strukturierter Prozess garantiert eine reibungslose und
            effiziente Gründung Ihres Unternehmens in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/25 transition-all duration-500 hover:bg-white/[0.08] shadow-2xl hover:shadow-teal-500/20 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/20 flex items-center justify-center mx-auto mb-6 group-hover:from-teal-400/40 group-hover:to-teal-500/30 transition-all duration-300 border border-teal-400/20">
                  <span className="text-teal-400 text-2xl font-bold group-hover:text-teal-300 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-100 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
                <div className="flex items-center justify-center text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                  <Clock className="text-sm mr-2" size={16} />
                  <span className="text-sm">{step.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Gesamtdauer: <span className="text-teal-400">2-4 Wochen</span>
                </h3>
                <p className="text-gray-300">
                  Die genaue Dauer hängt von der gewählten Freezone, der Art der
                  Lizenz und individuellen Faktoren ab. In dringenden Fällen
                  können Express-Optionen angeboten werden.
                </p>
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-teal-500/30 hover:scale-105">
                  Jetzt Termin vereinbaren
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
