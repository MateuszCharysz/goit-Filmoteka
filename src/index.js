import { searchMovies } from './js/searchMovies';
import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import showMovies from './js/gallery/renderGalleryMain';
import showMoviesKeyWords from './js/gallery/renderGallerySearch';
import { movieBox } from './js/gallery/renderGalleryMain';
import debounce from 'lodash.debounce';
import { searchMov } from './js/searchMov';

//renderGallery => fetchingMovies => fetchingMovieDetails => galleryMarkup => pagination
showMovies();
// fetchMovies();

// openModal => fetchMovieById => modalMarkup
movieBox.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
// button.addEventListener('click', searchMovies);

// button.addEventListener(('input', debounce(searchMov, 300)));
