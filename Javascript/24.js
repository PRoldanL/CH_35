// Función que verifica los ingredientes y muestra la receta

var harina = confirm ("¿Se tiene harina?");
var huevo = confirm ("¿Se tiene huevo?");
var sarten = confirm ("¿Se tiene un sartén?");
var leche = confirm ("¿Se tiene leche?");
var mantequilla = confirm ("¿Se tiene mantequilla?");


// Llamando a la función con los valores proporcionados por el usuario
hacerHotcakes(harina, huevo, sarten, leche, mantequilla);

function hacerHotcakes(harina, huevo, sarten, leche, mantequilla) {
    // Verificar si tiene los ingredientes necesarios para hacer hotcakes
    if (harina && huevo && sarten && leche && mantequilla) {
        // Si se tienen todos los ingeredientes, continuar con la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla la harina con los huevos y la leche.");
        console.log("2. Calienta una sartén a fuego medio.");
        console.log("3. Coloca media cucharada de mantequilla en el sartén caliente.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta de unos hotcakes!");

    } else {
        // Si no se tienen todos los ingredientes, mostrar un mensaje
        console.log("Lo siento, no tienes todos los ingredientes necesarios para hacer hotcakes. Primero consiguelos.");
    }
}


// Otro código proporcionado por mi equipo

// Llamar a la función con los valores proporcionados por el usuario

// function verificarIngredientes(huevos, harina, leche, azucar) {
//     if (huevos >= 2 && harina >= 200 && leche >= 250 && azucar >= 50) {
//         return "Tienes suficientes ingredientes para hacer hotcakes.";
//     } else {
//         return "No tienes la cantidad suficiente de ingredientes.";
//     }
// }

// // Ejemplo de uso:
// let cantidadHuevos = 3;
// let cantidadHarina = 300;
// let cantidadLeche = 300;
// let cantidadAzucar = 60;

// let resultado = verificarIngredientes(cantidadHuevos, cantidadHarina, cantidadLeche, cantidadAzucar);
// console.log(resultado);