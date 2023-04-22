import { openModal } from './js/modal/openModal';
import { movieBox } from './js/gallery/galleryVariables';
// import { searchMovies } from './js/searchMovies';
import './sass/main.scss';

// openModal => fetchMovieById => modalMarkup
movieBox.addEventListener('click', openModal);

