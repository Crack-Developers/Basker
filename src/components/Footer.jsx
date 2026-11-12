import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer({ onOpenConcierge, onOpenProvenance }) {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (email) {
      setSubbed(true);
      setEmail('');
      setTimeout(() => setSubbed(false), 5000);
    }
  };

  return (
    <footer id="footer" className="bg-[#151515] text-white">
      
      {/* Furnexa CTA Wrap ("Transform your space today") */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2 font-medium">
              Join the Herimart Circle
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Transform your space today.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 font-normal max-w-lg leading-relaxed">
              Sign up for private studio release notices and receive 15% off your first commission with code <strong className="text-white">HERI15</strong>.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subbed ? (
              <div className="p-4 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white text-center">
                ✓ Welcome. Apply privilege code <strong>HERI15</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSub} className="flex gap-2 bg-white/10 p-1.5 rounded-full border border-white/15">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 text-sm text-white placeholder-white/40 bg-transparent outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-[#151515] font-medium text-xs px-6 py-3 rounded-full hover:bg-[#F0F0F0] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <div className="mt-2.5 text-xs text-white/40 pl-4">
              Discreet correspondence only. Unsubscribe at any time.
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-white/10 p-1 flex-shrink-0">
              <img src="/images/logo-dark.jpg" alt="HM Logo" className="w-full h-full object-cover invert" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-white">
              HERIMART
            </span>
          </div>

          <p className="text-sm text-white/60 font-normal leading-relaxed max-w-sm">
            Handcrafted metallic fruit baskets and sculptural tabletop sanctuaries, engineered with 360° micro-convection to elevate everyday living.
          </p>

          <div className="pt-2 text-xs font-mono text-white/50 space-y-1.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white/70" />
              <span>740 Madison Avenue, New York, NY 10065</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-white/70" />
              <span>+1 (800) 794-2831</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white/70" />
              <span>concierge@herimart-luxury.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-medium">
            Explore
          </div>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#hero" className="hover:text-white transition-colors">The Imperial Aviary</a></li>
            <li><a href="#categories" className="hover:text-white transition-colors">Shop by Categories</a></li>
            <li><a href="#bestsellers" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#craft" className="hover:text-white transition-colors">Atelier Metallurgy</a></li>
            <li><a href="#insitu" className="hover:text-white transition-colors">In-Situ Styling</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
          </ul>
        </div>

        {/* Client Services */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-medium">
            Services
          </div>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <button onClick={onOpenConcierge} className="hover:text-white transition-colors text-left cursor-pointer">
                Private Concierge Desk
              </button>
            </li>
            <li>
              <button onClick={onOpenProvenance} className="hover:text-white transition-colors text-left cursor-pointer">
                Certificate of Provenance
              </button>
            </li>
            <li>
              <button onClick={onOpenConcierge} className="hover:text-white transition-colors text-left cursor-pointer">
                Trade & Interior Accounts
              </button>
            </li>
            <li>
              <button onClick={onOpenConcierge} className="hover:text-white transition-colors text-left cursor-pointer">
                White-Glove Courier Delivery
              </button>
            </li>
          </ul>
        </div>

        {/* Guarantee Box */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-white text-xs font-semibold mb-2">
              <Shield className="w-4 h-4" />
              <span>LIFETIME PLEDGE</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Every piece carries our lifetime structural metal warranty and authenticated serial stamp.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40">
            BATCH MMXXVI VERIFIED
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <div>
          © 2026 HERIMART TABLEWARE. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <span>TERMS</span>
          <span>PRIVACY</span>
          <span>SHIPPING POLICY</span>
        </div>
      </div>

      {/* GIANT FURNEXA-STYLE WORDMARK IN FOOTER */}
      <div className="w-full overflow-hidden select-none pointer-events-none text-center pb-4 opacity-5">
        <span className="font-heading font-extrabold text-[15vw] text-white tracking-[-0.04em] uppercase leading-none whitespace-nowrap">
          HERIMART
        </span>
      </div>

    </footer>
  );
}
