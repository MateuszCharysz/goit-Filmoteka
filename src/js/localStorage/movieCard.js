export const movieCard = e => {
  const genres = e.genres.map(genre => genre.name).join(', ');
  const markup = `<div class="movie__card" data-id="${e.id}">
   <div class="movie__imgbox">
     <img class="movie__img" src="${
       e.poster_path
         ? `https://image.tmdb.org/t/p/w500${e.poster_path}`
         : 'https://movienewsletters.net/photos/000000h1.jpg'
     }"
     alt="${e.title}" loading="lazy"/>
   </div>
   <p class="movie__title">
     <b>${e.title}</b>
   </p>
   <div class="movie__info">
     <p class="movie__genres">
       ${genres.slice(0, 2)}&nbsp;
     </p>
     <p class="movie__year">
       | ${''}
     </p>
   </div>
  </div>
   `;

  return markup;
};
