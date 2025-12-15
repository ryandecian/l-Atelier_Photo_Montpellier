/* Import des modules CSS */
import css from "./navMobile.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Components */
import { MenuBurger_Layout } from "./components/MenuBurger.layout";

function NavMobile_Layout() {

    return (
        <nav className={css.NavMobile}>
            <div className={css.ContainerLogoNavMobile}>
                <Link to="/">
                        l'Atelier Photo Montpellier
                </Link>
            </div>

            <MenuBurger_Layout />
        </nav>
    )
}
export { NavMobile_Layout };
