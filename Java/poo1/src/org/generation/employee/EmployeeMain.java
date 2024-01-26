package org.generation.employee;

public class EmployeeMain {

	public static void main(String[] args) {
		//Instanciar los objetos
		
		Employee Daniel= new Employee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor");
		Employee Abigail= new Employee("Abigail", "Martínez", 7835, 7596.33d, "Desarrollador frontend");
		Employee Arturo= new Employee("Arturo", "Ávila", 7835, 18596.33d, "Desarrollador backend");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);

		//Invocando métodos definidos previamente  (trabajar, calcularSalario, capacitarse, infoGeneral)
		
		
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse ();
		
		//Utilizar información  especifica de cada objeto mediante sus propiedades
		//Usando Getter
		
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto());
		
		//Acudiendo a la propiedad del objeto
		
		System.out.println(Abigail.puesto + " gana $" + Abigail.salario + " pesos");
		
		//Actualizando información mediante Setter
		
		Arturo.setSalario(24598.11);
		Arturo.calcularSalario();
		
		
		
		
	}
}
