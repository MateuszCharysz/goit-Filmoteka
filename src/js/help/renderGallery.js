import axios from 'axios';

const movieBox = document.querySelector('.box');
const loader = document.querySelector('.loader');
const apiKey = '4f9b3bc6cd1b3d6e0d830ad9a5ccfefd';


let movieID = [];
let movieDetails = [];

async function fetchingMovies(page = 1) {
  const media_type = 'movie';
  const time_window = 'week';
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}&page=${page}`
    );
    // console.log(response.data);
    return response.data;
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
    await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => movieDetails.push(data));
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

// export async function showMovies() {
//   // const moviesData = await fetchingMovies();
//   renderMovieList(moviesData);
//   const movieID = await fetchingMovieDetails();
//   loader.classList.add('loader--visibility');
//   updatingMovieHTML(movieID);
// }

// window.addEventListener('load', showMovies);



