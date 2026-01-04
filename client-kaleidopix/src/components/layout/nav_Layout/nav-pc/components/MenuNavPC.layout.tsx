/* Import des modules CSS */
import css from "./menuNavPC.module.css";

/* Import des composants d'Elements */
import { SubMenuPC_Element } from "./elements/SubMenuPC.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Datas */
import { navMenu_Data } from "../../navMenu.data";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../../../types/layout/navMenu.data.type";

function MenuNavPC_Layout() {
    const dataMenu: NavMenu_data_Type = navMenu_Data();

    return (
        <ul className={css.MenuUlPC}>
            <SubMenuPC_Element dataMenu={dataMenu.dataSubMenu[0]} />

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[0].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[0].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[1].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[1].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[2].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[2].nameMenu}</Link>
            </li>
        </ul>
    )
}

export { MenuNavPC_Layout };
