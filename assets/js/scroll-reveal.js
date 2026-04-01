document.addEventListener("DOMContentLoaded", function() {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.info-card, .hero-body, .features .card, .highlights .highlight-item');
  elementsToAnimate.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
});
