"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, FileText, CreditCard, Building2, MapPin, Headphones, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Unternehmensberatung & Strukturwahl",
      description:
        "Individuelle Beratung zur optimalen Rechtsform (Freezone/Mainland) und Geschäftsstruktur für Ihr Vorhaben.",
      features: ["Freezone vs. Mainland Analyse", "Branchenspezifische Beratung", "Steueroptimierte Strukturen"],
    },
    {
      icon: FileText,
      title: "Lizenzbeantragung & Firmenregistrierung",
      description: "Professionelle Abwicklung aller behördlichen Verfahren für eine reibungslose Gründung.",
      features: ["Auswahl der passenden Lizenz", "Behördliche Anträge", "Notarielle Beglaubigungen"],
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
      description: "Unterstützung bei der Eröffnung eines Geschäftskontos bei führenden Banken in den VAE.",
      features: ["Auswahl der passenden Bank", "Dokumentenvorbereitung", "Persönliche Begleitung"],
    },
    {
      icon: MapPin,
      title: "Büro-/Flexidesk-Lösungen",
      description: "Vermittlung von flexiblen Büroräumen und virtuellen Büroadressen gemäß Ihren Anforderungen.",
      features: ["Virtuelle Büroadresse", "Flexible Coworking Spaces", "Dedizierte Büroflächen"],
    },
    {
      icon: Headphones,
      title: "Ansprechpartner in Dubai",
      description: "Persönlicher Ansprechpartner vor Ort für alle Belange während und nach der Gründung.",
      features: ["Lokale Expertise", "Deutschsprachige Betreuung", "Persönliche Begleitung"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">Leistungen</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">Unsere Komplettlösung für Ihre Firmengründung</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Von der ersten Beratung bis zur vollständigen Betriebsbereitschaft – wir kümmern uns um alles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/15 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6">
                  <service.icon className="text-teal-400 text-2xl" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 text-gray-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-teal-400 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
