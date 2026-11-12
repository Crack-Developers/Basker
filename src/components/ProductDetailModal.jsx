import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ChevronDown, ChevronUp, ZoomIn, Truck, Shield } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist, currency }) {
  if (!product) return null;

  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openTab, setOpenTab] = useState('specs');
  const [zoomed, setZoomed] = useState(false);

  const images = product.images || [{ src: product.primaryImage, label: 'Front View' }];
  const cur = images[imgIdx] || images[0];
  const fmt = (n) => `${currency.symbol}${(n * currency.rate).toFixed(0)}`;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const tabs = [
    {
      id: 'specs',
      label: 'Specifications & Dimensions',
      content: (
        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
          {[
            ['Dimensions', product.dimensions],
            ['Net Weight', product.weight],
            ['Material', product.material],
            ['Capacity', product.capacity],
            ['Finish', product.finish],
            ['Lead Time', product.leadTime],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-[#EBEBEB] pb-2.5">
              <div className="text-[10px] uppercase text-[#999]">{k}</div>
              <div className="text-[#151515] font-medium mt-0.5">{v}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'science',
      label: '360° Convection Science',
      content: (
        <div className="text-xs sm:text-sm text-[#777777] leading-relaxed space-y-2">
          <p>
            Unlike solid ceramic or glass containers that allow trapped ethylene gas and moisture to accumulate, Herimart's breathable micro-woven metal mesh facilitates continuous 360° air convection.
          </p>
          <p className="font-semibold text-[#151515]">
            ✓ Extends fruit freshness up to 300% longer while protecting from ambient insects and dust.
          </p>
        </div>
      ),
    },
    {
      id: 'care',
      label: 'Care & Maintenance',
      content: (
        <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
          Wipe down gently with a soft micro-fiber cloth. The protective electroplated finish is naturally resistant to organic citrus acids, moisture, and everyday handling.
        </p>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#151515]/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl z-10 my-8 overflow-hidden border border-[#EBEBEB]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white border border-[#EBEBEB] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white transition-colors cursor-pointer shadow-xs"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[88vh] overflow-y-auto">
          
          {/* LEFT: Image Gallery */}
          <div className="bg-[#F7F7F7] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EBEBEB]">
            
            {/* Main Stage Image */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-square flex items-center justify-center cursor-zoom-in group bg-white border border-[#EBEBEB] p-6 shadow-2xs"
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
            >
              <img
                src={cur.src}
                alt={cur.label || product.name}
                className="w-full h-full object-contain transition-transform duration-700 ease-out"
                style={{ transform: zoomed ? 'scale(1.2)' : 'scale(1)' }}
              />

              <div className="absolute bottom-3 left-3 bg-white/95 text-[#151515] px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border border-[#EBEBEB]">
                {cur.label || 'Perspective'}
              </div>

              <div className="absolute bottom-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#151515]" />
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`rounded-xl overflow-hidden transition-all cursor-pointer p-1 bg-white ${
                    i === imgIdx
                      ? 'border-2 border-[#151515] shadow-xs'
                      : 'border border-[#EBEBEB] hover:border-[#151515]'
                  }`}
                  style={{ width: 60, height: 60 }}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Product Details */}
          <div className="p-8 lg:p-10 flex flex-col gap-5 overflow-y-auto bg-white">
            
            {/* Badge & Stock */}
            <div className="flex items-center justify-between pb-3 border-b border-[#EBEBEB] text-xs font-mono">
              <span className="bg-[#151515] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {product.badge}
              </span>
              <span className="text-[#2E7D32] font-semibold">
                Only {product.stockLeft} units in stock
              </span>
            </div>

            {/* Title & Reviews */}
            <div>
              <span className="text-xs font-mono text-[#777777] uppercase tracking-wider block mb-1">
                {product.collection}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#151515]">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2 text-xs font-medium text-[#151515]">
                <div className="flex" style={{ color: '#151515' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>{product.rating} ({product.reviewsCount} customer reviews)</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 py-4 border-y border-[#EBEBEB]">
              <span className="font-heading text-3xl font-bold text-[#151515]">{fmt(product.price)}</span>
              <span className="font-mono text-sm text-[#999] line-through">{fmt(product.originalPrice)}</span>
              <span className="ml-auto text-xs font-semibold text-[#2E7D32] bg-[#2E7D32]/10 px-2.5 py-1 rounded-full">
                Save {fmt(product.originalPrice - product.price)}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
              {product.description || product.summary}
            </p>

            {/* Stepper + Add to Cart Button */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center border border-[#EBEBEB] rounded-full bg-white px-1">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-8 h-10 text-[#777777] hover:text-[#151515] text-lg cursor-pointer"
                >
                  −
                </button>
                <span className="w-8 text-center text-xs font-mono font-bold text-[#151515]">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-8 h-10 text-[#777777] hover:text-[#151515] text-lg cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 btn-accent !py-3.5 shadow-md ${added ? '!bg-[#108474] !border-[#108474]' : ''}`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{added ? 'Added to Cart ✓' : `Add to Cart — ${fmt(product.price * qty)}`}</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className="w-12 h-12 rounded-full border border-[#EBE6DF] hover:border-[#C07A48] flex items-center justify-center cursor-pointer transition-colors bg-white shadow-2xs"
                aria-label="Wishlist toggle"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C07A48] text-[#C07A48]' : 'text-[#777777]'}`} />
              </button>
            </div>

            {/* Shipping Note */}
            <div className="flex items-center gap-2 text-xs text-[#777777]">
              <Truck className="w-4 h-4 text-[#151515]" />
              <span>Complimentary insured shipping on orders over $150.</span>
            </div>

            {/* Accordion Tabs */}
            <div className="border-t border-[#EBEBEB] pt-2">
              {tabs.map((tab) => (
                <div key={tab.id} className="border-b border-[#EBEBEB]">
                  <button
                    onClick={() => setOpenTab(openTab === tab.id ? null : tab.id)}
                    className="w-full flex items-center justify-between py-3.5 text-left text-xs font-heading font-bold text-[#151515] hover:text-[#8F7032] transition-colors cursor-pointer"
                  >
                    <span>{tab.label}</span>
                    {openTab === tab.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openTab === tab.id && <div className="pb-4 pt-1">{tab.content}</div>}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
