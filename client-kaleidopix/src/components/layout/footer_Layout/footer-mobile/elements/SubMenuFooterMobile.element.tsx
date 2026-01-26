/* Import des modules CSS */
import css from "./subMenuFooterMobile.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

type SubMenuFooterMobile_Type = {
    nameMenu: string;
    nameSubMenu: {
        title: string;
        link: string;
    }[];
};

function SubMenuFooterMobile_Element({ dataMenu }: { dataMenu: SubMenuFooterMobile_Type }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const idMenu = `submenu-${dataMenu.nameMenu.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <section className={css.SubContainerNavFooter}>
            <button
                type="button"
                className={`${subMenuOpen ? css.OpenBtnTrue : css.OpenBtnFalse} ${style.Button}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                aria-label={`Ouverture du sous-menu ${dataMenu.nameMenu}`}
                aria-expanded={subMenuOpen}
                aria-controls={idMenu}
                aria-haspopup="true"
            >
                <span className={style.TextP3}>{dataMenu.nameMenu}</span>
                <span className={css.IconOpenBtn}>{subMenuOpen ? "▲" : "▼"}</span>
            </button>

            {subMenuOpen && (
                <>
                    {/* Bouton de fermeture du sous menu burger */}
                    <button 
                        type="button" 
                        className={`${css.ButtonSubMenuMobile} ${style.Button}`}
                        aria-label={`Fermer le sous menu des ${dataMenu.nameMenu}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                        Fermer
                    </button>

                    <ul className={css.SubMenuUlMobile}>
                        {dataMenu.nameSubMenu.map((item, index) => {

                            return (
                                <li key={index} className={css.SubMenuLiMobile}>
                                    <Link to={item.link} className={css.SubMenuLinkMobile}>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <br />
                </>
            )}
        </section>
    );
}

export { SubMenuFooterMobile_Element };
