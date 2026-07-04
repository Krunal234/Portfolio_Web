export const useRevealAnimation = () => {
  const setupRevealObserver = () => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    // Observe all elements with data-reveal attribute
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      revealObserver.observe(el);
    });

    return revealObserver;
  };

  return setupRevealObserver;
};
