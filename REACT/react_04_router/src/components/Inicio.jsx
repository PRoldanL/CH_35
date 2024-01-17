import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <> 
        <div>
            <h1>Esta es la pagina de inicio</h1>
            <Link to="about">
                Presiona aqui para ir a la pagina Sobre Nosotros.
            </Link>
            <br/>
            <br/>
            <Link to="contacto">
                Presiona aqui para ir a la pagina de contacto.
            </Link>
        </div>
        </>
    )
}

export default Inicio;