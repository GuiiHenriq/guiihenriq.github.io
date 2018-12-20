export default function initMenuMobile() {
  const btnOpenMenu = document.querySelector('[data-menu="open"]');
  const btnCloseMenu = document.querySelector('[data-menu="close"]');
  const menu = document.querySelector('[data-menu="menu"]');

  function openMenu() {
    menu.classList.add('active');
  }

  function closeMenu() {
    menu.classList.remove('active');
  }

  btnOpenMenu.addEventListener('click', openMenu);
  btnCloseMenu.addEventListener('click', closeMenu);
}
