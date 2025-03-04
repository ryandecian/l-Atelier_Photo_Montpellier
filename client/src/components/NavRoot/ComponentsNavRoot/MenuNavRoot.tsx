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
  moduleSubMenuLiTarget4?: string;
  moduleSubMenuLiTarget5?: string;
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
    moduleSubMenuLiTarget3, moduleSubMenuLiTarget4,
    moduleSubMenuLiTarget5, moduleButtonSubMenu } = Props;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <ul className={moduleMenuUl}>

      {/* Menu déroulant pour Portraits */}
      <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <span className={`${moduleMenuLink} ${moduleSubMenuPortraits}`}>
          Prestations <span className={moduleSpanPortraits}>{isSubMenuOpen? "▲" : "▼"}</span>
        </span>
        {isSubMenuOpen && (
          <ul className={moduleSubMenuUl}>
            <button type="button" className={moduleButtonSubMenu} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}/>

            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget1}`}>
              <Link to="/mariage" className={moduleSubMenuLink}>Mariages</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget2}`}>
              <Link to="/portraits-individuels" className={moduleSubMenuLink}>Individuels</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget3}`}>
              <Link to="/portraits-couple" className={moduleSubMenuLink}>Couples</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget4}`}>
              <Link to="/portraits-corporate" className={moduleSubMenuLink}>Corporates</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget5}`}>
              <Link to="/portraits-enfant" className={moduleSubMenuLink}>Grossesses / <br/>Nouveau nés</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget2}`}>
        <Link to="/tarifs" className={moduleMenuLink}>Tarifs</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget3}`}>
        <Link to="/contact" className={moduleMenuLink}>Contact</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget4}`}>
        <Link to="/blog" className={moduleMenuLink}>Blog</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget5}`}>
        <Link to="/panier" className={moduleMenuLink}>Panier</Link>
      </li>

      <li className={`${moduleMenuLi} ${moduleMenuLiTarget6}`}>
        <Link to="/compte" className={moduleMenuLink}>Compte</Link>
      </li>
    </ul>
  );
}

export default MenuNavRoot;
