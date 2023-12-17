/*
Funcione. Son bloques de código con instruccones que se pueden reutilizar las veces que sean necesarias.
Algunas funciones reciben parametros y otras no.
Nota: Las funciones "normales" se llaman funciones por declaración.
*/

//Función que permite saludar
function saludar() {
    console.log("Hola con una función.");
}

//Ejecutar la función con el nombre de la función y los parametros.
saludar();

//Hoisting. Característica de una función que nos permite invocalra desde antes de su inicialiazción es decir, se puede invocar antes del bloque de código o después.

//Se invoca en la linea 12 y 20
function saludar(){
    console.log("Hola con una función con hoisting");
}
saludar();

//Funciones que retornan algo 

//Para que una función retorne algo (un strting, una operación, una variable, etc.) necesitamos indicarle al código de la función que vamos a retornar mediante la palabra reservara return

function greeting(){
    return "Hola con una función de retorno";
}
console.log(greeting());

//Función que retorna y recibe parámetros
function sumar(x, y){
    return x + y;
}
let resultado = sumar(255,245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcula el cuadrado de un número

function calcCuadrado (numero){
    return numero * numero
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow function). Es una manera de declarar una función por declaración, sintetizando codigo y haciendolo más legible.

//Función flecha para calcular el cubico de un número.

const calCubo = (number) =>{
    return number * number * number;
}
let resultCubo = calCubo(3);
console.log(resultCubo);


//Funciones anonimas. Son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos.
//Las funciones anónimas no permiten el hoisting, no es posible invocarla antes de inicializarlas.

const mensaje = function() {
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());

// Funciones Callback. Es pasar de una función "B" por un parametro a una función "A", a modo que la función "A" pueda ejecutar esa función de forma genérica desde su código.

const functionB = function() {
    console.log("Ejecutando función B");
}
// functionB();

//Función "A" que manda´ra a llamar a la función "B"
const functionA = function (Callback){
    Callback();
}
functionA(functionB);