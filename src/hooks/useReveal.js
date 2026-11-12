import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to elements with class 'reveal', 'reveal-left', 'reveal-right',
 * gracefully transitioning them to 'visible' when they enter the viewport.
 * Also triggers on initial load for elements already in view.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, unobserve to keep DOM performant
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    const checkAndObserve = () => {
      const targets = document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)');
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in initial viewport, make it visible immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    checkAndObserve();
    const timer = setTimeout(checkAndObserve, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, deps);
}
