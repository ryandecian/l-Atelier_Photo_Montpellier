import { useState } from "react";
import MenuNavRoot from "../../ComponentsNavRoot/MenuNavRoot";
import style from "../../ComponentsNavRoot/MenuNavRoot.module.css";
import css from "./MenuBurger.module.css";



function MenuBurger() {
    const [active, setActive] = useState<boolean>(false)
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
                         onClick={funcActive}>
                            x
                        </button>
                     </div>

                     {/*Le style de ce composant est directement géré par le module CSS :
                     MenuNavRoot.module.css*/}
                     <MenuNavRoot
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

                 <button type="button" 
                 className={css.openBtn}
                 onClick={funcActive}>
                    <span className={css.menuBurger}>
                        <span />
                        <span />
                        <span />
                    </span>
                 </button>
        </>
    );
}

export default MenuBurger;
