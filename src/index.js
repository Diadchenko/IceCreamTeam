(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__open'),
    closeMenuBtn: document.querySelector('.menu__close'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();
