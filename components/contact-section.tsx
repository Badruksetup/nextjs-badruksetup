// First, install EmailJS: npm install @emailjs/browser

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business: formData.business,
        message: formData.message,
        to_email: "your-email@example.com", // Your email address
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.business && formData.message;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl h-full">
              <CardContent className="p-8">
                <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">
                  Kontakt
                </span>
                <h2 className="text-4xl font-bold mt-4 mb-6 text-white group-hover:text-teal-50 transition-colors duration-300">
                  Lassen Sie sich beraten
                </h2>
                <p className="text-gray-300 mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Unser Expertenteam steht Ihnen für alle Fragen zur
                  Firmengründung in Dubai zur Verfügung. Vereinbaren Sie ein
                  unverbindliches Beratungsgespräch.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Dubai Office",
                      content: "Jumeirah Lakes Towers, Cluster Y, Dubai, UAE",
                    },
                    {
                      icon: Phone,
                      title: "Telefon Dubai",
                      content: "+971 4 123 4567",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "dubai@badruk-group.com",
                    },
                    {
                      icon: MessageCircle,
                      title: "WhatsApp",
                      content: "+971 50 123 4567",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start group/item cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mr-4 mt-1 group-hover/item:from-teal-400/30 group-hover/item:to-teal-500/20 transition-all duration-300 border border-teal-400/20">
                        <item.icon
                          className="text-teal-400 group-hover/item:text-teal-300 transition-colors duration-300"
                          size={20}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover/item:text-teal-100 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <Card className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Kontaktformular
                </h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span className="text-green-300">
                      Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                    <AlertCircle className="text-red-400 mr-3" size={20} />
                    <span className="text-red-300">
                      Fehler beim Senden. Bitte versuchen Sie es erneut.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-teal-400 transition-colors duration-300"
                      >
                        Name*
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ihr Name"
                        disabled={isSubmitting}
                        className={`bg-slate-800/30 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 disabled:opacity-50 ${
                          focusedField === "name"
                            ? "transform scale-[1.02] shadow-lg shadow-teal-500/10"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-teal-400 transition-colors duration-300"
                      >
                        Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ihre Email-Adresse"
                        disabled={isSubmitting}
                        className={`bg-slate-800/30 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 disabled:opacity-50 ${
                          focusedField === "email"
                            ? "transform scale-[1.02] shadow-lg shadow-teal-500/10"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-teal-400 transition-colors duration-300"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Ihre Telefonnummer"
                      disabled={isSubmitting}
                      className={`bg-slate-800/30 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 disabled:opacity-50 ${
                        focusedField === "phone"
                          ? "transform scale-[1.02] shadow-lg shadow-teal-500/10"
                          : ""
                      }`}
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-teal-400 transition-colors duration-300"
                    >
                      Geschäftstätigkeit*
                    </label>
                    <Select
                      value={formData.business}
                      onValueChange={(value) =>
                        handleInputChange("business", value)
                      }
                      onOpenChange={(open) =>
                        setFocusedField(open ? "business" : null)
                      }
                      disabled={isSubmitting}
                    >
                      <SelectTrigger
                        className={`bg-slate-800/30 border-gray-700 text-white transition-all duration-300 hover:border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 disabled:opacity-50 ${
                          focusedField === "business"
                            ? "transform scale-[1.02] shadow-lg shadow-teal-500/10 border-teal-400"
                            : ""
                        }`}
                      >
                        <SelectValue
                          placeholder="Bitte auswählen"
                          className="text-gray-300"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 backdrop-blur-xl border-gray-700 shadow-2xl">
                        {[
                          { value: "ecommerce", label: "E-Commerce" },
                          { value: "consulting", label: "Beratung" },
                          { value: "it", label: "IT-Dienstleistungen" },
                          { value: "trading", label: "Handel" },
                          { value: "real-estate", label: "Immobilien" },
                          { value: "finance", label: "Finanzdienstleistungen" },
                          { value: "manufacturing", label: "Produktion" },
                          { value: "other", label: "Andere" },
                        ].map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-white hover:bg-teal-500/20 focus:bg-teal-500/20 transition-all duration-200 cursor-pointer"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-teal-400 transition-colors duration-300"
                    >
                      Ihre Nachricht*
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Ihre Fragen oder Anmerkungen"
                      disabled={isSubmitting}
                      className={`bg-slate-800/30 border-gray-700 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 resize-none disabled:opacity-50 ${
                        focusedField === "message"
                          ? "transform scale-[1.02] shadow-lg shadow-teal-500/10"
                          : ""
                      }`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-teal-500/30 hover:scale-[1.02] focus:ring-4 focus:ring-teal-400/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Beratung anfordern"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
