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
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Freezone-Gründungen: 5 – 10 Werktage</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Mainland-Gründungen: 10 – 15 Werktage</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Freezone:</strong> Ideal für internationale Geschäfte,
                100 % Eigentum
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Mainland:</strong> Für lokale Geschäfte, benötigt 51 %
                lokalen Partner
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Professional License:</strong> Für Dienstleister /
                Freiberufler
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Lizenzgebühren: AED 10 000 – 50 000</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Registrierung: AED 2 000 – 10 000</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Visum: AED 3 000 – 7 000 / Person</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Biometrische Daten (Emirates ID)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Medizinische Untersuchung</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Reisepass-Kopie (Min. 6 Monate gültig)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Passfoto (weißer Hintergrund)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>Wohnsitznachweis (z. B. Stromrechnung)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      id="faq"
    >
      {/* Enhanced background gradient with amber tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 pointer-events-none" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-2/3 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-white leading-tight">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Hier finden Sie Antworten auf die wichtigsten Fragen zur
            Firmengründung in Dubai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Multi-layered glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <CardContent className="relative p-4 sm:p-6 lg:p-8">
                <button
                  className="flex justify-between items-center w-full text-left group/button"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white pr-4 group-hover:text-amber-50 transition-colors duration-300 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="transition-all duration-300 transform group-hover/button:scale-110 flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp
                        className="text-amber-400 group-hover:text-amber-300 ml-2 transition-all duration-300 rotate-0"
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        className="text-amber-400 group-hover:text-amber-300 ml-2 transition-all duration-300"
                        size={20}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openItems.includes(index)
                      ? "max-h-[500px] opacity-100 mt-4 sm:mt-6"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="text-gray-300 group-hover:text-gray-200 transform transition-all duration-500 ease-out text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-700 ease-out" />

                {/* Corner accent for open items */}
                {openItems.includes(index) && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[0px] border-b-[0px] border-l-transparent border-b-amber-400/0 group-hover:border-l-[20px] group-hover:border-b-[20px] group-hover:border-b-amber-400/20 transition-all duration-500" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
