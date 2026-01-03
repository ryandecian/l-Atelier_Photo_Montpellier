/* Import des modules CSS */
import css from "./menuBurgerHome.module.css";
import style from "../../../../StyleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Import des composants d'Elements */
import { SubMenuHomeMobile_Element } from "./elements/SubMenuHomeMobile.element";

/* Import des Datas */
import { navHomeMenu_Data } from "../../navHomeMenu.data";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../../../types/layout/navMenu.data.type";

function MenuBurgerHome_Layout() {
    const [active, setActive] = useState<boolean>(false)
    const funcActive = () => {
        setActive(!active)
    }
    const dataMenu: NavMenu_data_Type = navHomeMenu_Data();

    return (
        <>
            {/* Bouton d'ouverture du menu burger, accessible uniquement lorsque le menu burger est fermé */}
            {active === false &&
                <button type="button" 
                    className={`${css.openBtn} ${style.Button}`}
                    aria-label="Ouvrir le menu principal"
                    onClick={funcActive}>
                    <span className={css.menuBurger}>
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            }

            {/* Bouton de fermeture du menu burger, accessible uniquement lorsque le menu burger est ouvert */}
            <button 
                className={`${css.sideCloseNav} ${active ? css.active : ""} ${style.Button}`} 
                type="button" onClick={funcActive}
            >
                Fermer
            </button>

            {/* Contenu du menu burger, accessible uniquement lorsque le menu burger est ouvert */}
            <div className={`${css.sideNav} ${active ? css.active : ""} ${css.mySideNav}`}>
                <div>
                    <button type="button" 
                        className={`${css.closeBtn} ${style.Button}`}
                        aria-label="Fermer le menu principal"
                        onClick={funcActive}
                    >
                        x
                    </button>
                </div>
                
                {/* contenue du menu burger */}
                <ul className={css.MenuUlMobile}>
                    <SubMenuHomeMobile_Element dataMenu={dataMenu.dataSubMenu[0]} />

                    <li className={`${css.MenuLiMobile} ${css.MenuLiBottomMobile}`}>
                        <Link to={dataMenu.dataMenu[0].link} className={css.MenuLinkMobile}>{dataMenu.dataMenu[0].nameMenu}</Link>
                    </li>

                    <li className={`${css.MenuLiMobile} ${css.MenuLiBottomMobile}`}>
                        <Link to={dataMenu.dataMenu[1].link} className={css.MenuLinkMobile}>{dataMenu.dataMenu[1].nameMenu}</Link>
                    </li>

                    <li className={`${css.MenuLiMobile} ${css.MenuLiBottomMobile}`}>
                        <Link to={dataMenu.dataMenu[2].link} className={css.MenuLinkMobile}>{dataMenu.dataMenu[2].nameMenu}</Link>
                    </li>

                    <li className={`${css.MenuLiMobile} ${css.MenuLiBottomMobile}`}>
                        <Link to={dataMenu.dataMenu[3].link} className={css.MenuLinkMobile}>{dataMenu.dataMenu[3].nameMenu}</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { MenuBurgerHome_Layout };
