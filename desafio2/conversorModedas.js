///////////////////////////////////////////////////////////////////////////////////////////////
//Conversor de moedas
let valor = 50;
let usdBRL = 4.8;

function conversorMoedas(valor, cotacao) {
  let convertido = valor * cotacao;
  return convertido.toFixed(2);
}

console.log(conversorMoedas(valor, usdBRL));
