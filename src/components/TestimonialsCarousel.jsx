/**
 * TestimonialsCarousel.jsx
 * Auto-advancing animated testimonials carousel (framer-motion).
 * Fully static — testimonial data is hardcoded below.
 * Navigation: prev/next arrows + dot indicators. Auto-advances every 5s.
 */

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Static testimonial data ───────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Aibek Dzhaksybekov',
    role: 'Director, KazMunaiGas Partner',
    text: 'Zhetysu Kazynasy has been a reliable partner in our supply chain. Their commitment to product quality and on-time delivery is unmatched in the region.',
    stars: 5,
  },
  {
    name: 'Sergei Morozov',
    role: 'Operations Manager, Central Asia Energy',
    text: 'Professional, transparent, and highly competent. Working with Zhetysu Kazynasy gives us the confidence we need in our petroleum product procurement.',
    stars: 5,
  },
  {
    name: 'Dinara Bekova',
    role: 'Procurement Head, Almaty Industries',
    text: 'Their product range is exceptional. From crude oil to refined petroleum products, they consistently deliver to specification. Highly recommended.',
    stars: 5,
  },
];

// Slide-in/out animation variants (direction-aware)
const variants = {
  enter:  (dir) => ({ opacity: 0, x: dir > 0 ?  80 : -80 }),
  center:          ({ opacity: 1, x: 0 }),
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 :  80 }),
};

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(1);
  const timerRef          = useRef(null);

  // Navigate by direction (+1 forward, -1 back)
  const go = (newDir) => {
    setDir(newDir);
    setIndex((prev) => (prev + newDir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Reset the auto-advance timer after any manual navigation
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleNav = (d) => { go(d); resetTimer(); };

  const t = TESTIMONIALS[index];

  return (
    <section className="py-24 bg-[#0f0d0f] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#a93134]" />
            <span className="text-[#a93134] text-xs tracking-[0.3em] uppercase font-semibold">Client Testimonials</span>
            <div className="w-8 h-px bg-[#a93134]" />
          </div>
          <h2 className="text-4xl font-black font-['Playfair_Display'] mb-4 text-white">
            What Our <span className="text-[#a93134]">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Trusted by leading energy companies and industrial enterprises across Kazakhstan and Central Asia.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center min-h-[280px]">

          {/* Prev button */}
          <button
            onClick={() => handleNav(-1)}
            className="absolute left-0 z-10 w-10 h-10 rounded-full border border-[#4a444d]/50 bg-[#181418] flex items-center justify-center text-gray-400 hover:border-[#a93134] hover:text-[#a93134] transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="w-full px-12 overflow-hidden">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="bg-[#181418] border border-[#4a444d]/30 rounded-2xl p-8 sm:p-10 text-center relative"
              >
                {/* Decorative quote mark */}
                <div className="text-[#a93134]/20 text-8xl font-serif leading-none absolute top-4 left-8 select-none">"</div>

                {/* Star rating */}
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={15} className="text-[#a93134] fill-[#a93134]" />
                  ))}
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic relative z-10">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#a93134]/20 border border-[#a93134]/40 flex items-center justify-center text-[#a93134] font-bold text-sm flex-shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={() => handleNav(1)}
            className="absolute right-0 z-10 w-10 h-10 rounded-full border border-[#4a444d]/50 bg-[#181418] flex items-center justify-center text-gray-400 hover:border-[#a93134] hover:text-[#a93134] transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); resetTimer(); }}
              className={`transition-all duration-300 rounded-full ${
                i === index ? 'w-6 h-2 bg-[#a93134]' : 'w-2 h-2 bg-[#4a444d]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}