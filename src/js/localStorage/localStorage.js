/*
    Funkcja addToLocalStorage dodaje identyfikator (id) do listy (listName) 
    przechowywanej w pamięci lokalnej przeglądarki dla zalogowanego użytkownika. 
    Jeśli lista nie istnieje, zostanie utworzona. 
*/
const addToLocalStorage = (id, listName) => {
  let storedList = localStorage.getItem('user');
  let parsedList = {};

  if (storedList) {
    parsedList = JSON.parse(storedList);
  }

  if (!parsedList[listName]) {
    parsedList[listName] = [];
  }

  if (!parsedList[listName].includes(id)) {
    parsedList[listName].push(id);
  }

  localStorage.setItem('user', JSON.stringify(parsedList));
};
export { addToLocalStorage };
