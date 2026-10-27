(() => {
  if (typeof justifiedLayout !== 'function' || typeof GLightbox !== 'function') return;

  document.querySelectorAll('[data-photo-gallery]').forEach(async gallery => {
    const figures = [...gallery.querySelectorAll('figure')];
    const items = await Promise.all(figures.map(figure => new Promise(resolve => {
      const image = figure.querySelector('img');
      const ready = () => resolve(image.naturalWidth ? {figure, image} : null);
      image.addEventListener('load', ready, {once: true});
      image.addEventListener('error', ready, {once: true});
      image.loading = 'eager';
      if (image.complete) ready();
    })));
    const photos = items.filter(Boolean);
    if (!photos.length) return;

    photos.forEach(({figure, image}) => {
      const link = document.createElement('a');
      link.href = image.src;
      link.className = 'album-photo';
      link.dataset.gallery = gallery.dataset.photoGallery;
      link.dataset.type = 'image';
      link.dataset.alt = image.alt;
      link.setAttribute('aria-label', `${image.alt} – Großansicht öffnen`);
      const caption = figure.querySelector('figcaption');
      if (caption) {
        // Captions remain in the document, but only the lightbox displays them.
        const lines = [...caption.children].map(child => child.textContent.trim());
        link.dataset.title = lines.length ? lines[0] : caption.textContent.trim();
        if (lines.length > 1) link.dataset.description = lines.slice(1).join(' · ');
      }
      image.before(link);
      link.append(image);
    });
    items.forEach((item, index) => { if (!item) figures[index].hidden = true; });

    let lastWidth = 0;
    function layout() {
      const width = gallery.clientWidth;
      if (!width || width === lastWidth) return;
      lastWidth = width;
      const geometry = justifiedLayout(photos.map(({image}) => image.naturalWidth / image.naturalHeight), {
        containerWidth: width,
        containerPadding: 0,
        boxSpacing: width < 600 ? 6 : 10,
        targetRowHeight: width < 600 ? 120 : 240,
        targetRowHeightTolerance: width < 600 ? 0.35 : 0.25,
        showWidows: true
      });
      gallery.classList.add('is-justified');
      gallery.style.height = `${geometry.containerHeight}px`;
      photos.forEach(({figure}, index) => {
        const box = geometry.boxes[index];
        Object.assign(figure.style, {
          width: `${box.width}px`, height: `${box.height}px`,
          left: `${box.left}px`, top: `${box.top}px`
        });
      });
    }
    layout();
    new ResizeObserver(layout).observe(gallery);

    let trigger;
    gallery.addEventListener('click', event => {
      const link = event.target.closest('.album-photo');
      if (link) trigger = link;
    }, true);
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lightbox = GLightbox({
      selector: `[data-photo-gallery="${gallery.dataset.photoGallery}"] .album-photo`,
      skin: 'clean glightbox-dojo',
      loop: true,
      touchNavigation: true,
      keyboardNavigation: true,
      autoplayVideos: false,
      moreLength: 0,
      openEffect: reducedMotion ? 'none' : 'fade',
      closeEffect: reducedMotion ? 'none' : 'fade',
      slideEffect: reducedMotion ? 'none' : 'slide'
    });
    // GLightbox infers the slide direction from the index, so wrapping past
    // the last or first photo would animate backwards. Swap the effects then.
    const effects = lightbox.settings.cssEfects;
    const forward = effects.slide, backward = effects.slideBack;
    [['nextSlide', () => lightbox.index === lightbox.elements.length - 1],
     ['prevSlide', () => lightbox.index === 0]].forEach(([method, wraps]) => {
      const original = lightbox[method].bind(lightbox);
      lightbox[method] = () => {
        const wrapping = wraps();
        effects.slide = wrapping && method === 'prevSlide' ? backward : forward;
        effects.slideBack = wrapping && method === 'nextSlide' ? forward : backward;
        original();
      };
    });
    lightbox.on('open', () => {
      const dialog = document.querySelector('.glightbox-container');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-label', 'Fotogalerie');
      [['.gclose', 'Schließen'], ['.gprev', 'Vorheriges Foto'], ['.gnext', 'Nächstes Foto']].forEach(([selector, label]) => {
        const button = dialog.querySelector(selector);
        button.setAttribute('aria-label', label);
        button.title = label;
      });
      dialog.querySelector('.gclose').focus();
    });
    lightbox.on('close', () => trigger?.focus({preventScroll: true}));
    gallery.dataset.ready = 'true';

    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target && gallery.contains(target)) target.scrollIntoView();
    }
  });
})();
