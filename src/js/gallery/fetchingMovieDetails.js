import { movieId, movieDetails } from './galleryVariables';
import apiUtils from '../api/apiUtils';

export const fetchingMovieDetails = async () => {
  for (let id of movieId) {
    try {
      const response = await fetch (
        apiUtils.apiUrlStringBuilder(apiUtils.API_ID(id)),
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const movieData = await response.json();
      movieDetails.push(movieData);
    } catch (error) {
      console.log(error);
    }
  }

};
