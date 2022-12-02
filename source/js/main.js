  const hamburger = document.querySelector('.main-nav__toggle');
  const hamburgerSecondLine = document.querySelector('.main-nav__toggle-line-second');
  const hamburgerThirdLine = document.querySelector('.main-nav__toggle-line-third');
  const menu = document.querySelector('.main-nav__list');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('main-nav__list--shown');
      hamburger.classList.toggle('active');
      hamburgerSecondLine.classList.toggle('main-nav__toggle-line--light');
      hamburgerThirdLine.classList.toggle('main-nav__toggle-line--light');
    });
  }
