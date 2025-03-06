import "./NavPC.css";
import { Link } from "react-router-dom";
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot";
import style from "../ComponentsNavRoot/MenuNavRoot.module.css";

function NavPC() {
    return (
        <nav className="NavPC">
            <div className="ContainerLogoNavPC">
                <p className="TitleNavPC">
                    <Link to="/" >
                        l'Atelier Photo Montpellier
                    </Link>
                </p>
            </div>
            <div className="ContainerNavigationNavPC">
                <MenuNavRoot
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

export default NavPC;
