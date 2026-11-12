import React, { useState } from 'react';
import { ShoppingBag, Heart, Check } from 'lucide-react';

export default function ProductCard({
  product,
  onAddToCart,
  onOpenQuickView,
  isWishlisted,
  onToggleWishlist,
  currency,
}) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const primary = product.primaryImage;
  const secondary = product.images?.[1]?.src || primary;

  const formatPrice = (amount) => {
    if (amount === undefined || amount === null) return '';
    const val = amount * (currency?.rate || 1);
    const formatted = val.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `${currency?.symbol || '₹'} ${formatted}`;
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    onToggleWishlist(product.id);
  };

  return (
    <article
      className="group relative rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#C07A48] p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(192,122,72,0.12)] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpenQuickView(product)}
    >
      <div>
        {/* Product Image Stage — Minimal & Clean */}
        <div className="relative overflow-hidden rounded-xl bg-[#FAF8F5] aspect-square p-5 flex items-center justify-center mb-3.5 border border-[#F0ECE4]">
          
          {/* Primary Basket Image */}
          <img
            src={primary}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-106 drop-shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
            style={{
              opacity: hovered && secondary !== primary ? 0 : 1,
            }}
          />

          {/* Secondary Alternate Image on Hover */}
          {secondary !== primary && (
            <img
              src={secondary}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-contain p-5 transition-all duration-500 ease-out drop-shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'scale(1.06)' : 'scale(1.1)',
              }}
            />
          )}

          {/* Like / Wishlist Option (Top-Right) */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#EBE6DF] hover:border-[#C07A48] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-110 z-10"
            aria-label="Save to Wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? 'fill-[#C07A48] text-[#C07A48]' : 'text-[#777] hover:text-[#C07A48]'
              }`}
            />
          </button>
        </div>

        {/* Product Name & Dual Price Row (Reference Exact Match: ₹ 1,299.00  ₹ 3,299.00) */}
        <div className="flex flex-col gap-1.5 px-0.5">
          <h3 className="font-heading text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C07A48] transition-colors truncate">
            {product.shortName}
          </h3>

          {/* Exact price layout from reference */}
          <div className="flex items-baseline gap-2.5 sm:gap-3">
            <span className="font-heading text-lg sm:text-xl font-bold text-[#1A1A1A]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base text-[#888888] line-through font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Catchy Full-Width "Add to Cart" Button */}
      <div className="pt-3.5 mt-2">
        <button
          onClick={handleAdd}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 ${
            added
              ? 'bg-[#108474] text-white shadow-emerald-700/20'
              : 'bg-[#C07A48] hover:bg-[#A86333] text-white shadow-[#C07A48]/25 hover:shadow-md'
          }`}
          aria-label={`Add ${product.shortName} to Cart`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>Added to Cart ✓</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>

    </article>
  );
}
