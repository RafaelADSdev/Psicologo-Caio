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
const banner = document.querySelector('#cookie-banner');
// A versão nova solicita uma escolha específica para mídia da Meta.
const preferenceKey = 'cl-privacy-v2';
let savedPreference;
try { savedPreference = localStorage.getItem(preferenceKey); } catch { /* armazenamento indisponível */ }
const validPreferences = ['necessary', 'instagram'];
if (!validPreferences.includes(savedPreference)) savedPreference = null;
if (banner && !savedPreference) banner.hidden = false;
const embedRoot = document.querySelector('#instagram-embed');
const consentPanel = document.querySelector('#instagram-consent');
let embedObserver;
function renderInstagram() {
  if (savedPreference !== 'instagram' || !embedRoot || embedRoot.querySelector('iframe')) return;
  const username = config.instagramUsername;
  if (!/^[a-zA-Z0-9._]{1,30}$/.test(username)) return;
  const frame = document.createElement('iframe');
  frame.title = `Publicações do Instagram de @${username}`;
  frame.src = `https://www.instagram.com/${username}/embed/`;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.width = '660';
  frame.height = '680';
  if (consentPanel) consentPanel.hidden = true;
  embedRoot.append(frame);
}
function applyPreference() {
  embedObserver?.disconnect();
  if (savedPreference !== 'instagram') {
    embedRoot?.querySelector('iframe')?.remove();
    if (consentPanel) consentPanel.hidden = false;
    return;
  }
  if (!embedRoot) return;
  if ('IntersectionObserver' in window) {
    embedObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        renderInstagram();
        embedObserver.disconnect();
      }
    }, { rootMargin: '250px' });
    embedObserver.observe(embedRoot);
  } else { renderInstagram(); }
}
function savePreference(value) {
  savedPreference = value;
  try { localStorage.setItem(preferenceKey, value); } catch { /* escolha válida nesta visita */ }
  if (banner) banner.hidden = true;
  applyPreference();
}
document.querySelector('#cookie-necessary')?.addEventListener('click', () => savePreference('necessary'));
document.querySelector('#cookie-accept')?.addEventListener('click', () => savePreference('instagram'));
document.querySelector('#load-instagram')?.addEventListener('click', () => savePreference('instagram'));
document.querySelector('#cookie-preferences')?.addEventListener('click', () => {
  if (banner) banner.hidden = false;
  document.querySelector('#cookie-necessary')?.focus();
});
applyPreference();
