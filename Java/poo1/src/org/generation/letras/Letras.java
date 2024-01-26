package org.generation.letras;

import java.util.Scanner;

/*
 
 Crear un programa que le solicite un mensaje al usuario y cuente cuantas vocales, consonantes, números y simbolos posee dicho mensaje
 
 	Letras: métodos para interactuar con el usuario
 	LetrasMain: objetos instanciados
 	Contador: métodos para contar vocales, consonantes, números y simbolos
 
*/

public class Letras {
	//Para que el usuario interactue se define un Scanner
	
	Scanner scanner = new Scanner (System.in);
	
	//Scanner dentro de un método
	
	public String leerEntrada () {
		return scanner.nextLine();
	}
	
	//Métodos para proporcionar contexto al usuario
	
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
		
		
}
	
