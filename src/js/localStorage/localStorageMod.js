import jsLocalStorage from './jsLocalStorage';
// const jsLocalStorage = { save, load, remove };

const addToLocalStorage = (id, listName) => {
  let storedList = jsLocalStorage.load('user');
  let parsedList = null;

  if (storedList) {
    parsedList = { ...storedList };
  }

  if (!parsedList[listName]) {
    parsedList[listName] = [];
  }

  if (!parsedList[listName].includes(id)) {
    parsedList[listName].push(id);
  }

  jsLocalStorage.save('user', id);
};

const jsLocalStorage = { save, load, remove };
export default localStorageMod;
