package ecommerce;
import java.util.Scanner;

public class FuncionDescuento {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
			
		System.out.println("Ingresa el costo del producto"); //Obtener el precio delproducto.
		double precioProducto = scanner.nextDouble();
		
		double porcentajeDescuento = 35; // Obtener ek porcentaje de descuento
		double descuento = calcularDescuento(precioProducto, porcentajeDescuento);
		
		double porcentajeImpuesto = 43;
		double impuesto = calcularDescuento(precioProducto, porcentajeImpuesto);
		
		
		double total = calcularTotal(precioProducto, descuento, impuesto); // Calcular el total
		
		total = redondear(total,2);
		
		System.out.println("$Precio: $" + precioProducto);
		System.out.println("Descuento aplicado: $" + descuento);
		System.out.println("Impuesto aplicado: $" + impuesto);
		System.out.println("Total a pagar: $" + total);
		
		
		}
		
	
	static double calcularDescuento(double precioProducto, double porcentajeDescuento) {
			return (precioProducto*porcentajeDescuento)/100;
			
		}
	
	//Código eliminado al refactorizar
		
	/*
		static double calcularImpuesto(double precioProducto, double porcentajeImpuesto) {
			return (precioProducto*porcentajeImpuesto)/100;
			
		}
	*/
			
		
		
	static double calcularTotal(double precioProducto, double descuento, double impuesto) {
			return (precioProducto - descuento) + impuesto;

		}
	
	static double redondear(double valor, int decimales) {
		double factor = Math.pow(10, decimales);
		return Math.round(valor * factor)/ factor;
		
		}
}


/*La refactorizacion es reestructurar código que ya existe sin alterar su comportamiento. Tiene como objetivo mejorar la legibilidad, mantenibilidad y optimizacion de nuestro codigo*/



