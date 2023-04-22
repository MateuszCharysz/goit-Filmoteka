import '../../sass/main.scss';
import { fetchingMoviesSearch } from './fetchingMoviesSearch';
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

const showMoviesKeyWords = async (page, search) => {
 
  const moviesData = await fetchingMoviesSearch(search, null, page);
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  updatingMovieHTML();
  console.log('movies data', moviesData);
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    movieID = [];
    movieDetails = [];
    movieBox.innerHTML = '';
    showMoviesKeyWords(page, search);
  });
};
const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  movieID = [];
  movieDetails = [];
  movieBox.innerHTML = '';
  showMoviesKeyWords(1, searchInput.value);
});

showMoviesKeyWords(1, '');

export default showMoviesKeyWords;
