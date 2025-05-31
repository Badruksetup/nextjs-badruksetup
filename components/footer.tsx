"use client";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import BadrukLogo from "./logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Firmengründung",
      links: [
        { name: "Freezone", href: "#freezone" },
        { name: "Mainland", href: "#mainland" },
        { name: "Offshore", href: "#offshore" },
        { name: "Kosten", href: "#kosten" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Visum", href: "#visum" },
        { name: "Bankkonto", href: "#bankkonto" },
        { name: "Büroadresse", href: "#bueroadresse" },
        { name: "Buchhaltung", href: "#buchhaltung" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { name: "Nutzungsbedingungen", href: "/legal/acceptable-use" },
        { name: "Impressum", href: "/legal/imprint" },
        { name: "Datenschutz", href: "/legal/privacy-policy" },
        { name: "Cookie-Richtlinie", href: "/legal/cookie-policy" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/badruk-group",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/badrukgroup",
      label: "Twitter",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/badrukgroup",
      label: "Facebook",
    },
  ];

  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced background gradient with amber tones */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/30 to-transparent pointer-events-none" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <BadrukLogo />
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 mt-4 max-w-sm text-base sm:text-lg leading-relaxed">
              Ihr Partner für Firmengründungen in Dubai – mit Beratung und
              umfassender Unterstützung für Ihren Erfolg in den VAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:w-2/3">
            {footerSections.map((section, index) => (
              <div key={index} className="group">
                <h4 className="text-white font-bold mb-4 sm:mb-6 group-hover:text-amber-50 transition-colors duration-300 text-lg sm:text-xl">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block relative group/link text-sm sm:text-base"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover/link:w-full rounded-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-transparent via-gray-800/50 to-transparent pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base text-center md:text-left">
                © {currentYear} Badruk Group. Alle Rechte vorbehalten.
              </p>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <span className="text-gray-500 text-sm hidden md:inline">
                Folgen Sie uns:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-700/30 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 border border-slate-700/50 group-hover:border-amber-400/30 transition-all duration-300 backdrop-blur-sm">
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
