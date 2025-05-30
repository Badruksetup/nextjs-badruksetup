"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Percent, UserCheck, CreditCard, Globe, Shield, DollarSign, Building, Handshake } from "lucide-react"

export function WhyDubaiSection() {
  const benefits = [
    {
      icon: Percent,
      title: "0% Körperschaftssteuer",
      description: "Keine Besteuerung von Unternehmensgewinnen in den meisten Freezones.",
    },
    {
      icon: UserCheck,
      title: "100% Eigentum",
      description: "Volle Eigentumsrechte ohne lokalen Partner in Freezone-Unternehmen.",
    },
    {
      icon: CreditCard,
      title: "Residenzvisum",
      description: "Inklusive Aufenthaltserlaubnis für Unternehmer und Familie.",
    },
    {
      icon: Globe,
      title: "Strategische Lage",
      description: "Idealer Standort für Geschäfte in Europa, Asien und Afrika.",
    },
    {
      icon: Shield,
      title: "Politische Stabilität",
      description: "Sicherer Rechtsrahmen und stabile politische Verhältnisse.",
    },
    {
      icon: DollarSign,
      title: "Kapitalflusssicherheit",
      description: "Keine Beschränkungen bei Gewinnausschüttung oder Kapitaltransfer.",
    },
    {
      icon: Building,
      title: "Moderne Infrastruktur",
      description: "Weltklasse-Büroflächen, Logistik und Technologie.",
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Zugang zu einem dynamischen internationalen Business-Ökosystem.",
    },
  ]

  return (
    <section id="why-dubai" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">Vorteile</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">Warum eine Firmengründung in Dubai?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Die Vereinigten Arabischen Emirate bieten einzigartige Vorteile für Unternehmer und Investoren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="text-teal-400 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
