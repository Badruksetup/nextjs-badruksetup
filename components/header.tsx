"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  ChevronRight,
  ClipboardList,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BadrukLogo from "./logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Start", icon: Home },
    { href: "#why-dubai", label: "Warum Dubai?", icon: Building2 },
    { href: "#services", label: "Leistungen", icon: Zap },
    { href: "#process", label: "Ablauf", icon: ClipboardList },
    { href: "#contact", label: "Kontakt", icon: Phone },
  ];

  const contactInfo = [
    { icon: Phone, label: "+971 585 606 084", href: "tel:+971585606084" },
    {
      icon: Mail,
      label: "Info@badrukgroup.com",
      href: "mailto:Info@badrukgroup.com",
    },
    { icon: MapPin, label: "Dubai, UAE", href: "#location" },
  ];

  // Handle mobile menu toggle
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle link clicks with Next.js router
  const handleLinkClick = (href: string) => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);

      // Handle anchor links (hash links)
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Handle external links (tel:, mailto:, http://, https://)
      else if (href.startsWith("tel:") || href.startsWith("mailto:")) {
        window.location.href = href;
      } else if (href.startsWith("http://") || href.startsWith("https://")) {
        window.open(href, "_blank", "noopener,noreferrer");
      }
      // Handle internal navigation using Next.js router
      else {
        try {
          router.push(href);
        } catch (error) {
          // Fallback to window.location if router fails
          window.location.href = href;
        }
      }
    }, 200);
  };

  return (
    <>
      <header className="fixed w-full z-50 top-0">
        {/* Background blur overlay */}
        <div className="absolute inset-0" />

        <div className="container mx-auto px-4 sm:px-6 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <BadrukLogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="bg-gradient-to-r from-white/[0.08] via-white/[0.12] to-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-600/5 rounded-2xl pointer-events-none" />
                <ul className="flex space-x-8 relative">
                  {navItems.map((item) => (
                    <li key={item.href} className="relative group">
                      <button
                        onClick={() => handleLinkClick(item.href)}
                        className="font-medium text-white hover:text-amber-300 transition-all duration-300 relative inline-block py-1 bg-transparent border-none cursor-pointer"
                      >
                        {item.label}
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full rounded-full" />
                        {/* Glow effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/50 blur-sm transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Custom Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white hover:bg-white/[0.15] hover:border-amber-400/30 transition-all duration-300 shadow-lg relative overflow-hidden p-3 rounded-xl group"
            >
              {/* Gold gradient overlay for button */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <Menu
                  className={`h-5 w-5 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Button
                onClick={() => handleLinkClick("/#contact")}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-[1.02] shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 text-white">
                  Kostenlos beraten lassen
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Custom Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop with blur */}
          <div
            className={`absolute inset-0 bg-slate-900/60 backdrop-blur-2xl transition-all duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
            onClick={toggleMenu}
          />

          {/* Main Modal Container */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
              isAnimating
                ? "opacity-0 scale-95 translate-y-8"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {/* Glassmorphism Menu Card */}
            <div className="relative w-full max-w-md h-[85vh] overflow-hidden">
              {/* Multi-layered glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.12] backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-800/10 rounded-3xl" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 animate-pulse" />
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.12] backdrop-blur-3xl" />

              {/* Content Container */}
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex-shrink-0 p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-sm">
                          B
                        </span>
                      </div>
                      <span className="text-white font-semibold text-lg">
                        Menu
                      </span>
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white hover:bg-white/[0.15] hover:border-amber-400/30 transition-all duration-300 relative p-2 rounded-xl group"
                    >
                      <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Navigation */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  <div className="p-6 pb-8">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <button
                          key={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className="w-full text-left group relative overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: `slideInFromRight 0.5s ease-out forwards`,
                          }}
                        >
                          {/* Background layers */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.06] group-hover:from-white/[0.08] group-hover:to-white/[0.12] transition-all duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-300" />

                          <div className="relative p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                                <item.icon className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                              </div>
                              <span className="text-white font-medium text-lg group-hover:text-amber-300 transition-colors duration-300">
                                {item.label}
                              </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" />
                          </div>

                          {/* Animated underline */}
                          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </button>
                      ))}
                    </div>

                    {/* Contact Information */}
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <h3 className="text-white/60 font-medium text-sm uppercase tracking-wider mb-4">
                        Kontakt
                      </h3>
                      <div className="space-y-2">
                        {contactInfo.map((contact, index) => (
                          <button
                            key={index}
                            onClick={() => handleLinkClick(contact.href)}
                            className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-300 group text-left"
                          >
                            <contact.icon className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-white/80 group-hover:text-white text-sm">
                              {contact.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <button
                        onClick={() => handleLinkClick("/#contact")}
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-[1.02] shadow-lg relative overflow-hidden group"
                      >
                        <span className="text-white relative z-10 text-lg">
                          Kostenlos beraten lassen
                        </span>

                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgb(245, 158, 11),
            rgb(234, 179, 8)
          );
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgb(217, 119, 6),
            rgb(202, 138, 4)
          );
        }
      `}</style>
    </>
  );
}
