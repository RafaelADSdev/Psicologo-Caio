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
const preferenceKey = 'cl-privacy-v1';
let savedPreference;
try { savedPreference = localStorage.getItem(preferenceKey); } catch { /* navegação restrita */ }
if (banner && !savedPreference) banner.hidden = false;
function savePreference(value) {
  try { localStorage.setItem(preferenceKey, value); } catch { /* a página continua sem persistência */ }
  if (banner) banner.hidden = true;
}
document.querySelector('#cookie-necessary')?.addEventListener('click', () => savePreference('necessary'));
document.querySelector('#cookie-accept')?.addEventListener('click', () => savePreference('preferences'));
document.querySelector('#cookie-preferences')?.addEventListener('click', () => {
  banner.hidden = false;
  document.querySelector('#cookie-necessary').focus();
});
const form = document.querySelector('#newsletter-form');
const endpoint = config.newsletterEndpoint;
// Só ativa a captura quando um fornecedor real foi configurado.
if (form && /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(endpoint)) {
  form.querySelector('fieldset').disabled = false;
  form.querySelector('button').firstChild.textContent = 'Quero receber as reflexões ';
  document.querySelector('#newsletter-availability').textContent = 'Conteúdo com calma, sem excessos. Cancele quando quiser.';
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('button');
    const status = document.querySelector('#form-status');
    const data = new FormData(form);
    data.set('consent_text', 'Quero receber os conteúdos e concordo com a Política de Privacidade. Posso cancelar a qualquer momento.');
    data.set('consent_at', new Date().toISOString());
    button.disabled = true;
    status.textContent = 'Enviando sua inscrição…';
    try {
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error('submission');
      status.textContent = 'Inscrição enviada. Obrigado pelo interesse!';
      form.reset();
    } catch {
      status.textContent = 'Não foi possível enviar. Seus dados foram mantidos no formulário; tente novamente em instantes.';
    } finally { button.disabled = false; }
  });
}
async function loadFeed() {
  if (!config.instagramFeedEndpoint) return;
  try {
    const endpointUrl = new URL(config.instagramFeedEndpoint, location.origin);
    if (endpointUrl.origin !== location.origin) return;
    const response = await fetch(endpointUrl, { signal: AbortSignal.timeout(6000) });
    if (!response.ok) return;
    const posts = await response.json();
    if (!Array.isArray(posts)) return;
    const valid = posts.filter(post => {
      try { const u = new URL(post.url); return typeof post.title === 'string' && u.protocol === 'https:' && ['instagram.com', 'www.instagram.com'].includes(u.hostname) && /^\/(p|reel|tv)\//.test(u.pathname); } catch { return false; }
    }).slice(0, 6);
    if (valid.length < 3) return;
    const cards = valid.map(post => {
      const card = document.createElement('a'); card.className = 'editorial editorial-a'; card.href = post.url; card.target = '_blank'; card.rel = 'noopener noreferrer';
      if (post.image) { const url = new URL(post.image, location.origin); if (url.origin === location.origin && url.pathname.startsWith('/assets/')) { const img = document.createElement('img'); img.src = url.href; img.alt = ''; img.loading = 'lazy'; img.width = 400; img.height = 400; card.append(img); } }
      const title = document.createElement('h3'); title.textContent = post.title.slice(0, 180); card.append(title);
      const label = document.createElement('span'); label.className = 'editorial-link'; label.textContent = 'Ver publicação no Instagram →'; card.append(label); return card;
    });
    document.querySelector('#content-grid').replaceChildren(...cards);
    document.querySelector('#feed-note').textContent = 'Publicações do Instagram. Os links abrem o perfil em outra aba.';
  } catch { /* O conteúdo editorial permanece disponível sem dependência da API. */ }
}
loadFeed();
