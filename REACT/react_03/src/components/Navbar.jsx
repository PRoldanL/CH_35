import "./Navbar.css" //Importación de css

//Crear función que contiene el marcado para que viva nuestro código.
const Navbar = () => {
    return (
        <> {/*Fragmento (El comentario debe ser multilinea y entre llaves)*/}
        <div className = "navbar--container">
            <div className="navbar--title">
                <h1>GenMex-35</h1>
            </div>
            <div className="navbar--links">
                <div className="navbar--links">
                    <a href="#">Home</a>
            </div>
                <div className="navbar--links">
                    <a href="#">About</a>
            </div>
                <div className="navbar--links">
                    <a href="#">Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;


