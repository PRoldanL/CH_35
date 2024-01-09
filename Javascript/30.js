
// Paradigmas de programación.

/*

Programación imperativa: Se basa en instrucciones detalladas, ejecutando un flujo o secuencia determinada.

Programación basada en eventos: Se basa en la gestión y respuesta de eventos

Programación declarativa: Explica lo que queremos obtener, 

Programación Orientada a Objetos POO: toma cierta información o estructura del mundo real (Objetos) para poder explicar ciertas cosas , como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).


*/


//Clases: plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de ete tipo de objeto

class persona{

    nombre = "";
    apellido = "";
    edad = "";
    email = "";
    telefono = "";

//Objetos

//Para inicializar un objeto es necesario definir un constructor que tomara los atributos; el constructor es una función especial, cuya finalidad es la de construir o instanciar objetos 

//clases=molde objeto = gomita
//constructor = chefsito
//atributos = inredientes 
//metodos = comportamiento

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this. edad = edad;
    this.email = email;
    this. telefono = telefono;


}

comer () {
    console.log("Bon apetit");

} //metodo comer

bailar (){
    console.log("Dale hasta el suelo");

}//metodo bailar

mostrarInfo (){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("E-mail: ", this.email);
    console.log("Telefono: ", this.telefono);

}
}

let usuario1 = new persona ("Fernanda", "Ramos", "31", "fer@gmail.com", "5574123698");
let usuario2 = new persona ("Maara", "Lomelí", "39", "maaara@gmail.com", "5574123693");
let usuario3 = new persona ("Daniel", "Maldonado", "37", "dani@gmail.com", "5574123692");
let usuario4 = new persona ("Marianaa", "Valladolid", "28", "mar@gmail.com", "5574123691");
let usuario5 = new persona ("Gabriela", "Cortes", "26", "gaby@gmail.com", "5574123690");

console.log(usuario1); //Imprimir objeto completo
console.log(usuario1.email); // Imprimir un atributo en especifico
console.log(usuario2.email, usuario3.email, usuario5.email, usuario5.email);

usuario4.comer();//Invocando elmetodo

usuario1.mostrarInfo();

console.log(usuario3.telefono, usuario5.apellido);

usuario4.comer(); //Invocando el método
usuario2.mostrarInfo(); //Invocando el método
usuario1.mostrarInfo();
console.log(usuario5.email);

//Pilares de la programación orientada a objetos
/* 
>- Herencia
>- Poliformismo 
>- Encapsulamiento
>- Abstracción */

//Herencia nos permite heredar clases inferiores para pooder optimizar el programa

class arrendador extends persona { //Subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar){
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

mostrarInfo() {
    console.log("Capacidad", this.capacidad);
    console.log("Costo", this.costo);
    console.log("Nombre del lugar", this.nombreLugar);
    }

}

let arrendador1 = new arrendador("Rocio", "Hernández", 29, "rocio@gmail.com", "5511223344", 100, 50000, "El rocio");

console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo();




//Otro ejemplo

// class Animal {
//   sonido() {
//     console.log("Hace un sonido genérico");
//   }
// }

// class Perro extends Animal {
//   sonido() {
//     console.log("Guau guau");
//   }
// }

// class Gato extends Animal {
//   sonido() {
//     console.log("Miau");
//   }
// }

// const perro = new Perro();
// const gato = new Gato();

// perro.sonido();
// gato.sonido();



//Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulados de la misma forma.


class producto {

  marca = "";
  precio = 0;

  constructor (marca, precio) {
    this.marca = marca;
    this.precio = precio;
    } 
    
  mostrarDescripcion () {
    console.log("Marca");
    console.log("Precio");

  }

}

let producto1 = new producto ("Cerave", 85);


//Encapsulamiento Ocultar la implementación de un objeto y solo mostrar los datos necesarios 


class Usuario{
  #contraseña;

  constructor (userName, correo, contraseña){
    this.userName = userName;
    this.correo = correo;
    this.#contraseña = contraseña;
  }



verificarContraseña(contraseña) {
  return this.#contraseña === contraseña;

  }

}



//Abstracción: no es más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, metodos, constructores y objetos.

//Los objetos tipo JSON en un formato de intercambio de datos ligero, accesible, estructurado, manipulable con el DOM y que brinde mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch.


let objetoJson = {
  "nombre": "Juanin",
  "apellido": "Juan Harry",
  "edad": 31,
  "email": "juanin@gnail.com",
  "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
  nombre: "Juanin",
  apellido: "Juan Harry",
  edad: 31,
  email: "juanin@gnail.com",
  telefono: "5574980693",

}


console.log(objetoLiteral);


//Principios Solid


/*

1.- Principio de responsabilidad única (Single Respponsability Principle SRP)

Una clase de tener asignada una tarea o responsabilidad especifica y esta no deberia cambiar 

2.- Principio abierto/cerrado (open/closed principle OCP)

Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en si misma

3.- Principio de sustitución de Liskov (Liskov Sustitution Principle LSP)

Una clase hijo puede sustituir objetos de una clase padre

4.- principio de segregación de interfaces (interface Segregation Principle ISP)

Delimita  los metodos necesarios y deja fuera los innecesarios.

5.- principio de inversión de dependencias (Dependency Inversión Principle DIP)

*/




//Realizar un prograa que cosnte de una clase llamada alumno que tenga como atributo nombre y calificación. Definir los metodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no.

// Atributos: Nombre, Calificación

//Metodos: ImprimirCalificacion, evaluacion


// la calificación aprobatoria es de 6; if para evaluar la calificación.



class alumno{
  nombre = "";
  calificación = 0;

  constructor (nombre, calificacion){
    this.nombre = nombre;
    this. calificacion = calificacion;
    
  }

  imprimeCal(){
    console.log(`Nombre: ${this.nombre} Calificación: ${this.calificacion}`);
  }

    evaluacion (){
if (this.calificacion >= 6){
    console.log(`${this.nombre} aprobaste crack.`);
} else {
    console.log(`${this.nombre} reprobaste... sonso.`);
    } 

  }

}

const alumno1 = new alumno("Juan", 6);
alumno1.imprimeCal();
alumno1.evaluacion();

const alumno2 = new alumno("José", 5.9);
alumno2.imprimeCal();
alumno2.evaluacion();


















// class arrendadorGuadalajara extends arrendador {
// sub clase nieto
// }



//Código Fer

// /* paradigmas de porgramacion

// Programacion imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada


// Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

// Programacion declarativa: Explicar lo que queremos obtener.


// Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

// */

// //Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de onjeto y crear instancias de este tipo de objeto.

// class persona{ 

//     nombre = "";
//     apellido = "";
//     edad = 0;
//     email = "";
//     telefono = "";

// //objetos
// //El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
// //para inicializar un objeto es necesario definir un constructor que tomara a los atributos 
// // clases= molde Objeto = gomita constructor= chefsitx atributos= ingredientes metodos=comportamientos 

// constructor (nombre, apellido, edad, email, telefono){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.email = email;
//     this.telefono = telefono;
// }

// comer(){
//     console.log("Bon apetit");
// }//metodo comer

// bailar (){
//     console.log("Dale hasta el suelo");
// }//metodo bailar 

// mostrarInfo(){
//     console.log("Nombre: ");
//     console.log("Apellido: ");
//     console.log("Edad: ");
//     console.log("Email: ");
//     console.log("Telefono: ");
// }
// }

