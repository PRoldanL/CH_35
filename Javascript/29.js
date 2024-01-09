// //Programación sincrónica

// function two (){
//     console.log("Dos");
// }
// function one (){
//     console.log("Uno");
//     two ();
//     console.log("Tres");
// }
// one();

// console.log("-----------------------------")
// //Programación asincrona. Para poder trabajar de manera asincorna se debe usar la propiedad

// //setTimeout; la cual recibe una función anónima y establece un tiempo (en milisegundos 1000ms = 1 seg) de ejecución para cumplir con la condición de asincronismo.

// const twoAsync = () => {    //Función flecha
//     setTimeout ( () => {
//     console.log("Dos Async");
// }, 5000);
// }

// const oneAsync = () => {
//     setTimeout(function(){
//     console.log("Uno Async");
//     }, 2000);
//     twoAsync ();
//     console.log("Tres Async");
// }
// oneAsync();



//Trabajando con promesas mediante Fetch API


const url ="https://jsonplaceholder.typicode.com/users";

fetch(url)
//Si se cumple la promesa, se traen los datos de la API y se convierten en tipo json para poder mostrarlos en consola.
    .then(response => response.json())//Mostrando en consola todos los usuarios de la API
    .then(response => {
        console.log(response); //Mostrando en consola todos los usuarios con el indice 0 y trayendo unicamente su nombre.
        console.log(response[0].name);
    })
    .catch(error => console.error("Algo salió mal.", error)); //Mensaje de error

// Usando fetch para mostrar en navegador

const botonInfo =document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

//Creando una variable para almacenar la información traida desde la API; la variable debe ser de tipo null

let post = null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () =>{
    fetch("https://jsonplaceholder.typicode.com/users/4")
        .then(response => response.json())
        .then(response => {
            post=response; //Guardando los datos de response en la variable de tipo null, para modificar el o los datos

            //Mandando llamar a la variable desde una función
            mostrarDatos(post);


        })
        .catch(error => console.error("ocurrió un error", error));
});

//Creando una función que permita manipular la variable de tipo null; donde se traera name, Username, email, y phone del user de la API

const mostrarDatos = (post) => {
    //Creando Nodos (elementos) mediante DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Colocandolos en en HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phoner;


//Haciendo que aparezcan en el navegador

    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);



}

// Usando fetch para mostrar en navegador (Mostrar productos)

const botonProduct = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let products =null;

botonProduct.addEventListener("click", () =>{
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            products=response;

            mostrarProductos(products);


        })
        .catch(error => console.error("Un error ha ocurrido", error));
});

//Función para crear, agregar y mostrar elementos desde el DOM

const mostrarProductos = (products) => {
    
    //Mandando llamar title, price, description, category, e image desde la API
products.map((products) => {
    const imagen = document.createElement("Img");
    const titulo= document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Enviando a HTML con innerHTML
    imagen.src = products.image; //image es un recurso pr eso se inserta con . src
    imagen.width = 200;
    titulo.innerHTML = products.title;
    precio.innerHTML = products.price;
    descripcion.innerHTML = products.description;
    categoria.innerHTML = products.category;



//Mostrando en navegador al agregarlos a su padre

tienda.appendChild(imagen);
tienda.appendChild(titulo);
tienda.appendChild(precio);
tienda.appendChild(descripcion);
tienda.appendChild(categoria);
tienda.appendChild(separador);

    })
}





// Código Eveida

// const botonProductos = document.querySelector("#btn-store");
// const tienda = document.querySelector("#store");
// let productos = null;

// botonProductos.addEventListener ("click", () => {
//     fetch("https://fakestoreapi.com/products")
//         .then(response => response.json())
//         .then(response => {
//             productos = response
//             //Productos a definir
//             mostrarProductos(productos);
//         })
//         .catch(error => console.error("¡Cuidado!", error))
// })
// //Función para crear, agreagr y mostrar elementos en el DOM
// const mostrarProductos = (productos) => {
//     //mostrando title, price, description, category
//     productos.map((productos) => {

    
//     const imagen = document.createElement("img");
//     const titulo = document.createElement("h2");
//     const precio = document.createElement("h3");
//     const descripcion = document.createElement("p");
//     const categoria = document.createElement("p");
//     const separador = document.createElement("hr");

//     //Inner HTML
//     imagen.src = productos.image;
//     imagen.width = 200;
//     titulo.innerHTML = productos.title;
//     precio.innerHTML = productos.price;
//     descripcion.innerHTML = productos.description;
//     categoria.innerHTML = document.category;

//     //Mostrarlos en navegador al agregarlos a su padre
//     tienda.appendChild(imagen);
//     tienda.appendChild(titulo);
//     tienda.appendChild(precio);
//     tienda.appendChild(descripcion);
//     tienda.appendChild(categoria);
//     tienda.appendChild(separador);
// })
// }




//Metodo POST utilizando fetch

fetch ("https://jsonplaceholder.typicode.com/posts", {
    //Indicando que es un método de tipo POST
    
    method: "POST",
    
    //Creando el body de un nuevo objeto, siguiendo la misma estructura de llaves de la API existente, ya que deben hacer match (userId, title, body)
    
    body: JSON.stringify({
        userId: 1986,
        title: "¿Sueñan los robots con obejas robot?",
        body: "Author: phillipe K. Dick"
    }),
    //Definiendo headers
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})//fin del fetch

//inicio de las promesas
    .then(response => response.json())
    .then(response => {console.log(response)
})


// Programación asincorna (promise) para simultaneidad


//función flecha => de tipo async-await

//indicando que es una función asincrona con la palabra reservada async antes de los parametros


const getUser = async () => {

//Para cumplir las promesas, no se utiliza .then; se utiliza try.
//Para errores se mantiene el uso de catch.

    try{
        //Delay para ejecución asincrona: se debe crear una nueva promesa que reciba un setTimeout
        await new Promise (resolve => setTimeout(resolve, 3000));
        //Promesa que se ejecuta
        const url = "https://jsonplaceholder.typicode.com/users/4"
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    
    } catch(error){
        console.error("Error indefinido", error);
    }
}

//Invocando la función

getUser();

//LocalStorage

//Nos permite crear, modificar, eliminar o guardar objetos de JavaScript de manera local

//Creando un objeto de js con su estructura de llaves y valores

const user= [{
    id: 1,
    name: "Peter",
    Apellido: "Roldán",
    email: "peter@email.com",
    posicion: "estudiante",
    empresa: "startup",
},
{
    id: 2,
    name: "Peter2",
    Apellido: "Roldán2",
    email: "peter@email.com2",
    posicion: "estudiante2",
    empresa: "startup2",
}
];
//Convirtiendo el objeto creado a notación JSON y almacenandolo en localStorage

localStorage.setItem("usuario", JSON.stringify(user));

//llamando el objeto de localStorage
const users= JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[0].name}, con posición de ${user[0].posicion}, trabaja en un ${user[0].empresa}.`); //Output: 


//sesionStorage

