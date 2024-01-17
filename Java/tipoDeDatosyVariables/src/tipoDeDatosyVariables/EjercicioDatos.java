package tipoDeDatosyVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("Hola mundo");

		// print imprime en la misma línea, mientras que println hace un salto de línea.

		/*
		 * Comentarios multilinea
		 */

		// Comentarios de una sola linea

		byte edad = 15; // Sirve para representar un número entero 8 bits (entre -128 y 127)

		System.out.println("Edad del participante " + edad);

		// El nombre de la clase debe ser igual al nombre del archivo.java

		short usuariosNuevos = 200;// Sirve para representar un número entero 16 bits (entre -23768 y 32767)

		System.out.println("Usuarios nuevos " + usuariosNuevos);

		int usuariosTotales = 8752;// sirve para representar un número entero 32 bits (-2147483648 al 2147483647)

		System.out.println("Usuarios Totales " + usuariosTotales);

		long usuariosPremium = 9512; // Sirve para representar un número entero con valores mucho mayores

		System.out.println("Usuarios Premium " + usuariosPremium);

		// Tipos de datos con números decimales

		float altura = 1.78f; // Sirve para representar un valor numérico con números decimales cuyo valor es
								// de 23 bits, y puede tener hasta 8 caracteres despues del punto decimal; al
								// finalizar, la notación de debe llevar una "f"

		System.out.println("Mi altura es: " + altura + " metros.");

		double peso = 100.5; // Sirve para representar valores numericos con decimales, cuyo valor es de 64
							// bits y puede tener hasta quince caracteres despues del punto decimal
		
		System.out.println("Mi peso es: " + peso + " kilos.");
		
		
		String costoBoleto = "500";//Es una clase para tener cadenas de texto
		String zonaBoleto = "52";
		System.out.println("Usuario "+costoBoleto);
		System.out.println("Zona a la que pertenece "+zonaBoleto);

		
		
		String nombreUsuario = "Peter"; // Es una clase para obtener una cadena de texto
		
		System.out.println("Usuario: " + nombreUsuario);

		char seccion = 'f'; //Sirve para reopresentar valores con un solo caracter

		System.out.println("Seccion " + seccion);

		boolean clienteFrecuente = true; //Sirve para obtener true or false utilizando condicionales
		
		System.out.println("Es un cliente frecuebte " + clienteFrecuente);
		
		//CONVERSIÓN DE TIPOS DE DATOS
		
		//Casteo a entero
		
		int pesoCambio = (int) peso;
		
		//Casteo a entero
		
		long pesoCambio1 = (long) peso;
		
		System.out.println("double " + peso);
		
		System.out.println("int " + pesoCambio);
		
		System.out.println("long " + pesoCambio1);
		
		
		int zonaCambio = Integer.parseInt(zonaBoleto);
		double costoCambio = Double.parseDouble(costoBoleto);
		System.out.println(zonaCambio);
		System.out.println(costoCambio);
		System.out.println("Zona del usuario segun su boleto " + (costoCambio * zonaCambio));
		
		/*Operadores aritmeticos 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 <  mayor que 
		 >  menor que 
		 <= mayor o igual que 
		 >= menor o igual que */
		
		
		
		//Programa  para un cine
		
		double precioEntrada = 75.5;
		double precioPalomitas = 89.7;
		double precioBebida = 35.5;
		int capacidadTotal = 500;
		
		int personasDentro = 342;
		
		if (personasDentro >= capacidadTotal) {
			System.out.println("Lo lamento, ya no hay cupo");
		} else {
			System.out.println("Quedan " + (capacidadTotal - personasDentro) + " lugares disponibles");
		}
		
		
		double totalEntrada = personasDentro * precioEntrada;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida; 
				
		System.out.println("Total de personas: " + personasDentro);
		System.out.println("Total de entradas: " + totalEntrada);
		System.out.println("Total de palomitas: " + totalPalomitas);
		System.out.println("Total de bebidas: " + totalBebidas);
	}

}