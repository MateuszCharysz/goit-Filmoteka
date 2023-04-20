import { fetchMoviesTrending } from './js/api/fetchMoviesTrending'; // fetch podłączony z renderList
import { searchMovies } from './js/searchMovies';
import { fetchMoviesMain } from './js/api/fetchMoviesMain';
import './sass/main.scss';
import { createPagination } from './js/pagination'; // *dodałam to tutaj tylko na potrzeby testów, aby pojawiał się znacznik paginacji kiedy nie ma jeszcze pozostałych części, końcowo należy usunąć * //
import { openModal } from './js/modal/openModal';
import { renderGallery } from './js/help/renderGallery';

const mainContent = document.querySelector('#main');
// openModal => fetchMovieById => modalMarkup
mainContent.addEventListener('click', openModal);

const button = document.getElementById('button');
// searchMovies => fetchMovies => renderListMarkup
button.addEventListener('click', searchMovies);