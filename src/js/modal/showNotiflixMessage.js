import Notiflix from "notiflix";

function showNotification(message, type) {
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
}

function showAddedToLocalStorageNotification(arrayType) {
  showNotification(arrayType, 'add');
}

function showRemovedFromLocalStorageNotification(arrayType) {
  showNotification(arrayType, 'remove');
}

export {
  showAddedToLocalStorageNotification,
  showRemovedFromLocalStorageNotification,
};
