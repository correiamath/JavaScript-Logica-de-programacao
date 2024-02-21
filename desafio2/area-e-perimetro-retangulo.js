let sala = {
  altura: 3,
  largura: 10,
};

function area_e_perimetro(largura, altura) {
  let area = largura * altura;
  let perimetro = (largura + altura) * 2;
  return `A área da sala é: ${area} e o perímetro da sala é: ${perimetro}`;
}

console.log(area_e_perimetro(sala.largura, sala.altura));
