import apiUtils from '../api/apiUtils'

export const fetchingMovies = async (page) => {
  try {
    const response = await fetch(apiUtils.apiUrlStringBuilder(apiUtils.API_TRENDING(page))
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
