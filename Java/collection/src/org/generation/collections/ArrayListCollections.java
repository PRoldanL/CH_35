package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {
	public static void main (String[] args) {
		//*********************Arrrays *************************//
		
		String [] names = {"name 1", "name 1", "name 2", "name 3", "name 4", "name 5", "name 6"};
		
		//Imprimiendo Arrays
		
		System.out.println(Arrays.toString(names));
		
		int[] age = {12, 3, 15, 19, 20, 30};
		System.out.println(Arrays.toString(age));
		
		//Accediendo a cada elemento del Array
		
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		
		int edad1 = age[2];
		System.out.println("La edad de " +name1 + " es de " + edad1+ " años"); //La edad de name 1 es de 15 años
		
		
		//Obteniendo la longitus del Array
		
		int longitudNames = names.length;
		System.out.println("El Array names tiene " + longitudNames + " elementos");
		
		//Obteniendo el ultimo elemento del Array
		//String ultimoElemento = names[longitudNames - 1]; //La longitud ya viene en la variable "longitudNames"
		
		String ultimoElemento = names[names.length - 1]; //La longitud No viene en una variable
		System.out.println("El ultimo elemento del Array es " + ultimoElemento);
		
		
		//Mostrando cada elemento utilizando forEach
		
		for (String name : names){
			System.out.println(name);
		}
		
		//***************ArrayList********************//
		//ArrayList es un array que puede cambiar de tamaño. Es la clase de Java que representa la estructura de datos de Arrays. Permite elementos duplicados y recibe varios metodos para su manipulación.
		
		ArrayList<String> films = new ArrayList<String>();
			ArrayList<Integer> matricula = new ArrayList<>(); //Wrapper class
			ArrayList <Character> character = new ArrayList <>();
			
			//Agregando elementos
			
			films.add("Movie 1");
			films.add("Movie 2");
			films.add("Movie 3");
			films.add("Movie 4");
			films.add("Movie 5");
			
		 
			System.out.println(films);
		
		
			//Obtener un elemento: name.get(index);
			String film1 =films.get(0);
			System.out.println ("La primera pelicula es " + film1);
			
			//Modificando un elemento: name.set(index,newValue)
			String film3 = films.set(3, "Movie added");
			String film3Get = films.get(3);
			System.out.println(film3Get);
	
			
			//Conociendo el tamaño del ArrayList: name.xise();
			
			int sizeFilms =films.size();
			System.out.println("El tamaño del ArrayList film es de " + sizeFilms + " elementos");
			
			//Agregando un elemento al Array
			
			films.add("Movie *7*");
			System.out.println(films);
			
			//Eliminando un elemento del Array: name.remove(index);
			films.remove(5);
			System.out.println(films);
			
			//Mostrando elementos del ArrayList en forma de lista
			
			System.out.println("**** Films en lista ****");
			for (String film : films) {
				System.out.println(film);
			}
			
			matricula.add(12345);
			//character.add("A");
			
			
			
	}
}
