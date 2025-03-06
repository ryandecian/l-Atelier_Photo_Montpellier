import style from "./NavMobile.module.css";
import { Link } from "react-router-dom"
import MenuBurger from "./MenuBurger/MenuBurger";

/* Import des Images*/

function NavMobile() {

    return (
        <>
             <nav className={style.NavMobile}>
                <div className={style.ContainerLogoNavMobile}>
                    <p className={style.TitleNavMobile}>
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
