import { fetchingMovieDetails } from '../gallery/fetchingMovieDetails';
import {
  updatingMovieHTML,
} from '../gallery/galleryMarkup';
import { cbClear, movieBox, movieID } from '../gallery/galleryVariables';

let moviesId;
const watchedButton = document.querySelector(
  'button.library-button:first-of-type'
);
const queuedButton = document.querySelector('.library-button:last-of-type');

watchedButton.addEventListener('click', async () => {
  cbClear();
  console.log('Watched');
  document.body.classList.remove('queue-page')
  document.body.classList.add('watched-page')
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
  document.body.classList.remove('watched-page')
  document.body.classList.add('queue-page')
  moviesId = localStorage.getItem('queued');
  JSON.parse(moviesId).forEach(q => {
    movieID.push(q);
  });
  await fetchingMovieDetails();
  updatingMovieHTML();
});
