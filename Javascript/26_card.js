// Para manipular la información de un usuario, se necesita crear un perfil mediante un objeto

const user = {
    username: 'Peter',
    age: 29,
    email: 'correo@gmail.com',
    favfilms: ['Pelicula1', 'Pelicula2', 'Pelicula3', 'Pelicula4'] 
}

// Creando una función que permita iingresar el objeto del perfil en el nodo padre

// const createUser = (user) => {
//     document.getElementById("username").textContent = user.username;
//     document.getElementById("age").textContent = user.age;
//     document.getElementById("email").textContent = user.email;
// Para mostrar los elementos en forma en forma de lista se utiliza un ciclo forEach, recorriendo todo el Array y trayendo cada elemento a la lista 

// const ul = document.getElementById("favfilms");
// user.favfilms.forEach(film =>{
//     const li = document.createElement ("li")
//     li.textcontent = film;
//     ul.appendChild(li);
// });

// Modificando estilos de la ul para quitar viñetas

// ul.style.listStyleType = "none";
// ul.style.padding ="0";
// ul.style.color = "#D9870D";

// }
// /**
//  * Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
//  */

// const user = {
//     username: 'danieldlcm86',
//     age: 37,
//     email: 'daniel@gmail.com',
//     favfilms: ['Interestellar', 'Se7en', 'Mindhunter', 'mean Girls', 'Shrek']
// }

// Crear una función que me permita ingresar el objeto del perfil en el nodo padre
// const createUser = (user) => {
//     document.getElementById("username").textContent = user.username;
//     document.getElementById("age").textContent = user.age;
//     document.getElementById("email").textContent = user.email;
//     /* Mostrando elementos de lista en forma de lista. 
//     Para mostrar el array en forma de lista utilizaremos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista
//     */
//     const ul = document.getElementById("fav-films");
//     user.favfilms.forEach(film => {
//         const li = document.createElement("li");
//         li.textContent = film;
//         ul.appendChild(li);    
//     });

//     Modificando estilos de la ul para quitar viñetas
//     ul.style.listStyleType = "none";
//     ul.style.padding = "0";
//     ul.style.color = "#D9B70D";

//     Mostrando elementos de lista en forma de fila (no nos sirve porque definimos una lista desordenada "ul" y no un párrafo)
//     document.getElementById("fav-films").textContent = user.favfilms;


// Invocando la función
// createUser(user);

// /**Eventos para actualizar el username mediante el input y el botón */

// const inputName = document.getElementById("name");
// const profileBtn = document.getElementById("btn-main");
// const userName = document.getElementById("username");

// profileBtn.addEventListener("click", () => {
//     userName.textContent = inputName.value;
// });


//Crear una función que me permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
  /*   document.getElementById("fav-films").textContent = user.favfilms; */

/**Mostrando elementos de lista en forma de lista. Para mostrar el  array en forma de lista utilizamos un ciclo para recorrer todo el array y traer cada elemento a la lista*/
const ul = document.getElementById("fav-films");
user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
});

//modificamos estilos de la ul para quitar viñetas
ul.style.listStyleType = "none";
ul.style.padding = "0";
ul.style.color = "#D9B70D";

//Mostrando elementos de lista en forma de fila (no nos sirve porque definimos una lista desordenada "ul" y no un párrafo)
//document.getElementById("fav-films").textContent = user.favfilms
}
//Invocamos la función
createUser(user);

/**Eventos para actualizar el username mediante el input y el botón */

const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
});