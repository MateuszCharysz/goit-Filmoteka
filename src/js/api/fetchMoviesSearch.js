const fetchMoviesSearch = name => {
  // e.preventDefault();
  // name = input.value;
  const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
  const data = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`,
  );

  data
    .then(response => {
      if (!response.ok) {
        console.log(
          'Error: Failed to fetch data from API. Status code:',
          response.status,
        );
      } else {
        return response.json();
      }
    })
    .then(response => {
      let searchedFilms = response.results;
      let mainContainer = document.querySelector('#main');

      searchedFilms.map(item => {
        let markup = `<p>TITLE:${item.title || item.name}</p>`;
        // mainContainer.innerHTML = '';
        mainContainer.innerHTML += markup;
      });
      console.log(searchedFilms);
      return searchedFilms;
    })
    .catch(error => console.log(error));
};
export { fetchMoviesSearch };
