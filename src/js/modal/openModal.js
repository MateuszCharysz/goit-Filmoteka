'use strict';

import { addToLocalStorage } from '../localStorage/localStorage';
import { MODAL_TEST } from '../testfiles/modal_test';
import { closeModal } from './closeModal';
import { markupData } from './modalMarkup';

console.table(MODAL_TEST.backdrop_path);
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
  backdrop.innerHTML = markupData(MODAL_TEST);

  // dodanie elementu backdrop do ciała dokumentu
  document.body.appendChild(backdrop);

  // blokuje możliwość skrolowania w momencie uruchomienia modala
  document.body.classList.add('overflow-off');

  closeModalButton = document.querySelector('#modal__close');

  // pobranie id filmu
  const movieId = MODAL_TEST.id;
  const watchedButton = document.getElementById('watched');
  const queueButton = document.getElementById('queue');
  /*
    Ten fragment kodu reaguje na kliknięcie przycisków "watchedButton" i "queueButton" i wywołuje 
    funkcję "addToLocalStorage" z odpowiednimi argumentami. Funkcja ta zapisuje identyfikator filmu 
    do lokalnego magazynu przeglądarki pod kluczem "user" i listą "watched" lub "queue", w zależności od przycisku, 
    który został kliknięty.
  */
  watchedButton.addEventListener('click', () =>
    addToLocalStorage(movieId, 'watched')
  );
  queueButton.addEventListener('click', () =>
    addToLocalStorage(movieId, 'queue')
  );
  // dodanie nasłuchiwania na zdarzenie 'click' do elementu `closeModalButton` z funkcją `closeModal`
  closeModalButton.addEventListener('click', closeModal);
};

// dodanie nasłuchiwania na zdarzenie 'click' do elementu `mainContent` z funkcją `openModal`
mainContent.addEventListener('click', openModal);

export { openModal };
