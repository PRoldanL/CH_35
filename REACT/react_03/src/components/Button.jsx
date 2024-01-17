import "./Button.css"

/* 
* Props: Propiedad que se puede asignar a los componentes para modificar el texto y/o la información desde la renderización del mismo.
* Se asignan como parametro de la funcion con el nombre del prop y debe ir entre llaves.
* Se manda a llamar en el bloque de código donde se debe implementar utilizando llaves.
*/


const Button = ({ label }) => {
    return (
        <>
        <button>
            {label}
        </button>
        
        </>

    )
}

export default Button 