"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { signatureDishes, SignatureDish } from "@/lib/restaurant-data";

export function Signatures() {
  return (
    <section id="signatures" className="py-24 md:py-32 px-6 md:px-8 bg-bg-primary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs uppercase tracking-widest text-accent-bright block mb-4">Our Signatures</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6 uppercase">
            OUR SIGNATURES
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Bold flavors. Slow cooking. Serious BBQ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish, index) => (
            <SignatureCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ dish, index }: { dish: SignatureDish; index: number }) {
  return (
    <motion.article
      className="group relative overflow-hidden bg-bg-card rounded-lg border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="image-zoom object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="font-body text-xs uppercase tracking-wider text-accent-bright bg-bg-primary/90 px-3 py-1 rounded-md">
            {dish.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl md:text-2xl text-text-primary mb-2 uppercase tracking-tight">
          {dish.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mb-4 leading-relaxed">
          {dish.description}
        </p>
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl text-accent-bright">
            NPR {dish.price}
          </span>
        </div>
      </div>
    </motion.article>
  );
}