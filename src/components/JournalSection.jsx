import React, { useState } from 'react';
import { ArrowUpRight, Clock, BookOpen, X } from 'lucide-react';

export default function JournalSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 'article-1',
      tag: 'Freshness Science',
      readTime: '4 min read',
      date: 'Autumn 2026',
      title: 'The Art of Living Harvest: Why 360° Airflow Preserves Fresh Produce',
      excerpt: 'Discover the thermodynamic convection dynamics that keep organic citrus, figs, and stone fruits crisp and aromatic up to three times longer than solid bowls.',
      image: '/images/herimart-harvest-macro.jpg',
      content: `
        Most domestic households lose up to 30% of their fresh produce within 4 days of purchase. The culprit is rarely ambient room temperature alone; it is ethylene gas concentration and thermal stagnation.

        When fruit is placed into traditional glazed ceramic bowls, heavy glass pedestals, or plastic containers, metabolic moisture and ethylene gas become trapped beneath the lower layers. This micro-climate accelerates cellular senescence and fungal spores.

        The Imperial Aviary was engineered from a biological inquiry: How can air circulate without restriction? By creating an elevated weighted pedestal and a 360° micro-mesh dome, ambient air is drawn in beneath the fruit, ascends through the pile, and exhausts naturally through the arched avian crown. The result is continuous ambient micro-convection that doubles or triples the shelf-life of your harvest.
      `,
    },
    {
      id: 'article-2',
      tag: 'Interior Architecture',
      readTime: '5 min read',
      date: 'Autumn 2026',
      title: 'Styling Sculptural Metal on Calacatta Marble and Natural Oak',
      excerpt: 'How top interior architects anchor expansive kitchen islands and high-ceiling dining rooms with warm royal gold metallics.',
      image: '/images/herimart-penthouse-insitu.jpg',
      content: `
        Contemporary minimalist interiors often lean heavily on cool, monolithic materials: honed quartz, grey-veined Calacatta marble, brushed concrete, and matte black steel fixtures. While visually striking, these surfaces can occasionally feel sterile without an organic counterweight.

        Introducing a handcrafted golden aviary basket creates an immediate focal anchor. The warm antique gold finish catches morning sun and evening candlelight, while the organic silhouettes of fresh lemons, pomegranates, and pears provide vibrant biological warmth.

        Whether positioned at the center of an eight-seat banqueting table or on a waterfall kitchen island, the vessel acts as a permanent architectural sculpture that softens modern lines with timeless classical craftsmanship.
      `,
    },
    {
      id: 'article-3',
      tag: 'Atelier Metallurgy',
      readTime: '3 min read',
      date: 'Autumn 2026',
      title: 'The Unboxing & Care Ritual: Maintaining Luminous Royal Gold',
      excerpt: 'Everything you need to know about caring for non-reactive electroplated metal and preserving its heirloom luster.',
      image: '/images/herimart-unboxing-casket.jpg',
      content: `
        Every Herimart centerpiece is treated with a proprietary dual-layer electroplated gold immersion, finished with a non-reactive micro-ceramic sealant. This barrier is engineered specifically to withstand natural citrus acids, high kitchen humidity, and frequent handling.

        When unboxing your vessel from its rigid presentation casket, use the included white cotton handling gloves to avoid initial finger oil transfer. 

        For daily maintenance, a gentle wipe with a dry or lightly damp micro-fiber cloth is all that is required. Never use abrasive metal scouring pads or caustic oven cleaners. Handled with basic care, your piece will maintain its rich luster for decades to come.
      `,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F7F7] border-t border-[#EBEBEB]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Furnexa Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2 font-medium">
              Editorial Monograph
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151515]">
              Our Journal & Styling Guides
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#777777] max-w-md font-normal leading-relaxed">
            Curated articles on botanical freshness science, residential interior styling, and European metalcraft.
          </p>
        </div>

        {/* Furnexa 3-Column Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-white rounded-2xl overflow-hidden border border-[#EBEBEB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#F7F7F7]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#151515] text-[10px] font-semibold px-3 py-1 rounded-full border border-[#EBEBEB] shadow-2xs">
                    {art.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#777777] mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#151515] leading-snug group-hover:text-[#8F7032] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777777] font-normal leading-relaxed mt-2.5 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read More Link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-semibold text-[#151515] group-hover:text-[#8F7032] transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setActiveArticle(null)} />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 my-8 overflow-hidden border border-[#EBEBEB] max-h-[88vh] flex flex-col">
            
            <div className="flex items-center justify-between p-6 border-b border-[#EBEBEB] bg-white">
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                {activeArticle.tag} · {activeArticle.readTime}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full border border-[#EBEBEB] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#F7F7F7]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#151515] leading-snug">
                {activeArticle.title}
              </h2>

              <div className="text-sm text-[#777777] leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {activeArticle.content.trim()}
              </div>

              <div className="pt-6 border-t border-[#EBEBEB] flex items-center justify-between">
                <span className="text-xs font-mono text-[#999]">Published by HM HERIMART Atelier</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="furnexa-btn-dark !py-2 !px-5 text-xs"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

