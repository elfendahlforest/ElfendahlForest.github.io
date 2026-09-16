const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');
const year = document.querySelector('[data-year]');

const closeMenu = () => {
  document.body.classList.remove('nav-open');
  header?.classList.remove('menu-open');
  navigation?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
};

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('open', !isOpen);
  header?.classList.toggle('menu-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

if (year) year.textContent = new Date().getFullYear();
