package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {

		/*
		 * && operador and devuelve true si ambas expresiones o condiciones son
		 * verdaderas
		 * 
		 * || operador or devuelve true si almenos una de las dos condiciones se cumple
		 * ! operador not si la expresion booleana es flase devuelve true y viceversa
		 * 
		 */

		// && and

		int anios = 5;

		boolean esInfante = true;
		boolean costoInfante = anios <= 12 && esInfante;

		System.out.println("¿Es menor de edad? " + costoInfante);

		String cliente = "Cliente123";
		String credenciales = "fertakisfuego123";

		boolean credencialCorrecta = cliente.equals("Cliente123")
				&& credenciales.equals("fertakisfuego123");

		System.out.println("Las credenciales son validas " + credencialCorrecta);
		
		
		// || or

		
	    double costoPasaje = 380.50;
        int edad = 58;
        boolean credenInapam = false;

        boolean descuentoAdultoMayor = edad >= 60 || credenInapam;

        System.out.println("Tiene descuento? " + (descuentoAdultoMayor ? "Sí" : "No"));

        // ! not
        boolean asientosDisponibles = true;
        boolean libres = true;
        boolean asientosConDescuento = !libres;

        System.out.println("¿Tenemos asientos con descuento? " + (asientosConDescuento ? "Sí" : "No"));
    
		
		
		// Programa ejercicio
		
		
		
		
		
		
		
	}

}
 