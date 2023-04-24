/**
  Funkcja zamykająca modal.
  Usuwa tło modala i klasę blokującą przewijanie strony.
  @return {void}
*/
const closeModal = () => {
  const backdrop = document.querySelector('.backdrop');
  backdrop.remove();
  // usuwamy klasę blokującą możliwość skrolowania
  document.body.classList.remove('overflow-off');
};

export { closeModal };
