
console.log("Blucles");


/* 


BUCLES 

Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

-- Operadores de incremento (++) y operadores de decremento (--)
${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.

Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
- El operador ++ se utiliza para aumentar el valor de una variable en uno.
- El operador -- se utiliza para disminuir el valor de una variable en uno.
(i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.

*/

/* 
Cliclo for

El ciclo for se ejecuta y repite hasta que se evalua como false. Crea 3 expresiones opcionales:

sintaxis
    for (expresión inicial; expresion condicional; expresionactualización;) {
    }

1.- Inicialización: Se debe inicializar como una variable que será evaluada en la expresión a comparar.
2.- Condición: Expresión que debe cumplir la variable inicial (true); mientras no se cumpla (false) el bucle termina.
3.-Pasos a realizar: Son los intervalos que cambiaran la variable inicial mientras esta sea true.

*/



// Creando un programa para saber cuantos boletos vendemos para una rifa 


for (let boleto = 1; boleto <= 25; boleto++) {
    console.log(`Boleto # ${boleto}`);
}


//Programa para vender bolos con una variable global (let)

let bolos = 1;

for(bolos; bolos <=20; bolos ++){
console.log(`Bolos vendidos ${bolos}`);
}

//Cuenta regresiva

let cuentaRegresiva = 15;
for(cuentaRegresiva; cuentaRegresiva >=0; cuentaRegresiva--){
    console.log(`Quedan ${cuentaRegresiva} segundos.`);
}

//Recorrer Array con el ciclo for

/* Para esto se debe usar indices del arreglo; desde 0 hasta n, usando la propiedad length*/

const ch35 = ["Rodrigo", "Diego", "Ania", "Rey", "Arturo", "Eunice"];
for (let i = 0; i < ch35.length; i++){
console.log(ch35 [i]);
}

/* Variaciones del ciclo for

-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)

*/


let frutas = ["Manzana", " Naranja ", " Peras", " Uvas verdes "];
for (let fruta of frutas){
    console.log(frutas + "Grupo frutas");
}


//Sumar numeros del 1 al 20

let suma = 0;
for (let i=1; i<=20; i++){
    suma += i;
}
console.log(suma);


//Multiplicación

const mult = 5;
for (let i = 1; i<=10; i++){
    let result =  mult * i;
    console.log(`${mult} x ${i} = ${result}`);
}

//Ciclo While

/* Recorre un bloque de codigo siempre que una condición especifica sea verdadera.
Sirve para realizar tareas repetitivas mientras una condición sea verdad.
*/

let productos = 5;
while (productos > 0) {
    console.log(productos + " productos vendidos.");
    productos--;
}


//Impresión de números.
let num1 = 0;
while (num1 < 10) {
    num1 ++
    console.log("El numero es " + num1);
}

// https://lenguajejs.com/javascript/arrays/que-es/
// https://es.javascript.info/js
// https://dcodingames.com/el-ciclo-while/