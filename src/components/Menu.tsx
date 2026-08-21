"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { menuItems, MenuItem } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

const categories = [
  { id: "bbq", label: "BBQ" },
  { id: "burgers", label: "BURGERS" },
  { id: "sides", label: "SIDES" },
  { id: "drinks", label: "DRINKS" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("bbq");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 px-6 md:px-8 bg-bg-primary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs uppercase tracking-widest text-accent-bright block mb-4">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight uppercase">
            OUR MENU
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "font-body text-sm uppercase tracking-wider px-6 py-3 rounded-md transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-accent-primary text-black"
                  : "bg-bg-card text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-bg-card border border-border rounded-lg card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
          <h3 className="font-display text-lg md:text-xl text-text-primary uppercase tracking-tight">
            {item.name}
          </h3>
          <span className="font-display text-xl md:text-2xl text-accent-bright whitespace-nowrap">
            NPR {item.price}
          </span>
        </div>
        <p className="font-body text-sm text-text-secondary mt-1 leading-relaxed max-w-md">
          {item.description}
        </p>
      </div>
      {item.popular && (
        <motion.span
          className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-accent-primary/20 text-accent-bright font-body text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <span>★</span> POPULAR
        </motion.span>
      )}
    </motion.div>
  );
}