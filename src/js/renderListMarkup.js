const renderList = movies => {
  const markup = movies
    .map(movie => {
      const tags = movie.genres.map(genre => genre.name).join(', ');
      return `<div class="movie__card" data-id="${movie.id}">
            <img
              src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
              alt="${tags}"
              loading="lazy"
            />
            <div class="info">
              <p class="movie__title">${movie.original_title}</p> <p class="movie__genres">${tags}</p>
            </div>
          </div>`;
    })
    .join('');

  return markup;
};
export { renderList };
