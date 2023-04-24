import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import { scrollUp } from './scrollUp';
// import { fetchMoviesMain } from './api/fetchMoviesMain';

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
      itemsPerPage: 20,
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
