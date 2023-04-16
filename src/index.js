import { searchMovies } from './js/searchMovies';
import { fetchMoviesMain } from './js/api/fetchMoviesMain';
import './sass/main.scss';
import { createPagination } from './js/pagination'; // *dodałam to tutaj tylko na potrzeby testów, aby pojawiał się znacznik paginacji kiedy nie ma jeszcze pozostałych części, końcowo należy usunąć * //
import { openModal } from './js/modal/openModal';
import { renderGallery } from './js/help/renderGallery';
searchMovies;
openModal
