function multiplicar1(a,b){
 //ES5
b = typeof b !== 'undefined'? b : 1;
return a * b;

}
//ES6
function multiplicar2(a, b = 1){
    return a* b;
}

console.log(multiplicar1(5));
console.log(multiplicar2(5));

function cambiaFondo(elemento,color= 'yellow'){
    var cuadro = document.getElementById(elemento);
    cuadro.style.backgroundColor =  color;
}

function agregar(valor,arreglo = []){
    arreglo.push(valor);
    return arreglo;
}

console.log(agregar(1));
console.log(agregar(2));

window.onload = function(){
    cambiaFondo("cuadro",);
}

function llamarAlgo(cosa = algo()){return cosa ; }

function algo(){
 return Math.floor(Math.random() * 10);
}

console.log(llamarAlgo());

function f(y,x = 1){
    return [y,x];

}
console.log(f(3,2));