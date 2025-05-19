function calcularRegraDeTres() {
    const valor1Input = document.getElementById("valorConhecido1").value;
    const valor2Input = document.getElementById("valorConhecido2").value;
    const valor3Input = document.getElementById("valorCalcular2").value;
    const campoResultado = document.getElementById("resultado");
  
    // Verifica se os valores são válidos
    if (valor1Input === "" || valor2Input === "" || valor3Input === "") {
      campoResultado.value = "Preencha todos os campos!";
      return;
    }
  
    // Função para formatar a entrada (transforma vírgula em ponto para cálculo)
    function formatarEntrada(valor) {
      return parseFloat(valor.replace(',', '.'));
    }
  
    // Converte os valores para numéricos
    const valor1 = formatarEntrada(valor1Input);
    const valor2 = formatarEntrada(valor2Input);
    const valor3 = formatarEntrada(valor3Input);
  
    // Realiza o cálculo da regra de 3
    const resultado = (valor3 * valor2) / valor1;
  
    // Formata o resultado para exibir corretamente com vírgula, se necessário
    function formatarResultado(resultado, valorOriginal) {
      // Verifica se o valor original tinha vírgula
      return valorOriginal.includes(',') ? resultado.toFixed(2).replace('.', ',') : resultado.toFixed(2);
    }
  
    // Exibe o resultado no formato desejado
    campoResultado.value = formatarResultado(resultado, valor3Input);
  }
  
  document.getElementById("botao_calcular").addEventListener("click", calcularRegraDeTres);
  
 
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();  // Impede o envio do formulário ao pressionar Enter
      calcularRegraDeTres();
    }
  });
  