export const movieBox = document.querySelector('.box');
export const loader = document.querySelector('.loader');
export let movieId = [];
export let movieDetails = [];
export const cbClear = () => {
  movieId.length = 0;
  movieDetails.length = 0;
  movieBox.innerHTML = '';
};
