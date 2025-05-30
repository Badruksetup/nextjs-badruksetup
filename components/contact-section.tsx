"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
              <CardContent className="p-8">
                <span className="text-teal-400 uppercase tracking-widest text-sm font-semibold">Kontakt</span>
                <h2 className="text-4xl font-bold mt-4 mb-6 text-white">Lassen Sie sich beraten</h2>
                <p className="text-gray-300 mb-8">
                  Unser Expertenteam steht Ihnen für alle Fragen zur Firmengründung in Dubai zur Verfügung. Vereinbaren
                  Sie ein unverbindliches Beratungsgespräch.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Dubai Office</h4>
                      <p className="text-gray-300">Jumeirah Lakes Towers, Cluster Y, Dubai, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Telefon Dubai</h4>
                      <p className="text-gray-300">+971 4 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email</h4>
                      <p className="text-gray-300">dubai@badruk-group.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4 mt-1">
                      <MessageCircle className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                      <p className="text-gray-300">+971 50 123 4567</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Kontaktformular</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name*
                      </label>
                      <Input
                        id="name"
                        placeholder="Ihr Name"
                        className="bg-slate-800/30 border-gray-700 focus:border-teal-400 text-white placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ihre Email-Adresse"
                        className="bg-slate-800/30 border-gray-700 focus:border-teal-400 text-white placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className="bg-slate-800/30 border-gray-700 focus:border-teal-400 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                      Geschäftstätigkeit*
                    </label>
                    <Select>
                      <SelectTrigger className="bg-slate-800/30 border-gray-700 focus:border-teal-400 text-white">
                        <SelectValue placeholder="Bitte auswählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-gray-700">
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="consulting">Beratung</SelectItem>
                        <SelectItem value="it">IT-Dienstleistungen</SelectItem>
                        <SelectItem value="trading">Handel</SelectItem>
                        <SelectItem value="other">Andere</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Ihre Nachricht*
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Ihre Fragen oder Anmerkungen"
                      className="bg-slate-800/30 border-gray-700 focus:border-teal-400 text-white placeholder-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl"
                  >
                    Beratung anfordern
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
