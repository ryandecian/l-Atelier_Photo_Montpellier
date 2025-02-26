import "./NavMobile.css"
import { Link } from "react-router-dom"
import MenuBurger from "./MenuBurger/MenuBurger";

/* Import des Images*/

function NavMobile() {

    return (
        <>
             <nav className="NavMobile">
                <div className="ContainerLogoNavMobile">
                    <p className="TitleNavMobile">
                        <Link to="/">
                            l'Atelier Photo Montpellier
                        </Link>
                    </p>
                </div>

                 <MenuBurger />

             </nav>
        </>
    )
}
export default NavMobile;
