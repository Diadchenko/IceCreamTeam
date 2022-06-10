(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__open'),
    closeMenuBtn: document.querySelector('.menu__close'),
    clickBtnBuy: document.querySelector('.header__btn'),
    clickBtnMenu: document.querySelector('.menu__btn'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
    btn: document.querySelector('.header__btn'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.clickBtnBuy.addEventListener('click', toggleModal);
  refs.clickBtnMenu.addEventListener('click', toggleModal);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleModal() {
    refs.btn.classList.toggle('modal-open');
  }
})();
