import React, { useState } from 'react';
import { X, Award, ShieldCheck, Check, Copy, Download, Sparkles, Printer } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ProvenanceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const serialNumber = 'HM-MMXXVI-AV001';

  const handleCopy = () => {
    navigator.clipboard.writeText(serialNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161412]/80 backdrop-blur-sm overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="modal-panel relative w-full max-w-2xl bg-[#FAF7F2] border border-[#DCD1BF] shadow-2xl z-10 my-8 overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD1BF] bg-[#FFFFFF]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#BE9852]" />
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#161412] font-semibold">
              Document of Provenance & Metallurgical Authenticity
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center border border-[#DCD1BF] text-[#63574A] hover:border-[#161412] hover:text-[#161412] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Certificate Body (Parchment Paper Styling) */}
        <div className="p-8 sm:p-12 bg-[#FCFAF6] relative border-8 border-[#F3ECE1]">
          
          {/* Ornate Double Golden Border */}
          <div className="border border-[#BE9852]/60 p-6 sm:p-8 relative">
            
            {/* Corner Decorative Accents */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#BE9852]"></div>
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#BE9852]"></div>
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#BE9852]"></div>
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#BE9852]"></div>

            {/* Atelier Crest & Monogram */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto border border-[#BE9852] p-1 bg-[#FFFFFF] shadow-xs mb-3">
                <img src="/images/logo-dark.jpg" alt="HM Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#947234]">
                Maison HM Herimart · Atelier Métallurgique
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#161412] mt-1 tracking-tight">
                Certificate of Provenance
              </h3>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#BE9852] to-transparent mx-auto mt-3"></div>
            </div>

            {/* Curatorial Attribution Statement */}
            <p className="text-center text-xs sm:text-sm font-serif italic text-[#63574A] max-w-lg mx-auto leading-relaxed mb-8">
              "This document attests that the tabletop vessel designated herein has been individually hand-forged, calibrated, and electroplated in accordance with the exacting standards of Maison Herimart."
            </p>

            {/* Specification Taxonomy Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono py-4 border-y border-[#DCD1BF]/60 mb-8 bg-[#FFFFFF]/60 p-4">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Specimen Title</span>
                <span className="text-[#161412] font-semibold mt-0.5 block">The Imperial Aviary Sanctuary</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Archival Serial Code</span>
                <span className="text-[#947234] font-semibold mt-0.5 block">{serialNumber}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Metallurgical Core</span>
                <span className="text-[#161412] mt-0.5 block">100% Solid Drawn Steel Rod</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Surface Treatment</span>
                <span className="text-[#161412] mt-0.5 block">Antique Gold & Acid Seal</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Aero-Convection</span>
                <span className="text-[#3A6B4C] font-semibold mt-0.5 block">360° Continuous Convection</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#948778] block">Atelier Location</span>
                <span className="text-[#161412] mt-0.5 block">New York · Paris · Geneva</span>
              </div>
            </div>

            {/* Signature & Gold Seal Stamp */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <div className="text-left text-xs font-mono">
                <div className="font-serif italic text-base text-[#161412] font-medium border-b border-[#DCD1BF] pb-1 w-44">
                  Henri Martin
                </div>
                <div className="text-[9px] uppercase tracking-wider text-[#948778] mt-1">
                  Master Metallurgist & Founder
                </div>
              </div>

              {/* Embossed Atelier Stamp */}
              <div className="w-16 h-16 rounded-full border-2 border-[#BE9852] bg-[#FAF7F2] p-1 flex flex-col items-center justify-center text-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#BE9852] mb-0.5" />
                <span className="text-[7px] font-mono tracking-widest text-[#947234] uppercase font-bold">
                  VERIFIED
                </span>
                <span className="text-[6px] font-mono text-[#948778]">MMXXVI</span>
              </div>

              <div className="text-right text-xs font-mono">
                <div className="font-serif italic text-base text-[#161412] font-medium border-b border-[#DCD1BF] pb-1 w-44 text-right">
                  Claire Vance
                </div>
                <div className="text-[9px] uppercase tracking-wider text-[#948778] mt-1">
                  Senior Curator of Design
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Certificate Actions Bar */}
        <div className="px-8 py-4 bg-[#FFFFFF] border-t border-[#DCD1BF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 border border-[#DCD1BF] hover:border-[#161412] text-[#63574A] hover:text-[#161412] transition-colors flex items-center gap-1.5 cursor-pointer text-[10px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#3A6B4C]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Serial Copied ✓' : 'Copy Serial No.'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 border border-[#DCD1BF] hover:border-[#161412] text-[#63574A] hover:text-[#161412] transition-colors flex items-center gap-1.5 cursor-pointer text-[10px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Archive Document</span>
            </button>
          </div>

          <span className="text-[10px] text-[#948778]">
            Included physically with every white-glove commission dispatch.
          </span>
        </div>

      </div>
    </div>
  );
}

