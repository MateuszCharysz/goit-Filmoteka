// import { fetchMoviesTrending } from './js/api/fetchMoviesTrending'; // fetch podłączony z renderList
import { searchMovies } from './js/searchMovies';
import { fetchMoviesMain } from './js/api/fetchMoviesMain';
import './sass/main.scss';
import { openModal } from './js/modal/openModal';
// import { renderGallery } from './js/help/renderGallery';

fetchMoviesMain()
searchMovies;
openModal