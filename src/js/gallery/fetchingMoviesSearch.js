const API_KEY = '64cb7e9375c055230d64b013c4bca79f';

export const fetchingMoviesSearch = (name, page, search) => {
  try {
    const response = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const moviesData = response.json();
    console.log(moviesData);
    return moviesData;
  } catch (error) {
    console.log(error);
  }
};