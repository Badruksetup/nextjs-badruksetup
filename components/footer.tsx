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
        { name: "Impressum", href: "/legal/imprint" },
        { name: "Datenschutz", href: "/legal/privacy-policy" },
        { name: "AGB", href: "/legal/terms-of-service" },
        { name: "Cookie-Richtlinie", href: "/legal/cookie-policy" },
        { name: "Nutzungsbedingungen", href: "/legal/acceptable-use" },
        { name: "DMCA", href: "/legal/dmca-policy" },
        { name: "Rückerstattung", href: "/legal/refund-policy" },
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
    <footer className="py-12 bg-slate-900 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <BadrukLogo />
            <p className="text-gray-400 mt-4 max-w-sm">
              Ihr vertrauensvoller Partner für Firmengründungen in Dubai. Wir
              unterstützen Unternehmer bei der erfolgreichen Expansion in die
              VAE mit umfassender Beratung und professioneller Betreuung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
            {footerSections.map((section, index) => (
              <div key={index} className="group">
                <h4 className="text-white font-bold mb-4 group-hover:text-teal-100 transition-colors duration-300">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 inline-block relative group/link"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover/link:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Badruk Group. Alle Rechte vorbehalten.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm hidden md:inline">
                Folgen Sie uns:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-teal-500/20 transition-all duration-300">
                    <social.icon size={18} />
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
