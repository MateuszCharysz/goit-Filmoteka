import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import { updatingMovieHTML } from '../gallery/galleryMarkup';
import { cbClear, movieBox, movieId } from '../gallery/galleryVariables';
import jsLocalStorage from './jsLocalStorage';
import localStorageMod from './localStorageMod';

let moviesId;
const watchedButton = document.querySelector(
  'button.library-button:first-of-type'
);
const queuedButton = document.querySelector('.library-button:last-of-type');

watchedButton.addEventListener('click', async () => {
  localStorageMod.createLocalStorage();
  cbClear();
  console.log('Watched');
  document.body.classList.remove('queue-page');
  document.body.classList.add('watched-page');

  watchedButton.classList.add('lib-btn--active');
  queuedButton.classList.remove('lib-btn--active');

  moviesId = jsLocalStorage.load('watched');
  moviesId.forEach(q => {
    movieId.push(q);
  });
  await fetchingMovieDetails();
  updatingMovieHTML();
});

queuedButton.addEventListener('click', async () => {
  localStorageMod.createLocalStorage();
  cbClear();
  console.log('Queued');
  document.body.classList.remove('watched-page');
  document.body.classList.add('queue-page');
  moviesId = jsLocalStorage.load('watched');

  watchedButton.classList.remove('lib-btn--active');
  queuedButton.classList.add('lib-btn--active');

  moviesId.forEach(q => {
    movieId.push(q);
  });
  await fetchingMovieDetails();
  updatingMovieHTML();
});
