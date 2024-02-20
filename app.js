let numeroAleatorio = gerarNumeroAleatorio();

function alterarCampo(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

alterarCampo("h1", "Jogo Secreto");
alterarCampo("p", "Escolha um numero entre 1 e 10");

function verificarChute() {
  console.log(numeroAleatorio);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
