import { fetchMovieGenres } from './fetchMovieGenres';
const fetchMovies = name => {
  const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`;

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        if (response.status === 429) {
          // Too Many Requests
          console.error('Error: Too many requests to API.');
        } else {
          console.error(
            'Error: Failed to fetch data from API. Status code:',
            response.status,
          );
        }
        throw new Error(response.status);;
      }
      return response.json();
    })
    .then(data => {
      const movieIds = data.results.map(movie => movie.id);
      const promises = movieIds.map(id => fetchMovieGenres(id));
      return Promise.all(promises).then(genres => {
        return data.results.map((movie, index) => ({
          ...movie,
          genres: genres[index],
        }));
      });
    })
    .catch(error => {
      console.error(error);
      throw new Error('An error occurred while fetching the data.');

    });
};
export { fetchMovies };
