import { createPaginationMain } from '../pagination';
// import { scrollUp } from '../scrollUp';

let pageValue = 1;

export const fetchMoviesMain = () => {
  const data = fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&' +
      `page=${pageValue}`
  );

  data
    .then(response => {
      if (!response.ok) {
        console.log(
          'Error: Failed to fetch data from API. Status code:',
          response.status
        );
      } else {
        return response.json();
      }
    })
    .then(response => {
      const mostPopularFilms = response.results;
      console.log('most popular', mostPopularFilms);

      const mainContainer = document.querySelector('#main');
      mainContainer.innerHTML = '';

      mostPopularFilms.map(film => {
        let markup = `<p>TITLE:${film.title || film.name}</p>`;
        mainContainer.innerHTML += markup;
        scrollUp();
      });

      // Update pagination
      createPaginationMain(response);
    })
    .catch(error => console.log(error));
};
console.log('scroll', scrollUp());
//88************************ origin ************************

// const fetchMoviesMain = pageValue => {
//   pageValue = 1;
//   const data = fetch(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&' +
//       `page=${pageValue}`
//   );

//   data
//     .then(response => {
//       if (!response.ok) {
//         console.log(
//           'Error: Failed to fetch data from API. Status code:',
//           response.status
//         );
//       } else {
//         return response.json();
//       }

//     })
//     .then(response => {
//       const mostPopularFilms = response.results;
//       console.log('most popular', mostPopularFilms);

//       mostPopularFilms.map(film => {
//         // zamist tego map trzeba wstawić tutaj render galerii

//         let mainContainer = document.querySelector('#main');
//         let markup = `<p>TITLE:${film.title || film.name}</p>`;
//         mainContainer.innerHTML += markup;
//       });
//       return mostPopularFilms;
//     })
//     .catch(error => console.log(error));
// };
// console.log('fetch movies', fetchMoviesMain());

// fetchMoviesMain().then(films => {
//     console.log(films)
//     films.map(film => {

//     })
// })

// const fetchMoviesMain = async () => {
//     try {
//     const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd");

//     const response = await data.json();
//     const mostPopularFilms = response.results;

//         return mostPopularFilms
//     } catch (error) {
//         console.log(error.message)
//     }

// }
//88************************ origin ************************
