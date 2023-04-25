import { movieBox, movieId } from '../gallery/galleryVariables';
import localStorageMod from '../localStorage/localStorageMod';
import { movieCard } from '../localStorage/movieCard';
import { fetchMovieById } from './fetchMovieById';
import {
  showAddedToLocalStorageNotification,
  showRemovedFromLocalStorageNotification,
} from './showNotiflixMessage';

/**
  Funkcja toLocalButton służy do obsługi przycisku dodania filmu do lokalnego magazynu przeglądarki.
  @param {Object} button - przycisk, którego działanie ma być obsłużone.
  @param {string} id - id filmu, który ma być dodany do lokalnego magazynu.
  @param {string} arrayType - typ tablicy, do której film ma być dodany (np. 'watched' lub 'queued').
  @param {boolean} isSaved - określa, czy film jest już zapisany w lokalnym magazynie, aby klasa CSS 'is-save' była odpowiednio ustawiona.
  
  Funkcja dodaje klasę CSS 'is-save' do przycisku, jeśli film jest już zapisany w lokalnym magazynie. W przeciwnym razie klasa jest usuwana.
  
  Funkcja obsługuje kliknięcie na przycisk. Jeśli film jest już zapisany w lokalnym magazynie, zostaje usunięty, a przycisk traci klasę 'is-save'. W przeciwnym razie film jest zapisywany w lokalnym magazynie, przycisk otrzymuje klasę 'is-save' i dodawany jest nowy element HTML reprezentujący film w odpowiedniej sekcji strony.
*/
const toLocalButton = (button, id, arrayType, isSaved) => {
  const isLibraryPage = document.body.classList.contains('library-page');
  const isWatchedPage = document.body.classList.contains('watched-page');
  const isQueuePage = document.body.classList.contains('queue-page');

  
  function removeMovieCard(movieCardFromHTML) {
    const index = movieId.indexOf(id);
    if (index > -1) {
      movieId.splice(index, 1);
    }
    if (
      (isWatchedPage && arrayType === 'watched') ||
      (isQueuePage && arrayType === 'queued')
    ) {
      movieCardFromHTML.remove();
    }
  }

  function addMovieCard(data) {
    const watchedBox = document.querySelector('.watched-movies');
    const queueBox = document.querySelector('.queued-movies');
    if (isLibraryPage) {
      movieBox.insertAdjacentHTML('beforeend', movieCard(data));
    } else if (isWatchedPage) {
      watchedBox.insertAdjacentHTML('beforeend', movieCard(data));
    } else if (isQueuePage) {
      queueBox.insertAdjacentHTML('beforeend', movieCard(data));
    }
  }

  button.classList.toggle('is-save', isSaved);
  function handleButtonClick() {
    if (localStorageMod.findMovieId(id, arrayType)) {
      localStorageMod.removeMovieId(id, arrayType);
      button.classList.remove('is-save');
      // Notiflix usuwanie
      showRemovedFromLocalStorageNotification(arrayType);
      const movieCardFromHTML = document.querySelector(`[data-id="${id}"]`);
      if (movieCardFromHTML) {
        removeMovieCard(movieCardFromHTML);
      }
    } else {
      localStorageMod.saveMovieId(id, arrayType);
      button.classList.add('is-save');
      // Notiflix dodawanie
      showAddedToLocalStorageNotification(arrayType);
      if (
        (isWatchedPage && arrayType === 'watched') ||
        (isQueuePage && arrayType === 'queued')
      ) {
        movieId.push(id);
        fetchMovieById(id).then(addMovieCard);
      }
    }
  }

  button.addEventListener('click', handleButtonClick);
};

export { toLocalButton };
