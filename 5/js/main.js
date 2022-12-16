  const hamburger = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');
  menu.classList.remove('main-nav__list--shown');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('main-nav__list--shown');
      hamburger.classList.toggle('main-nav__toggle--active');
    });
  }
