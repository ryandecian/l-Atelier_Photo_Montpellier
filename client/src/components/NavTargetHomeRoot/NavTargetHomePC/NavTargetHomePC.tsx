import css from "./NavTargetHomePC.module.css";
import { Link } from "react-router-dom";
import MenuNavTargetHomeRoot from "../ComponentsNavTargetHomeRoot/MenuNavTargetHomeRoot";
import style from "../ComponentsNavTargetHomeRoot/MenuNavTargetHomeRoot.module.css";

function NavTargetHomePC() {
    return (
        <nav className={css.NavTargetHomePC}>
            <div className={css.ContainerLogoNavTargetHomePC}>
                <p className={css.TitleNavTargetHomePC}>
                    <Link to="/" >
                        l'Atelier Photo Montpellier
                    </Link>
                </p>
            </div>
            <div className={css.ContainerNavigationNavTargetHomePC}>
                <MenuNavTargetHomeRoot
                    moduleMenuUl={style.MenuUlPC}
                    moduleMenuLi={style.MenuLiPC}
                    moduleMenuLink={style.MenuLinkPC}
                    moduleSubMenuUl={style.SubMenuUlPC}
                    moduleSubMenuLi={style.SubMenuLiPC}
                    moduleSubMenuLink={style.SubMenuLinkPC}
                    moduleSpanPortraits={style.SpanPortraitsPC}
                          
                    moduleSubMenuPortraits={style.SubMenuPortraitsPC}

                    moduleButtonSubMenu={style.ButtonSubMenuPC}
                    moduleSubMenuLiTarget1={style.SubMenuLiTarget1PC}
                    moduleSubMenuLiTarget2={style.SubMenuLiTarget2PC}
                    moduleSubMenuLiTarget3={style.SubMenuLiTarget3PC}
                />
            </div>
        </nav>
    )
}

export default NavTargetHomePC;
