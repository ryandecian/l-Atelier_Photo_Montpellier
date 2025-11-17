import css from "./HomeRootComponentA.module.css";
import useMediaQueriesHeight_rem from "../../../../../hook/useMediaQueriesHeight_rem.utils.hook";

function HomeRootComponentA() {
    const viewportHeight: number = useMediaQueriesHeight_rem();

    return (
        <section className={`HomeRootComponentA ${css.ContainerAccueil}`}>
            <div className={css.ContainerSubAccueil}>

                {/* MediaQuery maison 450px */}
                {viewportHeight <= 28.125 && (
                    <>
                        <article className={css.ContainerSloganMobile}>
                            <p className={css.SloganMobile}>
                                {"DES PORTRAITS"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"QUI"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"PARLENT DE"}
                            </p>
                            <p className={css.SloganMobile}>
                                {"VOUS"}
                            </p>
                        </article>
                        <header className={css.ContainerTitleMobile}>
                            <h1>PHOTOGRAPHE DE PORTRAITS ET DE MARIAGE A MONTPELLIER</h1>
                        </header>
                    </>
                )}


                {/* MediaQuery maison 450px */}
                {viewportHeight > 28.125 && (
                    <>
                        <article className={css.ContainerSlogan}>
                            <p className={css.Slogan}>
                                {"DES PORTRAITS"}
                            </p>
                            <p className={css.Slogan}>
                                {"QUI"}
                            </p>
                            <p className={css.Slogan}>
                                {"PARLENT DE"}
                            </p>
                            <p className={css.Slogan}>
                                {"VOUS"}
                            </p>
                        </article>
                        <header className={css.ContainerTitle}>
                            <h1>Photographe et Vidéaste professionnelle pour contenus visuels à Montpellier</h1>
                        </header>
                    </>
                )}
            </div>
        </section>
    );
}

export default HomeRootComponentA;
