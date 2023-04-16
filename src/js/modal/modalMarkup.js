// protsy markup z modalem
const markupData = e => {
  const genres = e.genres.map(genre => genre.name).join(', ');
  const markup = `
    <div class='modal'>
        <button class='modal__button modal__button--close' id='modal__close'>
            x
        </button>
        <img class="modal__img" src="https://image.tmdb.org/t/p/w500//${
          e.poster_path
        }" />
        <div class="modal__content">
            <h2 class="modal__title">${e.original_title}</h2>
            <ul class="modal__list">
                <li class="modal__item">
                    <p class="modal__item--label grey">Vote / Votes</p>
                    <div class="modal__item--vote">
                        <p class="modal__item--value modal__item--value--vote">
                            <vote_average>
                                ${e.vote_average.toFixed(1)}
                            </vote_average>
                            /
                            <vote__count>
                                ${e.vote_count}
                            </vote__count>
                        </p>
                    </div>
                <li>
                <li class="modal__item">
                    <p class="modal__item--label grey">Popularity</p>
                    <p class="modal__item--value">${e.popularity.toFixed(1)}</p>
                <li>
                <li class="modal__item">
                    <p class="modal__item--label grey">Original Title</p>
                    <p class="modal__item--value big">${e.original_title}</p>
                <li>
                <li class="modal__item">
                    <p class="modal__item--label grey">Genre</p>
                    <p class="modal__item--value">${genres}</p>
                <li>
            </ul>
            <div class="modal__overview">
                <h3 class="modal__overview--about">ABOUT</h3>
                <p class="modal__overview--overview">${e.overview}</p>
            </div>
        <div class="modal__buttons">
            <button class="modal__button modal__button--watched">Add to watched</button>
            <button class="modal__button modal__button--queue">Add to queue</button>
        </div>
    </div>
    `;

  return markup;
};
export { markupData };
