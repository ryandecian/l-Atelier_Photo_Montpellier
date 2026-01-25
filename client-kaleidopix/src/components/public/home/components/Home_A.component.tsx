/* Import des modules CSS */
import css from "./home_A.module.css";

/* Import des Hooks */
import useMediaQueriesHeight_rem from "../../../../hook/useMediaQueriesHeight_rem.utils.hook";

function Home_A_Component() {
    const viewportHeight: number = useMediaQueriesHeight_rem();

    return (
        <section className={`Home_A_Component ${css.ContainerAccueil}`}>
            <div className={css.ContainerSubAccueil}>

                {/* MediaQuery maison 450px */}
                {viewportHeight <= 28.125 && (
                    <>
                        <article className={css.ContainerSloganMobile}>
                            <p className={css.SloganMobile}>
                                {"PHOTOS ET VIDÉOS"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"POUR"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"ENTREPRISES"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"DANS L'HERAULT"}
                            </p>
                        </article>
                        <header className={css.ContainerTitleMobile}>
                            <h1>Images Photo & Vidéo pour Entreprises à Montpellier</h1>
                        </header>
                    </>
                )}


                {/* MediaQuery maison 450px */}
                {viewportHeight > 28.125 && (
                    <>
                        <article className={css.ContainerSlogan}>
                            <p className={css.Slogan}>
                                {"PHOTOS ET VIDÉOS"}
                            </p>
                            <p className={css.Slogan}>
                                {"POUR"}
                            </p>
                            <p className={css.Slogan}>
                                {"LES"}
                            </p>
                            <p className={css.Slogan}>
                                {"ENTREPRISES"}
                            </p>
                        </article>
                        <header className={css.ContainerTitle}>
                            <h1>Photographe et Vidéaste professionnelle à Montpellier</h1>
                        </header>
                    </>
                )}
            </div>
        </section>
    );
}

export { Home_A_Component };
