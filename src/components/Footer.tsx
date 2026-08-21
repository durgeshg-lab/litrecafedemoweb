import Link from "next/link";
import { Utensils, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Star } from "lucide-react";
import { restaurantInfo } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp.replace(/\D/g, "")}`;

  const footerLinks = {
    quick: [
      { href: "#menu", label: "Our Menu" },
      { href: "#gallery", label: "Gallery" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact Us" },
    ],
    info: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
      
      <div className="relative container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="The Litre Cafe Home">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">The Litre Cafe</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Authentic Korean BBQ experience in the heart of Kathmandu. Premium meats, traditional recipes, and warm hospitality.
            </p>
            <div className="flex items-center gap-4">
              {restaurantInfo.social.instagram && (
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {restaurantInfo.social.facebook && (
                <a
                  href={restaurantInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {footerLinks.quick.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm">
              <a
                href={restaurantInfo.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{restaurantInfo.address}</span>
              </a>
              <a
                href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{restaurantInfo.email}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              {restaurantInfo.hours.map((hour) => (
                <div
                  key={hour.day}
                  className="flex justify-between items-center text-white/60"
                >
                  <span className="font-medium text-white/70">{hour.day.slice(0, 3)}</span>
                  <span className="text-white">{hour.open} - {hour.close}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span>{restaurantInfo.rating} ★ {restaurantInfo.reviewCount} reviews</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} The Litre Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span>Made with care for Korean food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}