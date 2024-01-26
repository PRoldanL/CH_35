package org.generation.letras;

public class LetrasMain {

	public static void main(String[] args) {
		
		//Instanciando objetos (Letras y Contador)
		
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto y te mostraré el numero de vocales, consonantes, simbolos y números");
		String palabra = letras.leerEntrada(); // Guardando el texto introducido por el usuario en una variable
		
		//Invocando los métodos que me permiten contar los caracteres
		
		Contador contador = new Contador ();
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " números");

		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalSimbolo = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolo + " simbolos");
	}

}
