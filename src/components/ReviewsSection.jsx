import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/products';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#EBE6DF]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C07A48] block mb-2 font-bold">
              Client Reviews
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
              Trusted by Homeowners
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-[#EBE6DF] shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-sm font-heading font-bold text-[#1A1A1A]">
              4.98 / 5.0 Rating (450+ reviews)
            </div>
          </div>
        </div>

        {/* 2-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#EBE6DF] hover:border-[#C07A48]/50 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0ECE4]">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-[#108474]">
                      <ShieldCheck className="w-4 h-4" />
                      Verified Purchase
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                  "{rev.title}"
                </h3>

                <p className="text-sm text-[#6E6E73] font-normal leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EBE6DF] bg-[#FAF8F5]">
                    <img src={rev.image} alt={rev.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-heading text-base font-bold text-[#1A1A1A]">{rev.author}</div>
                    <div className="text-xs text-[#6E6E73]">{rev.role}</div>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium text-[#1A1A1A] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EBE6DF]">
                  {rev.productName}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
