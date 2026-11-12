import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Shield, Tag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout, currency, promoDiscount, onApplyPromo }) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(2)}`;
  const subtotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  const discount = subtotal * promoDiscount;
  const freeShip = subtotal >= 150;
  const shipping = subtotal === 0 || freeShip ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shipping);
  const progPct = Math.min(100, (subtotal / 150) * 100);

  const handlePromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (['HERI15', 'LUXURY15', 'VIP15', 'FURNEXA15'].includes(code)) {
      onApplyPromo(0.15);
      setPromoInput('');
      setPromoError('');
    } else {
      setPromoError('Invalid code — try HERI15 for 15% off');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/50 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-[440px] h-full bg-white shadow-2xl flex flex-col z-10 border-l border-[#EBEBEB]">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EBEBEB]">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#151515]">Your Cart</h3>
            <div className="text-xs text-[#777777] mt-0.5">
              {cartItems.reduce((a, b) => a + b.quantity, 0)} item{cartItems.length !== 1 ? 's' : ''} in cart
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#EBEBEB] hover:border-[#151515] flex items-center justify-center text-[#151515] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-3.5 bg-[#F7F7F7] border-b border-[#EBEBEB]">
          <div className="flex justify-between text-xs font-medium text-[#151515] mb-1.5">
            <span>{freeShip ? '✓ Free Shipping Unlocked!' : `Add ${fmt(150 - subtotal)} more for free shipping`}</span>
            <span>{Math.round(progPct)}%</span>
          </div>
          <div className="h-2 bg-[#EBEBEB] rounded-full w-full overflow-hidden">
            <div className="h-full bg-[#C07A48] rounded-full transition-all duration-500" style={{ width: `${progPct}%` }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-[#EBEBEB]" />
              <h4 className="font-heading text-2xl font-bold text-[#151515]">Your cart is empty</h4>
              <p className="text-xs text-[#777777] max-w-xs">
                Explore our best selling handcrafted metallic fruit baskets and vessels.
              </p>
              <button onClick={onClose} className="furnexa-btn-dark !py-2.5 !px-6 text-xs mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 pb-5 border-b border-[#F0F0F0] last:border-b-0">
                {/* Image */}
                <div className="w-20 h-20 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB] p-2 flex items-center justify-center flex-shrink-0">
                  <img src={item.primaryImage} alt={item.name} className="w-full h-full object-contain" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-base font-bold text-[#151515] leading-snug line-clamp-1">
                    {item.shortName}
                  </h4>
                  <div className="text-xs text-[#777777] mt-0.5 truncate">{item.finish}</div>
                  <div className="font-heading text-base font-bold text-[#151515] mt-1">
                    {fmt(item.price * item.quantity)}
                  </div>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#EBEBEB] rounded-full bg-white px-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 text-[#777777] hover:text-[#151515] text-sm cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-xs font-mono font-bold text-[#151515]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 text-[#777777] hover:text-[#151515] text-sm cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#999] hover:text-rose-600 transition-colors cursor-pointer p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#EBEBEB] p-6 space-y-4 bg-white">
            
            {/* Promo Code Form */}
            <form onSubmit={handlePromo} className="flex gap-2">
              <div className="flex-1 relative">
                <Tag className="w-3.5 h-3.5 text-[#999] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Discount code (e.g. HERI15)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs font-medium bg-[#F7F7F7] border border-[#EBEBEB] rounded-full text-[#151515] outline-none uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 rounded-full border border-[#EBEBEB] text-xs font-semibold text-[#151515] hover:bg-[#151515] hover:text-white transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>
            {promoError && <p className="text-xs text-rose-600 pl-2">{promoError}</p>}
            {promoDiscount > 0 && <p className="text-xs text-[#2E7D32] pl-2 font-medium">✓ 15% discount applied</p>}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs font-medium pt-2">
              <div className="flex justify-between text-[#777777]">
                <span>Subtotal</span>
                <span className="text-[#151515]">{fmt(subtotal)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-[#2E7D32]">
                  <span>Discount (15%)</span>
                  <span>−{fmt(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#777777]">
                <span>Shipping</span>
                <span className={freeShip ? 'text-[#2E7D32]' : 'text-[#151515]'}>
                  {freeShip ? 'Free' : fmt(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-base font-heading font-bold pt-3 border-t border-[#EBEBEB]">
                <span>Total</span>
                <span>{fmt(total)}</span>
              </div>
            </div>

            {/* Checkout Button (Catchy Terracotta Accent) */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="btn-accent w-full !py-3.5 justify-center shadow-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#777777] pt-1">
              <Shield className="w-3.5 h-3.5 text-[#151515]" />
              <span>Secure 256-Bit SSL Encrypted Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
