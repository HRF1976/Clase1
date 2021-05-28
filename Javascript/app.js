
// Defino las variables

var numero1;
var numero2;

let suma=0;
let resta=0;
let division=0;
let multiplicacion=0;

const PI = 3.1416;

// 2.es un método o proceso que se repite
function inicio(){
    numero1=prompt('Introduce el número 1: ')
    numero2=prompt('Introduce otro número: ')
    console.log(numero1);
    console.log('El segundo número es: ${numero2}')
}

numero1=parseFloat(numero1)
numero2=parseFloat(numero2)

function sumar(){
    if (numero1 == undefined && numero2 == undefined) {
        alert("Cargar números por favor")
    } else {
        suma=numero1+numero2
        console.log(suma)
    }
};

function restar() {
    if (numero1 == undefined && numero2 == undefined) {
        alert("Cargar números por favor")
    } else {
        suma=numero1-numero2
        console.log(suma)
    }
};

function multiplicar(){

};

function dividir (){

};