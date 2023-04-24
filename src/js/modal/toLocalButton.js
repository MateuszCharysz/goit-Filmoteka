import { movieBox, movieId } from '../gallery/galleryVariables';
import localStorageMod from '../localStorage/localStorageMod';
import { movieCard } from '../localStorage/movieCard';
import { fetchMovieById } from './fetchMovieById';
import { showAddedToLocalStorageNotification, showRemovedFromLocalStorageNotification } from './showNotiflixMessage';

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

  /*
    Metoda classList.toggle('is-save', isSaved) dodaje lub usuwa klasę CSS 'is-save' z przycisku. 
    Zmienna isSaved określa, czy film jest już zapisany w lokalnym magazynie, aby klasa CSS była odpowiednio ustawiona.
  */
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
