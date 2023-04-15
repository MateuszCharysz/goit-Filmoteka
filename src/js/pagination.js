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
