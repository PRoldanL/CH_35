package org.generation.banco;

/*

 En Cajero se instancia el objeto de tipo CuentaBancaria y se invocan los métodos definidos.
 Aqui si se pueden establecer los try-catch de la excepción que se definio en el método anterios
 Los resultados se muestran en consola
 
*/

public class Cajero {
	public static void main (String[] args) {
		CuentaBancaria cuentaDaniel = new CuentaBancaria(1973); //Cuenta bancaria con su idCuenta	
	
		//Simulando un Scanner y el cliente deposita dinero
		System.out.println("Deposito de $500.00");
		cuentaDaniel.depositar(500);
		
		//Revisar i se actualiza el saldo  (debe haber $500)
		System.out.println("El nuevo saldo es de $"+ cuentaDaniel.getSaldo());
		
		//Retiro
		try {
			//Simulando el Scanner nuevamente para retirar
			System.out.println("Retiro de $300.00");
			cuentaDaniel.retirar(300);
			System.out.println("El nuevo saldo es de $"+ cuentaDaniel.getSaldo()); //Output: $200
			
			System.out.println("Retiro de $200.00");
			cuentaDaniel.retirar(200);
			System.out.println("El nuevo saldo es de $"+ cuentaDaniel.getSaldo()); //Output: $0
			System.out.println("Retiro de $300.00");
			cuentaDaniel.retirar(300);
			System.out.println("El nuevo saldo es de $"+ cuentaDaniel.getSaldo()); //Output: Exception
		} catch (FondosInsuficientesException e) {
			System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}
		
	}

}
