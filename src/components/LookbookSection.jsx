import React from 'react';
import { ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function LookbookSection({ onAddToCart, onOpenQuickView, currency }) {
  const flagship = PRODUCTS[0];
  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(0)}`;

  return (
    <section id="insitu" className="py-20 lg:py-28 bg-white border-t border-[#EBEBEB]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Furnexa Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2 font-medium">
              In-Situ Styling
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151515]">
              Transform your space today.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            See how the Imperial Aviary commands modern dining rooms and quartz kitchen islands.
          </p>
        </div>

        {/* Grand 16:9 Architectural Stage */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-[#F7F7F7] shadow-sm group">
          <img
            src="/images/herimart-penthouse-insitu.jpg"
            alt="Herimart Imperial Aviary on a Calacatta marble dining table in a penthouse"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />

          {/* Furnexa Floating In-Situ Card */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#EBEBEB] shadow-lg flex flex-wrap items-center justify-between gap-5 max-w-lg">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#777777] block">
                Featured Piece · Penthouse Suite
              </span>
              <h3 className="font-heading text-xl font-bold text-[#151515] mt-0.5">
                The Imperial Aviary Basket
              </h3>
              <div className="text-xs text-[#777777] mt-0.5">
                25cm × 25cm · Royal Gold with Bird Finial
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-bold text-[#151515]">
                {fmt(flagship.price)}
              </span>

              <button
                onClick={() => onAddToCart(flagship)}
                className="furnexa-btn-dark !py-2.5 !px-5 text-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
