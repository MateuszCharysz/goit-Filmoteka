import jsLocalStorage from './jsLocalStorage';
// const jsLocalStorage = { save, load, remove }; - funkcje zawierają już try...catch stryngifikacje i parsyfikacje z json
// js.localStorage.save(key, value) // zapisuje w local storage pod kluczek key wartość value
// js.localStorage.load(key) // zwraca value+
// js.localValue.remove(key) // usuwa cały KEY łącznie z wartością

//schemat funkcji
//1. wpierw ładujemy z local storage dane do jakiejś wewnętrznej zmiennej edytowalnej (let)
//2. robimy operacje na danych (mutujące array)
//3. zapisujemy otrzymany array w local storage

const cbfindId = (movieId, arrayType) => arrayType.includes(movieId); // funkcja cb - do sprawdzania id wewnątrz funkcji

// funkcja wywoływana przy uruchomieniu strony tworząca puste katalogi id
const createLocalStorage = () => {}; // ma do zrobienia stworzenie key=watched,queued // watched=[], queued=[] (format danych to array)
// musi też sprawdzić czy zmienne stnieją, żeby ich nie nadpisać

//argument arrayType - key który ma być użyty przy ładowaniu zasobu z local storage

// funkcja wywoływana przy klikaniu na przyciski w modal (watched albo queued)
const saveMovieId = (movieId, arrayType) => {
  const arr = jsLocalStorage.load(arrayType);
  if (cbfindId(movieId, arr) !== true) {
    arr.push(movieId);
    jsLocalStorage.save(arr);
  }
}; // DOPISUJE do istniejącego array [] movieId
// musi sprawdzić czy id już istnieje, jeśli istnieje to przerywa działanie funkcji
// jeśli nie istnieje to robi push..

// funkcja wywoływana przy klikaniu na przyciski w modal (watched albo queued)
const removeMovieId = (movieId, arrayType) => {}; // Jeśli znajdzie, wtedy usuwa ID z array. Jeśli nie znajdzie przerywa działanie

// funkcja wywoływana przy ładowaniu modala, oraz przy kliknięciu na przycisk (po dodaniu do localstorage)
// w połączeniu z funkcją togglująca klasę w modalu (nie ma jeszcze takiej) służyłaby do zmiany koloru przycisku (jeśli mamy coś - przycisk pomarańczowy, jeśli nie przeźroczysty)

const findMovieId = (movieId, arrayType) => {}; // funkcja która tylko i wyłącznie znajduje movie ID i zwraca true albo false

const localStorageMod = {
  createLocalStorage,
  saveMovieId,
  removeMovieId,
  findMovieId,
};
export default localStorageMod;

/*
const localStorageMod = {
    createLocalStorage: function () {
      // Sprawdzenie, czy klucze istnieją już w local storage
      const watched = localStorage.getItem('watched');
      const queued = localStorage.getItem('queued');
      // Jeśli klucze nie istnieją, stworzenie nowych
      if (!watched) {
        localStorage.setItem('watched', JSON.stringify([]));
      }
      if (!queued) {
        localStorage.setItem('queued', JSON.stringify([]));
      }
    },
    saveMovieId: function (movieId, arrayType) {
      // Pobranie array z local storage
      const array = JSON.parse(localStorage.getItem(arrayType));
      // Sprawdzenie, czy movieId już istnieje w array
      if (array.includes(movieId)) {
        return;
      }
      // Dodanie movieId do array
      array.push(movieId);
      // Zapisanie array do local storage
      localStorage.setItem(arrayType, JSON.stringify(array));
    },
    removeMovieId: function (movieId, arrayType) {
      // Pobranie array z local storage
      const array = JSON.parse(localStorage.getItem(arrayType));
      // Sprawdzenie, czy movieId istnieje w array
      const index = array.indexOf(movieId);
      if (index === -1) {
        return;
      }
      // Usunięcie movieId z array
      array.splice(index, 1);
      // Zapisanie zmienionego array do local storage
      localStorage.setItem(arrayType, JSON.stringify(array));
    },
    findMovieId: function (movieId, arrayType) {
      // Pobranie array z local storage
      const array = JSON.parse(localStorage.getItem(arrayType));
      // Sprawdzenie, czy movieId istnieje w array
      return array.includes(movieId);
    },
  };
  export default localStorageMod;*/
