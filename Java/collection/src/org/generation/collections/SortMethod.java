package org.generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {
	public static void main(String[] args) {
		//El método .sort() permite ordenar los elementos de un ArrayList
		ArrayList <Integer> points = new ArrayList <Integer>();
		ArrayList <String> names = new ArrayList <String>();
		
		points.add(5);
		points.add(4);
		points.add(3);
		points.add(2);
		points.add(1);
		
		System.out.println(points); //No se encuentras ordenados de menos a mayor, solamente como se agregaron en el ArrayList
		
		//Ordenamiento de menor a mayor utilizando sort
		
		Collections.sort(points);
		System.out.println(points);
		
		names.add("Daniel");
		names.add("Rocio");
		names.add("Arturo");
		names.add("angel");
		names.add("fernanda");
		
		System.out.println(names);
		
		Collections.sort(names);
		System.out.println(names); //Toma en cuenta el ordenamiento con base en la tabla ASCII
				

	}

}
