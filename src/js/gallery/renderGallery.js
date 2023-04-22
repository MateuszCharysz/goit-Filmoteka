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

const showMovies = async page => {
  const moviesData = await fetchingMovies(page);
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  updatingMovieHTML();
  console.log(moviesData);
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    movieID = [];
    movieDetails = [];
    movieBox.innerHTML = '';
    showMovies(page);
  });
};

export default showMovies;
