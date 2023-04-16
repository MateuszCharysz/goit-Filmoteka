'use strict';

// funkcja zamykająca modal
const closeModal = () => {
  const backdrop = document.querySelector('.backdrop');
  backdrop.remove();
};

export { closeModal };
