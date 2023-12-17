//Operador

/* Es un signo que especifica una operación a efectuar.

Operadores aritmeticos: (+, -, /, *, %, ++, --)
Operador de asignació: (=)
Operadores lógicos: (&&, ||, !)
Operadores de comparación (==, ===, !==, <, >, >=, <=)
Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)

*/

/*

Operadores aritmeticos

(+): suma  
(-); resta 
(*) multiplicación
(/) división
(%) residuo
(++) incremento (incrementa de uno en uno la cantidad o número)
(--) decremento (disminuye de uno en uno la cantidad o número)


*/

let num1 = 10;
let num2 = 8;

suma = num1 + num2;
resta = num1 - num2;
mult = num1 * num2;
div = num1 / num2;
res = num1 % num2;
// incre1 = ++ num1;
// decre1 = -- num1;
// incre = ++ num2;
// decre = -- num2;
incre = num1;
incre ++;
decre = num2;
decre --;

console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(res);
// console.log(incre1);
// console.log(decre1);
// console.log(incre);
// console.log(decre);
console.log(incre);
console.log(decre);



let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento =  precioReal - cantidadDescuento;

console.log("Precio real: $" + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento: $" + precioConDescuento);

/* Operadores de asignación
(=) Este operador no compara, ASIGNA. */


// let frutas = manzana;


/* Operadores de comparación

(==): Igualdad compara si nuestros calores son iguales

*/

let numero3 = 10;
let texto = "10";

console.log(numero3 == texto);

/* (===) : Igualdad estricta, compara si los valores son iguales y el tipo de dato */

let numero4 = 10;
let texto1= "10";

console.log(numero3 === texto1);


/*(!=): Desigualdad o distinto; este operador verifica so dos valores no son iguales y de ser necesario realiza la conversión.
*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo) {
    console.log("El precio del producto no es igual al precio máximo");
}else {
    console.log("El precio del producto es igual al precio máximo permitido.");
}


    /* (!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben de tener el mismo tipo y valor 
*/

let numero7 = 41;
let numero8 = "50";

if(numero7 !== numero8){
    console.log("Los valores son diferentes");
}else{
    console.log("Los valores son iguales");
}


let numero5 = 10;
let numero6 = "10";

if  (numero5 !== numero6){
    console.log("Son diferentes.")
}else{
    console.log("Los valores son iguales.")
    }

//Modificando string a number para que sean iguales

if  (numero5 !== Number(numero6)){
    console.log("Son diferentes.")
}else{
    console.log("Los valores son iguales.")
    }

//Comentario de Rey David

// En igualdad: ==, y desigualdad: !=
// En igualdad estricta: ===, y desigualdad estricta: !==
// (Es como sustituir el primer "=" por un "!")

// (>) Mayor que  indica si un valor es mayor que otro.

let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);


//(<) Menor que nos indica si un valor es menor que otro

let edad = 20;
let edadLimite = 30;

console.log(edad < edadLimite);

// (>=) Mayor o igual que  indica si un valor es mayor o igual a otro.

let edad1 = 40;
let  edadNecesaria = 18 ;

console.log( edad >= edadNecesaria);


// (>=) Menor o igual que  indica si un valor es mayor o igual a otro.

let temp1 = 14;
let tempMax = 25;

console.log(temp1 <=tempMax);


/* Operadores lógicos

(&&) AND se utiliza cuando existen dos condiciones que deben cumplirse

*/

let mayorDeEdad = 18;
let tieneIdentificacion = true;

if (mayorDeEdad >= 18 && tieneIdentificacion) {
console.log("Puedes rentar el lugar.")
} 
else {
    console.log("No lo puedes rentar");
}


/*

(!!) OR se utiliza cuando se debe cumplir una condicion u otra

*/


let esPrime = false;
let descuento =true; 

if (esPrime  || descuento) {
    console.log("Califica para descuento");
} else {
        console.log("No califica para descuento");
}

// (!) Not se utiliza para negar el valor de una condición

let esDiaLibre = false;

if (!esDiaLibre) {
    console.log("Se trabaja.");
} else{
        console.log("Descansito.");
}


//Operador de cadena

/*

toLowerCase hace el cambio de un string a minusculas

*/


let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase ();

console.log(cambioMinusculas);

/*

toUpperCase hace el cambio de un string a mayusculas

*/


let mensajeUsuario1 = "Bienvenido a la tierra";
let cambioMayusculas = mensajeUsuario1.toUpperCase ();

console.log(cambioMayusculas);



//trim  quita los espacios

let aviso = "  ch35   Rifa";
let sinEspacios = aviso.toString();

console.log (sinEspacios);



//toString  convierte un tipo de dato Number en String

let numero10 = 31;
let cadena = numero10.toString();

console.log(cadena);


//concat

let nombre = "Pedro";
let apellido = "Roldán";
let nombreCompleto = nombre.concat(" ",apellido)

console.log(nombreCompleto);

/*

Expresiones

Expresión aritmetica

    let operacion = 14 + 25 * 12; Combina la suma con la multiplicación

Expresión de cadena

    let notificacion = "Casi," +"New year"; expresión concatenada

Expresión lógica

    let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparación

Expresión de asignación 

let frasco = chocolates; asigna el valor a la variable


*/











