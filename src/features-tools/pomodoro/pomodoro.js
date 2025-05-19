const visor = document.getElementById("tempo");
const cicloAtualTexto = document.getElementById("ciclo_atual");
const btnIniciar = document.getElementById("botoes_iniciar");
const btnPausar = document.getElementById("botoes_pausar");
const btnReiniciar = document.getElementById("botoes_reiniciar");
const tomates = document.querySelectorAll(".ciclos_imagens_tomates img");

let tempo = 25 * 60; // tempo em segundos
let tempoRestante = tempo;
let intervalo = null;
let ciclo = 0;
let estado = "foco"; // foco | pausa_curta | pausa_longa
let pausado = false;
let prontoProximo = true;

function formatarTempo(segundos) {
  const m = String(Math.floor(segundos / 60)).padStart(2, '0');
  const s = String(segundos % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function atualizarVisor() {
  visor.textContent = formatarTempo(tempoRestante);
}

function atualizarEstadoTexto() {
  if (estado === "foco") cicloAtualTexto.textContent = "foco";
  else if (estado === "pausa_curta") cicloAtualTexto.textContent = "pausa curta";
  else if (estado === "pausa_longa") cicloAtualTexto.textContent = "pausa longa";
}

function definirDuracaoPorEstado() {
  if (estado === "foco") return 25 * 60;
  if (estado === "pausa_curta") return 5 * 60;
  if (estado === "pausa_longa") return 15 * 60;
}

function iniciarCiclo() {
  if (!prontoProximo) return;
  tempoRestante = definirDuracaoPorEstado();
  atualizarVisor();
  atualizarEstadoTexto();

  intervalo = setInterval(() => {
    if (!pausado) {
      tempoRestante--;
      atualizarVisor();

      if (tempoRestante <= 0) {
        clearInterval(intervalo);
        finalizarCiclo();
      }
    }
  }, 1000);

  prontoProximo = false;
}

function finalizarCiclo() {
  if (estado === "foco") {
    ciclo++;
    if (ciclo <= 4) {
      tomates[ciclo - 1].style.opacity = "1";
    }

    estado = ciclo % 4 === 0 ? "pausa_longa" : "pausa_curta";
  } else {
    estado = "foco";
  }

  prontoProximo = true;
  atualizarEstadoTexto();
  visor.textContent = "00:00";
}

function pausarCiclo() {
  pausado = true;
}

function reiniciarCiclo() {
  clearInterval(intervalo);
  tempoRestante = definirDuracaoPorEstado();
  atualizarVisor();
  pausado = false;
  prontoProximo = true;
}

btnIniciar.addEventListener("click", () => {
  pausado = false;
  iniciarCiclo();
});

btnPausar.addEventListener("click", () => {
  pausarCiclo();
});

btnReiniciar.addEventListener("click", () => {
  reiniciarCiclo();
});

// Iniciar também com tecla Enter
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnIniciar.click();
  }
});

// Inicialização
atualizarVisor();
atualizarEstadoTexto();
tomates.forEach(tomate => tomate.style.opacity = "0.3");
