import { movieDetails, movieBox } from './renderGalleryMain';
export const updatingMovieHTML = () => {
  let myHTML = '';
  let genre;
  let yearOfProduction;
  movieDetails.forEach(movie => {
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
};
