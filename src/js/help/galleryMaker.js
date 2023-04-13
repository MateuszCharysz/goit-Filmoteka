'use strict';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { drawGallery, appendGallery } from './renderGallery';
import { cntrMathWithUpload } from './counterMath';
import JsLocalStorage from './JsLocalStorage'; //save load remove
import { APIurl } from './APIurl';
import { pixabayAPIluncher } from './fetchphotos';

//DOM elements
const gallery = document.querySelector('.gallery');
const photosearch = document.querySelector('#search-form');
const load = document.querySelector('.load-button');
const toggleVisLoadBtn = () => load.classList.toggle('is-hidden');
//LIGHTBOX
//Instance
const lightbox = new simpleLightbox('.gallery a', {
  captionSelector: event => event.firstElementChild,
  captionsData: 'alt',
  captionDelay: 250,
});

//Lightbox opening
gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'A') return;
  event.target.lightbox;
});
// INPUT
const submitHandler = event => {
  event.preventDefault();
  let listToClear = document.querySelectorAll('[toClear]');
  listToClear.forEach(el => el.remove());
  if (load.classList.contains('is-hidden') !== true) toggleVisLoadBtn();
  const { searchQuery } = event.currentTarget;
  const pureQuerry = searchQuery.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' '); // \s - any white symbol + one or more g globaly/across whole string
  if (pureQuerry.length > 100) {
    Notiflix.Notify.warning(
      'Search querry is to long. Please use maximum 100 characters (spaces included)',
    );
  } else if (pureQuerry.length === 0) {
    Notiflix.Notify.info('Search field was empty. Please use letters');
  } else {
    const querryInput = pureQuerry.replace(' ', '+');
    pixabayAPIquerry(querryInput);
  }
};
const pixabayAPIquerry = async querry => {
  JsLocalStorage.save('prompt', querry);
  JsLocalStorage.save('page', 1); // to test "last info" change value for 13
  try {
    const response = await pixabayAPIluncher(APIurl()); ///APIurl and fetchphotos
    if (response.data.totalHits === 0) {
      Notiflix.Notify.info(
        'Sorry, there are no images matching your search query. Please try again.',
      );
    } else {
      Notiflix.Notify.success(
        `Hooray! We found ${response.data.totalHits} images.`,
      );
      drawGallery(response);
      lightbox.refresh();
      if (load.classList.contains('is-hidden') === true) toggleVisLoadBtn();
    }
  } catch (error) {
    Notiflix.Notify.failure(
      'Shit went south with querry.. :( Get Dev to Check console',
    );
    console.log(error.name);
    console.log(error.message);
  }
};
const pixabayAPIpagination = async () => {
  toggleVisLoadBtn();
  cntrMathWithUpload('page'); /// counterMatch
  const scroll2rows = height => {
    window.scrollBy({
      top: 2 * height,
      behavior: 'smooth',
    });
  };
  try {
    const response = await pixabayAPIluncher(APIurl()); ///APIurl and fetchphotos
    appendGallery(response); ///renderGallery
    scroll2rows(240);
    lightbox.refresh();
    toggleVisLoadBtn();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};
//Event
photosearch.addEventListener('submit', submitHandler);
load.addEventListener('click', pixabayAPIpagination);
