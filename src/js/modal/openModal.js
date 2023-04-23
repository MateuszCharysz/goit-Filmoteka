import { fetchMovieById } from '../api/fetchMovieById';
import { movieBox, movieID } from '../gallery/galleryVariables';
import localStorageMod from '../localStorage/localStorageMod';
import { movieCard } from '../localStorage/movieCard';
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
  // sprawdź, czy jesteś na stronie biblioteki
  const isLibraryPage = document.body.classList.contains('library-page');
  // sprawdź, czy jesteś na stronie 'watched' lub 'queue'
  const isWatchedPage = document.body.classList.contains('watched-page');
  const isQueuePage = document.body.classList.contains('queue-page');

  button.classList.toggle('is-save', isSaved);
  button.addEventListener('click', () => {
    if (localStorageMod.findMovieId(id, arrayType)) {
      localStorageMod.removeMovieId(id, arrayType);
      button.classList.remove('is-save');
      const movieCardFromHTML = document.querySelector(`[data-id="${id}"]`);
      if (movieCardFromHTML) {
        const index = movieID.indexOf(id);
        if (index > -1) {
          movieID.splice(index, 1);
        }
        if (
          (isWatchedPage && arrayType === 'watched') ||
          (isQueuePage && arrayType === 'queued') ||
          (!isLibraryPage && button.id === arrayType)
        ) {
          movieCardFromHTML.remove();
        }
      }
    } else {
      localStorageMod.saveMovieId(id, arrayType);
      button.classList.add('is-save');
      if (
        (isWatchedPage && arrayType === 'watched') ||
        (isQueuePage && arrayType === 'queued') ||
        (!isLibraryPage && button.id === arrayType)
      ) {
        movieID.push(id);
        fetchMovieById(id).then(data => {
          if (isLibraryPage) {
            movieBox.insertAdjacentHTML('beforeend', movieCard(data));
          } else {
            const watchedBox = document.querySelector('.watched-movies');
            const queueBox = document.querySelector('.queued-movies');
            if (isWatchedPage) {
              watchedBox.insertAdjacentHTML('beforeend', movieCard(data));
            } else if (isQueuePage) {
              queueBox.insertAdjacentHTML('beforeend', movieCard(data));
            }
          }
        });
      }
    }
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
