import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import showMovies from './js/gallery/renderGalleryMain';
import showMoviesKeyWords from './js/gallery/renderGallerySearch';
import { movieBox, cbClear } from './js/gallery/galleryVariables';


showMovies();

const button = document.getElementById('button');
const searchInput = document.getElementById('search');

button.addEventListener('click', event => {
  event.preventDefault();
  cbClear();
  showMoviesKeyWords(1, searchInput.value);
});

movieBox.addEventListener('click', openModal);
