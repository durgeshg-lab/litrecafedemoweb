import Link from "next/link";
import { Flame, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { restaurantInfo } from "@/lib/restaurant-data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${restaurantInfo.phone.replace(/\D/g, "")}`;

  const footerLinks = {
    nav: [
      { href: "#", label: "HOME" },
      { href: "#menu", label: "MENU" },
      { href: "#about", label: "ABOUT" },
      { href: "#gallery", label: "GALLERY" },
      { href: "#contact", label: "CONTACT" },
    ],
    social: [
      { href: restaurantInfo.social.instagram || "#", icon: Instagram, label: "Instagram" },
      { href: restaurantInfo.social.facebook || "#", icon: Facebook, label: "Facebook" },
    ],
  };

  return (
    <footer className="bg-bg-footer border-t border-border relative">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="LITRE BBQ Home">
              <div className="w-12 h-12 rounded-lg bg-accent-primary flex items-center justify-center">
                <Flame className="w-6 h-6 text-black" />
              </div>
              <span className="font-display text-2xl text-text-primary tracking-wider">LITRE BBQ</span>
            </Link>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 max-w-xs">
              SMOKE. FIRE. FLAVOR.<br />Authentic Korean BBQ done right.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-bg-card hover:bg-border flex items-center justify-center text-text-secondary hover:text-accent-bright transition-colors border border-border"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-text-primary mb-6 uppercase tracking-tight">NAVIGATION</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-text-secondary hover:text-accent-bright transition-colors uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg text-text-primary mb-6 uppercase tracking-tight">CONTACT</h3>
            <address className="not-italic space-y-4 text-sm">
              <a
                href={restaurantInfo.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-accent-bright transition-colors"
              >
                <MapPin className="w-5 h-5 text-accent-bright flex-shrink-0" />
                <span className="font-body leading-relaxed">{restaurantInfo.address}</span>
              </a>
              <a
                href={`tel:${restaurantInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent-bright transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-bright flex-shrink-0" />
                <span className="font-body">{restaurantInfo.phone}</span>
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent-bright transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-bright flex-shrink-0" />
                <span className="font-body">{restaurantInfo.email}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-body">WhatsApp</span>
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-display text-lg text-text-primary mb-6 uppercase tracking-tight">HOURS</h3>
            <div className="space-y-3 text-sm">
              {restaurantInfo.hours.map((hour) => (
                <div
                  key={hour.day}
                  className="flex justify-between items-center text-text-secondary"
                >
                  <span className="font-body uppercase tracking-wider">{hour.day.slice(0, 3)}</span>
                  <span className="font-body text-text-primary font-medium">{hour.open} - {hour.close}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-text-secondary">
              © {currentYear} LITRE BBQ. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-text-secondary font-body text-sm">
              <span>Premium Korean BBQ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}