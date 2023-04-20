import { createPagination } from '../pagination';
const fetchMoviesMain = (pageValue = 1) => {
  const data = fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&' +
      `page=${pageValue}`,
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
      console.log(response);
      const mostPopularFilms = response.results;
      console.log(mostPopularFilms);

      mostPopularFilms.map(film => {
        // zamist tego map trzeba wstawić tutaj render galerii

        let mainContainer = document.querySelector('#main');
        let markup = `<p>TITLE:${film.title || film.name}</p>`;
        mainContainer.innerHTML += markup;
        //paginacja
        const pagination = createPagination(response);
        pagination.on('beforeMove', ({ page }) => {
          mainContainer.innerHTML = '';
          fetchMoviesMain(page);
        });
      });
    })
    .catch(error => console.log(error));
};

export { fetchMoviesMain };
