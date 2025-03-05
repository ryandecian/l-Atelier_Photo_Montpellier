import style from "./NavTargetHomeMobile.module.css";
import { Link } from "react-router-dom"
import MenuBurger from "../../NavRoot/NavMobile/MenuBurger/MenuBurger";

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

                 <MenuBurger />

             </nav>
        </>
    )
}
export default NavTargetHomeMobile;
