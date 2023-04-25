/**
  Funkcja 'movieCard' generuje kod HTML dla pojedynczej karty filmu, na podstawie obiektu filmowego przekazanego jako argument 'e'.
  W kodzie HTML zawiera pola takie jak: tytuł filmu, obrazek, lista gatunków, rok premiery i unikalne id dla danego filmu.
  Jeśli obiekt filmowy zawiera adres do plakatu, to jest on wyświetlany. W przeciwnym przypadku wyświetlany jest domyślny obrazek.
  Funkcja zwraca kod HTML dla karty filmowej.
*/
export const movieCard = e => {
  const genres = e.genres.map(genre => ` ${genre.name}`);
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
       ${genres.slice(0, 2)}&nbsp
     </p>
     <p class="movie__year">
       | ${e.release_date.slice(0, 4)}
     </p>
   </div>
  </div>
   `;

  return markup;
};
