/*
    Funkcja addToLocalStorage dodaje identyfikator (id) do listy (listName) 
    przechowywanej w pamięci lokalnej przeglądarki dla zalogowanego użytkownika. 
    Jeśli lista nie istnieje, zostanie utworzona. 
*/
import jsLocalStorage from "./jsLocalStorage";
const addToLocalStorage = (id, listName) => {
  let storedList = jsLocalStorage.load('user');

  if (!storedList[listName]) {
    storedList[listName] = [];
  }

  if (!storedList[listName].includes(id)) {
    storedList[listName].push(id);
  }

  jsLocalStorage.save('user', id);
};
//   let storedList = localStorage.getItem('user');
//   let parsedList = {};

//   if (storedList) {
//     parsedList = JSON.parse(storedList);
//   }

//   if (!parsedList[listName]) {
//     parsedList[listName] = [];
//   }

//   if (!parsedList[listName].includes(id)) {
//     parsedList[listName].push(id);
//   }

//   localStorage.setItem('user', JSON.stringify(parsedList));
// };
export { addToLocalStorage };
