console.log("Hola mundo.");


/*Control de flujo y estructura de controlcontrol

Las estructruas de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para ecribir y depurar código podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
tanto dinamico como adaptable
- Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo

- Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
especificos en indicar qe instrucciones ejecutar y en que orden
- Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
en caso de que no se necesite
- Facilitar tanto la escritura de codigo como la claridad de este

Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
- Estructura if-else
- Estructura switch
- Estructuras de bucles (for, do, do while)


Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista


Declaración de sentencia if=else
Palabra reservada if: Para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expresión logica (true or false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true),
Despues de la llave{} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar más expresiones dentro de un () simplemente se colocaron otras {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la conción no se cumpla (false).

*/


let n = 15;
if (n > 20){
    console.log(true);
} else{
    console.log(false);
}

/* if-else-if

Se trata de la misma sentencia if-else declarada anteriormente
Lo que vamos a hacer diferente es, en este caso, anidar varias veces
esta misma sentencia, lo que nos permitira tomar decisiones
mas complejas

Usaremos la contatenación.
Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.

Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
en codigo poco legible y confuso

*/

//if anidados

let edad = 17;

if (edad < 18) {
    console.log("Menor de edad.");
} else if (edad >= 18 && edad < 65) {
    console.log("Edad adecuada.");
} else {
    console.log("Edad avanzada");
}

/* Sentencia Switch 

la sentencia Switch es otro tipo de estructura de control de flujo
difiere en comportamiento con if-else ya que no se basa en una bifurcación sino en un seccionamiento en multiples casos (case) los cuales dependiendo de la expresión será la secuencia que se ejecutará dentro de la declaración

* Declaracion:
* se empieza por colocalr la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible.



*/

let dia = "Martes";
switch(dia){
        case "Lunes":
        console.log ("Primer día de la semana.");
        break;
        case "Martes":
            console.log("Segundo día de la semana."); 
            break;
        case "Miercoles":
            console.log("Tercer día de la semana."); 
            break;
        case "Jueves":
            console.log("Cuarto día de la semana."); 
            break;
        case "Viernes":
            console.log("Quinto día de la semana."); 
            break;
        case "Sabado":
            console.log("Sexto día de la semana."); 
            break;
        case "Domingo":
            console.log("Fin de la semana."); 
            break;
            default:
            console.log("Dia desconocido.");
            break;
}

/* Operador ternario

Expresión condicional if-else más simple y legible; principalmente se usa para simplificar condiciones de una sola expresión. Tambien puede anidar sentencias  if-else-if, sin embargo no se recomienda ya que el código se puede volver ilegible.
- Su declaración es la siguiente:
Palabra reservada var, let o const, Se le asigna un nombre como sei se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis  () después hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no ) la expresión.
Para separar el resultado true de false debemos agregar un caracter de :, del lado izquiero se coloca la sentencia a ejecutar.
Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
*/


// Ejemplo de operador ternario

let verificacion = n > 14 ? "Sí, es mayor" : "No, es menor"
console.log(verificacion);

/*
¿Cuando se debe usar if-else o switch?

if-else se utiliza cuando se necesitan tomar decisiones bajo condiciones más flexibles.
switch se utiliza cuando se tiene un conjunto fijo de valores para comparar una expresión.

*/
