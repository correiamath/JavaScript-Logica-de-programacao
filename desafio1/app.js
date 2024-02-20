let tagH1 = document.querySelector("h1");
tagH1 = "Hora do Desafio";

function exibirNoConsole() {
  console.log("O botão foi clicado ");
}
function exibirAlerta() {
  alert("Eu amo JS");
}

function exibirPrompt() {
  let cidade = prompt("Insira sua cidade");
  alert(`Estive em ${cidade} e lembrei de você`);
}

function exibirSoma() {
  let soma = 0;
  let numeros_a_somar = prompt("insira quantos numeros serao somados");
  for (let i = 0; i < numeros_a_somar; i++) {
    soma = soma + +prompt("insira um numero");
  }
  alert(numero);
}
