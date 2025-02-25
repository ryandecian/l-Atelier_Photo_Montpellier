import { useState } from "react";
import MenuNavRoot from "../../ComponentsNavRoot/MenuNavRoot";
import style from "../../ComponentsNavRoot/MenuNavRoot.module.css";
import "./MenuBurger.css";



function MenuBurger() {
    const [active, setActive] = useState(false)
        const funcActive = () => {
            setActive(!active)
        }
    return (
        <>
        <button className={`sideCloseNav ${active ? "active" : ""}`} type="button" onClick={funcActive}/>
                 <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                     <div>
                         <button type="button" 
                         id="closeBtn" 
                         className="close"
                         onClick={funcActive}>x</button>
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

                         moduleButtonSubMenu={style.ButtonSubMenuMobile}
                         moduleSubMenuLiTarget1={style.SubMenuLiTarget1Mobile}
                         moduleSubMenuLiTarget2={style.SubMenuLiTarget2Mobile}
                         moduleSubMenuLiTarget3={style.SubMenuLiTarget3Mobile}
                         moduleSubMenuLiTarget4={style.SubMenuLiTarget4Mobile}
                     />


                 </div>

                 <button type="button" 
                 id="openBtn"
                 onClick={funcActive}>
                    <span className="menuBurger">
                        <span />
                        <span />
                        <span />
                    </span>
                 </button>
        </>
    );
}

export default MenuBurger;