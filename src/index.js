import { fetchMoviesTrending } from './js/api/fetchMoviesTrending'; // fetch podłączony z renderList
import { searchMovies } from './js/searchMovies';
import { fetchMoviesMain } from './js/api/fetchMoviesMain';
import './sass/main.scss';
import { openModal } from './js/modal/openModal';
import { createPaginationMain } from './js/pagination';
// import { renderGallery } from './js/help/renderGallery';
fetchMoviesMain();

const mainContent = document.querySelector('#main');
// openModal => fetchMovieById => modalMarkup
mainContent.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
button.addEventListener('click', searchMovies);