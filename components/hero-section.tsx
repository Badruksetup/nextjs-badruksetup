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
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
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
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden">
              <span className="relative z-10">Kostenlos beraten lassen</span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/[0.08] backdrop-blur-xl border-white/20 text-white hover:bg-white/[0.15] hover:border-amber-400/30 font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden"
            >
              <Link target="_blank" href={"https://wa.me/971501234567"}>
                {/* Gold gradient overlay for button */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <MessageCircle className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">WhatsApp Chat</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
