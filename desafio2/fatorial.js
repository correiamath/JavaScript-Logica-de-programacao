///////////////////////////////////////////////////////////////////////////////////////////////
//Calcular fatorial
let fat = 6;

function fatorial(x) {
  for (let n = x - 1; n >= 1; n--) {
    x *= n;
  }
  return x;
}
console.log(fatorial(fat));
