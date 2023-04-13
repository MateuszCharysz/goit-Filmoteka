'use strict';
//DOM
const gallery = document.querySelector('.gallery');

const createItem = item => {
  const { comments, downloads, likes, largeImageURL, tags, previewURL, views } =
    item;
  let itemMarkup = `<a class="gallery__item" href="${largeImageURL}" toClear>
  <img class="gallery__image" src="${previewURL}" alt="${tags}" loading="lazy"/>
  <div class="gallery__image-info">
    <div class="gallery__image-info-item">
        <p><b>Likes</b></p>
        <p class="gallery__image-info-display">${likes}</p>
    </div>
        <div class="gallery__image-info-item">
        <p><b>Views</b></p>
        <p class="gallery__image-info-display">${views}</p>
    </div>
    <div class="gallery__image-info-item">
        <p><b>Comments</b></p>
        <p class="gallery__image-info-display">${comments}</p>
    </div>
    <div class="gallery__image-info-item">
        <p><b>Downloads</b></p>
        <p class="gallery__image-info-display">${downloads}</p>
    </div>
  </div>
  </a>
  `;
  return itemMarkup;
};

export const drawGallery = input =>
  (gallery.innerHTML = [...input.data.hits]
    .map(item => createItem(item))
    .join(''));

export const appendGallery = input =>
  gallery.insertAdjacentHTML(
    'beforeend',
    [...input.data.hits].map(item => createItem(item)).join(''),
  );
