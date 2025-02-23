import "./NavPC.css";
import { Link } from "react-router-dom";
// import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot";
// import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

/* Import des Images*/
// import Logo from "../../../assets/Logo/LOGO-Avec-Ou-Sans-Flash.jpeg";

function NavPC() {
    return (
        <nav className="NavPC">
            <div className="ContainerLogoNavPC">
                <h1>
                    <Link to="/" className="TitleNavPC">
                        l'Atelier Photo Montpellier
                    </Link>
                </h1>
            </div>
            <div className="ContainerNavigationNavPC"></div>
        </nav>
    )
}

export default NavPC;