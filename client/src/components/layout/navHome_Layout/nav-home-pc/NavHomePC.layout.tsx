/* Import des modules CSS */
import css from "./navHomePC.module.css";

/* Import des Components */
import { MenuNavHomePC_Layout } from "./components/MenuNavHomePC.layout";

/* Import des composants React */
import { Link } from "react-router-dom";

function NavHomePC_Layout() {
    return (
        <nav className={`NavHomePC_Layout ${css.NavHomePC}`}>
            <div className={css.ContainerLogoNavHomePC}>
                <p className={css.TitleNavHomePC}>
                    <Link to="/" >
                        l'Atelier Photo Montpellier
                    </Link>
                </p>
            </div>
            <MenuNavHomePC_Layout />
        </nav>
    )
}

export { NavHomePC_Layout };
