//Botón mostrar ocultar

const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");
//Agregando estilos al container para visibilidad
container.style.visibility = "visible";

//Manejando eventos para ocultar el container desde el botón 

button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
});

// https://developer.mozilla.org/es/docs/Web/CSS/visibility
// https://es.javascript.info/mouse-events-basics
// https://platzi.com/tutoriales/1099-fundamentos-javascript-2017/2562-eventos-del-mouse-en-javascript/
// https://naviscode.com/blog/eventos-de-teclado-en-javascript