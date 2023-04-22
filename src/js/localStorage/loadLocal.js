import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import { updatingMovieHTML } from '../gallery/galleryMarkup';
import { cbClear, movieID } from '../gallery/galleryVariables';

let moviesId;
const watchedButton = document.querySelector(
  'button.library-button:first-of-type'
);
const queuedButton = document.querySelector('.library-button:last-of-type');

watchedButton.addEventListener('click', async () => {
  cbClear();
  console.log('Watched');
  moviesId = localStorage.getItem('watched');
  JSON.parse(moviesId).forEach(q => {
    movieID.push(q);
  });
  await fetchingMovieDetails();
  updatingMovieHTML();
});

queuedButton.addEventListener('click', async () => {
  cbClear();
  console.log('Queued');
  moviesId = localStorage.getItem('queued');
  JSON.parse(moviesId).forEach(q => {
    movieID.push(q);
  });
  await fetchingMovieDetails();
  updatingMovieHTML();
});
