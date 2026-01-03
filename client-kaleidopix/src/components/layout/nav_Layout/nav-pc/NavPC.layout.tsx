/* Import des modules CSS */
import css from "./navPC.module.css";

/* Import des Components */
import { MenuNavPC_Layout } from "./components/MenuNavPC.layout";

/* Import des composants React */
import { Link } from "react-router-dom";

function NavPC_Layout() {
    return (
        <nav className={`NavPC_Layout ${css.NavPC}`}>
            <div className={css.ContainerLogoNavPC}>
                <p className={css.TitleNavPC}>
                    <Link to="/" >
                        Kaleidopix
                    </Link>
                </p>
            </div>
            <MenuNavPC_Layout />
        </nav>
    )
}

export { NavPC_Layout };
