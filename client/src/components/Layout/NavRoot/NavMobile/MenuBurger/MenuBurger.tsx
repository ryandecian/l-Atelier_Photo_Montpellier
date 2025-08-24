import { useState } from "react";
import MenuNavRoot from "../../ComponentsNavRoot/MenuNavRoot";
import cssNav from "../../ComponentsNavRoot/MenuNavRoot.module.css";
import css from "./MenuBurger.module.css";
import style from "../../../../StyleRootComponent.module.css";

function MenuBurger() {
    const [active, setActive] = useState<boolean>(false)
        const funcActive = () => {
            setActive(!active)
        }
    return (
        <>
            <button 
                className={`${css.sideCloseNav} ${active ? css.active : ""} ${style.Button}`} 
                type="button" onClick={funcActive}
            >
                Fermer
            </button>
            
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

                {/*Le style de ce composant est directement géré par le module CSS :
                MenuNavRoot.module.css*/}
                <MenuNavRoot
                    moduleMenuUl={cssNav.MenuUlMobile}
                    moduleMenuLi={cssNav.MenuLiMobile}
                    moduleMenuLink={cssNav.MenuLinkMobile}
                    moduleSubMenuUl={cssNav.SubMenuUlMobile}
                    moduleSubMenuLi={cssNav.SubMenuLiMobile}
                    moduleSubMenuLink={cssNav.SubMenuLinkMobile}
                    moduleSpanPortraits={cssNav.SpanPortraitsMobile}

                    moduleMenuLiTarget1={cssNav.MenuLiTarget1Mobile}
                    moduleMenuLiTarget2={cssNav.MenuLiTarget2Mobile}
                    moduleMenuLiTarget3={cssNav.MenuLiTarget3Mobile}
                    moduleMenuLiTarget4={cssNav.MenuLiTarget4Mobile}
                    moduleMenuLiTarget5={cssNav.MenuLiTarget5Mobile}
                    moduleMenuLiTarget6={cssNav.MenuLiTarget6Mobile}

                    moduleButtonSubMenu={cssNav.ButtonSubMenuMobile}
                />


            </div>
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
        </>
    );
}

export default MenuBurger;
