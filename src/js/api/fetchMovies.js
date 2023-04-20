const form = document.querySelector(".header-form");
const input = document.querySelector("#search")

const fetchMovies = (e, name) => {
 
  e.preventDefault();
  name = input.value;
  const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
  const data = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`);

  data.then(response => {
    if (!response.ok) {
      console.log('Error: Failed to fetch data from API. Status code:', response.status)
    } else {
      return response.json()
    }
  }).then(response => {
    let searchedFilms = response.results;
    let mainContainer = document.querySelector("#main");

    searchedFilms.map((item) => {
      let markup = `<p>TITLE:${item.title || item.name}</p>`;
      mainContainer.innerHTML = '';
      mainContainer.innerHTML += markup;
    });
    console.log(searchedFilms);
    return searchedFilms
  }).catch(error =>console.log(error));
}

  form.addEventListener("submit", fetchMovies);


// const fetchMovies = name => {
//   const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
//   const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`;

//   return fetch(API_URL)
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 429) {
//           // Too Many Requests
//           console.error('Error: Too many requests to API.');
//         } else {
//           console.error(
//             'Error: Failed to fetch data from API. Status code:',
//             response.status
//           );
//         }
//         return Promise.reject(new Error(response.status));
//       }
//       return response.json();
//     })
//     .then(data => {
//       const movieIds = data.results.map(movie => movie.id);
//       const promises = movieIds.map(id => fetchMovieGenres(id));
//       return Promise.all(promises).then(genres => {
//         return data.results.map((movie, index) => ({
//           ...movie,
//           genres: genres[index],
//         }));
//       });
//     })
//     .catch(error => {
//       console.error(error);
//       return Promise.reject(
//         new Error('An error occurred while fetching the data.')
//       );
//     });
// };
// export { fetchMovies };
