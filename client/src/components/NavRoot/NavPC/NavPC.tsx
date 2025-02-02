import "./NavPC.css";
import { Link } from "react-router-dom";

/* Import des Images*/
import Logo from "../../../assets/Logo/LOGO-Avec-Ou-Sans-Flash.jpeg";

function NavPC() {
    return (
        <nav className="NavPC">
            <div className="ContainerLogoNavPC">
                <Link to="/">
                   <img src={Logo} alt="Logo Avec Ou Sans Flash" />
                </Link>
            </div>
            {/*-------------------------------------------------------*/}
            <div className="ContainerNavigationNavPC">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavPC;