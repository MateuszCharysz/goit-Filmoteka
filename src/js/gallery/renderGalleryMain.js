import '../../sass/main.scss';
import { fetchingMovies } from './fetchingMovies';
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

const showMovies = async page => {
  loader.classList.remove('loader--is-hidden');
  const moviesData = await fetchingMovies(page);
  setMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--is-hidden');
  updatingMovieHTML();
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    cbClear();
    showMovies(page);
  });
};

export default showMovies;
