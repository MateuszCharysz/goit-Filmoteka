import '../../sass/main.scss';

const movieBox = document.querySelector('.box');
const loader = document.querySelector('.loader');
const apiKey = '64cb7e9375c055230d64b013c4bca79f';

let movieID = [];
let movieDetails = [];

async function fetchingMovies(page = 1) {
  const media_type = 'movie';
  const time_window = 'week';
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const moviesData = await response.json();
    // console.log(moviesData);
    return moviesData;
  } catch (error) {
    console.log(error);
  }
}

function renderMovieList(moviesData) {
  moviesData.results.forEach(movie => {
    movieID.push(movie.id);
  });
  return movieID;
}

async function fetchingMovieDetails() {
  for (let id of movieID) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movieData = await response.json();
      movieDetails.push(movieData);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(movieDetails);
}

async function updatingMovieHTML() {
  let myHTML = '';
  let genre;
  let yearOfProduction;
  await movieDetails.forEach(movie => {
    genre = movie.genres.map(genre => ` ${genre.name}`);
    yearOfProduction = movie.release_date.substring(0, 4);
    myHTML += `<div class="movie__card">
    <div class="movie__imgbox">
    <img class="movie__img" src="https://image.tmdb.org/t/p/w500${
      movie.poster_path
    }"
      alt="${movie.title}" loading="lazy"/>
    </div>
    <p style="display:none">${movie.id}<p>
    <p class="movie__title">
        <b>${movie.title}</b>
      </p>
    <div class="movie__info">
      <p class="movie__genres">
        ${genre.slice(0, 2)}&nbsp;
      </p>
      <p class="movie__year">
        | ${yearOfProduction}
      </p>
    </div>
  </div>`;
  });
  movieBox.innerHTML += myHTML;
}

async function showMovies() {
  const moviesData = await fetchingMovies();
  renderMovieList(moviesData);
  await fetchingMovieDetails();
  loader.classList.add('loader--visibility');
  await updatingMovieHTML();
}

window.addEventListener('load', showMovies);
