import React from 'react';

export default function SpaceShowcase({ onSelectProductById, onSelectCategory }) {
  const categories = [
    {
      id: 'aviary',
      title: 'Aviary Baskets',
      count: '5 Designs',
      query: 'Aviary',
      image: '/images/categories/cat-aviary.png',
      productRef: 'hm-01',
    },
    {
      id: 'urns',
      title: 'Woven Brass Urns',
      count: '4 Designs',
      query: 'Urn',
      image: '/images/categories/cat-urns.png',
      productRef: 'hm-02',
    },
    {
      id: 'cloches',
      title: 'Cloche Domes',
      count: '3 Designs',
      query: 'Cloche',
      image: '/images/categories/cat-cloches.png',
      productRef: 'hm-03',
    },
    {
      id: 'geometric',
      title: 'Geometric Baskets',
      count: '3 Designs',
      query: 'Geometric',
      image: '/images/categories/cat-geometric.png',
      productRef: 'hm-04',
    },
    {
      id: 'tiered',
      title: 'Tiered Stands',
      count: '2 Designs',
      query: 'Stand',
      image: '/images/categories/cat-tiered.png',
      productRef: 'hm-08',
    },
    {
      id: 'trugs',
      title: 'Braided Trugs',
      count: '2 Designs',
      query: 'Trug',
      image: '/images/categories/cat-trugs.png',
      productRef: 'hm-09',
    },
    {
      id: 'sculptural',
      title: 'Sculptural Bowls',
      count: '3 Designs',
      query: 'Lotus',
      image: '/images/categories/cat-sculptural.png',
      productRef: 'hm-07',
    },
  ];

  const handleClick = (cat) => {
    if (onSelectCategory) {
      onSelectCategory(cat.query);
    } else if (onSelectProductById) {
      onSelectProductById(cat.productRef);
    }
    const target = document.querySelector('#bestsellers');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-10 sm:py-14 bg-white border-b border-[#F0ECE4]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Heading Inspired by Home Essentials */}
        <div className="text-center mb-7 sm:mb-9">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C07A48] font-bold block mb-1">
            Handcrafted Metallic Collections
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-[#C07A48] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* 7 Circular Category Discs in Horizontal Row (Exclusive Basket Products) */}
        <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex items-start justify-start md:justify-center gap-5 sm:gap-7 lg:gap-9 xl:gap-11 min-w-max md:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleClick(cat)}
                className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none"
              >
                {/* Circular Stage with Festive Mandala Ring Halo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                  
                  {/* Subtle outer gold ring glow pulse */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EED9B3]/40 via-transparent to-[#C07A48]/30 group-hover:from-[#EED9B3] group-hover:to-[#C07A48]/60 transition-all duration-300 scale-102 group-hover:scale-108" />

                  {/* High-Resolution Basket Product Mandala Disc */}
                  <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_12px_28px_rgba(192,122,72,0.22)]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
                    />
                  </div>
                </div>

                {/* Centered Clean Basket Category Title */}
                <span className="mt-3 text-xs sm:text-[13px] font-bold text-[#1A1A1A] group-hover:text-[#C07A48] transition-colors text-center max-w-[105px] sm:max-w-[115px] leading-snug">
                  {cat.title}
                </span>

                {/* Subtitle Count */}
                <span className="text-[10px] font-mono text-[#888] group-hover:text-[#C07A48] transition-colors mt-0.5">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
