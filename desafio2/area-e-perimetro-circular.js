let sala = {
  raio: 3,
};

function area_e_perimetro(raio) {
  let pi = Math.PI;
  let area = pi * raio * raio;
  let perimetro = pi * raio;
  return `A área da sala é: ${area.toFixed(
    2
  )} e o perímetro da sala é: ${perimetro.toFixed(2)}`;
}

console.log(area_e_perimetro(sala.raio));
s;
