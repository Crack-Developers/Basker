import React from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 bg-[#151515] text-white shadow-2xl px-5 py-3.5 rounded-full border border-white/10 max-w-sm">
        <div className="flex-shrink-0">
          {toast.type === 'wishlist' ? (
            <Heart className="w-4 h-4 fill-white text-white" />
          ) : (
            <ShoppingBag className="w-4 h-4 text-white" />
          )}
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <div className="font-heading text-sm font-bold text-white leading-tight truncate">{toast.title}</div>
          <div className="text-[11px] text-white/70 truncate">{toast.message}</div>
        </div>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors cursor-pointer p-1"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
