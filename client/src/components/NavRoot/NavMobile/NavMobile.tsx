import "./NavMobile.css"
import { Link } from "react-router-dom"
import MenuBurger from "./MenuBurger/MenuBurger";

/* Import des Images*/

function NavMobile() {

    return (
        <>
             <nav className="NavMobile">
                <div className="ContainerLogoNavMobile">
                    <h1>
                        <Link to="/" className="TitleNavMobile">
                            l'Atelier Photo Montpellier
                        </Link>
                    </h1>
                </div>

                 <MenuBurger />

             </nav>
        </>
    )
}
export default NavMobile;