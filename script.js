// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Draw-in animation for the hero ECG trace, skipped for reduced-motion users
const wave = document.getElementById('wavePath');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (wave && !prefersReducedMotion) {
  const length = wave.getTotalLength();
  wave.style.strokeDasharray = length;
  wave.style.strokeDashoffset = length;
  // force reflow so the browser registers the starting state before animating
  wave.getBoundingClientRect();
  wave.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.65, 0, 0.35, 1)';
  requestAnimationFrame(() => {
    wave.style.strokeDashoffset = '0';
  });
}

// Reveal project cards and timeline items as they enter the viewport
const revealTargets = document.querySelectorAll('.project, .timeline li, .skill-group, .certs li');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
}
