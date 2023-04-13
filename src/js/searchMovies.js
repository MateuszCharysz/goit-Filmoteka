import { fetchMovies } from './api/fetchMovies';
const searchMovies = () => {
  const searchInput = document.getElementById('search');
  const searchValue = searchInput.value.trim();

  fetchMovies(searchValue)
    .then(movies => {
      const markup = renderList(movies);
      document.getElementById('main').innerHTML = markup;
    })
    .catch(error => {
      console.error('Error:', error);
      // Tutaj możesz wyświetlić informację o błędzie w interfejsie użytkownika
    });
};

const button = document.getElementById('button');
button.addEventListener('click', searchMovies);

const renderList = movies => {
  const markup = movies
    .map(movie => {
      const tags = movie.genres.map(genre => genre.name).join(', ');
      return (
        `<div class="movie-card">
          <img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            alt="${tags}"
            loading="lazy"
          />
          <div class="info">
            <p class="movie__title">${movie.original_title}</p> <p class="movie__genres">${tags}</p>
          </div>
        </div>`
      );
    })
    .join('');

  return markup;
};

export { searchMovies };
