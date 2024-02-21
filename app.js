let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;

function gerarNumeroAleatorio() {
  aleatorio = parseInt(Math.random() * numeroLimite + 1);
  let tamanhoDaLista = listaDeNumerosSorteados.length;
  if (tamanhoDaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(aleatorio)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(aleatorio);
    console.log(listaDeNumerosSorteados);
    return aleatorio;
  }
}

function exibirTextoNaTela(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo Secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  tentativas++;

  if (chute == numeroAleatorio) {
    exibirTextoNaTela("h1", "Parabéns!!!");
    let plural = tentativas > 1 ? "s" : "";
    let mensagemTentativas = `Você descobriu o número aleatório com ${tentativas} tentativa${plural}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chute").setAttribute("disabled", true);
  } else {
    if (chute > numeroAleatorio) {
      exibirTextoNaTela(
        "p",
        "O número aleatório é menor que este, tente novamente"
      );
    } else {
      exibirTextoNaTela(
        "p",
        "O número aleatório é maior que este, tente novamente"
      );
    }
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function novoJogo() {
  numeroAleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 0;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.getElementById("chute").removeAttribute("disabled");
}
