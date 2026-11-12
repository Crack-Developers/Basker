import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ConciergeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: 'trade', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161412]/75 backdrop-blur-sm overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="modal-panel relative w-full max-w-md bg-[#FAF7F2] border border-[#DCD1BF] shadow-2xl z-10 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#DCD1BF] bg-[#FFFFFF]">
          <div>
            <div className="museum-placard mb-1">Private Atelier Desk</div>
            <h3 className="museum-heading text-xl font-light text-[#161412]">Bespoke Commission Inquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-[#DCD1BF] text-[#63574A] hover:border-[#161412] hover:text-[#161412] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-7">
          {done ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full border border-[#BE9852] bg-[#FFFFFF] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7 text-[#BE9852]" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#161412]">Inquiry Registered</h4>
              <p className="text-xs text-[#63574A] font-light max-w-xs mx-auto leading-relaxed">
                A Senior Atelier Advisor will review your architectural inquiry and respond within 4 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#63574A] font-light leading-relaxed">
                Direct correspondence for custom architectural dimensions, private estate collections, hospitality projects, or archival restorations.
              </p>

              <div>
                <label className="block text-[9px] font-mono tracking-widest uppercase text-[#948778] mb-1">
                  Patron Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Montague"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#DCD1BF] text-xs font-mono text-[#161412] outline-none focus:border-[#BE9852]"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-widest uppercase text-[#948778] mb-1">
                  Private Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="patron@residence.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#DCD1BF] text-xs font-mono text-[#161412] outline-none focus:border-[#BE9852]"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-widest uppercase text-[#948778] mb-1">
                  Nature of Commission
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#DCD1BF] text-xs font-mono text-[#161412] outline-none focus:border-[#BE9852]"
                >
                  <option value="trade">Private Residential Commission</option>
                  <option value="hospitality">Hospitality & Architectural Suite</option>
                  <option value="restoration">Archival Restoration / Re-Gilding</option>
                  <option value="custom">Custom Metal Dimensions & Engraving</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-widest uppercase text-[#948778] mb-1">
                  Curatorial Notes / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify desired metal patina, quantities, or residence timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#DCD1BF] text-xs font-mono text-[#161412] outline-none focus:border-[#BE9852]"
                />
              </div>

              <button type="submit" className="btn-museum-primary w-full !py-3 text-[10px]">
                <Send className="w-3.5 h-3.5 text-[#BE9852]" />
                <span>Submit to Senior Concierge</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-[#948778] pt-1">
                <ShieldCheck className="w-3 h-3 text-[#BE9852]" />
                <span>Confidential Correspondence Guaranteed</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
