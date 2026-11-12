import React from 'react';
import { Wind, CheckCircle2, XCircle } from 'lucide-react';

export default function MuseumManifesto() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 border-b border-[#E6DFD3] bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89248]"></span>
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#8F7032]">
              Philosophy · The Biological Dilemma
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light text-[#181614] leading-[1.1]">
            Why Conventional Bowls<br />
            <span className="italic font-normal gold-accent">Suffocate Living Produce</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#685E53] font-light leading-relaxed">
            For centuries, domestic fruit containers have been manufactured as solid earthenware, heavy glass, or plastics. These materials trap ambient metabolic heat and concentrated ethylene gas, causing ripening fruit to decay within days.
          </p>
        </div>

        {/* 12-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Macro Photograph of Harvest & Micro-Mesh */}
          <div className="lg:col-span-6">
            <div className="bg-[#F4EFE6] border border-[#E6DFD3] p-4 sm:p-5">
              <div className="relative overflow-hidden aspect-[4/3] border border-[#E6DFD3] bg-[#FFFFFF]">
                <img
                  src="/images/herimart-harvest-macro.jpg"
                  alt="Living harvest inside Herimart woven gold wire basket"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute bottom-3 left-3 bg-[#181614]/85 text-[#FBF9F5] text-[9px] font-mono tracking-widest uppercase px-3 py-1 border border-[#B89248]/30">
                  Macro Plate 01 · 360° Convection Mesh
                </div>
              </div>
              <div className="mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-[#9E9385]">
                Biological Aeration in Practice · Ambient Gas Dissipation
              </div>
            </div>
          </div>

          {/* Right Column: Thermodynamic Science & Comparative Ledger */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="border border-[#E6DFD3] bg-[#FBF9F5] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#8F7032] mb-3">
                <Wind className="w-3.5 h-3.5 text-[#B89248]" />
                <span>The Natural Chimney Principle</span>
              </div>
              
              <h3 className="font-serif text-2xl font-light text-[#181614] mb-3">
                Continuous Micro-Convection
              </h3>
              
              <p className="text-xs sm:text-sm text-[#685E53] font-light leading-relaxed mb-6">
                The spherical aviary dome acts as an open thermodynamic convection chamber. Cool, dense room air enters through the elevated pedestal base, circulates upwards through the produce, and dissipates naturally through the arched avian crown.
              </p>

              {/* Perfectly Aligned Comparison Matrix */}
              <div className="space-y-2.5 pt-4 border-t border-[#E6DFD3] font-mono text-xs">
                
                <div className="p-3 bg-[#FFFFFF] border border-[#B89248]/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-medium text-[#181614]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3A6B4C]" />
                    <span>HM Imperial Aviary</span>
                  </div>
                  <span className="text-[#8F7032] font-semibold">10–14 Days Freshness</span>
                </div>

                <div className="p-3 bg-[#F4EFE6]/60 border border-[#E6DFD3] flex items-center justify-between text-[#9E9385]">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Ceramic / Glass Bowl</span>
                  </div>
                  <span>2–4 Days (Trapped Gas)</span>
                </div>

                <div className="p-3 bg-[#F4EFE6]/60 border border-[#E6DFD3] flex items-center justify-between text-[#9E9385]">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Open Wire Basket</span>
                  </div>
                  <span>Prone to Fruit Flies & Bruising</span>
                </div>

              </div>

            </div>

            {/* Quote Strip */}
            <div className="mt-5 p-4 bg-[#FFFFFF] border-l-2 border-[#B89248] text-xs font-serif italic text-[#181614]">
              "We designed a sanctuary where fresh fruit remains crisp, fragrant, and living — rather than a static decorative compromise."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
