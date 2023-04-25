/**

Obsługuje zdarzenie "keyup" dla elementu wyszukiwania.
@param {HTMLElement} search - Element HTML reprezentujący pole wyszukiwania.
@param {number} keyCode - Kod klawisza, który należy zarejestrować podczas zdarzenia "keyup".
@param {Function} cbClear - Funkcja zwrotna, która ma być wywołana w celu wyczyszczenia wyników wyszukiwania.
@param {Function} showMoviesKeyWords - Funkcja wywoływana po wprowadzeniu frazy wyszukiwania, która wyświetla pasujące filmy.
@returns {void}
*/

const searchKeyup = (search, keyCode, cbClear, showMoviesKeyWords) => {
  search.addEventListener('keyup', event => {
    if (event.keyCode === keyCode) {
      event.preventDefault();
      cbClear();
      showMoviesKeyWords(1, event.target.value);
    }
  });
};
export { searchKeyup };
