const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');

const closeMenu = () => {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
};

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
