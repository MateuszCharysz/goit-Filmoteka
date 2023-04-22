import '../../sass/main.scss';
import { fetchingMoviesSearch } from './fetchingMoviesSearch';
import { fetchingMovieDetails } from './fetchingMovieDetails';
import { updatingMovieHTML } from './galleryMarkup';
import { createPagination } from '../pagination';
import { movieID, cbClear } from './galleryVariables';
import { loader } from './galleryVariables';

const renderMovieList = moviesData => {
  moviesData.results.forEach(movie => {
    movieID.push(movie.id);
  });
  return movieID;
};

const showMoviesKeyWords = async (page, search) => {
  const moviesData = await fetchingMoviesSearch(page, search);
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  updatingMovieHTML();
  console.log('movies data', moviesData);
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    cbClear();
    showMoviesKeyWords(page, search);
  });
};

export default showMoviesKeyWords;
