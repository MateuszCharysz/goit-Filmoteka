const fetchMovieGenres = id => {
  const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

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
        return Promise.reject(new Error(response.status));
      }
      return response.json();
    })
    .then(data => {
      return data.genres;
    })
    .catch(error => {
      console.error(error);
      throw new Error(response.status);
    });
};

export { fetchMovieGenres };
