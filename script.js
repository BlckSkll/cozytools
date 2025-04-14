let visor = document.getElementById("numeros-id");
let segundos = 0;
function atualizarVisor(){
    let minutos = Math.floor(segundos / 60);
    let restoSegundos = segundos % 60;

    let formato = 
    String(minutos).padStart(2, "0") + ":" +
    String(restoSegundos).padStart(2,"0");

    visor.textContent = formato;

    segundos ++;
}

setInterval(atualizarVisor, 1000);