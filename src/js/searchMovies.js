import { fetchMovies } from './api/fetchMovies';
import { renderList } from './renderListMarkup';

// Wyszukuje filmy po wpisaniu w wyszukiwarce

const searchMovies = () => {
  const searchInput = document.getElementById('search');
  const searchValue = searchInput.value.trim();

  fetchMovies(searchValue)
    .then(movies => {
      const markup = renderList(movies);
      document.getElementById('main').innerHTML = markup;

      // wywołanie funkcji `openModal` z odpowiednimi argumentami po utworzeniu elementów z wynikami wyszukiwania.
      const movieCards = document.querySelectorAll('.movie-card');
      movieCards.forEach(movieCard => {
        movieCard.addEventListener('click', () => {
          // Pobierz dane filmu z atrybutów `data-*` klikniętego elementu `.movie-card`.
          console.log(movieCard);
        });
      });
    })
    .catch(error => {
      console.error('Error:', error);
      // Tutaj możesz wyświetlić informację o błędzie w interfejsie użytkownika
    });
};

const button = document.getElementById('button');
button.addEventListener('click', searchMovies);

export { searchMovies };
