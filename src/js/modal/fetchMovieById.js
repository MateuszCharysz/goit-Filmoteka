import apiUtils from '../api/apiUtils';

const fetchMovieById = id => {
  return fetch(apiUtils.apiUrlStringBuilder(apiUtils.API_ID(id)))
    .then(response => {
      if (!response.ok) {
        if (response.status === 429) {
          // Too Many Requests
          console.error('Error: Too many requests to API.');
        } else {
          console.error(
            'Error: Failed to fetch data from API. Status code:',
            response.status
          );
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error);
    });
};
export { fetchMovieById };
