import style from "./FooterPC.module.css";
import { Link } from "react-router-dom";

function FooterPC() {

    const dateNow = new Date().getFullYear();

    return (
        <section className={style.FooterPC}>

            {/* Container 1 : Title du Footer */}
            <header className={style.TitleFooter}>
                <h2>
                    l'Atelier Photo Montpellier
                </h2>
            </header>

            {/* Container 2 : Navigation du Footer */}
            <nav className={style.ContainerNavFooter}>

                {/* Nav 1 : A propos */}
                <section className={style.SubContainerNavFooter}>
                    <header className={style.TitleNavFooter}>
                        <h3>
                            A propos
                        </h3>
                    </header>

                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Qui suis-je ?
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Me contacter
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 2 : Réseaux */}
                <section className={style.SubContainerNavFooter}>
                    <header className={style.TitleNavFooter}>
                        <h3>
                            Réseaux
                        </h3>
                    </header>

                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Instagram
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Facebook
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Youtube
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 3 : Politique & Termes */}
                <section className={style.SubContainerNavFooter}>
                    <header className={style.TitleNavFooter}>
                        <h3>
                            Politique & Termes
                        </h3>
                    </header>

                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                Mention légale
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                CGV
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="#">
                                CNIL
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>

            {/* Container 3 : Copyright */}
            <article className={style.ContainerCopyright}>
                <p className={style.Copyright}> 
                    <span className={style.DateLogPC}>
                        {dateNow === 2024 ? `©2024 ` : `©2024 - ${dateNow} `}
                    </span>
                     - l'Atelier Photo Montpellier. Tous droits réservés.
                </p>
            </article>
        </section>
    );
}

export default FooterPC;
