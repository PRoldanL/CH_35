//Comentarios de una sola linea

/* Comentarios
multilinea*/

//alert ("hola mundo");

//console.log("Este es un mensaje impreso en la consola.");


/* var nombre = prompt("Ingresa tu nombre");
alert("Hola, "+ nombre + " Bienvenido a la CH35");*/

/* var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1 / numero2)); */

// var edad = parseInt(prompt("Ingresa tu edad:"));

// if (edad >= 18) {
//     alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
// } else {
//     alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
// }



//Tipo de datos y variables

//scope es el alcance de nuestras variables

/* La diferencia entre var, let y const es el alcance:

var tiene un alcance global
let tiene un alcance local
const como su nombre lo dice se mantiene constante */

/*string:cadena de texto (lleva "" comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

//Todas nuestras variables deben ser declaradas con nombres especificos y claros, sin espacios, no deben iniciar con numeros


//Programa de invitados 

//Definiendo variables

// let nombre = "Daniel";
// let invitadosExtra = 2;
// let esMayorEdad = true;
// let edad = 24;
// let invitadoEspecial = null
// let horaDeSalida = undefined;

// document.write(nombre);

// Encasillamiento o tipado

/* Es útil para el mantenimiento del código ya que los hace más legible y facil de entender; previene errores reduciendo la probabilidad de los mismo, y mejora el rendimiento del programa.*/

// let numero= 15;
// let texto= "Hola";

// //Con encasillamiento 

// let numeroEncasillado = Number = 5;
// let textoEncasillado = String = "hola";

//typeof es una palabra reservada para saber que tipo de dato se tiene.

// console.log(typeof(nombre));


// Conversipon de string a number:


// let funtionNumber = console.log(typeof Number(nombre));
// metodoParseInt = console.log(typeof parseInt(nombre));
// metodoParseFloat = console.log(typeof parseFloat(nombre));

/* parseInt y parseFloat  son funciones que se utilizan para convertir cadenas de texto en números*/


// Conversión de number a string

// console.log(typeof String(edad));
// console.log(typeof edad.toString());


// Conversion de boolean a number

// let numero = Number(esMayorEdad);
// console.log((numero));
// console.log(typeof (numero));

//Conversión de String a boolean

// let texto = String(esMayorEdad);
// console.log(typeof(texto));
// console.log(typeof esMayorEdad.toString());


// let negacion = !esMayorEdad;
// console.log (negacion);


// Ejemplo extra del grupo 


// var numero1 = "4";
// var numero2 = "5";

// console.log("Tipo de variable numero1: "+typeof(numero1));
// /*
// typeof solo devuelve el tipo de variable que estas utilizando
// */
// console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
// console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
// /*
// Number: tranforma tu variable a una variable numerica
// parseInt: tranforma tu variable a un tipo de variable entera
// en el ejmplo lo utilizamod para sumas dos variables tipo string
// */
// console.log(numero1+numero2);
// console.log(parseInt(numero1)+parseInt(numero2));
// console.log(Number(numero1)+Number(numero2));



//Concatenar (unión de Strings)

let saludo = "Hola mundo, ";
let frase = "El futuro es hoy";

texto = saludo + frase;

//document.write Muesta en pantalla lo deseado.

//document.write(texto);

console.log(texto);