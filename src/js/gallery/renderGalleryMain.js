import '../../sass/main.scss';
import { fetchingMovies } from './fetchingMovies';
import { fetchingMovieDetails } from './fetchingMovieDetails';
import { updatingMovieHTML } from './galleryMarkup';
import { createPagination } from '../pagination';
import { movieID, movieDetails, cbClear } from './galleryVariables';
import { movieBox, loader } from './galleryVariables';


// export let movieID = [];
// export let movieDetails = [];

const renderMovieList = moviesData => {
  moviesData.results.forEach(movie => {
    movieID.push(movie.id);
  });
  return movieID;
};

const showMovies = async page => {
  const moviesData = await fetchingMovies(page);
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  updatingMovieHTML();
  console.log(moviesData);
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    cbClear();
    showMovies(page);
  });
};

export default showMovies;
