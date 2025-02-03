import "./NavMobile.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

/* Import des Images*/
import Logo from "../../../assets/Logo/LOGO-Avec-Ou-Sans-Flash.jpeg";

function NavMobile() {
    const [active, setActive] = useState(false)
    const funcActive = () => {
        setActive(!active)
    }
    return (
        <>
             <nav className="NavMobile">
                 <div className="ContainerLogoNavMobile">
                     <Link to="/">
                         <img src={Logo} alt="Logo Avec Ou Sans Flash" />
                     </Link>
                 </div>
                 {/*-------------------------------------------------------*/}
                 <div></div>

                 <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                     <div>
                         <a href="#" 
                         id="closeBtn" 
                         className="close"
                         onClick={funcActive}>x</a>
                     </div>

                     {/*Le style de ce composant est directement géré par le module CSS :
                     MenuNavRoot.module.css*/}
                     <MenuNavRoot
                         moduleMenuUl={style.MenuUlMobile}
                         moduleMenuLi={style.MenuLiMobile}
                         moduleMenuLink={style.MenuLinkMobile}
                     />


                 </div>

                 <a href="#" 
                 id="openBtn"
                 onClick={funcActive}>
                    <span className="menuBurger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                 </a>

             </nav>
        </>
    )
}
export default NavMobile;