import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function PromoFeature({ onAddToCart, onOpenQuickView, currency }) {
  const flagship = PRODUCTS[0];
  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(0)}`;

  return (
    <section className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Split Promo Card (Warm Light Theme) */}
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#EBE6DF] overflow-hidden p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Typography & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#C07A48] text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider shadow-xs">
                Limited Batch
              </span>
              <span className="text-xs font-mono font-medium text-[#6E6E73]">
                Only 09 Units Remaining
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.08]">
              Where living harvest meets sculptural steel.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#6E6E73] font-normal leading-relaxed max-w-lg">
              Engineered with a 360° micro-convection wire dome that circulates fresh air continuously around ripe fruit, eliminating heat pockets and keeping your citrus and orchard harvest firm for up to two full weeks.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-4 py-6 my-6 border-y border-[#EBE6DF] text-xs font-mono">
              <div>
                <span className="text-[#8E8A83] uppercase block text-[10px]">Diameter</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-0.5 block">25 cm</span>
              </div>
              <div>
                <span className="text-[#8E8A83] uppercase block text-[10px]">Material</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-0.5 block">Solid Steel</span>
              </div>
              <div>
                <span className="text-[#8E8A83] uppercase block text-[10px]">Finish</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-0.5 block">Royal Gold</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-3xl font-extrabold text-[#1A1A1A]">{fmt(flagship.price)}</span>
                <span className="text-sm text-[#999] line-through font-medium">{fmt(flagship.originalPrice)}</span>
              </div>

              <button
                onClick={() => onAddToCart(flagship)}
                className="btn-accent !py-3 !px-7 rounded-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => onOpenQuickView(flagship)}
                className="py-3 px-6 rounded-xl bg-white text-[#1A1A1A] hover:bg-[#FAF8F5] border border-[#EBE6DF] font-semibold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: High-Impact Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-white border border-[#EBE6DF] shadow-sm">
              <img
                src="/images/herimart-hero-masterpiece.jpg"
                alt="Imperial Aviary on Travertine Stone"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
              />

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl text-xs font-mono font-medium text-[#1A1A1A] shadow-sm flex items-center gap-2 border border-[#EBE6DF]">
                <Sparkles className="w-3.5 h-3.5 text-[#C07A48]" />
                <span>Hand-Sculpted Avian Grip</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

