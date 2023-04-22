export const movieBox = document.querySelector('.box');
export const loader = document.querySelector('.loader');
export let movieID = [];
export let movieDetails = [];
export const cbClear = () => {
  movieID.length = 0;
  movieDetails.length = 0;
  movieBox.innerHTML = '';
};
