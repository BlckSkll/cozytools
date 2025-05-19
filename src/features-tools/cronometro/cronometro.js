

let visor = document.getElementById("visor_cronometro");
let segundos = 0;
let intervaloID = null;
let ativo = false;

function atualizarVisor(){
let minutos = Math.floor(segundos/ 60);
let restoSegundos = segundos % 60;

let formato = 
String(minutos).padStart(2, "0") + ":" +
String(restoSegundos).padStart(2, "0");

visor.textContent = formato;
segundos ++;
}

document.getElementById("botoes_iniciar").addEventListener("click", inciar);
function inciar (){
if (!ativo){
    intervaloID = setInterval(atualizarVisor, 1000);
    ativo = true;    
}
}

document.getElementById("botoes_pausar").addEventListener("click", pausar);
function pausar (){
if (ativo === true){
    clearInterval (intervaloID);
    ativo = false;

}
}

document.getElementById("botoes_reiniciar").addEventListener("click", reiniciar);
function reiniciar (){
    clearInterval(intervaloID);
    segundos = 0;
    atualizarVisor();
    ativo = false;

}

