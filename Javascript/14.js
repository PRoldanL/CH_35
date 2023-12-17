// let huevos = "2 ";
// let leche = "1.5 tazas ";
// let mantequilla = "2 cucharadas ";
// let harina = "2 tazas ";
// let nutella = "Mucha ";

// let funtionNumber = console.log(typeof Number(huevos));
// console.log(typeof(huevos));
// metodoParseInt = console.log(typeof parseInt(leche));
// metodoParseFloat = console.log(typeof parseFloat(mantequilla));

// let titulo = "Procedimiento:<br><br>";
// let paso1 = "1.- Licúa los ingredientes de la pasta.<br><br>";
// let paso2 = "2.- Vierte en un tazón e incorpora la manzana y la canela. Mezcla perfectamente.<br><br> ";
// let paso3 = "3.- Calienta un poco de mantequilla en un sartén antiadherente y vierte una cucharada grande de la mezcla formando un círculo.<br><br> ";
// let paso4 = "4.- Deja cocer hasta que se llene de burbujas y voltea.<br><br>";
// let paso5 = "5.- Cocina 1 minuto más o hasta que la pasta esté cocida. Retira.<br><br>";
// let paso6 = "6.- Coloca de 2 a 3 hot cakes sobre un platón, úntales mantequilla y viérteles miel al gusto.<br><br>";
// let tip = " Tip: Si quieres un sabor diferente sustituye la manzana por 6 zarzamoras o por 2 cucharadas de cajeta y sigue el mismo procedimiento.<br><br>";

// procedimiento = titulo+paso1+paso2+paso3+paso4+paso5+paso6+tip;

// document.write(procedimiento);

// console.log(procedimiento);

/* Tipos de datos

> - String (Cadena de texto)
> - Number (numéricos)
> - Booleans (booleanos: true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (objetos)
> - Objects (Array)
*/

/*console.log(); Permite visualisar en consola del navegador el codigo de js.
console.warm(); Muestra un mensaje de advertencia.
console.error(); Muestra un mensaje de erros.
console.table();
*/

let firstName;                     // con ; se inicializa la variable 
firstName = "Daniel";
let lastName = "Maldonado";       // con =  asignas el valor a la variable 

console.log(firstName + " " + lastName);   // Una manera de concatenar
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);


/* ECMAScript 6 (ES6). Interpolación de cadenas

> - backtics ``
> - Las variables se invocan de la forma ${variable}
> - Texto para string
*/

let age = 37;
console.log (`Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años`); // Es necesario utilizar backtics (` `) en console.log, si es que se llaman las variables como ${variable}; recordando usar camelCase.


//console.warn();

console.warn("Precaución, no es buena praxis dejar sin punto y coma (;)");
console.error("Status 404: Failed");

/* Array. Traducido como matriz o arreglo; es un tipo de dato que pertenece a js, en el cual se almacena una colección de elementos de manera ordenada.
Los arrays se pueden manipular mediante métodos específicos.
Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.*/

let arreglo1 =[]; //Aray vacío
console.log(`Array vacío ${arreglo1}`);
// Los elementos de un array se separan por comas (,)
let cars = ["Volkswagwn", "BMW", "Mazdaa", "KIA"]; //Array de String 
console.log(cars);
// Longitud e indice son diferentes. La longitud (length) es el numero de elemntos y el indice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));
let salariesMx = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMx.length); // .length imprime la longitud del Array: Output: 12. 
console.log(salariesMx);

/*
Ojectos: Son tipos de datos en js, con una estructura definida; nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es: 
const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: 29,
    country: "México"
    }

console.log(employee);

//Mostrando un array como tabla

console.table(cars);

//Mostrando un objeto como tabla
console.table(employee);
