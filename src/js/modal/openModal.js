'use strict';

/*
  fetchMovieById został dodany w celu przetestowania czy modal zadziała z danymi pobranymi z api.themoviedb
  Wystarczy, że odblokujemy komentarz od <--- i wrzucimy movieId razem z fetchem i nadal pobieramy dane z MODAL_TEST
*/
import { MODAL_TEST } from '../testfiles/modal_test';
import { fetchMovieById } from '../api/fetchMovieById';
import { addToLocalStorage } from '../localStorage/localStorage';
import { closeModal } from './closeModal';
import { markupData } from './modalMarkup';

const mainContent = document.querySelector('#main');
// funkcja otwierająca modal
const openModal = e => {
  // przerywa funkcję, jeśli zdarzenie nie występuje na elemencie z klasą "movie-card".
  if (!e.target.closest('.movie__card')) {
    return;
  }
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  // pobranie id filmu z atrybutu "data-id" klikniętego elementu

  /* 
  //<-------- OD TEJ CZĘŚĆ POBIERAMY DANE Z MODALA
  
  backdrop.innerHTML = markupData(MODAL_TEST);
  
  // dodanie elementu backdrop do ciała dokumentu
  document.body.appendChild(backdrop);
  
  // blokuje możliwość skrolowania w momencie uruchomienia modala
  document.body.classList.add('overflow-off');
  
  closeModalButton = document.querySelector('#modal__close');

  // pobranie id filmu z MODAL_TEST
  const movieId = MODAL_TEST.id;
  const watchedButton = document.getElementById('watched');
  const queueButton = document.getElementById('queue');
  
  // Ten fragment kodu reaguje na kliknięcie przycisków "watchedButton" i "queueButton" i wywołuje 
  // funkcję "addToLocalStorage" z odpowiednimi argumentami. Funkcja ta zapisuje identyfikator filmu 
  // do lokalnego magazynu przeglądarki pod kluczem "user" i listą "watched" lub "queue", w zależności od przycisku, 
  // który został kliknięty.
  
  watchedButton.addEventListener('click', () =>
    addToLocalStorage(movieId, 'watched')
    );
    queueButton.addEventListener('click', () =>
    addToLocalStorage(movieId, 'queue')
    );
    // dodanie nasłuchiwania na zdarzenie 'click' do elementu `closeModalButton` z funkcją `closeModal`
    closeModalButton.addEventListener('click', closeModal);
  
  
  */

  const movieId = e.target.closest('.movie__card').getAttribute('data-id');
  fetchMovieById(movieId)
    .then(movieData => {
      backdrop.innerHTML = markupData(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);

      // blokuje możliwość skrolowania w momencie uruchomienia modala
      document.body.classList.add('overflow-off');

      const closeModalButton = document.querySelector('#modal__close');

      const watchedButton = document.getElementById('watched');
      const queueButton = document.getElementById('queue');

      //  Ten fragment kodu reaguje na kliknięcie przycisków "watchedButton" i "queueButton" i wywołuje
      //  funkcję "addToLocalStorage" z odpowiednimi argumentami. Funkcja ta zapisuje identyfikator filmu
      //  do lokalnego magazynu przeglądarki pod kluczem "user" i listą "watched" lub "queue", w zależności od przycisku,
      //  który został kliknięty.

      watchedButton.addEventListener('click', () =>
        addToLocalStorage(movieId, 'watched')
      );
      queueButton.addEventListener('click', () =>
        addToLocalStorage(movieId, 'queue')
      );
      // dodanie nasłuchiwania na zdarzenie 'click' do elementu `closeModalButton` z funkcją `closeModal`
      closeModalButton.addEventListener('click', closeModal);
    })
    .catch(error => {
      console.error(error);
    });
};

// dodanie nasłuchiwania na zdarzenie 'click' do elementu `mainContent` z funkcją `openModal`
mainContent.addEventListener('click', openModal);

export { openModal };
