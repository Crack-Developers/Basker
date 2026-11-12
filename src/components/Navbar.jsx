import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, ChevronDown, Search, MapPin, Zap, Truck } from 'lucide-react';

export default function Navbar({
  cartCount,
  cartTotal = 0,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  currency,
  setCurrency,
  searchQuery,
  setSearchQuery,
  onSelectCategory,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery || '');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currencies = [
    { code: 'INR', symbol: '₹', rate: 1 },
    { code: 'USD', symbol: '$', rate: 0.012 },
    { code: 'EUR', symbol: '€', rate: 0.011 },
    { code: 'GBP', symbol: '£', rate: 0.0095 },
  ];

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (setSearchQuery) {
      setSearchQuery(localSearch);
    }
    const target = document.querySelector('#bestsellers');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClear = () => {
    setLocalSearch('');
    if (setSearchQuery) {
      setSearchQuery('');
    }
  };

  const quickCategories = [
    { label: '⚡ Deals of the Day', href: '#bestsellers' },
    { label: '🏆 Best Sellers', href: '#bestsellers' },
    { label: 'Aviary Baskets', cat: 'Signature Gold', href: '#bestsellers' },
    { label: 'Woven Brass Urns', cat: 'Champagne Brass', href: '#bestsellers' },
    { label: 'Cloche Domes', cat: 'Cloche Sanctuary', href: '#bestsellers' },
    { label: 'Geometric Baskets', cat: 'Geometric Modern', href: '#bestsellers' },
    { label: 'Shop by Categories', href: '#categories' },
    { label: 'Artisanship', href: '#craft' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const scrollTo = (href, cat) => {
    setMenuOpen(false);
    if (cat && onSelectCategory) {
      onSelectCategory(cat);
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'border-b border-[#EBE6DF] shadow-xs' : 'border-b border-[#F0ECE4]'
      }`}
    >
      {/* 1. Main Navigation Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4 h-20">

          {/* Logo & Delivery Location */}
          <div className="flex items-center gap-5 shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#EBE6DF] flex-shrink-0 shadow-2xs">
                <img src="/images/logo-dark.jpg" alt="HM Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-black tracking-[-0.03em] text-[#1A1A1A]">
                  HERIMART
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#C07A48] font-bold -mt-1 hidden sm:block">
                  Luxury Fruit Vessels
                </span>
              </div>
            </a>

            {/* Amazon-style Delivery Location prompt */}
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-[#555] pl-3 border-l border-[#EBE6DF]">
              <MapPin className="w-3.5 h-3.5 text-[#C07A48] shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-[#888]">Deliver to</span>
                <span className="font-bold text-[#1A1A1A]">New York 10001</span>
              </div>
            </div>
          </div>

          {/* Amazon / Flipkart Style Search Bar (Prominent in Center) */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-xl mx-2 sm:mx-4 hidden md:flex items-center relative"
          >
            <div className="w-full flex items-center bg-[#FAF8F5] border border-[#EBE6DF] hover:border-[#C07A48] focus-within:border-[#C07A48] focus-within:ring-2 focus-within:ring-[#C07A48]/20 rounded-xl overflow-hidden transition-all duration-200">
              <span className="pl-3.5 text-[#888]">
                <Search className="w-4 h-4 text-[#888]" />
              </span>
              <input
                type="text"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (setSearchQuery) setSearchQuery(e.target.value);
                }}
                placeholder="Search fruit baskets, brass urns, cloches, gold tableware..."
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-transparent text-[#1A1A1A] placeholder-[#999] focus:outline-none"
              />
              {localSearch && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 text-[#888] hover:text-[#1A1A1A] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="submit"
                className="bg-[#C07A48] hover:bg-[#A86333] text-white px-5 py-2.5 text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* Right Action Icons & Pill Cart Button */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Currency Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrOpen((v) => !v)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] py-2 px-3 rounded-full border border-[#EBE6DF] hover:border-[#C07A48] transition-colors cursor-pointer bg-white"
              >
                <span>{currency.code} ({currency.symbol})</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${currOpen ? 'rotate-180' : ''}`} />
              </button>
              {currOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl border border-[#EBE6DF] shadow-xl z-50 py-1.5 overflow-hidden">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c);
                        setCurrOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-[#FAF8F5] transition-colors ${
                        currency.code === c.code ? 'text-[#C07A48] font-bold bg-[#FAF8F5]' : 'text-[#555]'
                      }`}
                    >
                      {c.code} ({c.symbol})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Pill Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full border border-[#EBE6DF] hover:border-[#C07A48] text-[#1A1A1A] transition-colors cursor-pointer bg-white hover:text-[#C07A48]"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C07A48] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Amazon / Flipkart Style Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 py-2 sm:py-2.5 px-4 sm:px-5 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-97"
              aria-label="View Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C07A48] text-white text-[9px] font-black flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-bold">Cart</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2.5 rounded-full border border-[#EBE6DF] text-[#1A1A1A] cursor-pointer"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Input */}
        <div className="pb-3 md:hidden">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#FAF8F5] border border-[#EBE6DF] rounded-xl overflow-hidden"
          >
            <span className="pl-3 text-[#888]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                if (setSearchQuery) setSearchQuery(e.target.value);
              }}
              placeholder="Search products..."
              className="w-full py-2 px-2.5 text-xs bg-transparent text-[#1A1A1A] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#C07A48] text-white px-3.5 py-2 text-xs font-bold"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* 2. Amazon / Flipkart Sub-Navbar Strip (Category Quick Links) */}
      <div className="hidden lg:block bg-[#FAF8F5] border-t border-[#EBE6DF] py-2 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-x-auto">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between gap-6 text-xs font-semibold text-[#1A1A1A]">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none">
            {quickCategories.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href, item.cat);
                }}
                className="hover:text-[#C07A48] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[#108474] shrink-0 font-bold">
            <Truck className="w-3.5 h-3.5" />
            <span>FREE Express Delivery in 24 Hours</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#EBE6DF] px-6 py-5 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-3">
            {quickCategories.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href, item.cat);
                }}
                className="text-sm font-semibold text-[#1A1A1A] py-2 border-b border-[#F0ECE4]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
