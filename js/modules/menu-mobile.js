export default function initMenuMobile() {
  const btnOpenMenu = document.querySelector('[data-menu="open"]');
  const menu = document.querySelector('[data-menu="menu"]');

  function openMenu() {
    menu.classList.toggle('active');
  }

  btnOpenMenu.addEventListener('click', openMenu);
}
