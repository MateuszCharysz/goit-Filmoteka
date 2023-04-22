import { fetchMovieById } from '../api/fetchMovieById';
import localStorageMod from '../localStorage/localStorageMod';
import { closeModal } from './closeModal';
import { renderModal } from './modalMarkup';

let isModalOpen = false;
let currentScrollY = 0;

// funkcja otwierająca modal
const openModal = e => {
  isModalOpen = true;
  currentScrollY = window.scrollY;
  // przerywa funkcję, jeśli zdarzenie nie występuje na elemencie z klasą "movie-card".
  if (!e.target.closest('.movie__card')) {
    return;
  }
  localStorageMod.createLocalStorage();
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  // pobranie id filmu z atrybutu "data-id" klikniętego elementu
  const movieId = e.target.closest('.movie__card').getAttribute('data-id');

  // sprawdzenie, czy film jest zapisany w localStorage
  const isWatched = localStorageMod.findMovieId(movieId, 'watched');
  const isQueued = localStorageMod.findMovieId(movieId, 'queued');

  fetchMovieById(movieId)
    .then(movieData => {
      backdrop.innerHTML = renderModal(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);

      // blokowanie scrollowania strony
      handleBodyScrolling(true, currentScrollY);

      const closeModalButton = document.querySelector('#modal__close');
      const watchedButton = document.getElementById('watched');
      const queueButton = document.getElementById('queue');

      toLocalButton(watchedButton, movieId, 'watched', isWatched);
      toLocalButton(queueButton, movieId, 'queued', isQueued);

      closeModalButton.addEventListener('click', () => {
        // usuwanie nasłuchiwaczy zdarzeń
        watchedButton.removeEventListener('click', () => null);
        queueButton.removeEventListener('click', null);
        // odblokowanie scrollowania strony
        handleBodyScrolling(false, currentScrollY);
        closeModal();
      });
    })
    .catch(error => {
      throw new Error(error);
    });
  addEventListener('keydown', clickEscape);
};

const toLocalButton = (button, id, arrayType, isSaved) => {
  button.classList.toggle('is-save', isSaved);
  button.addEventListener('click', () => {
    if (localStorageMod.findMovieId(id, arrayType)) {
      localStorageMod.removeMovieId(id, arrayType);
      button.classList.remove('is-save');
    } else {
      localStorageMod.saveMovieId(id, arrayType);
      button.classList.add('is-save');
    }
    // przekazanie wartości true lub false jako drugi argument do metody toggle
    // button.classList.toggle('is-save', !isSaved);
  });
};

const handleBodyScrolling = (isModalOpen, currentScrollY) => {
  if (isModalOpen) {
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.position = 'fixed';
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    console.log(currentScrollY);
    window.scrollTo(0, currentScrollY);
  }
};

const clickEscape = event => {
  if (isModalOpen) {
    if (event.keyCode === 27) {
      closeModal();
      isModalOpen = false;
      handleBodyScrolling(false, currentScrollY);
    }
  }
};

export { openModal };
