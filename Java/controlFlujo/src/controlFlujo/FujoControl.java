package controlFlujo;
import java.util.Scanner;

public class FujoControl {

	public static void main(String[] args) {// debe coincidir la clase con el nombre del documento/proyecto

		//Recuerda que para que algo se ejecute, siepre debe de ir en el método principla
		
		//Primero se dedine una variable de tipo String  donde se almacenará un dato
		
	/* Ejercicio 1
		
		
		String viaje = "16-01-2024"; //Se deja el  null y despues se agregará la fecha
		//Variable declarada e iniciada, en null, con el proposito de tener un "espacio" de memoria ya asignado, para posteriormente remplazarlo cun un nuevo dato o valor.
		
		//Para validar si podemos viajar en cierta fecha definimos:
		
		if (viaje != null) { //Variable vacia
			System.out.println("No hay disponibilidad en la fecha seleccionada.");
			}else{
				
				System.out.println("Hay disponibilidad en la fecha seleccionada.");
			}	
		
	*/
	
	//Ejercicio 2
		
	/*
		//Validacion de contraseña
				Scanner scanner = new Scanner(System.in);

		        // Solicitar la primera contraseña
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = scanner.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = scanner.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		        scanner.close();
	 */
		        
	 /*
		
		//ejercicio 3
		        
		        		        
		//switch: para seleccionar comida de la dulceria del cine
		        
	    //Selección de opciones, variable que almacena dicha opción
		        
		        int menu = 3;
		        
		//Creando un menu
		        
		        System.out.println("Bienvenido  a la dulceria, ¿que desea ordenar?");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot-dog");
		        System.out.println("5. Pagar");
		        System.out.println("No contamos con eso en nuestro menú, por favor seleccione una opción válida (1-5).");
		        
		        switch (menu) {
			        case 1:
			        	System.out.println("Usted ha agregado Palomitas a su combo");
			        	//Aqui se agregó una opción y mensaje.
			        	break;
			        case 2:
			        	System.out.println("Usted ha agregado Refresco a su combo");
			        	break;
			        case 3:
			        	System.out.println("Usted ha agregado Nachos a su combo");
			        	break;
			        case 4:
			        	System.out.println("Usted ha agregado Hot-dog a su combo");
			        	break;
			        case 5:
			        	System.out.println("Usted ha agregado pagar su combo");
			        	break;
			        	default:
			        System.out.println("Por el momento no contamos con esa opción en nuestro menú, lo invitamos a seleccionar una opción válida");
			        break;
		        	
		        	
	 */
	 
		
		
	 
		

		
		        Scanner scanner = new Scanner(System.in);

		        System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot-dog");
		        System.out.println("5. Pagar");

		        int menu = scanner.nextInt();

		        switch (menu) {
		            case 1:
		                System.out.println("Usted ha agregado Palomitas a su combo");
		                // Aquí se agregó una opción y mensaje.
		                break;
		            case 2:
		                System.out.println("Usted ha agregado Refresco a su combo");
		                break;
		            case 3:
		                System.out.println("Usted ha agregado Nachos a su combo");
		                break;
		            case 4:
		                System.out.println("Usted ha agregado Hot-dog a su combo");
		                break;
		            case 5:
		                System.out.println("Usted ha seleccionado pagar su combo");
		                break;
		            default:
		                System.out.println("Por el momento no contamos con esa opción en nuestro menú, lo invitamos a seleccionar una opción válida");
		                break;
		        }

		        // Close the Scanner to avoid resource leak
		        scanner.close();
		   
	   
		/*
		Scanner scanner = new Scanner(System.in);
		
				System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot-dog");
		        System.out.println("5. Pagar");

		        int total = 0;
		        String orderList = "";

		        while (true) {
		            int menu = scanner.nextInt();

		            if (menu >= 1 && menu <= 5) {
		                switch (menu) {
		                    case 1:
		                        orderList += "Palomitas, ";
		                        total += 10; // Adjust the price accordingly
		                        break;
		                    case 2:
		                        orderList += "Refresco, ";
		                        total += 5; // Adjust the price accordingly
		                        break;
		                    case 3:
		                        orderList += "Nachos, ";
		                        total += 8; // Adjust the price accordingly
		                        break;
		                    case 4:
		                        orderList += "Hot-dog, ";
		                        total += 12; // Adjust the price accordingly
		                        break;
		                    case 5:
		                        System.out.println("Usted ha seleccionado pagar su combo");
		                        break;
		                }

		                if (menu == 5) {
		                    break; // Exit the loop when the user chooses to pay
		                }
		            } else {
		                System.out.println("Por favor, seleccione una opción válida (1-5).");
		            }
		        }

		        System.out.println("Usted ha ordenado: " + orderList.substring(0, orderList.length() - 2)); // Remove the trailing comma
		        System.out.println("El total a pagar es: $" + total);

		        // Close the Scanner to avoid resource leak
		        scanner.close();
		    		

		*/
		
		
		
		
		
	}// main

}// clase
