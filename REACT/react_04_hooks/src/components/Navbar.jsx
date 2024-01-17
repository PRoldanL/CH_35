import "./Navbar.css" //Importación de css
import IssLogo from "../assets/ISS_logo.svg"


const Navbar = () => {

    const url1="https://www.nasa.gov/international-space-station/";
    const url2="https://www.nasa.gov/mission/apollo-13/";
    const url3="http://open-notify.org/Open-Notify-API/People-In-Space/";
    return (
        <> {/*Fragmento (El comentario debe ser multilinea y entre llaves)*/}
        <div className = "navbar--container">
            <div className="navbar--title">
                <a href={ url1 } id="link--logo" target="_blank">
                    <img src={ IssLogo } alt="Logo ISS" />
                </a>
            </div>
            <div className="navbar--links">
                <div className="navbar--links">
                    <a href={ url1 } target="_blank" >Home</a>
            </div>
                <div className="navbar--links">
                    <a href={ url2 } target="_blank" >Apollo 13</a>
            </div>
                <div className="navbar--links">
                    <a href={ url3 } target="_blank" >Astros</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;


