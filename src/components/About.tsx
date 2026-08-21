"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-7xl">
        <div className="relative grid lg:grid-cols-2 gap-0">
          <motion.div
            className="relative min-h-[600px] lg:min-h-[700px] hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
              alt="LITRE BBQ restaurant interior with grill"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 to-transparent" />
          </motion.div>

          <motion.div
            className="relative flex items-center p-8 md:p-12 lg:p-16 bg-bg-secondary"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-accent-bright" />
                </div>
                <span className="font-body text-xs uppercase tracking-widest text-accent-bright">Built Around Fire</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-8 uppercase tracking-tight">
                BUILT AROUND<br />FIRE
              </h2>

              <div className="space-y-6 text-text-secondary font-body text-base md:text-lg leading-relaxed">
                <p>
                  At LITRE BBQ, fire isn't just a cooking method — it's the foundation of everything we do.
                </p>
                <p>
                  We source premium cuts and treat them with respect: dry-aged where it matters, marinated in traditional Korean recipes passed down through generations, and grilled over real charcoal at your table.
                </p>
                <p>
                  The smoke penetrates deep. The char adds complexity. Every bite carries the authenticity of Korean BBQ culture — communal, bold, unforgettable.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-6">
                  <StatItem value="12+" label="Years of Fire" />
                  <StatItem value="50+" label="Premium Cuts" />
                  <StatItem value="100%" label="Charcoal Grilled" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-accent-bright mb-1">{value}</div>
      <div className="font-body text-sm text-text-secondary uppercase tracking-wider">{label}</div>
    </div>
  );
}