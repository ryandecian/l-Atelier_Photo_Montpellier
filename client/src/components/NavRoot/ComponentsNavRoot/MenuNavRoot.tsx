import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuNavRootProps {
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

function MenuNavRoot(Props: MenuNavRootProps) {
  const { moduleMenuUl, moduleMenuLi, 
    moduleMenuLink, moduleSubMenuUl, 
    moduleSubMenuLi, moduleSubMenuLink, 
    moduleSpanPortraits, moduleSubMenuPortraits, 
    moduleMenuLiTarget1, moduleMenuLiTarget2, 
    moduleMenuLiTarget3, moduleMenuLiTarget4,
    moduleMenuLiTarget5, moduleMenuLiTarget6,
    moduleSubMenuLiTarget1,moduleSubMenuLiTarget2,
    moduleSubMenuLiTarget3, moduleButtonSubMenu } = Props;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <ul className={moduleMenuUl}>

      {/* Menu déroulant pour Portraits */}
      <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <span className={`${moduleMenuLink} ${moduleSubMenuPortraits}`}>
          PRESTATIONS <span className={moduleSpanPortraits}>{isSubMenuOpen? "▲" : "▼"}</span>
        </span>
        {isSubMenuOpen && (
          <ul className={moduleSubMenuUl}>
            <button type="button" className={moduleButtonSubMenu} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}/>

            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget1}`}>
              <Link to="/portrait-corporate" className={moduleSubMenuLink}>Corporate</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget2}`}>
              <Link to="/portraits-lifestyle" className={moduleSubMenuLink}>LifeStyle</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget3}`}>
              <Link to="/portraits-mariage" className={moduleSubMenuLink}>Mariage</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget2}`}>
        <Link to="/tarifs" className={moduleMenuLink}>TARIFS</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget3}`}>
        <Link to="/contact" className={moduleMenuLink}>CONTACT</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget4}`}>
        <Link to="/blog" className={moduleMenuLink}>BLOG</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget5}`}>
        <Link to="/panier" className={moduleMenuLink}>PANIER</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget6}`}>
        <Link to="/compte" className={moduleMenuLink}>COMPTE</Link>
      </li>
    </ul>
  );
}

export default MenuNavRoot;
