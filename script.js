const botaoIniciar = document.getElementById('botoes_iniciar');
const botaoPausar = document.getElementById('botoes_pausar');
const botaoReiniciar = document.getElementById('botoes_reiniciar');

const pickerMinutos = document.querySelector('.picker-list.minutos');
const pickerSegundos = document.querySelector('.picker-list.segundos');

let intervalo = null;
let tempoRestante = 0;

// Função para detectar o item central no scroll
function getSelectedValue(pickerElement) {
    const scrollTop = pickerElement.parentElement.scrollTop;
    const itemHeight = 80; // mesma altura dos <li>
    return Math.round(scrollTop / itemHeight);
  }
  

// Scrolla os pickers para os valores corretos (visualmente)
function scrollToValue(pickerElement, value) {
  const itemHeight = 80; // altura fixa do <li>
  pickerElement.scrollTop = value * itemHeight;
}

function atualizarPickers(min, seg) {
  scrollToValue(pickerMinutos.parentElement, min);
  scrollToValue(pickerSegundos.parentElement, seg);
}

// Inicia a contagem regressiva
function iniciarContagem() {
  if (intervalo) clearInterval(intervalo);

  const min = getSelectedValue(pickerMinutos);
  const seg = getSelectedValue(pickerSegundos);

  tempoRestante = min * 60 + seg;

  intervalo = setInterval(() => {
    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      return;
    }

    tempoRestante--;

    const m = Math.floor(tempoRestante / 60);
    const s = tempoRestante % 60;

    atualizarPickers(m, s);
  }, 1000);
}

// Pausa a contagem
function pausarContagem() {
  if (intervalo) {
    clearInterval(intervalo);
  }
}

// Reseta tudo
function reiniciarContagem() {
  if (intervalo) {
    clearInterval(intervalo);
  }

  tempoRestante = 0;
  atualizarPickers(0, 0);
}

// Conecta os botões às funções
botaoIniciar.addEventListener('click', iniciarContagem);
botaoPausar.addEventListener('click', pausarContagem);
botaoReiniciar.addEventListener('click', reiniciarContagem);
