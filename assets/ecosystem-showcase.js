(() => {
  const showcase = document.querySelector('[data-console-showcase]');
  if (!showcase) return;

  const slides = Array.from(showcase.querySelectorAll('[data-console-slide]'));
  const dots = Array.from(showcase.querySelectorAll('[data-console-dot]'));
  const previous = showcase.querySelector('[data-console-prev]');
  const next = showcase.querySelector('[data-console-next]');
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.hidden = !active;
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  previous?.addEventListener('click', () => showSlide(activeIndex - 1));
  next?.addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

  showcase.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') showSlide(activeIndex + 1);
  });

  showSlide(0);
})();