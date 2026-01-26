/* Import des modules CSS */
import css from "./footerPC.module.css";
import style from "../../../styleRootComponent.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Datas */
import { footer_Data } from "../footer.data";

/* Import des Types */
import type { Footer_data_Type } from "../../../../types/layout/footer/footer.data.type";

function FooterPC_Layout() {
    const dataFooter: Footer_data_Type = footer_Data();

    return (
        <section className={`FooterPC_Layout ${css.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={css.TitleH2}>
                    <span className={css.PowerSpan}>POWER</span>
                    <span className={css.WattSpan}>WATT</span>
                    <span className={css.NumberSpan}>34</span>
                </h2>
            </header>

            <nav className={css.ContainerNavFooter}>
                {/* Nav 1 : A propos */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            {dataFooter[0].nameMenu}
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[0].nameSubMenu[0].link} className={css.Link}>
                                {dataFooter[0].nameSubMenu[0].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[0].nameSubMenu[1].link} className={css.Link}>
                                {dataFooter[0].nameSubMenu[1].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[0].nameSubMenu[2].link} className={css.Link}>
                                {dataFooter[0].nameSubMenu[2].title}
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 2 : Réseaux */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            {dataFooter[1].nameMenu}
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[1].nameSubMenu[0].link} className={css.Link}>
                                {dataFooter[1].nameSubMenu[0].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[1].nameSubMenu[1].link} className={css.Link}>
                                {dataFooter[1].nameSubMenu[1].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[1].nameSubMenu[2].link} className={css.Link}>
                                {dataFooter[1].nameSubMenu[2].title}
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 3 : Politique & Termes */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            {dataFooter[2].nameMenu}
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[2].nameSubMenu[0].link} className={css.Link}>
                                {dataFooter[2].nameSubMenu[0].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[2].nameSubMenu[1].link} className={css.Link}>
                                {dataFooter[2].nameSubMenu[1].title}
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={dataFooter[2].nameSubMenu[2].link} className={css.Link}>
                                {dataFooter[2].nameSubMenu[2].title}
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </section>
    );
}

export { FooterPC_Layout };