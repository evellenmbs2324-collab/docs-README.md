// Função para tocar o som de uma nota
function tocarSom(nota) {
  const audio = new Audio(`sons/${nota}.wav`); // agora usa .wav
  audio.currentTime = 0; // reinicia o som se for tocado repetidamente
  audio.play();
}

// Seleciona todas as teclas (brancas e pretas)
const teclas = document.querySelectorAll('.key, .black');

// Evento de clique com o mouse
teclas.forEach(tecla => {
  tecla.addEventListener('click', () => {
    const nota = tecla.getAttribute('data-note');
    tocarSom(nota);
    tecla.classList.add('active');
    setTimeout(() => tecla.classList.remove('active'), 200);
  });
});

// Eventos do teclado físico
document.addEventListener('keydown', event => {
  if (event.repeat) return; // evita repetição contínua
  const teclaPressionada = event.key.toUpperCase();
  const tecla = document.querySelector(`[data-key="${teclaPressionada}"]`);
  if (tecla) {
    tecla.classList.add('active');
    tocarSom(tecla.getAttribute('data-note'));
  }
});

document.addEventListener('keyup', event => {
  const teclaSolta = event.key.toUpperCase();
  const tecla = document.querySelector(`[data-key="${teclaSolta}"]`);
  if (tecla) tecla.classList.remove('active');
});