import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, Shield, Zap, Star, Truck, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Hero({ onAddToCart, onOpenQuickView, onBuyNow, currency }) {
  const flagship = PRODUCTS[0];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [added, setAdded] = useState(false);

  const slides = [
    {
      id: 'harvest',
      chapter: '01',
      badge: 'Bestseller • 360° Living Harvest',
      tagline: 'Sunlit Penthouse Marble Staging',
      title: 'The Imperial Aviary',
      desc: 'Handcrafted solid steel aviary dome with sculpted bird finial and continuous aeration, preserving fresh orchard fruits 3x longer in radiant daylight.',
      bgImage: '/images/hero-banner-sunlit-penthouse.jpg',
      specs: { material: 'Solid Core Steel', finish: 'Royal Gold Immersion', diameter: '25 cm' },
      dealBadge: 'Deal of the Day • 25% OFF',
      rating: '4.9 (148 verified reviews)',
    },
    {
      id: 'penthouse',
      chapter: '02',
      badge: 'Architectural Centerpiece',
      tagline: 'Mediterranean Villa Terrace',
      title: 'Calacatta Sanctuary',
      desc: 'Commanding sculptural presence on sun-drenched travertine surfaces, designed as an architectural centerpiece for high-ceiling contemporary residences.',
      bgImage: '/images/hero-banner-mediterranean-terrace.jpg',
      specs: { material: 'High-Gauge Brass', finish: 'Brushed Satin Gold', diameter: '25 cm' },
      dealBadge: 'Trending #1 in Luxury Decor',
      rating: '5.0 (92 verified reviews)',
    },
    {
      id: 'lifestyle',
      chapter: '03',
      badge: 'Haute Atelier Craft',
      tagline: 'Sculpted Limestone Atelier',
      title: 'Hand-Brazed Wire Crown',
      desc: 'Seamlessly blends functional food preservation with haute architectural aesthetics across light limestone and bespoke metalwork.',
      bgImage: '/images/hero-banner-atelier-craft.jpg',
      specs: { material: 'Food-Safe Steel', finish: 'Satin Champagne Gold', diameter: '25 cm' },
      dealBadge: 'Free Delivery by Tomorrow',
      rating: '4.9 (114 verified reviews)',
    },
    {
      id: 'gallery',
      chapter: '04',
      badge: 'Maison Masterpiece',
      tagline: 'Sunlit Architectural Dining',
      title: 'The Sovereign Collection',
      desc: 'Individually silver-brazed and hand-shaped by veteran metalsmiths in numbered studio batches of only 50 pieces.',
      bgImage: '/images/hero-banner-architectural-dining.jpg',
      specs: { material: '100% Solid Metal', finish: 'Hand-Polished Brass', diameter: '25 cm' },
      dealBadge: 'Limited Edition • Only 9 Left',
      rating: '5.0 (64 verified reviews)',
    },
  ];

  const current = slides[activeSlide];
  const fmt = (n) => `${currency.symbol} ${(n * currency.rate).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // Auto-advance slideshow exactly every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleAddToCart = (e) => {
    e?.stopPropagation();
    onAddToCart(flagship);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleBuyNow = (e) => {
    e?.stopPropagation();
    if (onBuyNow) {
      onBuyNow(flagship);
    } else {
      onAddToCart(flagship);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white px-2 sm:px-4 lg:px-6 py-2 sm:py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Grand Full-Bleed Architectural Banner — Bright & Luminous */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[80vh] lg:min-h-[86vh] flex flex-col justify-between shadow-sm border border-[#EBE6DF] select-none bg-[#FAF8F5]">
        
        {/* Layer 1: Ambient Background Photography with High Daylight Luminosity */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current.bgImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img
              src={current.bgImage}
              alt={current.title}
              className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.02]"
            />
            {/* Luminous, daylight-preserving overlay: only gentle contrast gradient at bottom for razor-sharp typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent hidden sm:block" />
          </motion.div>
        </AnimatePresence>

        {/* Layer 2: Iconic Architectural Wordmark */}
        <div className="absolute top-[18%] sm:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading font-black text-[14vw] sm:text-[15vw] lg:text-[16vw] text-white/25 tracking-[-0.04em] uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
          >
            HERIMART
          </motion.h1>
        </div>

        {/* Layer 3: Top Floating Status & E-Commerce Trust Badges */}
        <div className="relative z-20 p-4 sm:p-7 lg:p-8 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#1A1A1A] text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C07A48] animate-pulse" />
              <span className="uppercase tracking-wider text-[11px]">
                {current.dealBadge}
              </span>
            </div>

            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#1A1A1A] text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{current.rating}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-medium text-white">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>FREE Express Delivery Tomorrow</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20">
              <Shield className="w-3.5 h-3.5 text-[#C07A48]" />
              <span>100% Solid Metal</span>
            </div>
          </div>
        </div>

        {/* Layer 4: Bottom Area — Editorial Narrative & Interactive Preview Strip */}
        <div className="relative z-20 p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          
          {/* Left Block: Bold Editorial Storytelling & Amazon/Flipkart Dual Conversion CTAs */}
          <div className="max-w-2xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-bold drop-shadow-sm">
                    {current.chapter} / 04
                  </span>
                  <span className="w-8 h-px bg-white/40" />
                  <span className="text-xs uppercase tracking-wider text-white/90 font-medium drop-shadow-sm">
                    {current.tagline}
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  {current.title}
                </h2>

                <p className="mt-2.5 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {current.desc}
                </p>

                {/* Price & Savings Pill Bar */}
                <div className="flex items-center gap-3 mt-3.5">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                    {fmt(flagship.price)}
                  </span>
                  <span className="text-sm sm:text-base text-white/70 line-through font-medium">
                    {fmt(flagship.originalPrice)}
                  </span>
                  <span className="bg-[#C07A48] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    Save {fmt(flagship.originalPrice - flagship.price)} (25% OFF)
                  </span>
                </div>

                {/* Specs Pills */}
                <div className="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-white/20 text-xs text-white/90">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 font-medium">
                    {current.specs.material}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 font-medium">
                    {current.specs.finish}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 font-medium">
                    ⌀ {current.specs.diameter}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Amazon / Flipkart Dual Instant Purchase CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Buy Now (High-converting direct checkout) */}
              <button
                onClick={handleBuyNow}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#C07A48] hover:bg-[#A86333] text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-102 cursor-pointer active:scale-98"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Buy Now • {fmt(flagship.price)}</span>
              </button>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg active:scale-98 ${
                  added
                    ? 'bg-[#108474] text-white'
                    : 'bg-white hover:bg-neutral-100 text-[#1A1A1A]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart ✓</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#C07A48]" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              {/* Quick Details Trigger */}
              <button
                onClick={() => onOpenQuickView(flagship)}
                className="px-4 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Block: Interactive Chapter Switcher with 5-Second Progress Timers */}
          <div className="flex flex-col items-start lg:items-end gap-2.5">
            <span className="text-[11px] uppercase tracking-wider text-white/80 font-semibold drop-shadow-sm">
              Live Staging Views
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative overflow-hidden rounded-xl text-left transition-all duration-300 cursor-pointer p-2 flex flex-col justify-between w-32 sm:w-36 h-20 ${
                    idx === activeSlide
                      ? 'bg-white/25 border-2 border-white shadow-xl scale-102 ring-2 ring-white/40'
                      : 'bg-black/45 hover:bg-black/60 border border-white/25 hover:border-white/50 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Background Thumbnail Image */}
                  <img
                    src={slide.bgImage}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/35" />

                  {/* Top: Chapter Number & Active Indicator */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono font-bold text-white">
                    <span>{slide.chapter}</span>
                    {idx === activeSlide && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-sm" />
                    )}
                  </div>

                  {/* Bottom: Title & 5-Second Animated Progress Bar */}
                  <div className="relative z-10">
                    <div className="text-[11px] font-heading font-bold text-white truncate drop-shadow-sm">
                      {slide.title}
                    </div>
                    {/* Animated Progress Bar on active thumbnail */}
                    <div className="w-full h-0.5 bg-white/40 rounded-full mt-1.5 overflow-hidden">
                      {idx === activeSlide && (
                        <motion.div
                          key={`prog-${idx}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: isPaused ? 999999 : 5, ease: 'linear' }}
                          className="h-full bg-white shadow-sm"
                        />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
