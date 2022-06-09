import disableElement from './disableElement';

const onClickHamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
    hamburgerElements = hamburger.querySelectorAll('span'),
    overlay = document.querySelector('.overlay_aside'),
    menuList = document.querySelector('.aside__menu-list');

  hamburger.addEventListener('click', () => {
    disableElement(hamburger, 400);
    changeHamburgerView(hamburgerElements);
    openMenu();
  });

  menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
      disableElement(e.target, 400);
      changeHamburgerView(hamburgerElements);
      openMenu();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      disableElement(overlay, 400);
      changeHamburgerView(hamburgerElements);
      openMenu();
    }
  });
};

function changeHamburgerView(hamburgerElements) {
  hamburgerElements.forEach((el, i) => {
    if (i === 0 || i === 3) {
      el.classList.toggle('hamburger__el_close');
    }
    if (i === 1) {
      el.classList.toggle('hamburger__middle_close');
    }
    if (i === 2) {
      el.classList.toggle('hamburger__visible_close');
    }
  });
}

function openMenu() {
  const aside = document.querySelector('.aside'),
    overlay = aside.querySelector('.overlay_aside'),
    asideMenu = document.querySelector('.aside__menu'),
    body = document.querySelector('body');

  aside.classList.toggle('aside_open');
  asideMenu.classList.toggle('aside__menu_open');
  overlay.classList.toggle('overlay_open');
  body.classList.toggle('overflowy_hidden');
}

export default onClickHamburger;
