import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import { updatingMovieHTML } from '../gallery/galleryMarkup';
import { cbClear, movieId } from '../gallery/galleryVariables';
import jsLocalStorage from './jsLocalStorage';

function handleLibraryButtonClick(
  buttonType,
  storageKey,
  removeClass,
  addClass
) {
  const button = document.querySelector(buttonType);

  button.addEventListener('click', async () => {
    cbClear();
    console.log(storageKey);
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
  'watched-page'
);
handleLibraryButtonClick(
  '.library-button:last-of-type',
  'queued',
  'watched-page',
  'queue-page'
);
