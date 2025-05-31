"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Laptop,
  RotateCcw,
  Store,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BusinessType = "Mainland" | "Freezone" | null;
type VisaCount = "1 Visa" | "2 Visa" | "3 Visa" | null;
type Activity = string | null;

export function CalculatorSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState<BusinessType>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaCount>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity>(null);
  const router = useRouter();

  const progress = (currentStep / 4) * 100;

  const freezoneActivities = [
    {
      id: "webdesign",
      title: "Webdesign",
      description: "Digitale Dienstleistungen, Website-Entwicklung",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description: "Online-Handel mit physischen Produkten",
    },
    {
      id: "consulting",
      title: "Consulting",
      description: "Unternehmensberatung, Managementberatung",
    },
    {
      id: "marketing",
      title: "Marketingagentur",
      description: "Digitale Marketingdienstleistungen",
    },
    {
      id: "coaching",
      title: "Coaching",
      description: "Business Coaching, Lebensberatung",
    },
    {
      id: "import",
      title: "Import/Export digital",
      description: "Handel mit digitalen Produkten/Lizenzen",
    },
  ];

  const mainlandActivities = [
    {
      id: "restaurant",
      title: "Restaurant",
      description: "Gastronomiebetrieb, Café, Imbiss",
    },
    {
      id: "hairdresser",
      title: "Friseursalon",
      description: "Hairstyling, Beauty-Dienstleistungen",
    },
    {
      id: "workshop",
      title: "Autowerkstatt",
      description: "KFZ-Reparaturen, Wartungen",
    },
    {
      id: "cleaning",
      title: "Reinigungsfirma",
      description: "Gebäudereinigung, Haushaltsdienstleistungen",
    },
    {
      id: "electrician",
      title: "Elektrikerbetrieb",
      description: "Elektroinstallationen, Wartungen",
    },
    {
      id: "retail",
      title: "Einzelhandel",
      description: "Ladengeschäft, Retail-Store",
    },
  ];

  const nextStep = () => {
    if (currentStep === 1 && selectedType) {
      setCurrentStep(2);
    } else if (currentStep === 2 && selectedVisa) {
      setCurrentStep(3);
    } else if (currentStep === 3 && selectedActivity) {
      setCurrentStep(4);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const restart = () => {
    setCurrentStep(1);
    setSelectedType(null);
    setSelectedVisa(null);
    setSelectedActivity(null);
  };

  const openContactForm = () => {
    console.log("Opening contact form...");
    router.push("/#contact"); // Navigate to /contact
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Kalkulator
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">
            Finden Sie die perfekte Lösung für Ihre Firmengründung
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Beantworten Sie 3 einfache Fragen und erhalten Sie sofort eine
            Preisübersicht.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-300">
                Schritt {currentStep} von 4
              </span>
              <span className="text-sm text-gray-300">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1: Business Type */}
          {currentStep === 1 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  1. Planen Sie ein physisches Geschäft in Dubai?
                </h3>
                <p className="text-gray-300 mb-8">
                  Wählen Sie die Option, die am besten zu Ihrem Vorhaben passt:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedType === "Mainland"
                        ? "bg-amber-500/20 border-amber-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedType("Mainland")}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                        <Store className="text-amber-400 text-2xl" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-white">
                        Ja, Mainland
                      </h4>
                      <p className="text-gray-300">
                        Für Restaurants, Werkstätten, Ladengeschäfte und andere
                        physische Geschäfte
                      </p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedType === "Freezone"
                        ? "bg-amber-500/20 border-amber-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedType("Freezone")}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                        <Laptop className="text-amber-400 text-2xl" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-white">
                        Nein, Freezone
                      </h4>
                      <p className="text-gray-300">
                        Für Online-Business, Consulting, Webdesign und
                        internationale Geschäfte
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-right">
                  <Button
                    onClick={nextStep}
                    disabled={!selectedType}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
                  >
                    Weiter <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Visa Count */}
          {currentStep === 2 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  2. Wie viele Visa benötigen Sie?
                </h3>
                <p className="text-gray-300 mb-8">
                  Wählen Sie die Anzahl der benötigten Aufenthaltserlaubnisse:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {["1 Visa", "2 Visa", "3 Visa"].map((visa, index) => (
                    <Card
                      key={visa}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedVisa === visa
                          ? "bg-amber-500/20 border-amber-400"
                          : "bg-white/5 border-white/20 hover:bg-white/10"
                      }`}
                      onClick={() => setSelectedVisa(visa as VisaCount)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-amber-400 font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{visa}</h4>
                        <p className="text-gray-300 text-sm">
                          {index === 0
                            ? "Nur für Sie"
                            : `Sie + ${index} Mitarbeiter`}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="bg-white/10 border-white/20"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!selectedVisa}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
                  >
                    Weiter <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Activity Type */}
          {currentStep === 3 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  3. Wählen Sie Ihre Geschäftsaktivität
                </h3>
                <p className="text-gray-300 mb-8">
                  Wählen Sie die Aktivität, die am besten zu Ihrem Business
                  passt:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {(selectedType === "Freezone"
                    ? freezoneActivities
                    : mainlandActivities
                  ).map((activity) => (
                    <Card
                      key={activity.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedActivity === activity.title
                          ? "bg-amber-500/20 border-amber-400"
                          : "bg-white/5 border-white/20 hover:bg-white/10"
                      }`}
                      onClick={() => setSelectedActivity(activity.title)}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-bold text-white mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {activity.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="bg-white/10 border-white/20"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!selectedActivity}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
                  >
                    Weiter <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <CheckCircle
                    className="text-5xl text-amber-400 mb-4 mx-auto"
                    size={80}
                  />
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Ihr Firmengründungs-Paket
                  </h3>
                  <p className="text-gray-300">
                    Basierend auf Ihren Angaben empfehlen wir:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">
                      Unternehmensform
                    </h4>
                    <p className="text-amber-400 font-medium">{selectedType}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Anzahl Visa</h4>
                    <p className="text-amber-400 font-medium">{selectedVisa}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Aktivität</h4>
                    <p className="text-amber-400 font-medium">
                      {selectedActivity}
                    </p>
                  </div>
                </div>

                {/* Blurred Price Section */}
                <div className="text-center py-6 border-t border-b border-gray-700 my-6 relative">
                  <p className="text-gray-300 mb-2">
                    Gesamtkosten inkl. aller Gebühren
                  </p>
                  <div className="relative">
                    <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent blur-md select-none">
                      8.999 €
                    </div>
                    {/* Overlay with lock icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-amber-400/30 rounded-xl px-6 py-3 flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-amber-400 rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-sm"></div>
                        </div>
                        <span className="text-amber-400 font-medium text-sm">
                          Preis gesperrt
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Alle Preise inkl. MwSt.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button
                    variant="outline"
                    onClick={restart}
                    className="bg-white/10 border-white/20"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Neu starten
                  </Button>
                  <Button
                    onClick={openContactForm}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 relative overflow-hidden"
                  >
                    <span className=" flex gap-2 items-center  relative z-10">
                      Jetzt Sofort Preis Erhalten{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
