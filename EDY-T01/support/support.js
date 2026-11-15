const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  toggle.textContent = open ? '×' : '☰';
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) toggle.click(); });
