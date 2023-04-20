import { openModal } from './js/modal/openModal';
import { searchMovies } from './js/searchMovies';
import './sass/main.scss';

const mainContent = document.querySelector('#main');
// openModal => fetchMovieById => modalMarkup
mainContent.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
button.addEventListener('click', searchMovies);