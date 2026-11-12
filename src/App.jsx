import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import SpaceShowcase from './components/SpaceShowcase';
import PromoFeature from './components/PromoFeature';
import ProductCatalog from './components/ProductCatalog';
import MetricsSection from './components/MetricsSection';
import ArtisanshipSection from './components/ArtisanshipSection';
import LookbookSection from './components/LookbookSection';
import UnboxingSection from './components/UnboxingSection';
import JournalSection from './components/JournalSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ProductDetailModal from './components/ProductDetailModal';
import WishlistModal from './components/WishlistModal';
import ConciergeModal from './components/ConciergeModal';
import ProvenanceModal from './components/ProvenanceModal';
import Toast from './components/Toast';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], quantity: 1 } // Pre-load 1 Imperial Aviary for instant delightful interaction
  ]);
  const [wishlist, setWishlist] = useState(['hm-02', 'hm-03']);
  const [currency, setCurrency] = useState({ code: 'INR', symbol: '₹', rate: 1, label: 'INR (₹)' });
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProvenanceOpen, setIsProvenanceOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const showToast = (title, message, type = 'cart') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    showToast('Added to Cart', `${quantity}x ${product.shortName} added.`, 'cart');
  };

  const handleBuyNow = (product) => {
    // 1-Click Fast Purchase like Amazon & Flipkart
    handleAddToCart(product, 1);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleToggleWishlist = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast('Removed from Wishlist', `${product?.shortName || 'Item'} removed.`, 'wishlist');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast('Saved to Wishlist', `${product?.shortName || 'Item'} saved.`, 'wishlist');
    }
  };

  const handleSelectProductById = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      setQuickViewProduct(product);
    }
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-[#151515] relative font-sans antialiased selection:bg-[#C07A48] selection:text-white">
      {/* 1. Header with Amazon & Flipkart Style Search Bar & Quick Links */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        cartTotal={cartTotal}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main>
        {/* 2. Luminous & Sunlit Hero Banner with 5-Second Transitions */}
        <Hero
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
          onBuyNow={handleBuyNow}
          currency={currency}
        />

        {/* 3. Marquee Ticker */}
        <MarqueeBanner />

        {/* 4. Shop by Categories */}
        <SpaceShowcase
          onSelectProductById={handleSelectProductById}
          onSelectCategory={(query) => {
            setSearchQuery(query);
            document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Best Selling Collections (Brought IMMEDIATELY after Categories as requested!) */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
          onBuyNow={handleBuyNow}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          currency={currency}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* 6. Furnexa High-Impact Split Promo Card */}
        <PromoFeature
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
          currency={currency}
        />

        {/* 7. Animated Metrics Counter */}
        <MetricsSection />

        {/* 8. The Craftsmanship & 4 Rites */}
        <ArtisanshipSection
          onOpenQuickView={setQuickViewProduct}
        />

        {/* 9. In-Situ Penthouse Architectural Staging */}
        <LookbookSection
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
          currency={currency}
        />

        {/* 10. The Unboxing Ritual */}
        <UnboxingSection
          onOpenProvenance={() => setIsProvenanceOpen(true)}
        />

        {/* 11. Trusted by Homeowners (Reviews) */}
        <ReviewsSection />
      </main>

      {/* 12. Footer with CTA Banner & Wordmark */}
      <Footer
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenProvenance={() => setIsProvenanceOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        currency={currency}
        promoDiscount={promoDiscount}
        onApplyPromo={(rate) => setPromoDiscount(rate)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
        currency={currency}
        promoDiscount={promoDiscount}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        currency={currency}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* Concierge Modal */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      {/* Certificate of Provenance Modal */}
      <ProvenanceModal
        isOpen={isProvenanceOpen}
        onClose={() => setIsProvenanceOpen(false)}
      />

      {/* Minimal Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
