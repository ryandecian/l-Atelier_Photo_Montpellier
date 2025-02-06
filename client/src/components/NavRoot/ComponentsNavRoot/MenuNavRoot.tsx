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

  moduleButtonSubMenu?: string;
  moduleSubMenuLiTarget1?: string;
  moduleSubMenuLiTarget2?: string;
  moduleSubMenuLiTarget3?: string;
  moduleSubMenuLiTarget4?: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
  const { moduleMenuUl, moduleMenuLi, 
    moduleMenuLink, moduleSubMenuUl, 
    moduleSubMenuLi, moduleSubMenuLink, 
    moduleSpanPortraits, moduleSubMenuPortraits, 
    moduleSubMenuLiTarget1, moduleSubMenuLiTarget2,
    moduleSubMenuLiTarget3, moduleSubMenuLiTarget4,
    moduleButtonSubMenu } = Props;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <ul className={moduleMenuUl}>
      <li className={moduleMenuLi}>
        <Link to="/actualite" className={moduleMenuLink}>Actualité</Link>
      </li>

      <li className={moduleMenuLi}>
        <Link to="/mariage" className={moduleMenuLink}>Mariage</Link>
      </li>

      {/* Menu déroulant pour Portraits */}
      <li className={moduleMenuLi} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <span className={`${moduleMenuLink} ${moduleSubMenuPortraits}`}>
          Portraits <span className={moduleSpanPortraits}>▼</span>
        </span>
        {isSubMenuOpen && (
          <ul className={moduleSubMenuUl}>
            <button type="button" className={moduleButtonSubMenu} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}/>

            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget1}`}>
              <Link to="/portraits-individuels" className={moduleSubMenuLink}>Individuels</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget2}`}>
              <Link to="/portraits-couple" className={moduleSubMenuLink}>Couple</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget3}`}>
              <Link to="/portraits-corporate" className={moduleSubMenuLink}>Corporate</Link>
            </li>
            <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget4}`}>
              <Link to="/portraits-enfant" className={moduleSubMenuLink}>Grossesse / <br/>Nouveau nés</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={moduleMenuLi}>
        <Link to="/tarifs" className={moduleMenuLink}>Tarifs</Link>
      </li>
    </ul>
  );
}

export default MenuNavRoot;
