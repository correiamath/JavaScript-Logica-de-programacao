/////////////////////////////////////////////////////////////////////////////////////////////
Calcular IMC

let Matheus = {
  peso: 60,
  altura: 1.6,
};

function calcularIMC(peso, altura) {
  let IMC = peso / (altura * altura);
  return IMC.toFixed(2);
}

console.log(calcularIMC(Matheus.peso, Matheus.altura));
