package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {

	public static void main(String[] args) {
		
		//Es posible iterar sobre una colección de tres maneras diferentes:
			
			//1. Iteración mediate ciclo for-each
		 	System.out.println("****for-each****");
			List <String> nombres = new ArrayList<String>();
			
			nombres.addAll(Arrays.asList("Nombre 1", "Nombre 2", "Nombre 3", "Nombre 4", "Nombre 5"));
			
			for (String nombre :  nombres) {
				System.out.println(nombre);
			}
		
			
			//2. Iteración mediante iterator
			System.out.println("****Iterator****");
			List <String> apellidos = new ArrayList<String>();
			
			apellidos.addAll(Arrays.asList("Apellido 1", "Apellido 2", "Apellido 3", 
					"Apellido 4", 	"Apellido 5"));
		
			//Utilizar un nuevo iterador dandole el método . iterator() a el ArrayList
			
			Iterator<String> iterador = apellidos.iterator();
			
			//Utilizando while, devuelve verdadero si la iteración tiene más elementos, si no, se termina el ciclo
			
			while (iterador.hasNext()) {
				String elemento = iterador.next();
				System.out.println(elemento);
			}			
			
			//3. Mediante forEach que toma una expresión Java Lambda como parámetro.
			System.out.println("****Java Lambda****");
			List <String> animales = new ArrayList<String>();
			
			animales.addAll(Arrays.asList("Animal 1", "Animal 2", "Animal 3", 
					"Animal 4", 	"Animal 5"));
		
			animales.forEach((animal)->{
				System.out.println(animal);
			});
			
		
	}

}
