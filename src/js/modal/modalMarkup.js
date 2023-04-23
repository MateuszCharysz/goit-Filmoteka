const renderModal = e => {
  const genres = e.genres.map(genre => genre.name).join(', ');
  const markup = `
    <div class='modal'>
        <button class='modal__button modal__button--close' id='modal__close'>
        </button>
        <img class="modal__img" src="${
          e.poster_path
            ? `https://image.tmdb.org/t/p/w500${e.poster_path}`
            : 'https://movienewsletters.net/photos/000000h1.jpg'
        }" />
        <div class="modal__content">
            <h2 class="modal__title">${e.original_title}</h2>
            <ul class="modal__list">
                <li class="modal__item">
                    <p class="modal__item--label">Vote / Votes</p>
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
                </li>
                <li class="modal__item">
                    <p class="modal__item--label">Popularity</p>
                    <p class="modal__item--value">${e.popularity.toFixed(1)}</p>
                </li>
                <li class="modal__item">
                    <p class="modal__item--label">Original Title</p>
                    <p class="modal__item--value big">${e.original_title}</p>
                </li>
                <li class="modal__item">
                    <p class="modal__item--label">Genre</p>
                    <p class="modal__item--value">${genres}</p>
                </li>
            </ul>
            <div class="modal__overview">
                <h3 class="modal__overview--about">ABOUT</h3>
                <p class="modal__overview--overview">${e.overview}</p>
            </div>
        <div class="modal__buttons">
            <button id="watched" class="modal__button modal__button--watched watched">Add to watched</button>
            <button id="queue" class="modal__button modal__button--queue queued">Add to queue</button>
        </div>
    </div>
    `;

  return markup;
};
export { renderModal };