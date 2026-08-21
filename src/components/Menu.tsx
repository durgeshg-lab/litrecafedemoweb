"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Check, Flame, Leaf, Star } from "lucide-react";
import { menuCategories, MenuCategory, MenuItem } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  bbq: <Flame className="w-5 h-5" />,
  stews: <span className="text-2xl">🍲</span>,
  "rice-noodles": <span className="text-2xl">🍚</span>,
  appetizers: <span className="text-2xl">🥟</span>,
  drinks: <span className="text-2xl">🍺</span>,
};

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold text-white pr-4">{item.name}</h3>
            <span className="text-xl font-bold text-amber-400 whitespace-nowrap flex-shrink-0">
              Rs {item.price}
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-3">{item.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {item.popular && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                <Star className="w-3 h-3" />
                Popular
              </span>
            )}
            {item.spicy && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                <Flame className="w-3 h-3" />
                Spicy
              </span>
            )}
            {item.vegetarian && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                <Leaf className="w-3 h-3" />
                Vegetarian
              </span>
            )}
            {item.tags && item.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-full bg-white/10 text-white/60 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10 }}
        animate={{ x: 0 }}
      >
        <Check className="w-5 h-5 text-amber-400" />
      </motion.div>
    </motion.div>
  );
}

function CategorySection({ category, index }: { category: MenuCategory; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 bg-white/5 hover:bg-white/10 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            {categoryIcons[category.id]}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{category.name}</h2>
            {category.description && (
              <p className="text-white/50 text-sm">{category.description}</p>
            )}
          </div>
        </div>
        <motion.span
          className="text-white/50 font-medium"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <MenuItemCard key={item.id} item={item} index={itemIndex} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
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
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Flavors of Korea
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Premium meats, traditional recipes, and authentic flavors grilled to perfection at your table
          </p>
        </motion.div>

        <div className="grid gap-6">
          {menuCategories.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}