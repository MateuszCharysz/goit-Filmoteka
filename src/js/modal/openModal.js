import { fetchMovieById } from './fetchMovieById';
import { movieBox, movieId } from '../gallery/galleryVariables';
import localStorageMod from '../localStorage/localStorageMod';
import { closeModal } from './closeModal';
import { renderModal } from './modalMarkup';
import { toLocalButton } from './toLocalButton';

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
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  // pobranie id filmu z atrybutu "data-id" klikniętego elementu
  const movieIdCard = e.target.closest('.movie__card').getAttribute('data-id');

  // sprawdzenie, czy film jest zapisany w localStorage
  const isWatched = localStorageMod.findMovieId(movieIdCard, 'watched');
  const isQueued = localStorageMod.findMovieId(movieIdCard, 'queued');

  fetchMovieById(movieIdCard)
    .then(movieData => {
      backdrop.innerHTML = renderModal(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);

      // blokowanie scrollowania strony
      handleBodyScrolling(true, currentScrollY);

      const closeModalButton = document.querySelector('#modal__close');
      const watchedButton = document.getElementById('watched');
      const queueButton = document.getElementById('queue');

      toLocalButton(watchedButton, movieIdCard, 'watched', isWatched);
      toLocalButton(queueButton, movieIdCard, 'queued', isQueued);

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
      console.log(error);
    });
  addEventListener('keydown', clickEscape);
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
