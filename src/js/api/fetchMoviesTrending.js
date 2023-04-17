import { renderList } from '../renderListMarkup';

// Pobiera aktualnie najlepsze filmy dnia

const fetchMoviesTrending = () => {
  const API_KEY = `64cb7e9375c055230d64b013c4bca79f`;
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        if (response.status === 420) {
          // Za dużo odwołań
          console.error('Error: Too many request to API.');
        } else {
          console.error(
            'Error: Failed to fetch data from API. Status code:',
            response.status
          );
        }
        return Promise.reject(new Error(response.status));
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(
        new Error('An error occured while fetching the data.')
      );
    });
};

fetchMoviesTrending()
  .then(movies => {
    const markup = renderList(movies.results);
    document.getElementById('main').innerHTML = markup;
  })
  .catch(error => {
    console.error(error);
  });
export { fetchMoviesTrending };
