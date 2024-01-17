import { Link } from "react-router-dom"

const Contacto = () => {
    return (
        <> 
        <div>
            <h1>Esta es la pagina de Contacto</h1>
            <Link to="/">
                Presiona aqui para ir al inicio.
            </Link>
            <br/>
            <br/>
            <Link to="/about">
                Presiona aqui para ir a la pagina Sobre Nosotros.
            </Link>
        </div>
        </>
    )
}

export default Contacto;