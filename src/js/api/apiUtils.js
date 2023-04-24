const API_MAIN_URL = 'https://api.themoviedb.org/3/';
const API_SEARCH = (name = '', pageValue = 1) =>
  `search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${pageValue}&include_adult=false`;
const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
const API_TRENDING = (pageValue = 1) =>
  `trending/all/day?api_key=${API_KEY}&page=${pageValue}`;
const API_ID = id => `movie/${id}?api_key=${API_KEY}`;

const apiUrlStringBuilder = typeOfQuerry => `${API_MAIN_URL}${typeOfQuerry}`;

const apiUtils = {
  API_KEY,
  API_MAIN_URL,
  API_SEARCH,
  API_TRENDING,
  API_ID,
  apiUrlStringBuilder,
};
export default apiUtils;
