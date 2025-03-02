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

                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Qui suis-je ?
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Me contacter
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Portfolio
                            </Link>
                        </p>
                    </article>
                </section>

                {/* Nav 2 : Réseaux */}
                <section className={style.SubContainerNavFooter}>
                    <header className={style.TitleNavFooter}>
                        <h3>
                            Réseaux
                        </h3>
                    </header>

                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Instagram
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Facebook
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Youtube
                            </Link>
                        </p>
                    </article>
                </section>

                {/* Nav 3 : Politique & Termes */}
                <section className={style.SubContainerNavFooter}>
                    <header className={style.TitleNavFooter}>
                        <h3>
                            Politique & Termes
                        </h3>
                    </header>

                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                Mention légale
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                CGV
                            </Link>
                        </p>
                    </article>
                    <article className={style.ArticleText}>
                        <p className={style.TextLink}>
                            <Link to="#">
                                CNIL
                            </Link>
                        </p>
                    </article>
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
