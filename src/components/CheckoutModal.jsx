import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onOrderCompleted, currency, promoDiscount }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [orderNum, setOrderNum] = useState('');
  const [form, setForm] = useState({
    firstName: 'Julian',
    lastName: 'Montague',
    email: 'j.montague@residence.com',
    phone: '+1 (212) 555-0199',
    address: '740 Park Avenue, Apt 14B',
    city: 'New York',
    state: 'NY',
    zip: '10021',
    card: '•••• •••• •••• 8842',
    exp: '11/29',
    cvc: '•••',
  });

  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(2)}`;
  const sub = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  const disc = sub * promoDiscount;
  const ship = sub >= 150 ? 0 : 25;
  const total = Math.max(0, sub - disc + ship);

  const nextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    const id = 'HM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNum(id);
    setStep(3);
    onOrderCompleted();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#151515', '#C5A059', '#F7F7F7'],
      });
    } catch {}
  };

  const Field = ({ label, value, onChange, ...props }) => (
    <div>
      <label className="block text-xs font-semibold text-[#151515] mb-1.5">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-[#F7F7F7] border border-[#EBEBEB] rounded-xl text-xs font-medium text-[#151515] outline-none focus:border-[#151515]"
        required
        {...props}
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={step !== 3 ? onClose : undefined} />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl z-10 my-8 overflow-hidden border border-[#EBEBEB]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#EBEBEB]">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#151515]" />
            <h3 className="font-heading text-xl font-bold text-[#151515]">
              Checkout
            </h3>
          </div>
          {step !== 3 && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#777777] hover:text-[#151515] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-3 border-b border-[#EBEBEB] text-center text-xs font-medium bg-[#F7F7F7]">
          {[['1. Shipping', 1], ['2. Payment', 2], ['3. Confirmation', 3]].map(([label, s]) => (
            <div
              key={s}
              className={`py-3 transition-colors ${
                step === s
                  ? 'bg-white text-[#151515] font-bold border-b-2 border-[#151515]'
                  : step > s
                  ? 'text-[#2E7D32]'
                  : 'text-[#999]'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Step 1: Shipping */}
        {step === 1 && (
          <form onSubmit={nextStep} className="p-7 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="First Name"
                value={form.firstName}
                onChange={(v) => setForm({ ...form, firstName: v })}
              />
              <Field
                label="Last Name"
                value={form.lastName}
                onChange={(v) => setForm({ ...form, lastName: v })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
              />
            </div>
            <Field
              label="Street Address"
              value={form.address}
              onChange={(v) => setForm({ ...form, address: v })}
            />
            <div className="grid grid-cols-3 gap-3">
              <Field
                label="City"
                value={form.city}
                onChange={(v) => setForm({ ...form, city: v })}
              />
              <Field
                label="State"
                value={form.state}
                onChange={(v) => setForm({ ...form, state: v })}
              />
              <Field
                label="ZIP Code"
                value={form.zip}
                onChange={(v) => setForm({ ...form, zip: v })}
              />
            </div>

            <div className="pt-4 border-t border-[#EBEBEB] flex items-center justify-between">
              <div className="text-xs text-[#777777]">
                Total: <span className="font-heading font-bold text-sm text-[#151515]">{fmt(total)}</span>
              </div>
              <button type="submit" className="furnexa-btn-dark !py-3 !px-7">
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <form onSubmit={nextStep} className="p-7 space-y-4">
            <Field
              label="Card Number"
              value={form.card}
              onChange={(v) => setForm({ ...form, card: v })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Expiration Date"
                value={form.exp}
                onChange={(v) => setForm({ ...form, exp: v })}
              />
              <Field
                label="CVC / Security Code"
                value={form.cvc}
                onChange={(v) => setForm({ ...form, cvc: v })}
              />
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB] text-xs font-medium space-y-1.5">
              <div className="flex justify-between text-[#777777]">
                <span>Subtotal:</span>
                <span className="text-[#151515]">{fmt(sub)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-[#2E7D32]">
                  <span>15% Discount:</span>
                  <span>−{fmt(disc)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#777777]">
                <span>Shipping:</span>
                <span>{ship === 0 ? 'Free' : fmt(ship)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#EBEBEB] text-sm font-heading font-bold text-[#151515]">
                <span>Total:</span>
                <span>{fmt(total)}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-medium text-[#777777] hover:text-[#151515] cursor-pointer"
              >
                ← Back
              </button>
              <button type="submit" className="furnexa-btn-dark !py-3 !px-7">
                <ShieldCheck className="w-4 h-4" />
                <span>Complete Order</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#151515] text-white mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-heading text-3xl font-bold text-[#151515]">
                Thank you for your order!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#777777] max-w-sm mx-auto leading-relaxed">
                Your handcrafted tableware piece has been registered. An email confirmation has been sent to {form.email}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB] max-w-xs mx-auto text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#777777]">Order Number:</span>
                <span className="font-bold text-[#151515]">{orderNum}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Recipient:</span>
                <span className="text-[#151515]">{form.firstName} {form.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Dispatch:</span>
                <span className="text-[#2E7D32]">Within 24 Hours</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="furnexa-btn-dark !py-3 !px-8"
            >
              Continue Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
