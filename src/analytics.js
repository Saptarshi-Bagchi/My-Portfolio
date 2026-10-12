const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const measurementIdIsValid = measurementId !== 'G-XXXXXXXXXX' && /^G-[A-Z0-9]+$/i.test(measurementId || '');

export function initializeAnalytics() {
  if (!measurementIdIsValid || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.ga4 = 'true';
  document.head.appendChild(script);
}

export function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, parameters);
  }
}

export function observeSections(sectionIds) {
  if (!measurementIdIsValid || !('IntersectionObserver' in window)) return;

  const viewedSections = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !viewedSections.has(entry.target.id)) {
        viewedSections.add(entry.target.id);
        trackEvent('section_view', { section_id: entry.target.id });
      }
    });
  }, { threshold: 0.25 });

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
