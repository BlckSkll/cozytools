function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let alturaCm = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
  
    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
      resultado.textContent = "Digite valores válidos para peso e altura.";
      return;
    }
  
    let altura = alturaCm / 100; 
    let imc = peso / (altura * altura); 
    let classificacao = "";
  
    // Classificação do IMC
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }
  
    // resultado
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  }
  
  // Chama a função ao clicar no botão
  document.getElementById("botao_calcular").addEventListener("click", function() {
    calcularIMC();
  });
  
  // Opção de pressionar Enter para calcular
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      calcularIMC();
    }
  });
  