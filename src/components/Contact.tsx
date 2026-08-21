"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from "lucide-react";
import { restaurantInfo } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

export function Contact() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.phone.replace(/\D/g, "")}?text=Hello!%20I'd%20like%20to%20inquire%20about%20LITRE%20BBQ.`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs uppercase tracking-widest text-accent-bright block mb-4">Visit Us</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight uppercase">
            VISIT LITRE
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <InfoCard
                icon={<MapPin className="w-6 h-6" />}
                title="ADDRESS"
                content={restaurantInfo.address}
                action={
                  <a
                    href={restaurantInfo.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-bright hover:text-accent-primary font-body text-sm uppercase tracking-wider flex items-center gap-1"
                  >
                    Get Directions
                    <Navigation className="w-4 h-4" />
                  </a>
                }
              />

              <InfoCard
                icon={<Phone className="w-6 h-6" />}
                title="PHONE"
                content={restaurantInfo.phone}
                action={
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                    className="text-accent-bright hover:text-accent-primary font-body text-sm uppercase tracking-wider"
                  >
                    Call Now
                  </a>
                }
              />

              <InfoCard
                icon={<MessageCircle className="w-6 h-6" />}
                title="WHATSAPP"
                content="Chat with us directly"
                action={
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-body text-sm uppercase tracking-wider rounded-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message Us
                  </a>
                }
              />

              <InfoCard
                icon={<Mail className="w-6 h-6" />}
                title="EMAIL"
                content={restaurantInfo.email}
                action={
                  <a
                    href={`mailto:${restaurantInfo.email}`}
                    className="text-accent-bright hover:text-accent-primary font-body text-sm uppercase tracking-wider"
                  >
                    Send Email
                  </a>
                }
              />
            </div>

            <motion.div
              className="mt-12 p-6 bg-bg-card border border-border rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-display text-lg text-text-primary mb-6 uppercase tracking-tight flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-bright" />
                OPENING HOURS
              </h3>
              <div className="space-y-3">
                {restaurantInfo.hours.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="font-body text-sm text-text-secondary uppercase tracking-wider">{hour.day.slice(0, 3)}</span>
                    <span className="font-body text-sm text-text-primary font-medium">{hour.open} - {hour.close}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-bg-card">
              <iframe
                src={restaurantInfo.location.embedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LITRE BBQ Location"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-auto flex flex-col sm:flex-row gap-3">
                <a
                  href={restaurantInfo.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 font-body text-sm uppercase tracking-wider rounded-md text-center flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  OPEN IN GOOGLE MAPS
                </a>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                  className="btn-outline px-6 py-3 font-body text-sm uppercase tracking-wider rounded-md text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content, action }: { icon: React.ReactNode; title: string; content: string; action: React.ReactNode }) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-bright flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-body text-xs uppercase tracking-widest text-text-secondary mb-1">{title}</h3>
          <p className="font-body text-base text-text-primary mb-4">{content}</p>
          {action}
        </div>
      </div>
    </div>
  );
}