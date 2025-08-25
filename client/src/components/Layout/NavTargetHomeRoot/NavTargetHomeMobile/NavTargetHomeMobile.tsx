import css from "./NavTargetHomeMobile.module.css";
import { Link } from "react-router-dom"
import NavTargetHomeMenuBurger from "./NavTargetHomeMenuBurger/NavTargetHomeMenuBurger";

function NavTargetHomeMobile() {

    return (
        <nav className={css.NavTargetHomeMobile}>
            <div className={css.ContainerLogoNavTargetHomeMobile}>
                <Link to="/">
                    l'Atelier Photo Montpellier
                </Link>
            </div>
            
            <NavTargetHomeMenuBurger />
        </nav>
    )
}
export default NavTargetHomeMobile;
