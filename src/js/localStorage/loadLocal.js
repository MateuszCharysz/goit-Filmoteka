import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import { updatingMovieHTML } from '../gallery/galleryMarkup';
import { cbClear, movieId } from '../gallery/galleryVariables';
import jsLocalStorage from './jsLocalStorage';

/**
 * Funkcja obsługi kliknięcia przycisku w bibliotece filmów
 *
 * @param {string} buttonType - typ przycisku
 * @param {string} storageKey - klucz local storage
 * @param {string} removeClass - nazwa klasy do usunięcia z elementu body
 * @param {string} addClass - nazwa klasy do dodania do elementu body
 *
 * @returns {void}
 */

function handleLibraryButtonClick(
  buttonType,
  storageKey,
  removeClass,
  addClass,
  otherBtn,
  headerBtnClass,
) {
  const button = document.querySelector(buttonType);
  const secBtn = document.querySelector(otherBtn);

  button.addEventListener('click', async () => {
    cbClear();
    button.classList.add(headerBtnClass);
    if (secBtn.classList.remove(headerBtnClass) !== null)
      secBtn.classList.remove(headerBtnClass);
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
    const movieIds = jsLocalStorage.load(storageKey);
    movieId.push(...movieIds);
    await fetchingMovieDetails();
    updatingMovieHTML();
  });
}
// Obsługa kliknięcia przycisku "Watched"
handleLibraryButtonClick(
  'button.library-button:first-of-type',
  'watched',
  'queue-page',
  'watched-page',
  '#que',
  'lib-btn--active',
);
// Obsługa kliknięcia przycisku "Queued"
handleLibraryButtonClick(
  '.library-button:last-of-type',
  'queued',
  'watched-page',
  'queue-page',
  '#wat',
  'lib-btn--active',
);
