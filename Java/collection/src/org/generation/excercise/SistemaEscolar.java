package org.generation.excercise;
/*
 package org.generation.excercise;


import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * -- Requerimientos:
 * 		> Utilizar ArrayList para guardar a los estudiantes (ArrayList<String>)
 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (for-each) 
 
/////////////
 
public class SistemaEscolar {

	public static void main(String[] args) {
		
		
		//Inicializar el ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList <String>();
		
		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante; //Inicializando de manera global
		
		do {
			nombreEstudiante = scanner.nextLine(); // Invvocando de manera local
				System.out.println("Ingresa el nombre del estudiante. Escribe Salir para finalizas.");
				scanner.nextLine(); //Invocando de manera local
				estudiantes.add(nombreEstudiante);
				
		} while (!nombreEstudiante.equals("Salir")); //Siempre que NO se escriba "Salir", en el loop se sigue ejecutando
			
		//Mostrar lista de estudiantes (for-each)
		System.out.println("**Lista de alumnos**");
		for (String estudiante : estudiantes) {
			System.out.println(estudiante);
		}
		
		scanner.close();
		
		
		/* Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).
		///////////////
		
		
		 
		
	}
}


////////////////////////////












/*
 *package org.generation.excercises;

/*
 Programa que permite que un usuario agregue nombre y apellidos de un estudiante. posteriormente, muestra la lista de los estudiantes agregados.
 -Requerimeintos:
 	> Usar ArrayList
 	> Scanner para interactuar con el usuario
 	> Loop para permitir que se agreguen varios estudiantes
 	> Opción para salir del loop con la palabra 'salir', if-else, try-catch, !=, switch) son posibles
 	> Mostrar lista de estudianes (for-each)
 	
 

import java.util.ArrayList;
import java.util.Scanner;

public class SistemaEscolar {

	public static void main(String[] args) {
		
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		Scanner scanner = new Scanner(System.in); //Scaner para el usuario
		
		//Loop para permitir agregar un usuarios
		String nombreEstudiante; //inicializado de manera global
		do {
			System.out.println("Ingresa elo nombre del estudiante. Escribe 'Salir' para finalizar");
			nombreEstudiante = scanner.nextLine(); //Invocando de manera local
			estudiantes.add(nombreEstudiante);
			
		} while(!nombreEstudiante.equals("Salir")); //Siempre que No se escriba "Salir", el loop se sigue ejecutando
		
		System.out.println("* Lista de estudiantes *");
		
		for (String estudiante : estudiantes) {
			System.out.println(estudiante);
			
		}
		
				

	}

}

*/




import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class SistemaEscolar {

    public static void main(String[] args) {

        // Inicializar un ArrayList para guardar a los estudiantes
        ArrayList<String> estudiantes = new ArrayList<String>();

        Scanner scanner = new Scanner(System.in); // Scanner para el usuario

        String nombreEstudiante; // Inicializado de manera global
        do {
            System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar o 'Eliminar' para borrar un estudiante:");
            nombreEstudiante = scanner.nextLine().trim(); // Invocando de manera local

            if (nombreEstudiante.equalsIgnoreCase("Salir")) {
                break; // Salir del bucle si se ingresa "Salir"
            } else if (nombreEstudiante.equalsIgnoreCase("Eliminar")) {
                eliminarEstudiante(estudiantes, scanner);
            } else {
                estudiantes.add(nombreEstudiante);
            }

        } while (true); // Bucle infinito, se romperá al ingresar "Salir"

        System.out.println("* Lista de estudiantes *");

        for (String estudiante : estudiantes) {
            System.out.println(estudiante);
        }

    }

    private static void eliminarEstudiante(ArrayList<String> estudiantes, Scanner scanner) {
        System.out.println("Ingresa el nombre del estudiante que deseas eliminar:");
        String estudianteAEliminar = scanner.nextLine().trim();

        Iterator<String> iterator = estudiantes.iterator();
        while (iterator.hasNext()) {
            String estudiante = iterator.next();
            if (estudiante.equalsIgnoreCase(estudianteAEliminar)) {
                iterator.remove();
                System.out.println("Estudiante eliminado con éxito.");
                return;
            }
        }

        System.out.println("Estudiante no encontrado en la lista.");
    }
}






























