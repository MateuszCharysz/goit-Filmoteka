import { searchMovies } from './js/searchMovies';
import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import showMovies from './js/gallery/renderGalleryMain';
<<<<<<< HEAD
import showMoviesKeyWords from './js/gallery/renderGallerySearch';
//renderGallery => fetchingMovies => fetchingMovieDetails => galleryMarkup => pagination
showMovies();
fetchMovies();
showMoviesKeyWords();
=======
import { movieBox } from './js/gallery/renderGalleryMain';
import debounce from 'lodash.debounce';
import { searchMov } from './js/searchMov';

//renderGallery => fetchingMovies => fetchingMovieDetails => galleryMarkup => pagination
showMovies();
>>>>>>> 9ef25b3abe77904de254341e10a1ae596aa3c261

const DEBOUNCE_DELAY = 300

// openModal => fetchMovieById => modalMarkup
movieBox.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
button.addEventListener('click', searchMovies);

button.addEventListener(('input', debounce((searchMov), DEBOUNCE_DELAY)))
