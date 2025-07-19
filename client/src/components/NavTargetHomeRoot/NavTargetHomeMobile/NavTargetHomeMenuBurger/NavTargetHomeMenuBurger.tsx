import { useState } from "react";
import MenuNavTargetHomeRoot from "../../../NavTargetHomeRoot/ComponentsNavTargetHomeRoot/MenuNavTargetHomeRoot";
import style from "../../ComponentsNavTargetHomeRoot/MenuNavTargetHomeRoot.module.css";
import css from "./NavTargetHomeMenuBurger.module.css";



function NavTargetHomeMenuBurger() {
    const [active, setActive] = useState(false)
        const funcActive = () => {
            setActive(!active)
        }
    return (
        <>
            <button className={`${css.sideCloseNav} ${active ? css.active : ""}`} type="button" onClick={funcActive}>Fermer</button>
            <div className={`${css.sideNav} ${active ? css.active : ""} ${css.mySideNav}`}>
                <div>
                    <button type="button" 
                        className={`${css.close} ${css.closeBtn}`}
                        aria-label="Fermer le menu principal"
                        onClick={funcActive}>
                            x
                    </button>
                </div>

                {/*Le style de ce composant est directement géré par le module CSS :
                MenuNavRoot.module.css*/}
                <MenuNavTargetHomeRoot
                    moduleMenuUl={style.MenuUlMobile}
                    moduleMenuLi={style.MenuLiMobile}
                    moduleMenuLink={style.MenuLinkMobile}
                    moduleSubMenuUl={style.SubMenuUlMobile}
                    moduleSubMenuLi={style.SubMenuLiMobile}
                    moduleSubMenuLink={style.SubMenuLinkMobile}
                    moduleSpanPortraits={style.SpanPortraitsMobile}

                    moduleMenuLiTarget1={style.MenuLiTarget1Mobile}
                    moduleMenuLiTarget2={style.MenuLiTarget2Mobile}
                    moduleMenuLiTarget3={style.MenuLiTarget3Mobile}
                    moduleMenuLiTarget4={style.MenuLiTarget4Mobile}
                    moduleMenuLiTarget5={style.MenuLiTarget5Mobile}
                    moduleMenuLiTarget6={style.MenuLiTarget6Mobile}

                    moduleButtonSubMenu={style.ButtonSubMenuMobile}
                />
            </div>

            {active === false &&
                <button type="button"
                    className={css.openBtn}
                    aria-label="Ouvrir le menu principal"
                    onClick={funcActive}>
                    <span className={css.menuBurger}>
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            }
        </>
    );
}

export default NavTargetHomeMenuBurger;
