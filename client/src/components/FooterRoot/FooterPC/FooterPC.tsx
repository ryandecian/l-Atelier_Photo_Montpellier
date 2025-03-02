import style from "./FooterPC.module.css";
import { Link } from "react-router-dom";

function FooterPC() {
    return (
        <section className={style.FooterPC}>

            {/* Container 1 : Title du Footer */}
            <header className={style.TitleFooter}>
                <h2>
                    l'Atelier Photo Montpellier
                </h2>
            </header>

            {/* Container 2 : Navigation du Footer */}
            <div className={style.ContainerNavFooter}>

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
            </div>
        </section>
    );
}

export default FooterPC;