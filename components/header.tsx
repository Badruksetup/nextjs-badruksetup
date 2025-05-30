"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import BadrukLogo from "./logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Start" },
    { href: "#why-dubai", label: "Warum Dubai?" },
    { href: "#services", label: "Leistungen" },
    { href: "#process", label: "Ablauf" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <header className="fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <BadrukLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-3">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-medium text-white hover:text-teal-400 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 backdrop-blur-md border-white/20"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-slate-900/95 backdrop-blur-md border-white/20"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-teal-400 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                  Kostenlos beraten lassen
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* CTA Button */}
          <Button className="hidden md:block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-xl">
            Kostenlos beraten lassen
          </Button>
        </div>
      </div>
    </header>
  );
}
