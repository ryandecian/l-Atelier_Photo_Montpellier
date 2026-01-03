/* Import des modules CSS */
import css from "./navHomeMobile.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Components */
import { MenuBurgerHome_Layout } from "./components/MenuBurgerHome.layout";

function NavHomeMobile_Layout() {

    return (
        <nav className={css.NavHomeMobile}>
            <div className={css.ContainerLogoNavMobile}>
                <Link to="/">
                        l'Atelier Photo Montpellier
                </Link>
            </div>

            <MenuBurgerHome_Layout />
        </nav>
    )
}
export { NavHomeMobile_Layout };
