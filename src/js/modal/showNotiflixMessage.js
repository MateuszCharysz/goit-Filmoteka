import Notiflix from 'notiflix';

/**
  Funkcja showNotification wyświetla powiadomienie Notiflix, które informuje użytkownika, że film został dodany lub usunięty z magazynu lokalnego.
  @param {string} message - Tytuł filmu.
  @param {string} type - Typ powiadomienia - 'add' jeśli film został dodany lub 'remove' jeśli usunięty.
  @returns {void}
*/
const showNotification = (message, type) => {
  const movieTitle = document.querySelector('.modal__title').textContent;
  const notificationType = type === 'add' ? 'success' : 'info';
  const actionType = type === 'add' ? 'added to' : 'removed from';
  const notificationMessage = `Movie "${movieTitle}" has been ${actionType} ${message}.`;
  Notiflix.Notify[notificationType](notificationMessage, {
    timeout: 3000,
    position: 'right-bottom',
    fontFamily: 'Roboto',
    cssAnimationStyle: 'from-right',
    useIcon: true,
    iconColor: type === 'add' ? '#4caf50' : '#f44336',
    borderRadius: '10px',
  });
};

/**
 * Funkcja showAddedToLocalStorageNotification wyświetla powiadomienie Notiflix o dodaniu filmu do magazynu lokalnego.
  @param {string} arrayType - Typ tablicy - 'watched' jeśli film został dodany do listy obejrzanych lub 'queued' jeśli do listy oczekujących.
  @returns {void}
*/
const showAddedToLocalStorageNotification = arrayType => {
  showNotification(arrayType, 'add');
};

/**
  Funkcja showRemovedFromLocalStorageNotification wyświetla powiadomienie Notiflix o usunięciu filmu z magazynu lokalnego.
  @param {string} arrayType - Typ tablicy - 'watched' jeśli film został usunięty z listy obejrzanych lub 'queued' jeśli z listy oczekujących.
  @returns {void}
*/
const showRemovedFromLocalStorageNotification = arrayType => {
  showNotification(arrayType, 'remove');
};

export {
  showAddedToLocalStorageNotification,
  showRemovedFromLocalStorageNotification,
};
