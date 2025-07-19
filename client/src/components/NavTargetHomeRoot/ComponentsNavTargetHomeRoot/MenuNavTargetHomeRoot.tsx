import { useState } from "react";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../router/router";

interface MenuNavTargetHomeRootProps {
    moduleMenuUl: string;
    moduleMenuLi: string;
    moduleMenuLink: string;
    moduleSubMenuUl: string;
    moduleSubMenuLi: string;
    moduleSubMenuLink: string;
    moduleSpanPortraits?: string;
    moduleSubMenuPortraits?: string;

    moduleMenuLiTarget1?: string;
    moduleMenuLiTarget2?: string;
    moduleMenuLiTarget3?: string;
    moduleMenuLiTarget4?: string;
    moduleMenuLiTarget5?: string;
    moduleMenuLiTarget6?: string;

    moduleButtonSubMenu?: string;
    moduleSubMenuLiTarget1?: string;
    moduleSubMenuLiTarget2?: string;
    moduleSubMenuLiTarget3?: string;
}

function MenuNavTargetHomeRoot(Props: MenuNavTargetHomeRootProps) {
    const { moduleMenuUl, moduleMenuLi, 
        moduleMenuLink, moduleSubMenuUl, 
        moduleSubMenuLi, moduleSubMenuLink, 
        moduleSpanPortraits, moduleSubMenuPortraits, 
        moduleMenuLiTarget1, moduleMenuLiTarget2, 
        moduleMenuLiTarget3, moduleMenuLiTarget4,
        // moduleMenuLiTarget5, moduleMenuLiTarget6,
        moduleSubMenuLiTarget1,moduleSubMenuLiTarget2,
        moduleSubMenuLiTarget3, moduleButtonSubMenu } = Props;

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    return (
        <ul className={moduleMenuUl}>

            {/* Menu déroulant pour Portraits */}
            <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                <button
                    type="button"
                    className={`${moduleMenuLink} ${moduleSubMenuPortraits}`}
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    aria-expanded={isSubMenuOpen}
                    aria-controls="submenu-prestations"
                    aria-haspopup="true"
                >
                    PRESTATIONS <span className={moduleSpanPortraits}>{isSubMenuOpen ? "▲" : "▼"}</span>
                </button>

                {isSubMenuOpen && (
                    <>
                        <button 
                            type="button" 
                            className={moduleButtonSubMenu} 
                            aria-label="Fermer le menu principal"
                            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} 
                        >
                            Fermer
                        </button>

                        <ul className={moduleSubMenuUl}>
                            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget1}`}>
                                <Link to={ListDataRouter[11].path} className={moduleSubMenuLink}>Corporate</Link>
                            </li>
                            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget2}`}>
                                <Link to={ListDataRouter[12].path} className={moduleSubMenuLink}>LifeStyle</Link>
                            </li>
                            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget3}`}>
                                <Link to={ListDataRouter[13].path} className={moduleSubMenuLink}>Mariage</Link>
                            </li>
                        </ul>
                    </>
                )}
            </li>

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget2}`}>
                <Link to={ListDataRouter[2].path} className={moduleMenuLink}>TARIFS</Link>
            </li>

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget3}`}>
                <Link to={ListDataRouter[3].path} className={moduleMenuLink}>CONTACT</Link>
            </li>

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget4}`}>
                <Link to={ListDataRouter[8].path} className={moduleMenuLink}>PORTFOLIO</Link>
            </li>

            {/* <li className={`${moduleMenuLi} ${moduleMenuLiTarget5}`}>
                <Link to={ListDataRouter[5].path} className={moduleMenuLink}>PANIER</Link>
            </li>

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget6}`}>
                <Link to={ListDataRouter[6].path} className={moduleMenuLink}>COMPTE</Link>
            </li> */}
        </ul>
    );
}

export default MenuNavTargetHomeRoot;
