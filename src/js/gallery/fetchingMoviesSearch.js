import apiUtils from '../api/apiUtils';

export const fetchingMoviesSearch = async (page, search) => {
  try {
    const response = await fetch(
      apiUtils.apiUrlStringBuilder(apiUtils.API_SEARCH(search, page)),
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const moviesData = await response.json();
    return moviesData;
  } catch (error) {
    console.log(error);
  }
};
