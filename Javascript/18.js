// Ejercicios para esta sesion

/* Ejercicio 1

Elabora un programa que determine si una persona tiene edad
suficiente para votar

    Debe recibir como parametro la edad

Consideraciones: utilizar la estructura if-else
*/

// var edad = parseInt(prompt("Ingresa tu edad:"));
// if (edad >= 18) {
//     alert("Puedes votar.");
//     console.log("Puede votar.");
// } else {
//     alert("Lo siento, debes ser mayor de 18 años para poder votar.");
//     console.log("No puede votar.");
// }

/* Ejercicio 2

Desarrolla un programa que evalue si un numero es divisible entre 7 y 8

Debe recibir como parametro un numero, cual sea

    Si se cumple, imprimir verdadero
    Si no, imprimir falso

Consideracion - Utilizar la estructura if-else
Casos de prueba: 56, 7, 8, 0, 224, 73
*/

// var numero = parseInt(prompt("Ingresa un número para saber si es divisible entre 7 y 8."));
// if (numero % 7 === 0 && numero % 8 === 0) {
//     alert("El número es divisible entre 7 y 8.");
//     console.log("Verdadero.");
// } else {
//     alert("Lo siento, el número NO es divisible entre 7 y 8.");
//     console.log("Falso.");
// }


/*Ejercicio 3

Desarrolla un programa que evalue si un numero es divisible
entre 4 o 9

Debe recibir como parametro un numero aleatorio

    Si se cumple, imprimir verdadero
    Si no, imprimir falso

Consideracion - Utilizar la estructura if-else
*/

// var numero = parseInt(prompt("Ingresa un número para saber si es divisible entre 4 o 9."));
// if (numero % 4 === 0 ) {
//     alert("El número es divisible entre 4.");
//     console.log("Verdadero.");
// } else if (numero % 9 === 0) {
//         alert("El número es divisible entre 9.");
//         console.log("Verdadero.");
// }       else 
//         alert("El número No es divisible entre 4 o 9.");
//         console.log("Falso.");


/* Ejercicio 4

Realizar un programa que reciba como parametro una categoria de peliculas

    -accion
    -drama
    -comedia
    -romance
    -suspenso
    -terror

Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula de acuerdo al parametro recibido

Consideraciones: utilizar la estructura switch
*/

// var movie = prompt("Ingresa un género de pelicula.");
// const categoria = movie;

// switch(categoria){
//         case "accion":
//         console.log ("John Wick.");
//         break;
//         case "drama":
//             console.log("Green book."); 
//             break;
//         case "comedia":
//             console.log("Grown up."); 
//             break;
//         case "romance":
//             console.log("Esio trot."); 
//             break;
//         case "suspenso":
//             console.log("Sexto sentido."); 
//             break;
//         case "terror":
//             console.log("Halloween."); 
//             break;
//             default:
//             console.log("Categoría no encontrada.");
//             break;
// }


/** Ejercicio 5

Crear una interfaz de un cajero ATM

Debe recibirse como parametro alguna de las siguientes opciones

1. Retirar dinero
2. Transferencia
3. Deposito
4. Pago de servicios

Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
Utilizar if/else

// */
// var opcionUsuario = parseInt(prompt("Seleccion una opción: 1.- Retirar dinero. 2.- Transferencia. 3.- Depósito. 4.- Pago de servicios."));
// menu (opcionUsuario);

// function menu (opcion) {
//     if (opcion == 1) {
//         console.log("Retiro.");
//     } else if (opcion==2) {
//         console.log("Transferencia.");
//     } else if (opcion==3) {
//         console.log("Depósito.");
//     } else if (opcion==4) {
//         console.log("Pago de servicios.");
//     } else {
//         console.log("Opción no válida.");
//     }
// }

//Opcion propuesta por César integrante de mi equipo

// let operacion = prompt(`Ingresa el número de tu operación 1. Retirar dinero ; 2. Transferencia ; 3. Depósito ; 4. Pago de servicios`);

// if (operacion == 1) {
//     prompt(`Ingresa el monto a retirar`)
//     console.log(`Recoge tu dinero`)
// } else if (operacion == 2) {
//     prompt(`Ingresa la cuenta para transferir`)
//     let monto =  prompt(`Ingresa el monto`)
//     console.log(`Transferencia realizada por ${monto}`)
// }
// if (operacion == 3) {
//     prompt(`Ingresa la cuenta para depositar`)
//     prompt(`Ingresa el monto a depositar`)
//     console.log(`Depósito realizado`)
// }
// if (operacion == 4) {
//     let servicio = prompt(`Ingresa el servicio deseas pagar?`)
//     let pago = prompt(`Ingresa el monto que deseas pagar`)
//     console.log(`Se han abonado ${pago} pesos a tu servicio de ${servicio}`)
// }

/** Ejercicio 6

Escribir en codigo un programa conversor de divisas
Debe recibir como parametro una cantidad en pesos mexicanos y
Segun sea la opcion que se indique, realizar la conversion correspondiente

1. A dolares estadounidenses
2. A euros 
3. A yenes japoneses
4. A libra esterlina
5. A franco suizo

Consideración: estructura switch

*/

let tipoCambio = "Dolares";
let pesos = 1000;
switch (tipoCambio){
    case "dolares" && "Dolares":
        console.log (pesos * 0.058);
        break;
    case "euros" && "Euros":
        console.log (pesos * 0.054);
        break;
    case "yenes" && "Yenes":
        console.log (pesos * 8.41);
        break;
    case "libra esterlina" :
        console.log (pesos * 0.046);
        break;
    case "franco suizo" && "Franco suizo" && "Franco":
        console.log (pesos * 0.051);
        break;
        default :
        console.log ("Sin datos de divisa");
        break;    
}