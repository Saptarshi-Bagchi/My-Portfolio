export function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, parameters);
  }
}

export function observeSections(sectionIds) {
  if (typeof window.gtag !== 'function' || !('IntersectionObserver' in window)) return;

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
