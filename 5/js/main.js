  const hamburger = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');
  const header = document.querySelector('.main-header')
  menu.classList.remove('main-nav__list--shown');
  menu.classList.remove('main-nav__list--nojs');
  header.classList.remove('main-header--nojs');
  hamburger.classList.remove('main-nav__toggle--nojs');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('main-nav__list--shown');
      hamburger.classList.toggle('main-nav__toggle--active');
    });
  }
