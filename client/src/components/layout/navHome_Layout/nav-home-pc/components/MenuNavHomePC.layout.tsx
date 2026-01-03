/* Import des modules CSS */
import css from "./menuHomeNavPC.module.css";

/* Import des composants d'Elements */
import { SubMenuHomePC_Element } from "./elements/SubMenuHomePC.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Datas */
import { navHomeMenu_Data } from "../../navHomeMenu.data";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../../../types/layout/navMenu.data.type";

function MenuNavHomePC_Layout() {
    const dataMenu: NavMenu_data_Type = navHomeMenu_Data();

    return (
        <ul className={css.MenuUlPC}>
            <SubMenuHomePC_Element dataMenu={dataMenu.dataSubMenu[0]} />

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[0].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[0].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[1].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[1].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[2].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[2].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to={dataMenu.dataMenu[3].link} className={css.MenuLinkPC}>{dataMenu.dataMenu[3].nameMenu}</Link>
            </li>
        </ul>
    )
}

export { MenuNavHomePC_Layout };
