"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function TrustSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    companies: 0,
    freezones: 0,
    success: 0,
    support: "24/7",
  });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      key: "companies",
      number: "200+",
      label: "gegründete Unternehmen",
      target: 200,
    },
    { key: "freezones", number: "15+", label: "Freezones", target: 15 },
    { key: "success", number: "98%", label: "Erfolgsquote", target: 98 },
    { key: "support", number: "24/7", label: "Support", target: null },
  ];

  const testimonials = [
    {
      name: "Sarah Müller",
      role: "E-Commerce Unternehmerin",
      image: "/sarah.jpg",
      text: "Die Badruk Group hat meine Firmengründung in der DMCC Freezone komplett übernommen. Innerhalb von 3 Wochen hatte ich meine Lizenz und das Visum - alles reibungslos und professionell.",
      rating: 5,
    },
    {
      name: "Thomas Wagner",
      role: "IT-Dienstleister",
      image: "/thomas.jpg",
      text: "Besonders beeindruckt hat mich die kompetente Beratung zur steueroptimierten Struktur. Die lokale Betreuung in Dubai ist erstklassig - ich fühle mich rundum gut aufgehoben.",
      rating: 5,
    },
    {
      name: "Julia Schmidt",
      role: "Immobilienberaterin",
      image: "/julia.jpg",
      text: "Von der ersten Beratung bis zur Bankkontoeröffnung - das Team hat jeden Schritt perfekt begleitet. Die Visumsbeantragung für meine Familie war unkompliziert und schnell.",
      rating: 4.5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        companies: Math.floor(200 * easeOutQuart(progress)),
        freezones: Math.floor(15 * easeOutQuart(progress)),
        success: Math.floor(98 * easeOutQuart(progress)),
        support: "24/7",
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({
          companies: 200,
          freezones: 15,
          success: 98,
          support: "24/7",
        });
      }
    }, 1000 / frameRate);
  };

  // Easing function for smooth animation
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

  const formatStatValue = (key: string, value: number | string) => {
    switch (key) {
      case "companies":
        return `${value}+`;
      case "freezones":
        return `${value}+`;
      case "success":
        return `${value}%`;
      case "support":
        return value;
      default:
        return value;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">
            Erfahrung
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 text-white">
            Vertrauen Sie auf unsere Erfahrung
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Seit 2015 unterstützen wir Unternehmer bei der Gründung und
            Expansion in den VAE.
          </p>
        </div>

        <Card className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center group">
                  <span className="text-4xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors duration-300 block">
                    {formatStatValue(
                      stat.key,
                      stat.key === "support"
                        ? counts.support
                        : counts[stat.key as keyof typeof counts]
                    )}
                  </span>
                  <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 hover:bg-white/[0.08] shadow-2xl hover:shadow-teal-500/10"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-teal-100 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="fill-current" size={16} />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="fill-current opacity-50" size={16} />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Bereit für Ihre Firmengründung in Dubai?
                </h3>
                <p className="text-gray-300">
                  Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch
                  mit unseren Experten.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
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
