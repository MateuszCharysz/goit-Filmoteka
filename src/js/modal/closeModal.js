'use strict';

// funkcja zamykająca modal
const closeModal = () => {
  const backdrop = document.querySelector('.backdrop');
  backdrop.remove();
  // usuwamy klasę blokującą możliwość skrolowania
  document.body.classList.remove('overflow-off');
};

export { closeModal };
