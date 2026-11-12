import React, { useState } from 'react';
import { Compass, Ruler, Shield, Maximize2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function AnatomySection({ onOpenQuickView }) {
  const flagship = PRODUCTS[0];
  const [activeCallout, setActiveCallout] = useState(0);

  const callouts = [
    {
      index: '01',
      title: 'Sculpted Avian Finial',
      metric: 'Lost-Wax Cast Alloy',
      desc: 'Individually chased with micro-gravers to define feather plumage. The counterweight finial allows one-handed dome lifting with balanced tactile feedback.',
    },
    {
      index: '02',
      title: 'Calibrated Equator Ring',
      metric: 'Heavy-Gauge Structural Brass',
      desc: 'Solid central equator band laser-etched with the HM monogram. Anchors the upper and lower hemispheres and resists deflection under 5kg fruit mass.',
    },
    {
      index: '03',
      title: '360° Aeration Micro-Mesh',
      metric: '0.8mm Precision Aperture',
      desc: 'Breathable micro-wire mesh hand-brazed to the perimeter ribs. Facilitates uninhibited air currents while defending organic produce from fruit flies and dust.',
    },
    {
      index: '04',
      title: 'Weighted Anti-Tip Pedestal',
      metric: 'Lathed Circular Base Plate',
      desc: 'Engineered center of gravity with a scratch-safe protective contact rim, preventing tipping and scratches on polished marble, quartz, and timber.',
    },
  ];

  return (
    <section id="blueprint" className="py-20 lg:py-28 border-b border-[#E6DFD3] bg-[#FBF9F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89248]"></span>
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#8F7032]">
              Blueprint · Architectural Anatomy
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light text-[#181614] leading-[1.1]">
            Exact Euclidean Geometry &<br />
            <span className="italic font-normal gold-accent">Metallurgical Precision</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#685E53] font-light leading-relaxed">
            Every curve and junction is calibrated according to classical Euclidean proportions, balancing gravitational equilibrium with natural convection dynamics.
          </p>
        </div>

        {/* 12-Column Symmetrical Blueprint Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Architectural Blueprint Drawing */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border border-[#E6DFD3] p-5 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3] text-[9px] font-mono text-[#9E9385] uppercase tracking-widest">
                <span>Elevation Blueprint · Ref: HM-2026-AV</span>
                <span className="text-[#8F7032]">Scale 1:1 · Millimeter Precision</span>
              </div>

              <div className="relative overflow-hidden aspect-square flex items-center justify-center p-4">
                <img
                  src="/images/flagship-dimensions.jpg"
                  alt="Herimart 250mm Blueprint"
                  className="w-full h-full object-contain"
                />

                <button
                  onClick={() => onOpenQuickView(flagship)}
                  className="absolute bottom-2 right-2 p-2 bg-[#FFFFFF] border border-[#E6DFD3] text-[#685E53] hover:text-[#181614] transition-colors cursor-pointer"
                  title="Expand Blueprint"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 border-t border-[#E6DFD3] flex items-center justify-between text-[10px] font-mono text-[#685E53]">
                <span>DIAMETER: 250MM (9.8 IN)</span>
                <span>HEIGHT: 250MM (9.8 IN)</span>
                <span className="text-[#3A6B4C]">TARE: 1.45 KG</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Aligned Callouts */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {callouts.map((c, i) => (
              <div
                key={c.index}
                onClick={() => setActiveCallout(i)}
                className={`p-5 border transition-all cursor-pointer ${
                  activeCallout === i
                    ? 'bg-[#FFFFFF] border-[#B89248] shadow-xs'
                    : 'bg-[#F4EFE6]/50 border-[#E6DFD3] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-semibold ${
                      activeCallout === i ? 'bg-[#B89248] text-[#FBF9F5]' : 'bg-[#E6DFD3] text-[#685E53]'
                    }`}>
                      {c.index}
                    </span>
                    <h3 className="font-serif text-lg text-[#181614] font-normal">
                      {c.title}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8F7032]">
                    {c.metric}
                  </span>
                </div>

                <p className="text-xs text-[#685E53] font-light leading-relaxed pl-7.5">
                  {c.desc}
                </p>
              </div>
            ))}

            <div className="p-3.5 bg-[#FFFFFF] border border-[#E6DFD3] flex items-center justify-between text-[10px] font-mono text-[#9E9385] mt-2">
              <span>TESTED MAXIMUM LOAD CAPACITY: 5.0 KG</span>
              <span className="text-[#3A6B4C] font-semibold">TOLERANCE ±0.2MM VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
