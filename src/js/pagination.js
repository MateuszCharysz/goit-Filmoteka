import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import { scrollUp } from './scrollUp';
// import { fetchMoviesMain } from './api/fetchMoviesMain';

// let pageValue = 1;
// const itemsPerPage = 20;

export const createPagination = ({
  // destrukturyzacja danych z obiektu consol.log(results) z fetchMoviesMain
  total_results,
  total_pages,
  page = 1,
}) => {
  //  const totalCount = response.total_results;
  //  const totalPageCount = Math.ceil(totalCount / itemsPerPage);
  //  console.log('total count', totalCount);
  if (total_pages > 1) {
    const paginationContainer = document.querySelector('#pagination');

    const options = {
      totalItems: total_results,
      itemsPerPage: total_pages,
      visiblePages: 5,
      centerAlign: true,
      page: page,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
    };

    const pagination = new Pagination(paginationContainer, options);
    return pagination;
  }
};

// JavaScript code
// let pageValue = 1;
// const itemsPerPage = 20;

// const fetchMoviesMain = () => {
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

//       const mainContainer = document.querySelector('#main');
//       mainContainer.innerHTML = '';

//       mostPopularFilms.map(film => {
//         let markup = `<p>TITLE:${film.title || film.name}</p>`;
//         mainContainer.innerHTML += markup;
//       });

//       // Update pagination
//       const totalCount = response.total_results;
//       const totalPageCount = Math.ceil(totalCount / itemsPerPage);
//       console.log('total count', totalCount);
//       if (totalPageCount > 1) {
//         const paginationContainer = document.querySelector('#pagination');

//         const options = {
//           totalItems: totalCount,
//           itemsPerPage: itemsPerPage,
//           visiblePages: 5,
//           centerAlign: true,
//           page: pageValue,
//           firstItemClassName: 'tui-first-child',
//           lastItemClassName: 'tui-last-child',
//         };

//         const pagination = new Pagination(paginationContainer, options);

//         pagination.on('beforeMove', ({page}) => {fetchMoviesMain(page);
//         });
//       }
//     })
//     .catch(error => console.log(error));
// };

// // Initial fetch and render
// fetchMoviesMain();

// // **********origin end ************************
