"use client";

import { motion, useAnimation, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { reviews, Review } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const controls = useAnimation();
  const [x, cycleX] = useCycle(0, -100, -200);

  const reviewsToShow = 3;
  const maxIndex = reviews.length - reviewsToShow;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    controls.start({ x: -currentIndex * (100 / reviewsToShow) });
  }, [currentIndex, controls, reviewsToShow]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
      else if (diff < 0 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }
    setTouchStart(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
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
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            What Our Guests Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="flex"
              style={{ width: `${reviewsToShow * 100}%` }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="w-full flex px-4"
                  style={{ width: `${100 / reviewsToShow}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === currentIndex
                    ? "bg-amber-500 w-8"
                    : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${i + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <StatCard value="4.0" label="Google Rating" icon={<Star className="w-6 h-6" />} />
          <StatCard value="56+" label="Total Reviews" icon={<Quote className="w-6 h-6" />} />
          <StatCard value="95%" label="Would Recommend" icon={<Star className="w-6 h-6 fill-current" />} />
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="h-full">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-white">{review.author}</p>
            <p className="text-white/50 text-sm">{review.date}</p>
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < review.rating ? "text-amber-400 fill-current" : "text-white/20"
              )}
            />
          ))}
        </div>
        <p className="text-white/80 leading-relaxed text-base">"{review.text}"</p>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10">
      <div className="text-amber-400 mb-3">{icon}</div>
      <p className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</p>
      <p className="text-white/60">{label}</p>
    </div>
  );
}