import '../../sass/main.scss';
import { fetchingMoviesSearch } from './fetchingMoviesSearch';
import { fetchingMovieDetails } from './fetchingMovieDetails';
import { updatingMovieHTML } from './galleryMarkup';
import { createPagination } from '../pagination';
import { movieId, cbClear } from './galleryVariables';
import { loader } from './galleryVariables';

const setMovieList = moviesData => {
  moviesData.results.forEach(movie => {
    movieId.push(movie.id);
  });
  return movieId;
};

const showMoviesKeyWords = async (page, search) => {
  loader.classList.remove('loader--is-hidden');
  const moviesData = await fetchingMoviesSearch(page, search);
  setMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--is-hidden');
  updatingMovieHTML();
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    cbClear();
    showMoviesKeyWords(page, search);
  });
};

export default showMoviesKeyWords;
