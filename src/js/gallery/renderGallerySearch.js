import '../../sass/main.scss';
import { fetchingMoviesSearch } from './fetchingMoviesSearch';
import { fetchingMovieDetails } from './fetchingMovieDetails';
import { updatingMovieHTML } from './galleryMarkup';
import { createPagination } from '../pagination';
import { movieId, cbClear, movieBox } from './galleryVariables';
import { loader } from './galleryVariables';
import { fetchMovieById } from '../modal/fetchMovieById';
import { movieCard } from '../localStorage/movieCard';

const setMovieList = moviesData => {
  console.log(moviesData);
  moviesData.results.forEach(movie => {
    movieId.push(movie.id);
  });
  return movieId;
};

const showMoviesKeyWords = async (page, search) => {
  loader.classList.remove('loader--is-hidden');
  const moviesData = await fetchingMoviesSearch(page, search);

  const searchWarninng = document.querySelector('.header__search--warning');

  if (moviesData.results.length === 0) {
    searchWarninng.style.display = 'block';
  } else {
    searchWarninng.style.display = 'none';
  }

  setMovieList(moviesData);
  movieId.map(id => fetchMovieById(id).then(movieData => {
    movieBox.innerHTML += movieCard(movieData)
  }))
  loader.classList.add('loader--is-hidden');
  // updatingMovieHTML();
  const pagination = createPagination(moviesData);
  pagination.on('beforeMove', ({ page }) => {
    cbClear();
    showMoviesKeyWords(page, search);
  });
};

export default showMoviesKeyWords;
