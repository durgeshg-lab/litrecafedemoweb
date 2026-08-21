"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#", label: "HOME" },
  { href: "#menu", label: "MENU" },
  { href: "#about", label: "ABOUT" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navbarBg = useTransform(scrollY, [0, 100], ["transparent", "rgba(23, 23, 23, 0.95)"]);
  const navbarBorder = useTransform(scrollY, [0, 100], ["transparent", "rgba(63, 63, 70, 0.5)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: navbarBg, borderBottomColor: navbarBorder }}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            <Link href="/" className="flex items-center gap-3" aria-label="LITRE BBQ Home">
              <div className="w-10 h-10 rounded-lg bg-accent-primary flex items-center justify-center">
                <Flame className="w-5 h-5 text-black" />
              </div>
              <span className="font-display text-xl md:text-2xl text-text-primary tracking-wider">
                LITRE BBQ
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm uppercase tracking-wider text-text-secondary hover:text-accent-bright transition-colors duration-200 relative py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#order"
                className="btn-primary px-6 py-2.5 text-sm font-body uppercase tracking-wider rounded-md"
              >
                ORDER NOW
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-text-primary hover:text-text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden border-t border-border"
          style={{ background: "rgba(23, 23, 23, 0.98)" }}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 font-body text-sm uppercase tracking-wider text-text-secondary hover:text-accent-bright transition-colors rounded-md hover:bg-bg-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#order"
              className="block px-4 py-3 btn-primary text-center text-sm font-body uppercase tracking-wider rounded-md mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDER NOW
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}