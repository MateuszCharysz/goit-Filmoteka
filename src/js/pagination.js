import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const createPagination = ({
  total_results,
  total_pages,
  page = 1,
}) => {
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
