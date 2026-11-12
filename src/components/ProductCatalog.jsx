import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, Truck, ShieldCheck, RefreshCw, SlidersHorizontal, ArrowUpDown, X, Zap } from 'lucide-react';

export default function ProductCatalog({
  onAddToCart,
  onOpenQuickView,
  onBuyNow,
  wishlist,
  onToggleWishlist,
  currency,
  searchQuery = '',
  onClearSearch,
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterDealsOnly, setFilterDealsOnly] = useState(false);
  const [filterFastDelivery, setFilterFastDelivery] = useState(false);
  const [filterHighRating, setFilterHighRating] = useState(false);
  const [filterUnder160, setFilterUnder160] = useState(false);

  const categories = [
    { id: 'All',              label: 'All Products', count: PRODUCTS.length },
    { id: 'Signature Gold',   label: 'Signature Aviary', count: PRODUCTS.filter(p => p.category === 'Signature Gold').length },
    { id: 'Champagne Brass',  label: 'Champagne Brass', count: PRODUCTS.filter(p => p.category === 'Champagne Brass').length },
    { id: 'Midnight Onyx',    label: 'Midnight Onyx', count: PRODUCTS.filter(p => p.category === 'Midnight Onyx').length },
    { id: 'Cloche Sanctuary', label: 'Cloche Domes', count: PRODUCTS.filter(p => p.category === 'Cloche Sanctuary').length },
    { id: 'Geometric Modern', label: 'Geometric Facets', count: PRODUCTS.filter(p => p.category === 'Geometric Modern').length },
  ];

  // Filtering & Sorting Pipeline (Amazon & Flipkart E-Commerce Logic)
  const list = useMemo(() => {
    let arr = [...PRODUCTS];

    // 1. Text Search Filter
    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      arr = arr.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.finish.toLowerCase().includes(q) ||
        (p.space && p.space.toLowerCase().includes(q))
      );
    }

    // 2. Category Tab Filter
    if (activeCategory !== 'All') {
      arr = arr.filter((p) => p.category === activeCategory);
    }

    // 3. Quick Amazon/Flipkart Chips
    if (filterDealsOnly) {
      arr = arr.filter((p) => p.dealTag || (p.originalPrice && p.originalPrice > p.price));
    }
    if (filterFastDelivery) {
      arr = arr.filter((p) => p.leadTime && p.leadTime.includes('Tomorrow'));
    }
    if (filterHighRating) {
      arr = arr.filter((p) => (p.rating || 5) >= 4.9);
    }
    if (filterUnder160) {
      arr = arr.filter((p) => p.price <= 160);
    }

    // 4. Amazon/Flipkart Sorting
    switch (sortBy) {
      case 'price-asc':
        arr.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        arr.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        arr.sort((a, b) => (b.rating || 5) - (a.rating || 5));
        break;
      case 'discount':
        arr.sort((a, b) => {
          const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discB - discA;
        });
        break;
      default:
        // 'featured' maintains natural curated order
        break;
    }

    return arr;
  }, [
    searchQuery,
    activeCategory,
    sortBy,
    filterDealsOnly,
    filterFastDelivery,
    filterHighRating,
    filterUnder160,
  ]);

  const hasActiveFilters =
    activeCategory !== 'All' ||
    filterDealsOnly ||
    filterFastDelivery ||
    filterHighRating ||
    filterUnder160 ||
    Boolean(searchQuery);

  const resetFilters = () => {
    setActiveCategory('All');
    setFilterDealsOnly(false);
    setFilterFastDelivery(false);
    setFilterHighRating(false);
    setFilterUnder160(false);
    if (onClearSearch) onClearSearch();
  };

  return (
    <section id="bestsellers" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#EBE6DF]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Amazon & Flipkart E-Commerce Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C07A48] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C07A48] font-bold">
                Amazon & Flipkart Verified Bestsellers
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
              Best Selling Collections
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#6E6E73] font-normal">
              100% Solid Metal Tabletop Aviaries & Decorative Storage • Rated 4.9★ by 1,200+ Homeowners
            </p>
          </div>

          {/* Value Perks & Fast Delivery Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#1A1A1A]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE6DF] shadow-2xs">
              <Truck className="w-4 h-4 text-[#108474]" />
              <span>FREE Delivery by Tomorrow</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE6DF] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#C07A48]" />
              <span>Cash on Delivery (COD)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE6DF] shadow-2xs">
              <RefreshCw className="w-4 h-4 text-[#C07A48]" />
              <span>Easy 30-Day Returns</span>
            </div>
          </div>
        </div>

        {/* Category Tabs Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-5 pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#C07A48] text-white shadow-md shadow-[#C07A48]/25 scale-102'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#F3EFE8] border border-[#EBE6DF]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                activeCategory === cat.id ? 'bg-white/25 text-white' : 'bg-[#FAF8F5] text-[#777]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Amazon/Flipkart Controls Bar: Filters & Sort */}
        <div className="bg-white rounded-2xl border border-[#EBE6DF] p-3 sm:p-4 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-2xs">
          
          {/* Left: Quick Amazon Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C07A48]" />
              Filter by:
            </span>

            <button
              onClick={() => setFilterDealsOnly((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterDealsOnly
                  ? 'bg-[#C07A48] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F0ECE4] border border-[#EBE6DF]'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>Deals of the Day</span>
            </button>

            <button
              onClick={() => setFilterFastDelivery((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterFastDelivery
                  ? 'bg-[#108474] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F0ECE4] border border-[#EBE6DF]'
              }`}
            >
              <Truck className="w-3 h-3" />
              <span>Next-Day Delivery</span>
            </button>

            <button
              onClick={() => setFilterHighRating((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterHighRating
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F0ECE4] border border-[#EBE6DF]'
              }`}
            >
              <span>4.9★ & Above</span>
            </button>

            <button
              onClick={() => setFilterUnder160((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterUnder160
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#F0ECE4] border border-[#EBE6DF]'
              }`}
            >
              <span>Under $160</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right: Sort By Dropdown & Count */}
          <div className="flex items-center justify-between lg:justify-end gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#F0ECE4]">
            <span className="text-xs text-[#777] font-medium">
              Showing <strong className="text-[#1A1A1A]">{list.length}</strong> of {PRODUCTS.length} products
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#777]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-bold text-[#1A1A1A] bg-[#FAF8F5] border border-[#EBE6DF] rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#C07A48] cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="discount">Biggest Discount (% Off)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Search Active Notification Banner */}
        {searchQuery && (
          <div className="mb-6 p-3 rounded-xl bg-[#FFF4E8] border border-[#F3DFC9] flex items-center justify-between">
            <span className="text-xs text-[#1A1A1A]">
              Search results for: <strong className="font-bold">"{searchQuery}"</strong> ({list.length} found)
            </span>
            <button
              onClick={onClearSearch}
              className="text-xs font-bold text-[#C07A48] hover:underline cursor-pointer flex items-center gap-1"
            >
              Clear search <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Product Cards Grid: 16 Products Displayed */}
        {list.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EBE6DF] p-12 text-center my-6">
            <p className="text-base font-bold text-[#1A1A1A] mb-2">No matching products found</p>
            <p className="text-xs text-[#777] mb-4">Try clearing some of your filters or searching for something else.</p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#C07A48] text-white text-xs font-bold hover:bg-[#A86333] transition-colors cursor-pointer"
            >
              Show All 16 Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {list.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenQuickView={onOpenQuickView}
                onBuyNow={onBuyNow}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                currency={currency}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
