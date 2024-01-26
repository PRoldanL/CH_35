package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] arss) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos.
		
		
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Perro");		
		animals.add("Gato");
		animals.add("Pajaro");
		animals.add("Cabra");
		animals.add("Caballo");
		
		//Imprimiendo HashSet
		
		System.out.println(animals);
		
		
		//Conocer si un elemento se encuentra dentro del Set: contains();
		System.out.println(animals.contains("Gato"));
		
		//Eliminar un elemento: remove();
		animals.remove("Cabra"); //Eliminación
		System.out.println(animals); //Imprime sin el elemento elimindo
		
		///Agregando elementos en una sola linea
		animals.addAll(Arrays.asList("Perrito", "Gatito", "Osos"));
		System.out.println(animals);
		
		/*
		 	La clase HashSet no va a garantizar que los elementos se muestren segun el orden establecido, ya que busca eficientar la busqueda y recuperación de los elementos.
		 	Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario 
		 		 
		*/
		
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
		
		///Agregando elementos en una sola linea
		animals.addAll(Arrays.asList("Perrito", "Gatito", "Osos"));
		System.out.println(animals);
		
		
	}

}
