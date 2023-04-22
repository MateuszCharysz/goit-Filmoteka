import '../../sass/main.scss';
import { fetchingMovies } from './fetchingMovies';
import { fetchingMovieDetails } from './fetchingMovieDetails';
import { updatingMovieHTML } from './galleryMarkup';
import { createPagination } from '../pagination';

export const movieBox = document.querySelector('.box');
const loader = document.querySelector('.loader');

export let movieID = [];
export let movieDetails = [];

const renderMovieList = moviesData => {
  moviesData.results.forEach(movie => {
    movieID.push(movie.id);
  });
  return movieID;
};

const showMovies = async () => {
  const moviesData = await fetchingMovies();
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  updatingMovieHTML();
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', () => {
    movieBox.innerHTML = '';
    showMovies();
  });
};

export default showMovies;
