///////////////////////////////////////////////////////////////////////////////////////////////
//Calcular fatorial
function fatorial(x) {
    for (let i = x - 1; i >= 1; i--) {
        x *= i;
    }

    console.log(x);
    return x;
}

fatorial(6);
