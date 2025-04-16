// Inputs
let minInput = document.getElementById("min_input");
let segInput = document.getElementById("seg_input");

// Variáveis de controle
let segundos = 0;
let intervaloID = null;
let ativo = false;

// Atualiza o visor a cada segundo
function atualizarVisor(){
    let minutos = Math.floor(segundos / 60);
    let restoSegundos = segundos % 60;

    minInput.value = String(minutos).padStart(2, "0");
    segInput.value = String(restoSegundos).padStart(2, "0");

    segundos++;
}

// Iniciar
document.getElementById("botoes_iniciar").addEventListener("click", iniciar);
function iniciar() {
    if (!ativo) {
        let minutos = parseInt(minInput.value) || 0;
        let segundosInput = parseInt(segInput.value) || 0;

        segundos = minutos * 60 + segundosInput;

        intervaloID = setInterval(atualizarVisor, 1000);
        ativo = true;
    }
}

// Pausar
document.getElementById("botoes_pausar").addEventListener("click", pausar);
function pausar(){
    if (ativo) {
        clearInterval(intervaloID);
        ativo = false;
    }
}

// Reiniciar
document.getElementById("botoes_reiniciar").addEventListener("click", reiniciar);
function reiniciar() {
    clearInterval(intervaloID);
    segundos = 0;
    ativo = false;

    minInput.value = "00";
    segInput.value = "00";
}
