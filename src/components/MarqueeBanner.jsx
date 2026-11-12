import React from 'react';
import { Sparkles } from 'lucide-react';

const items = [
  '100% Solid Core Metal',
  '360° Convection Aeration Dome',
  'Hand-Sculpted Avian Finial',
  'Preserves Fruit 3× Longer',
  'Complimentary Insured Courier',
  'Weighted Anti-Tip Pedestal',
  'Royal Antique Gold Immersion',
  'Limited Studio Batch of 50',
];

const doubled = [...items, ...items];

export default function MarqueeBanner() {
  return (
    <div className="py-5 bg-white border-y border-[#EBEBEB] overflow-hidden select-none">
      <div className="relative">
        <div className="furnexa-marquee-track">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8 px-6 whitespace-nowrap">
              <span className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-[#151515]">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#151515]/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
