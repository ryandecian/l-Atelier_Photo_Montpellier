/* Import des modules CSS */
import css from "./navMobile.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Components */
import MenuBurger from "./MenuBurger/MenuBurger";

function NavMobile() {

    return (
        <nav className={css.NavMobile}>
            <div className={css.ContainerLogoNavMobile}>
                <Link to="/">
                        l'Atelier Photo Montpellier
                </Link>
            </div>

            <MenuBurger />
        </nav>
    )
}
export default NavMobile;
