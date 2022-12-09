  const hamburger = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav__list');
  const hamburgerThirdLines = document.querySelectorAll('.main-nav__toggle-line');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('main-nav__list--shown');
      hamburger.classList.toggle('active');

      hamburgerThirdLines.forEach( (line) => {
        line.classList.toggle('main-nav__toggle-line--light');
      } );
    });
  }

