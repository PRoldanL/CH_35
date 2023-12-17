// # Functions in JavaScript
// Repo containing excercises to practice functions in JS.
// ## Exercises
// **1. Convert Minutes into Seconds.**
// Write a function that takes an integer minutes and converts it to seconds.
// *Examples*
//     convert(5) ➞ 300
//     convert(3) ➞ 180
//     convert(2) ➞ 120

// Función para convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60;
}
// Ejemplo de uso
    var minutos = 5;
    var segundos = minutosASegundos(minutos);
    console.log(minutos + " minutos es igual a " + segundos + " segundos.");

// **2. Return the Next Number from the Integer Passed.**
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// *Examples*
//     addition(0) ➞ 1
//     addition(9) ➞ 10
//     addition(-3) ➞ -2
function incremento(numero) {
    return numero + 1;
}
// Ejemplo de uso
    var numero = 0;
    var incremento = numero + 1;
    console.log(numero + " más 1 " + "es igual a " + incremento + ".");

// **3. Area of a Triangle.**

// Write a function that takes the base and height of a triangle and return its area.

// *Examples*

//     triArea(3, 2) ➞ 3
//     triArea(7, 4) ➞ 14
//     triArea(10, 10) ➞ 50

function areaTria(area) {
    return (base * altura)/2;
}
// Ejemplo de uso
    var base = 3;
    var altura = 2;
    var area = (base*altura)/2
    console.log("El área de un trangulo de base 3 y altura 2 es igual a " + area + ".");



// **4. Convert Age to Days.**

// Create a function that takes the age in years and returns the age in days.

// *Examples*

//     calcAge(65) ➞ 23725
//     calcAge(0) ➞ 0
//     calcAge(20) ➞ 7300

function diasVividos(dv) {
    return años * 365;
}
// Ejemplo de uso
    var años = 65;
    var dv = años*365;
    console.log("Los días que ha vivido una persona de 65 años de edad son: " + dv + ".");


// **5. Power Calculator.**

// Create a function that takes voltage and current and returns the calculated power.

// *Examples*

//     circuitPower(230, 10) ➞ 2300
//     circuitPower(110, 3) ➞ 330
//     circuitPower(480, 20) ➞ 9600


function power(P) {
    return (V * I);
}
// Ejemplo de uso
    var V = 230;
    var I = 10;
    var P = (V *I)
    console.log("La potencia de un circuito de Voltaje igual a 230 volts y corriente igual a 10 Amperes es igual a " + P + " watts.");


// **6. Return Something to Me!.**

// Write a function that returns the string "something" joined with a space " " and the given argument a.

// *Examples*

//     giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//     giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//     giveMeSomething("something") ➞ "something something"

//Función retorno de "algo" en una oración aporte de Braulio
function algo(frase){
    return "Algo" + frase;
}
  //Ejemplo
    var frase = " ocurrió aquel día."
    var frase2 = algo(frase);
    console.log("La frase es: " + frase2);



// **7. Sum of Polygon Angles.**

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// *Examples*

//     sumPolygon(3) ➞ 180
//     sumPolygon(4) ➞ 360
//     sumPolygon(6) ➞ 720

function sumPoli(n) {

    if (n < 3 || isNaN(n)) {
    return "Valor invalido introduzca un numero mayor o igual a 3.";
    }
    const sum = (n - 2) * 180;
    return sum;
}
    console.log(sumPoli(3)); 
    console.log(sumPoli(4)); 
    console.log(sumPoli(6)); 


// **8. Convert Hours and Minutes into Seconds.**

// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// *Examples*

//     convert(1, 3) ➞ 3780
//     convert(2, 0) ➞ 7200
//     convert(0, 0) ➞ 0


function conversion(hr, min) {
    const seg = (hr * 3600) + (min * 60);
    return seg;
}
    console.log(conversion(1, 3)); 
    console.log(conversion(2, 0)); 
    console.log(conversion(0, 0)); 