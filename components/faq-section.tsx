"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Wie lange dauert eine Firmengründung in Dubai?",
      answer: (
        <div>
          <p>
            Die Dauer variiert je nach Freezone und Lizenztyp. In der Regel
            können Sie mit folgenden Zeiträumen rechnen:
          </p>
          <ul className="mt-2 space-y-2 pl-5">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Freezone-Gründungen: 5 – 10 Werktage</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Mainland-Gründungen: 10 – 15 Werktage</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Express-Optionen: teilweise in 48 Stunden möglich</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Welche Firma ist die richtige für mich?",
      answer: (
        <div>
          <p>Die optimale Unternehmensform hängt von mehreren Faktoren ab:</p>
          <ul className="mt-2 space-y-2 pl-5">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Freezone:</strong> Ideal für internationale Geschäfte,
                100 % Eigentum
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Mainland:</strong> Für lokale Geschäfte, benötigt 51 %
                lokalen Partner
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Professional License:</strong> Für Dienstleister /
                Freiberufler
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Commercial License:</strong> Für Handel und
                Warenvertrieb
              </span>
            </li>
          </ul>
          <p className="mt-3">
            Im persönlichen Gespräch analysieren wir Ihre Anforderungen und
            empfehlen die passende Lösung.
          </p>
        </div>
      ),
    },
    {
      question: "Was kostet eine Firmengründung in Dubai wirklich?",
      answer: (
        <div>
          <p>
            Die Kosten variieren je nach Freezone, Lizenztyp und
            Zusatz-Services:
          </p>
          <ul className="mt-2 space-y-2 pl-5">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Lizenzgebühren: AED 10 000 – 50 000</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Registrierung: AED 2 000 – 10 000</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Visum: AED 3 000 – 7 000 / Person</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Büroadresse: AED 5 000 – 20 000 p.a.</span>
            </li>
          </ul>
          <p className="mt-3">
            Unsere Komplettpakete starten bei AED 15 000 (≈ 3 700 €) inkl.
            Visum.
          </p>
        </div>
      ),
    },
    {
      question: "Kann ich mein Unternehmen komplett online gründen?",
      answer: (
        <div>
          <p>
            Ja, die meisten Freezones ermöglichen eine vollständige
            Online-Gründung. Vor Ort nötig sind nur:
          </p>
          <ul className="mt-2 space-y-2 pl-5">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Biometrische Daten (Emirates ID)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Medizinische Untersuchung</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Unterschrift der Originaldokumente</span>
            </li>
          </ul>
          <p className="mt-3">
            Mit unserem „Remote-Service" sind Sie nur 2–3 Tage in Dubai.
          </p>
        </div>
      ),
    },
    {
      question: "Welche Unterlagen benötige ich für die Gründung?",
      answer: (
        <div>
          <p>Grundsätzlich erforderlich sind:</p>
          <ul className="mt-2 space-y-2 pl-5">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Reisepass-Kopie (Min. 6 Monate gültig)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Passfoto (weißer Hintergrund)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Wohnsitznachweis (z. B. Stromrechnung)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Je nach Aktivität: Lebenslauf / Referenzen</span>
            </li>
          </ul>
          <p className="mt-3">
            Dokumente müssen auf Englisch vorliegen oder beglaubigt übersetzt
            werden.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 relative" id="faq">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/30 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zur
            Firmengründung in Dubai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:bg-white/[0.05] shadow-2xl hover:shadow-teal-500/10"
            >
              <CardContent className="p-6">
                <button
                  className="flex justify-between items-center w-full text-left group"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-bold text-white pr-4 group-hover:text-teal-100 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="transition-all duration-300 transform group-hover:scale-110">
                    {openItems.includes(index) ? (
                      <ChevronUp
                        className="text-teal-400 ml-2 flex-shrink-0 transition-all duration-300 rotate-0"
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        className="text-teal-400 ml-2 flex-shrink-0 transition-all duration-300 group-hover:text-teal-300"
                        size={20}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="text-gray-300 transform transition-all duration-500 ease-out">
                    {faq.answer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
