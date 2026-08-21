"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flame } from "lucide-react";

export function BBQExperience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80")' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/80 to-bg-primary/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,119,6,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-md border border-accent-primary/30 bg-accent-primary/10 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Flame className="w-4 h-4 text-accent-bright" />
            <span className="font-body text-xs uppercase tracking-widest text-accent-bright">The Fire Makes the Flavor</span>
          </motion.div>

          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary leading-[1.05] tracking-tight mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            THE FIRE MAKES<br />THE FLAVOR.
          </motion.h2>

          <motion.p
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Slow smoke. Open flame. Unforgettable BBQ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link href="#contact" className="btn-primary px-10 py-4 font-body text-base uppercase tracking-wider rounded-md inline-flex items-center gap-3">
              EXPERIENCE LITRE
              <Flame className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}