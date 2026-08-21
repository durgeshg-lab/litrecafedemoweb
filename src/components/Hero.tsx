"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80")' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/80 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,119,6,0.15)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent-primary/30 bg-accent-primary/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-body text-xs uppercase tracking-widest text-accent-bright">Premium Korean BBQ</span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[1.05] tracking-tight mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SMOKE. FIRE. FLAVOR.
          </motion.h1>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AUTHENTIC BBQ<br />DONE RIGHT.
          </motion.h2>

          <motion.p
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Slow-cooked. Fire-grilled. Made for serious BBQ lovers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link href="#menu" className="btn-primary px-10 py-4 font-body text-base uppercase tracking-wider rounded-md w-full sm:w-auto flex items-center justify-center gap-2">
              VIEW MENU
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#contact" className="btn-outline px-10 py-4 font-body text-base uppercase tracking-wider rounded-md w-full sm:w-auto flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              FIND US
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-border/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-text-secondary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}