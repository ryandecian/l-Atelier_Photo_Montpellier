import style from "./NavTargetHomeMobile.module.css";
import { Link } from "react-router-dom"
import NavTargetHomeMenuBurger from "./NavTargetHomeMenuBurger/NavTargetHomeMenuBurger";

/* Import des Images*/

function NavTargetHomeMobile() {

    return (
        <>
             <nav className={style.NavTargetHomeMobile}>
                <article className={style.ContainerLogoNavTargetHomeMobile}>
                    <p className={style.TitleNavTargetHomeMobile}>
                        <Link to="/">
                            l'Atelier Photo Montpellier
                        </Link>
                    </p>
                </article>

                 <NavTargetHomeMenuBurger />

             </nav>
        </>
    )
}
export default NavTargetHomeMobile;
