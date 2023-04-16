import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const paginationContainer = document.querySelector('#pagination');

// * funkcja musi zostać zaimportowana przy renderowaniu galerii i wyszukiwaniu przez słowa kluczowe * //

createPagination = (totalItems, visiblePages) => {
  const options = {
    totalItems: totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
  };
  const pagination = new Pagination(paginationContainer, options);

  return pagination;
};
console.log(createPagination(200, 5));

export { createPagination };

// rendering movie cards //

// import fetch get trending - na końcu musi być '&page=${page}' //
// const pagination = createPagination(data.total_results, data.total_pages);

// KEY WORDS //
//przy api keywords potrzebuje na końcu dodać '&page=${page}'
// potrzebuje osobnej funkcji jak np.:
// async function getByKeyword(name, page) {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&page=${page}`; //*/ name powinno być poza stałą API_URL
//     return await axios
//       .get(url)
//       .then(response => {
//         return response.data;
//       })
//       .catch(error => console.log(error));
//   }

// const pagination = createPagination(data.total_results, data.total_pages);
// pagination.on(({page //z fetch movies //
// }) => {
//     //query selector do galerii//
//     .innerHTML = '';
//     //funkcja obsługująca fetcha key words//
//     (name, page.then(data => {
//        //funkcja obsługująca fetcha key words//
//        .innerHTML =
//        //funkcja - markup galerii //(data.results);
//     }))
// })
// to wszystko powinno się zawierać w funkcji, która szuka po słowie kluczowym //
