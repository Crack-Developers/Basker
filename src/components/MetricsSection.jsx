import React, { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '', display }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display ? display : `${count.toLocaleString()}${suffix}`}
    </span>
  );
}

export default function MetricsSection() {
  const stats = [
    { label: 'Homes & Estates Adorned', value: 12400, suffix: '+', note: 'Worldwide Delivery' },
    { label: 'Extended Freshness Retention', value: 300, suffix: '%', note: '360° Convection Science' },
    { label: 'Solid Core High-Gauge Metal', value: 100, suffix: '%', note: 'Zero Composites' },
    { label: 'Average Customer Rating', value: 498, suffix: '', display: '4.98', note: 'From 450+ Reviews' },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className={`flex flex-col ${i > 0 ? 'pt-8 lg:pt-0 lg:pl-10' : ''}`}>
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
                <Counter target={s.value} suffix={s.suffix} display={s.display} />
              </div>
              <div className="text-sm sm:text-base font-medium text-white/90">
                {s.label}
              </div>
              <div className="text-xs font-mono text-white/50 mt-1">
                {s.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
