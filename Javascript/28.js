const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");

//Regex: Expresiones regulares. Determinan patrones que se deben cumplir 

const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitando el botón

submitButton.disabled = true;

/*

Evento para input, el cual evalua el patrón de expresión regular y en caso de cumplir con el patrón, se habilitará e botón y podras ser redirigido a la pagina (likea la pagina que falta) "27.html"

    - Se obtiene el valor actual del campo email (input usando e.target.value y se almacena en una variable (text).
    - Se evalúa la REGEX
*/


emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if (emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
})