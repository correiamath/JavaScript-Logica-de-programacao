/////////////////////////////////////////////////////////////////////////////////////////////
//Calcular Média

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

let notas = [];
notas.push(nota1, nota2, nota3, nota4);

function calcularMedia(notas) {
  let soma = 0;
  notas.forEach((nota) => {
    soma += nota;
  });
  let media = soma / notas.length;
  console.log(media);
}

calcularMedia(notas);
