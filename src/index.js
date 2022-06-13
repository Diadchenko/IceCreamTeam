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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openHeaderBtn: document.querySelector('.header__btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    openMilkBtn: document.querySelector('.milk-btn'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openHeaderBtn.addEventListener('click', toggleModal);

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openMilkBtn.addEventListener('click', toggleMilkBtn);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
  }

  function toggleMilkBtn() {
    refs.modal.classList.toggle('is-click');
    // refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openMilkBtn: document.querySelector('.milk-btn'),
  };

  refs.openMilkBtn.addEventListener('click', MilkBtn);

  function MilkBtn() {
    refs.openMilkBtn.classList.toggle('is-click');
  }
})();
