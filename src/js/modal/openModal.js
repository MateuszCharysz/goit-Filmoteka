'use strict';

import { closeModal } from './closeModal';
import { markup } from './modalMarkup';

const mainContent = document.querySelector('#main');

// funkcja otwierająca modal
const openModal = e => {
  // przerywa funkcję, jeśli zdarzenie nie występuje na elemencie z klasą "movie-card".
  if (!e.target.closest('.movie-card')) {
    return;
  }

  // utworzenie nowego elementu backdrop i dodanie klasy "backdrop"
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  backdrop.innerHTML = markup;

  // dodanie elementu backdrop do ciała dokumentu
  document.body.appendChild(backdrop);

  closeModalButton = document.querySelector('#modal__close');

  // dodanie nasłuchiwania na zdarzenie 'click' do elementu `closeModalButton` z funkcją `closeModal`
  closeModalButton.addEventListener('click', closeModal);
};

// dodanie nasłuchiwania na zdarzenie 'click' do elementu `mainContent` z funkcją `openModal`
mainContent.addEventListener('click', openModal);

export { openModal };
