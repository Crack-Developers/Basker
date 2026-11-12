import React from 'react';
import { Sparkles, Shield, Award, Check } from 'lucide-react';

export default function ArtisanshipSection({ onOpenQuickView }) {
  const steps = [
    {
      num: '01',
      title: 'Lost-Wax Avian Finial',
      desc: 'Each bird finial is sculpted by hand in wax, sand-cast in dense alloy, and chased with micro-gravers for feather definition and tactile balance.',
    },
    {
      num: '02',
      title: 'Spherical Steel Tensioning',
      desc: 'High-gauge solid steel rods are heat-treated and tensioned over hardwood formers to achieve an unyielding 250mm diameter equator.',
    },
    {
      num: '03',
      title: 'Silver Alloy Micro-Brazing',
      desc: 'The breathable 0.8mm micro-mesh is fitted and bonded to the structural ribs using silver brazing, keeping fruit protected while air circulates freely.',
    },
    {
      num: '04',
      title: 'Double Immersion Royal Gold Finish',
      desc: 'Submerged in a warm antique gold immersion bath, then treated with a food-safe micro-ceramic barrier that repels citrus acids and tarnishing.',
    },
  ];

  return (
    <section id="craft" className="py-20 lg:py-28 bg-white border-t border-[#EBEBEB]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Furnexa Heading Block */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2 font-medium">
            Atelier Metallurgy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151515]">
            Crafted for premium living.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#777777] font-normal leading-relaxed">
            In an era of disposable homewares, Herimart preserves the heritage of European metalsmithing, hand-brazing, and precision airflow engineering.
          </p>
        </div>

        {/* Furnexa Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#F7F7F7] relative shadow-xs">
              <img
                src="/images/herimart-atelier-craft.jpg"
                alt="Master artisan shaping gold wire basket"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl text-xs font-mono font-medium text-[#151515] shadow-xs">
                Paris & New York Atelier Production
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Steps */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-5 rounded-2xl bg-[#F7F7F7] hover:bg-[#F0F0F0] transition-colors flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-[#151515] text-white text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#151515]">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] font-normal leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
