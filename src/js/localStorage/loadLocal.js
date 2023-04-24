import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import { updatingMovieHTML } from '../gallery/galleryMarkup';
import { cbClear, movieId } from '../gallery/galleryVariables';
import jsLocalStorage from './jsLocalStorage';

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
    console.log(storageKey);
    button.classList.add(headerBtnClass);
    console.log(secBtn);
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

handleLibraryButtonClick(
  'button.library-button:first-of-type',
  'watched',
  'queue-page',
  'watched-page',
  '#que',
  'lib-btn--active',
);
handleLibraryButtonClick(
  '.library-button:last-of-type',
  'queued',
  'watched-page',
  'queue-page',
  '#wat',
  'lib-btn--active',
);
