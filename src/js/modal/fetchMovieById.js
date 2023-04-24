const fetchMovieById = id => {
  const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        if (response.status === 429) {
          // Too Many Requests
          console.error('Error: Too many requests to API.');
        } else {
          console.error(
            'Error: Failed to fetch data from API. Status code:',
            response.status
          );
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error)
    });
};
export { fetchMovieById };