/* Import des modules CSS */
import css from "./home_A.module.css";

/* Import des Hooks */
import { useMediaQueriesHeight_rem_Hook } from "../../../../hook/useMediaQueriesHeight_rem.hook";

function Home_A_Component() {
    const viewportHeight: number = useMediaQueriesHeight_rem_Hook();

    return (
        <section className={`Home_A_Component ${css.ContainerAccueil}`}>
            <div className={css.ContainerSubAccueil}>

                {/* MediaQuery maison 450px */}
                {viewportHeight <= 28.125 && (
                    <>
                        <article className={css.ContainerSloganMobile}>
                            <p className={css.SloganMobile}>
                                {"RETENIR"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"CET"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"INSTANT"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"TEST"}
                            </p>
                        </article>
                        <header className={css.ContainerTitleMobile}>
                            <h1>
                                Photographe de Mariage à Montpellier <br />
                                - Professionnel - Tarifs -
                            </h1>
                        </header>
                    </>
                )}


                {/* MediaQuery maison 450px */}
                {viewportHeight > 28.125 && (
                    <>
                        <article className={css.ContainerSlogan}>
                            <p className={css.Slogan}>
                                {"RETENIR"}
                            </p>
                            <p className={css.Slogan}>
                                {"CET"}
                            </p>
                            <p className={css.Slogan}>
                                {"INSTANT"}
                            </p>
                            {/* <p className={css.Slogan}>
                                {"VOUS"}
                            </p> */}
                        </article>
                        <header className={css.ContainerTitle}>
                            <h1>
                                Photographe de Mariage à Montpellier <br />
                                - Professionnel - Tarifs -
                            </h1>
                        </header>
                    </>
                )}
            </div>
        </section>
    );
}

export { Home_A_Component };
