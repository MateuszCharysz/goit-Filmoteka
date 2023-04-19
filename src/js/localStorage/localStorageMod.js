import jsLocalStorage from './jsLocalStorage';
// const jsLocalStorage = { save, load, remove }; - funkcje zawierają już try...catch stryngifikacje i parsyfikacje z json
// js.localStorage.save(key, value) // zapisuje w local storage pod kluczek key wartość value
// js.localStorage.load(key) // zwraca value
// js.localValue.remove(key) // usuwa cały KEY łącznie z wartością

//schemat funkcji
//1. wpierw ładujemy z local storage dane do jakiejś wewnętrznej zmiennej edytowalnej (let)
//2. robimy operacje na danych (mutujące array)
//3. zapisujemy otrzymany array w local storage

// funkcja wywoływana przy uruchomieniu strony tworząca puste katalogi id
const createLocalStorage = () => {} // ma do zrobienia stworzenie key=watched,queued // watched=[], queued=[] 
// musi też sprawdzić czy zmienne stnieją, żeby ich nie nadpisać 

//argument arrayType - key który ma być użyty przy ładowaniu zasobu z local storage

// funkcja wywoływana przy klikaniu na przyciski w modal (watched albo queued)
const saveMovieId = (movieId, arrayType) => {} // DOPISUJE do istniejącego array [] movieId
// musi sprawdzić czy id już istnieje, jeśli istnieje to przerywa działanie funkcji
// jeśli nie istnieje to robi push..

// funkcja wywoływana przy klikaniu na przyciski w modal (watched albo queued)
const removeMovieId = (movieId, arrayType) => {} // Jeśli znajdzie, wtedy usuwa ID z array. Jeśli nie znajdzie przerywa działanie

// funkcja wywoływana przy ładowaniu modala, oraz przy kliknięciu na przycisk (po dodaniu do localstorage)
// w połączeniu z funkcją togglująca klasę w modalu (nie ma jeszcze takiej) służyłaby do zmiany koloru przycisku (jeśli mamy coś - przycisk pomarańczowy, jeśli nie przeźroczysty)
const findMovieId = (movieId, arrayType) => {} // funkcja która tylko i wyłącznie znajduje movie ID i zwraca true albo false


const localStorageMod = { createLocalStorage, saveMovieId, removeMovieId, findMovieId };
export default localStorageMod;
