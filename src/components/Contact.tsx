"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { restaurantInfo } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

export function Contact() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, "")}?text=Hello!%20I'd%20like%20to%20inquire%20about%20The%20Litre%20Cafe.`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Contact & Visit
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Visit Us Today
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We're located in the heart of Shankhamul. Come experience authentic Korean BBQ!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <InfoCard
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                content={restaurantInfo.address}
                action={
                  <a
                    href={restaurantInfo.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1"
                  >
                    Open in Maps
                    <ChevronDown className="w-4 h-4" />
                  </a>
                }
              />

              <InfoCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content={restaurantInfo.phone}
                action={
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    Call Now
                  </a>
                }
              />

              <InfoCard
                icon={<MessageCircle className="w-6 h-6" />}
                title="WhatsApp"
                content="Chat with us directly"
                action={
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message Us
                  </a>
                }
              />

              <InfoCard
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content={restaurantInfo.email}
                action={
                  <a
                    href={`mailto:${restaurantInfo.email}`}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    Send Email
                  </a>
                }
              />
            </div>

            <motion.div
              className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                {restaurantInfo.hours.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white/70 font-medium">{hour.day}</span>
                    <span className="text-white font-medium">{hour.open} - {hour.close}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.407551216052!2d85.3401!3d27.6876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a3b8b5c7d%3A0x123456789!2sThe%20Litre%20Cafe!5e0!3m2!1sen!2snp!4v1234567890`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Litre Cafe Location"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-auto">
                <a
                  href={restaurantInfo.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-amber-500/30"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <ServiceCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Dine-In"
            description="Cozy indoor seating for groups and families"
          />
          <ServiceCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Takeaway"
            description="Order ahead and pick up at your convenience"
          />
          <ServiceCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Delivery"
            description="No-contact delivery to your doorstep"
          />
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content, action }: { icon: React.ReactNode; title: string; content: string; action: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-white/70 mb-3">{content}</p>
          {action}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10">
      <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );
}