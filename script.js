const botaoIniciar = document.getElementById('botoes_iniciar');
const botaoPausar = document.getElementById('botoes_pausar');
const botaoReiniciar = document.getElementById('botoes_reiniciar');

const pickerMinutos = document.querySelector('.picker-list.minutos');
const pickerSegundos = document.querySelector('.picker-list.segundos');

let intervalo = null;
let tempoRestante = 0;


function getSelectedValue(pickerElement) {
  const scrollTop = pickerElement.parentElement.scrollTop;
  const itemHeight = 80;
  return Math.round(scrollTop / itemHeight);
}

function scrollToValue(pickerElement, value) {
  const itemHeight = 80;
  pickerElement.scrollTop = value * itemHeight;
}

function atualizarPickers(min, seg) {
  scrollToValue(pickerMinutos.parentElement, min);
  scrollToValue(pickerSegundos.parentElement, seg);
}


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

function pausarContagem() {
  if (intervalo) {
    clearInterval(intervalo);
  }
}

function reiniciarContagem() {
  if (intervalo) {
    clearInterval(intervalo);
  }

  tempoRestante = 0;
  atualizarPickers(0, 0);
}

botaoIniciar.addEventListener('click', iniciarContagem);
botaoPausar.addEventListener('click', pausarContagem);
botaoReiniciar.addEventListener('click', reiniciarContagem);


function navegarComTeclado(event, pickerList) {
  const items = pickerList.querySelectorAll('li');
  const selectedIndex = Array.from(items).indexOf(document.activeElement);
  
  if (event.key === "ArrowDown") {
    // Se estiver na última opção, vai para a primeira
    if (selectedIndex === items.length - 1) {
      items[0].focus();
    } else {
      items[selectedIndex + 1].focus();
    }
  } else if (event.key === "ArrowUp") {
    // Se estiver na primeira opção, vai para a última
    if (selectedIndex === 0) {
      items[items.length - 1].focus();
    } else {
      items[selectedIndex - 1].focus();
    }
  } else if (event.key === "Enter") {
    const selectedValue = items[selectedIndex].textContent;
    console.log(`Valor selecionado: ${selectedValue}`);
  }
}

// evento de teclado para os pickers
pickerMinutos.addEventListener('keydown', (event) => navegarComTeclado(event, pickerMinutos));
pickerSegundos.addEventListener('keydown', (event) => navegarComTeclado(event, pickerSegundos));

// foca automaticamente no picker de minutos quando a página carregar
pickerMinutos.querySelector('li').focus();
