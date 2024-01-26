package org.generation.banco;

//En esta clase se definen los métodos que arrojan excepciones, siempre que en la clase Cajero se dispare dicha excepción

	//Requerimientos:

		//1. Tranajar bajo el paradigma POO
		//2. Indicar que clase es una excepción mediante herencia (extends)
		//3. Crear variables y métodos para instanciar objetos
		//4. Encapsular


public class FondosInsuficientesException extends Exception{
	private static final long serialVersionUID = 1L; //No es necesaria, pero es buena practica adignarla
	
		//Atributos
	private double monto;

		//Constructor
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}

		//Getter y Setter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
}

