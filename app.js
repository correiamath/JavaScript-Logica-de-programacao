let numeroAleatorio = gerarNumeroAleatorio();

function alterarCampo(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

alterarCampo("h1", "Jogo Secreto");
alterarCampo("p", "Escolha um numero entre 1 e 10");

function verificarChute() {
  console.log(numeroAleatorio);
  alert(comparar());
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function comparar() {
  let input = parseInt(document.querySelector("input").value);
  let resultado;

  if (input > numeroAleatorio) {
    resultado = "O valor inserido é maior que o número secreto";
    alert(resultado);
  } else if (input < numeroAleatorio) {
    resultado = "O valor inserido é menor que o número secreto";
    alert(resultado);
  } else {
    resultado = "Você acertou!!!";
    alert(resultado);
  }

  return resultado;
}
