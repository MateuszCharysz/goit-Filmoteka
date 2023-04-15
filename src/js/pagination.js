import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const paginationContainer = document.querySelector('#pagination');

// * funkcja musi zostać zaimportowana przy renderowaniu galerii i wyszukiwaniu przez słowa kluczowe * //
// * dopiero wtedy będę mogła zająć się jej wyglądem i dopracowaniem - nie wiem czy działa * //

export function createPagination(totalItems, visiblePages) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
  };
  const pagination = new Pagination(paginationContainer, options);

  return pagination;
  
}
