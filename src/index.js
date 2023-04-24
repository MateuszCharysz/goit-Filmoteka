import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import showMovies from './js/gallery/renderGalleryMain';
import showMoviesKeyWords from './js/gallery/renderGallerySearch';
import { movieBox, cbClear } from './js/gallery/galleryVariables';
// import debounce from 'lodash.debounce';

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

const emptySearchWarninng = document.querySelector('.header__search--warning');

button.addEventListener('click', event => {
  if (searchInput.value.length === 0) {
    emptySearchWarninng.style.display = 'block';
  } else {
    emptySearchWarninng.style.display = 'none';
  }
});

movieBox.addEventListener('click', openModal);
