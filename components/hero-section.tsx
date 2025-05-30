"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    // Use passive listeners for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Dubai skyline background"
          fill
          className="object-cover scale-110"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white animate-in slide-in-from-bottom duration-1000">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Ihre Firmengründung in Dubai
            </span>
            <br />
            professionell, schnell und steueroptimiert
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-200">
            Wir begleiten Sie von der Gründung bis zum Visum – persönlich &
            komplett betreut.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in slide-in-from-bottom duration-1000 delay-400">
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
              Kostenlos beraten lassen
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              <Link target="_blank" href={"https://wa.me/971501234567"}>
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Chat
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
