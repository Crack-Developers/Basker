import React from 'react';
import { Package, Shield, Sparkles } from 'lucide-react';

export default function UnboxingSection({ onOpenProvenance }) {
  const perks = [
    {
      title: 'Rigid Presentation Box',
      desc: 'Tactile charcoal gift box stamped with metallic gold foil logo.',
    },
    {
      title: 'Heavy Flax Linen Dust Bag',
      desc: 'Braided drawstring pouch for storage and residential protection.',
    },
    {
      title: 'White Cotton Handling Gloves',
      desc: 'Archival gloves to position your vessel without leaving finger oils.',
    },
    {
      title: 'Certificate of Provenance',
      desc: 'Individually serialized and signed with lifetime metal pledge.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#EBEBEB]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="rounded-3xl bg-[#F7F7F7] overflow-hidden p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Unboxing Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white relative shadow-xs">
              <img
                src="/images/herimart-unboxing-casket.jpg"
                alt="Herimart luxury packaging and white handling gloves"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl text-xs font-mono font-medium text-[#151515] shadow-xs">
                Archival Gift Packaging Included
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2 font-medium">
              Heirloom Delivery
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151515] leading-[1.08]">
              The Unboxing Experience
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#777777] font-normal leading-relaxed">
              Every Herimart centerpiece arrives ready to gift or install, encased in custom archival packaging designed to preserve its gold finish for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#EBEBEB]">
              {perks.map((p, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#EBEBEB]">
                  <h3 className="font-heading text-base font-bold text-[#151515]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#777777] mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between">
              <button
                onClick={onOpenProvenance}
                className="text-xs font-medium text-[#151515] underline hover:text-[#8F7032] cursor-pointer"
              >
                Inspect Sample Certificate of Provenance →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
