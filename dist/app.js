'use strict';
const config = window.SITE_CONFIG;
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.message)}`;
});
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
  nav?.classList.remove('open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
document.querySelector('#year')?.replaceChildren(String(new Date().getFullYear()));
// Conteúdo visível por padrão: animações são um aprimoramento opcional.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const runningAnimations = new Set();
let revealObserver;
function animateElement(element, frames, options) {
  if (reducedMotion.matches || typeof element.animate !== 'function') return;
  const animation = element.animate(frames, options);
  runningAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => runningAnimations.delete(animation));
}
function reveal(element) {
  const kind = element.dataset.motion;
  if (kind === 'encounter') {
    element.querySelectorAll('path').forEach((path, index) => {
      const length = path.getTotalLength();
      animateElement(path, [
        { strokeDasharray: `${length} ${length}`, strokeDashoffset: length },
        { strokeDasharray: `${length} ${length}`, strokeDashoffset: 0 }
      ], { duration: 1300, delay: index * 150, easing: 'cubic-bezier(.16,1,.3,1)' });
    });
    return;
  }
  const isStep = kind === 'step';
  animateElement(element, [
    { opacity: .55, transform: isStep ? 'translateX(18px)' : 'translateY(18px)' },
    { opacity: 1, transform: 'translate(0,0)' }
  ], { duration: isStep ? 650 : 750, easing: 'cubic-bezier(.16,1,.3,1)' });
}
function observeMotion() {
  revealObserver?.disconnect();
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .16 });
  [
    ['.about-heading, .support-intro, .instagram-intro, .closing h2', 'section'],
    ['.steps li', 'step'],
    ['.encounter-art', 'encounter']
  ].forEach(([selector, kind]) => document.querySelectorAll(selector).forEach(element => {
    element.dataset.motion = kind;
    revealObserver.observe(element);
  }));
}
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    runningAnimations.forEach(animation => animation.cancel());
    runningAnimations.clear();
  }
  observeMotion();
});
observeMotion();
// Anima a altura real nas duas direções, inclusive ao inverter um clique em andamento.
document.querySelectorAll('.topics details').forEach(details => {
  const summary = details.querySelector('summary');
  const paragraph = details.querySelector('p');
  if (!summary || !paragraph) return;
  let expanded = details.open;
  let heightAnimation;
  let textAnimation;
  details.classList.toggle('is-expanded', expanded);
  function settle() {
    heightAnimation?.cancel();
    textAnimation?.cancel();
    heightAnimation = null;
    textAnimation = null;
    details.open = expanded;
    details.style.height = '';
    details.style.overflow = '';
    details.classList.remove('is-animating');
    details.classList.toggle('is-expanded', expanded);
  }
  summary.addEventListener('click', event => {
    // O navegador continua oferecendo a interação nativa quando não há animação.
    if (reducedMotion.matches || typeof details.animate !== 'function') return;
    event.preventDefault();
    const startHeight = details.getBoundingClientRect().height;
    const textStyle = getComputedStyle(paragraph);
    const startOpacity = details.open ? textStyle.opacity : '0';
    const startTransform = details.open ? textStyle.transform : 'translateY(-7px)';
    heightAnimation?.cancel();
    textAnimation?.cancel();
    expanded = !expanded;
    details.classList.add('is-animating');
    details.classList.toggle('is-expanded', expanded);
    details.style.overflow = 'hidden';
    details.open = true;
    details.style.height = 'auto';
    const style = getComputedStyle(details);
    const borders = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const endHeight = expanded
      ? details.getBoundingClientRect().height
      : summary.getBoundingClientRect().height + borders;
    details.style.height = `${startHeight}px`;
    const animation = details.animate([
      { height: `${startHeight}px` },
      { height: `${endHeight}px` }
    ], {
      duration: expanded ? 520 : 400,
      easing: 'cubic-bezier(.22,1,.36,1)',
      fill: 'both'
    });
    heightAnimation = animation;
    textAnimation = paragraph.animate([
      { opacity: startOpacity, transform: startTransform },
      { opacity: expanded ? 1 : 0, transform: expanded ? 'translateY(0)' : 'translateY(-4px)' }
    ], {
      duration: expanded ? 400 : 240,
      easing: 'cubic-bezier(.22,1,.36,1)',
      fill: 'both'
    });
    animation.onfinish = () => {
      if (heightAnimation === animation) settle();
    };
  });
  details.addEventListener('toggle', () => {
    if (heightAnimation) return;
    expanded = details.open;
    details.classList.toggle('is-expanded', expanded);
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) settle();
  });
  // Libera a altura medida se a largura mudar durante a transição.
  window.addEventListener('resize', () => {
    if (heightAnimation) settle();
  });
});
// Une ombre leve distingue o cabeçalho quando o conteúdo passa por trás.
const header = document.querySelector('.header');
let scrollFramePending = false;
function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
  scrollFramePending = false;
}
window.addEventListener('scroll', () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  requestAnimationFrame(updateHeader);
}, { passive: true });
updateHeader();
