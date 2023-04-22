import { fetchMovieById } from '../api/fetchMovieById';
import { addToLocalStorage } from '../localStorage/localStorage';
import { closeModal } from './closeModal';
import { renderModal } from './modalMarkup';

// funkcja otwierająca modal
const openModal = e => {
  // przerywa funkcję, jeśli zdarzenie nie występuje na elemencie z klasą "movie-card".
  if (!e.target.closest('.movie__card')) {
    return;
  }
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  // pobranie id filmu z atrybutu "data-id" klikniętego elementu
  const movieId = e.target.closest('.movie__card').getAttribute('data-id');
  fetchMovieById(movieId)
    .then(movieData => {
      backdrop.innerHTML = renderModal(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);

      // blokowanie scrollowania strony
      const currentScrollY = window.scrollY;
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.position = 'fixed';

      const closeModalButton = document.querySelector('#modal__close');
      const watchedButton = document.getElementById('watched');
      const queueButton = document.getElementById('queue');

      watchedButton.addEventListener('click', () =>
        addToLocalStorage(movieId, 'watched')
      );
      queueButton.addEventListener('click', () =>
        addToLocalStorage(movieId, 'queue')
      );
      closeModalButton.addEventListener('click', () => {
        // usuwanie nasłuchiwaczy zdarzeń
        watchedButton.removeEventListener('click', () =>
          addToLocalStorage(movieId, 'watched')
        );
        queueButton.removeEventListener(
          'click',
          addToLocalStorage(movieId, 'queue')
        );
        // odblokowanie scrollowania strony
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, currentScrollY);
        closeModal();
      });
    })
    .catch(error => {
      console.error(error);
    });
};

export { openModal };
