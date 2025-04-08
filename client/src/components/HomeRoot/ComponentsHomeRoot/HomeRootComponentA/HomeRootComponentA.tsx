import css from "./HomeRootComponentA.module.css";
import { useState, useEffect } from "react";

function HomeRootComponentA() {
    const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const updateHeight = () => {
          setViewportHeight(window.innerHeight);
        };
    
        // Ajout de l'écouteur d'événements pour la redimensionnement de la fenêtre
        window.addEventListener("resize", updateHeight);
    
        // Nettoyage lors du démontage du composant
        return () => {
          window.removeEventListener("resize", updateHeight);
        };
    }, []);
    return (
        <section className={css.ContainerAccueil}>
            <div className={css.ContainerSubAccueil}>

            {/* MediaQuery maison */}
            {viewportHeight <= 450 && (
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
                            {"VOUS"} {viewportHeight}
                        </p>
                    </article>
                    <header className={css.ContainerTitleMobile}>
                        <h1>PHOTOGRAPHE DE PORTRAITS ET DE MARIAGE A MONTPELLIER</h1>
                    </header>
                </>
            )}


            {/* MediaQuery maison */}
            {viewportHeight > 450 && (
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
                        <h1>PHOTOGRAPHE DE PORTRAITS ET DE MARIAGE A MONTPELLIER</h1>
                    </header>
                </>
            )}
            </div>
        </section>
    );
}

export default HomeRootComponentA;
