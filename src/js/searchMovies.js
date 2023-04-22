import { fetchMovies } from './api/fetchMovies';
import { renderList } from './renderListMarkup';
import { createPagination } from './pagination';

// Wyszukuje filmy po wpisaniu w wyszukiwarce

const searchMovies = () => {
  const searchInput = document.getElementById('search');
  const searchValue = searchInput.value.trim();

  fetchMovies(searchValue)
    .then(movies => {
      const markup = renderList(movies);

      document.getElementById('main').innerHTML = markup;
      //paginacja
      // const pagination = createPagination(response);
      // pagination.on('beforeMove', ({ page }) => {
      //   mainContainer.innerHTML = '';
      //   fetchMoviesMain(page);
      //   scrollUp();
      // });
      console.log('movies', movies);
      const pagination = createPagination(movies.length);
      pagination.on('beforeMove', ({ page }) => {
        document.getElementById('main').innerHTML = '';
        fetchMovies(searchValue, page)
          .then(movies => {
            const markup = renderList(movies);
            document.getElementById('main').innerHTML = markup;
          })
          .catch(error => console.error(error));
      });

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

export { searchMovies };
