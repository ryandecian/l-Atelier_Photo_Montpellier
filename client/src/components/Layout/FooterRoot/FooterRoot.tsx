import css from "./FooterRoot.module.css";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../router/router";
import externalLinks from "../../../constants/externalLinks";

function FooterRoot() {

    const dateNow = new Date().getFullYear();

    return (
        <section className={css.FooterRoot}>

            {/* Container 1 : Title du Footer */}
            <header className={css.TitleFooter}>
                <h2>
                    l'Atelier Photo Montpellier
                </h2>
            </header>

            {/* Container 2 : Navigation du Footer */}
            <nav className={css.ContainerNavFooter}>

                {/* Nav 1 : A propos */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3>
                            A propos
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[7].path}#top`}>
                                Qui suis-je ?
                            </Link>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[8].path}#top`}>
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[4].path}#top`}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 2 : Réseaux */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3>
                            Réseaux
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <a href={externalLinks.youtube} target="_blank" rel="noopener noreferrer">
                                Youtube
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Nav 3 : Politique & Termes */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3>
                            Politique & Termes
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[3].path}#top`}>
                                Me contacter
                            </Link>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[1].path}#top`}>
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${ListDataRouter[9].path}#top`}>
                                CGV
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>

            {/* Container 3 : Copyright */}
            <article className={css.ContainerCopyright}>
                <p className={css.Copyright}> 
                    <span className={css.DateLogPC}>
                        {dateNow === 2024 ? `©2024 ` : `©2024 - ${dateNow} `}
                    </span>
                     - l'Atelier Photo Montpellier. Tous droits réservés.
                </p>
            </article>
        </section>
    );
}

export default FooterRoot;
