
/* Array 

Colección de elementos agrupados en una misma variable, cada uno de ellos ubicado por la posición que ocupa el Array.
Se utilizan para almacenar y organizar datos de manera eficiente.
*/

// Creando un Array

const numero = [1, 2, 3, 4, 5];

const comida = ["tacos", "pizza", "tortas", "tamalitos"];  // Array de cadena de texto
console.log(numero);

//Array mixto 

const mixto =[
    "pluma",
    8,
    true,

    {nombre: "Peter"}
]
console.log (mixto);

//Array
const lista= [];
console.log(lista);
//Agregando elementos a un Array vacio

lista[0] = "Leche";
lista[1] = "Carne de pollo";
lista[2] = "Espinaca";
lista[3] = "Huevo";
console.log(lista);


// Otra manera de crear Array

const frutas = new Array ("Manzana", "Naranja", "Peras", "Mandarina", "Uvas verdes");

//Esta sintaxis se puede emplear en Arrays ya que son objetos; es una manera de mandar a llamar un nuevo objeto de tipo Array


console.log(frutas);


//Longitud de un Array

console.log(frutas.length);


//Acceso a los elementos de un Array, acorde a su indice.

console.log(frutas[3]);   //Mandarina
console.log(frutas[5]);  //Undefined

//Modificando un elemento de Array por el indice

const cremeria = ["Jamon", "Salchicha", "Queso", "yogurt"];
console.log(cremeria);
cremeria[2] = "Quesillo";
cremeria[4] = "Danonino";
console.log(cremeria);

//Arreglo de arreglos o multidimensional 

console.log("Arreglo de arreglos");

//Estados: Edomex, GDJ,Yucatan, Sonora, Oaxaca, CDMX.

//Platillos: Guajolocombo, torta ahogada, Panuchos, Dogos, tlayuda, Tacos.

const estados = ["Edomex", "GDJ", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "torta ahogada", "Panuchos", "Dogos", "tlayuda", "Tacos"];

const menu = [estados, platillos];

console.log (menu[0][2]);


//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.


console.log(`En ${menu [0][3]} se come en ${menu [1][0]}`);



// Metodos de Array

// Metodo de cola (queue). Estos metodos implican agregara elementos al final del Array y eliminar elementos al inicio, siguiendo el principio "FIFO" (First-In-First-Out)

/* 
    push
    shift
    undhift
*/


// Metodo stack. Este metodo implica agregar elementos al final del Array y eliminar elementos al final del Array siguiendo el principio LIfO (Last In Firt Out)


// El último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O), ese es LIFO

/* 
    push
    pop
*/


console.log("Metodos de Array");

const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//pop () Elimina el ultimo elemento del Array
let popch35 = ch35.pop();
console.log(popch35);   //Devuelve el dato eliminado
console.log(ch35);     //Elimina el dato dela lista 

//push () agrega un elemento al final del Array

let pushch35 = ch35.push ("Mon");
console.log(ch35);

//shift () quita el primer elemento del Array

let shiftch35 = ch35.shift();
console.log(ch35);

//unshift () agrega un elemento al principio del Array 

let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);

// reverse () Cambia el sentido del ordenamiento en el Array

let reversech35 = ch35.reverse();
console.log(ch35);


//Adicionales no enseñados.

/*
    sort
    forEach
    slice
    splice
    indexOf
*/