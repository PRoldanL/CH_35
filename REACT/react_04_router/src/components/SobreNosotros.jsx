import { Link } from "react-router-dom"

const About = () => {
    return (
        <> 
        <div>
            <h1>Esta es la pagina Sobre Nosotros</h1>
            <Link to="/">
                Presiona aqui para ir al inicio.
            </Link>
            <br/>
            <br/>
            <Link to="/contacto">
                Presiona aqui para ir a la pagina de contacto.
            </Link>
        </div>
        </>
    )
}

export default About;