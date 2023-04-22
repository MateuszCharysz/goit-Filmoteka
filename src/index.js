import { fetchMoviesTrending } from './js/api/fetchMoviesTrending'; // fetch podłączony z renderList
import { searchMovies } from './js/searchMovies';
import { fetchMoviesMain } from './js/api/fetchMoviesMain';
import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import { fetchMovies } from './js/api/fetchMovies';
// import { renderGallery } from './js/help/renderGallery';
fetchMoviesMain();
fetchMovies();

const mainContent = document.querySelector('#main');
// openModal => fetchMovieById => modalMarkup
mainContent.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
button.addEventListener('click', searchMovies);
