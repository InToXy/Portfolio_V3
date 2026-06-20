import { useEffect } from 'react';

export const useScrollReveal = (dependencies: any[] = []) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Re-observe when page changes or content updates
    const timeout = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal-on-scroll');
      targets.forEach((target) => observer.observe(target));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
