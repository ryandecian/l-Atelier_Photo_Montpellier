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
                            <Link to="qui-suis-je">
                                Qui suis-je ?
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="contacts">
                                Me contacter
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="portfolio">
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
                            <a href="https://www.instagram.com/atelier_photo_montpellier" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                Youtube
                            </a>
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
                            <Link to="mentions-legales">
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="cgv">
                                CGV
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.UlText}>
                        <li className={style.LiTextLink}>
                            <Link to="faq">
                                FAQ
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
