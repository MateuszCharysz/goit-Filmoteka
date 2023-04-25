import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import showMovies from './js/gallery/renderGalleryMain';
import showMoviesKeyWords from './js/gallery/renderGallerySearch';
import { movieBox, cbClear } from './js/gallery/galleryVariables';
import localStorageMod from './js/localStorage/localStorageMod';
import { searchKeyup } from './js/searchKeyup';
// import debounce from 'lodash.debounce';

localStorageMod.createLocalStorage();
//renderGallery => fetchingMovies => fetchingMovieDetails => galleryMarkup => pagination
showMovies();

const button = document.getElementById('button');
const searchInput = document.getElementById('search');
// renderGallerySearch => fetchingMoviesSearch => fetchingMovieDetails => galleryMarkup => pagination

button.addEventListener('click', event => {
  event.preventDefault();
  cbClear();
  showMoviesKeyWords(1, searchInput.value);
});

searchKeyup(searchInput, 13, cbClear, showMoviesKeyWords);

const searchWarninng = document.querySelector('.header__search--warning');

button.addEventListener('click', event => {
  if (searchInput.value.length === 0) {
    searchWarninng.style.display = 'block';
  } else {
    searchWarninng.style.display = 'none';
  }
});

movieBox.addEventListener('click', openModal);
