// sposób użycia pierwsze .then(httpCodeHandler) w fetch
const httpCodeHandler = response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const API_MAIN_URL = 'https://api.themoviedb.org/3/';
const API_SEARCH = (name = '', pageValue = 1) =>
  `search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${pageValue}&include_adult=false`;
const API_KEY = '64cb7e9375c055230d64b013c4bca79f';
const API_TRENDING = (pageValue = 1) =>
  `trending/all/day?api_key=${API_KEY}&page=${pageValue}`;

const apiUrlStringBuilder = typeOfQuerry =>
  `${API_MAIN_URL}${typeOfQuerry}`;

const apiUtils = {
  httpCodeHandler,
  API_KEY,
  API_MAIN_URL,
  API_SEARCH,
  API_TRENDING,
  apiUrlStringBuilder,
};
// export default apiUtils;
//przykład użycia
// console.log(apiUrlStringBuilder(API_TRENDING()));
// console.log(apiUrlStringBuilder(API_TRENDING(3)));
// console.log(apiUrlStringBuilder(API_SEARCH('dog')));
// console.log(apiUrlStringBuilder(API_SEARCH('girl', 4)));