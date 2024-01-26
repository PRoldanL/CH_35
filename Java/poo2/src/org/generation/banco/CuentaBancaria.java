package org.generation.banco;

//En esta clase se definen los métodos para disparar las excepciones, es decir el try-catch
//Se definen otros métodos como *depositar, retirar dinero*
//Requerimientos:
	//Trabajar bajo POO
	//Encapsular (modificadores, getters y setters)
	//Crear variables y métodos para instanciar objetos

public class CuentaBancaria {

		private double saldo;
		//Nombre del cliente, rfc,  etc...
		private int idCuenta;
		
		//Constructor que resibe solamente el atributo numero
		public CuentaBancaria(int idCuenta) {
			this.idCuenta = idCuenta;
		}
		
		//Método para depositos
		public void depositar (double monto) {
			saldo += monto; //Esto es lo mismo que saldo = salado +monto
		}
		
		//Método para retiros
		/* Verificar si el monto a retirar es menor o igual al saldo actual.
		 * 		- true: Se puede retirar el monto solicitado
		 * 		- false: No se puede retirar y calculamos cuánto dinero falta para completar la operación
		 * */
		public void retirar (double monto) throws FondosInsuficientesException {
			if (monto <= saldo) {
				saldo -= monto; // Esto es lo mismo que saldo = saldo - monto;
			} else {
				double faltante = monto - saldo;
				//Crear la instancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parámetro correspondiente a la variable que disparar la excepción
				throw new FondosInsuficientesException(faltante); //Esto nos va a marcar un error, porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos "heredarlo" como parte del encabezado del método con la palabra reservada throws y el nombre de la excepción
			}
		}

		public double getSaldo() {
			return saldo;
		}

		public void setSaldo(double saldo) {
			this.saldo = saldo;
		}

		public int getIdCuenta() {
			return idCuenta;
		}

		public void setIdCuenta(int idCuenta) {
			this.idCuenta = idCuenta;
		}
		
		
		
		
		
}
