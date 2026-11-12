import React from 'react';
import { X, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function WishlistModal({ isOpen, onClose, wishlistIds, onRemoveFromWishlist, onAddToCart, currency }) {
  if (!isOpen) return null;
  const items = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(0)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#EBEBEB] shadow-2xl z-10 my-8 max-h-[85vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#EBEBEB] flex-shrink-0">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-[#151515] text-[#151515]" />
            <h3 className="font-heading text-xl font-bold text-[#151515]">
              Saved Items ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#777777] hover:text-[#151515] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-[#EBEBEB] mx-auto mb-3" />
              <h4 className="font-heading text-xl font-bold text-[#151515]">Your wishlist is empty</h4>
              <p className="text-xs text-[#777777] mt-1">
                Save pieces to examine or purchase later.
              </p>
            </div>
          ) : (
            items.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-3 rounded-2xl bg-[#F7F7F7] border border-[#EBEBEB]">
                <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0">
                  <img src={p.primaryImage} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm font-bold text-[#151515] leading-snug truncate">
                    {p.shortName}
                  </h4>
                  <div className="text-xs text-[#777777] truncate">{p.finish}</div>
                  <div className="font-heading text-sm font-bold text-[#151515] mt-0.5">{fmt(p.price)}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(p);
                      onRemoveFromWishlist(p.id);
                    }}
                    className="furnexa-btn-dark !py-2 !px-3.5 text-xs gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(p.id)}
                    className="p-2 text-[#999] hover:text-rose-600 transition-colors cursor-pointer"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
