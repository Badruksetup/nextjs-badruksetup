"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function TrustSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    companies: 0,
    freezones: 0,
    success: 0,
    support: "24/7",
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      key: "companies",
      number: "278+",
      label: "gegründete Unternehmen",
      target: 278,
    },
    { key: "freezones", number: "7+", label: "Freezones", target: 7 },
    { key: "success", number: "100%", label: "Erfolgsquote", target: 100 },
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
          // Add a small delay to ensure the animation runs smoothly on mobile
          setTimeout(() => {
            animateStats();
          }, 100);
        }
      },
      { threshold: 0.3 } // Reduced threshold for better mobile detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const animateStats = () => {
    const duration = 2500; // Increased duration for smoother mobile animation
    const frameRate = 30; // Reduced frame rate for better mobile performance
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1); // Ensure progress doesn't exceed 1

      setCounts({
        companies: Math.floor(278 * easeOutQuart(progress)),
        freezones: Math.floor(7 * easeOutQuart(progress)),
        success: Math.floor(100 * easeOutQuart(progress)),
        support: "24/7",
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({
          companies: 278,
          freezones: 7,
          success: 100,
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/6 right-1/6 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-3/4 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm font-semibold">
            Erfahrung
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-white leading-tight">
            Vertrauen Sie auf unsere Erfahrung
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Seit 2015 unterstützen wir Unternehmer bei der Gründung und
            Expansion in den VAE.
          </p>
        </div>

        {/* Stats Card with Enhanced Glassmorphism */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 shadow-2xl hover:shadow-amber-500/15 mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="relative p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center group/stat">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 group-hover/stat:text-amber-300 transition-colors duration-300 block">
                    {formatStatValue(
                      stat.key,
                      stat.key === "support"
                        ? counts.support
                        : counts[stat.key as keyof typeof counts]
                    )}
                  </span>
                  <p className="text-gray-300 mt-2 group-hover/stat:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Carousel */}
        <div className="mb-12 sm:mb-16">
          <div className="relative">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 shadow-2xl hover:shadow-amber-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="relative p-6 sm:p-8">
                <div className="min-h-[280px] sm:min-h-[200px] flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30 flex items-center justify-center mr-4 overflow-hidden">
                      <Image
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentTestimonial].name}
                        width={64}
                        height={64}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-amber-50 transition-colors duration-300 text-lg sm:text-xl">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-amber-400 text-sm sm:text-base group-hover:text-amber-300 transition-colors duration-300">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 italic mb-6 group-hover:text-gray-200 transition-colors duration-300 text-base sm:text-lg leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                      {[
                        ...Array(
                          Math.floor(testimonials[currentTestimonial].rating)
                        ),
                      ].map((_, i) => (
                        <Star key={i} className="fill-current" size={18} />
                      ))}
                      {testimonials[currentTestimonial].rating % 1 !== 0 && (
                        <Star className="fill-current opacity-50" size={18} />
                      )}
                    </div>

                    {/* Carousel controls */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 text-white hover:text-amber-300 transition-all duration-300 flex items-center justify-center group/btn"
                      >
                        <ChevronLeft
                          size={20}
                          className="group-hover/btn:scale-110 transition-transform duration-300"
                        />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 text-white hover:text-amber-300 transition-all duration-300 flex items-center justify-center group/btn"
                      >
                        <ChevronRight
                          size={20}
                          className="group-hover/btn:scale-110 transition-transform duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-amber-400 scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card with Enhanced Glassmorphism */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 shadow-2xl hover:shadow-amber-500/15">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/8 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="relative p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Bereit für Ihre Firmengründung in Dubai?
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-base sm:text-lg leading-relaxed">
                  Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch
                  mit unseren Experten.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 shadow-lg relative overflow-hidden text-sm sm:text-base">
                  <Link href={"/#contact"}>
                    <span className="relative z-10">
                      Jetzt Termin vereinbaren
                    </span>
                  </Link>
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
