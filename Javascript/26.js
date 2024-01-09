// /*

// Manipulación del DOM.

// - Leer y traes nodos del "árbol" del DOM.

//     Se utiliza la propiedad: document.getElementById para llama elementos por Id)
//     Se utiliza la propiedad: document.getElementsByClassName para llama elementos por Calss)
//     Se utiliza la propiedad: document.getElementsByTagName para llama elementos por etiquetas)

// */

// // getElementById
// const titulo = document.getElementById("title1");
// console.log(titulo);
// console.log(titulo.innerText);   // Traer String (texto que vive en mi id)

// // getElementsByClassName
// const titulos = document.getElementsByClassName("title");
// console.log(titulos);
// console.log(titulos.length);  // Devuelve la longitud de elementos de la clase
// console.log(typeof titulos);  // Muestra que es un object porque es una colección de arrays


// // getElementsByTagName
// const tituloH3 = document.getElementsByTagName("h3");
// console.log(tituloH3);
// console.log(tituloH3[0].innerText);


// /* Metodos para llamar elementos mediante selectores de CSS
// Se usa para procesos más especificos y la sintaxis querySelector

//     document.querySelector ("Selector"); //#, ., <>
//     document.querySelectorAll (). Selecciona los elementos que se especifiquen.

// Siempre van a traer el primer elemento con el selector indicado

// */

// //querySelector

// const query = documnent.querySelector ("#title4");
// console.log(query.innerText);

// const queryCalss = documnent.querySelector (".title");
// console.log(queryClass);

// //querySelectorAll

// const queryCalssAll = documnent.querySelectorAll (".title");
// console.log(queryClassAll);


// //Manipular elementos del DOM 8styles) con js

// titulo.style.textAlign = "center";
// titulo.style.color = "#5058F2";


// //Manipular el texto de un elemento 
// const titulo2 = document.querySelector ("#title2");
// titulo2.innerText = "Sesión de manipulación del DOM CH35";
// titulo2.style.color = "F23D3D";



// /*

// Metodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "Crear el nodo y agregar el nodo".

// crando el nodo
// document.createElement("Element")  Crea elementos a partir de etiquetas.
// document.createTextNode("text")  Crea el texto dentro de las etiquetas.

// */

// const nodo1 = document.createElement("h4");
// const imgNodo = document.createElement("img");



// /*

// Agregando nodos

//     parentElement.appendChild(const);
//     parentElement.append(const);
//     parentElement.insertBefore(const);
//     parentElement.insertAdjacentElement(const);

// Utilizando appendChild

// */

// // obteniendo el elemento padre por tag, class

// const parentElement = document.getElementById ("dif");

// //Creando texto que vivirá dentro del nodo1

// const textNodo1 = document.createTextNode ("Imagen agregada desde el DOM");

// //Inserto el texto en el nodo1

// nodo1.appendChild(textNodo1);

// //Inserta nodo1 en el elemento 

// parentElement.appendChiled(nodo1);




/*  CREAR Y AGREGAR EN EL DOM

Metodos para crear y agregar elementos en el DOM. Este proceso se divide en: 
-----> Crear nodos
*A partir de etiquetas
document.createElement("element"): Crean elementos a partir de etiquetas.
*Dentro de las etiquetas
document.createTextNode ("text"): Crea texto dentro de las etiquetas.
-----> Agregar nodos
*appendChild con un elemento padre que será la etiqueta html donde vivirá mi nodo.
Para agregar nodos, mandamos a llamar al elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado. 

parentElement.appendChild(const);
parentElement.append(const);
parentElement.insertBefore(const);
parentElement.insertAdjecentElement(const);

Usamos mayormente el appendChild
*/

/Creando nodos/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/Agregando nodos/

// Obtengo elemento padre por tag, class o id
const parentElement = document.getElementById("dif");

//Crear texto que vivirá en el nodo 1
const textoNodo1 = document.createTextNode ("Imagen agregada desde el DOM");

//Inserto el texto en el nodo 1
nodo1.appendChild(textoNodo1);

// Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla',sans-serif";
parentElement.style.color = "#FF5FA2";

/Agregando imagen/
//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);

//Accedo a las propiedades de la imagen
imgNodo.src = "../images/js-dom.jpg";
imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "360";


/Otra forma de leer y modificar nodos/
/*
document.outerHTML (leer)
node.innerHTML (Escribir sobre el nodo)
*/ 

const elementoOuter = titulo2.outerHTML;
console.log(elementoOuter);
titulo2.innerHTML = "Manipulacion del DOM CH35";