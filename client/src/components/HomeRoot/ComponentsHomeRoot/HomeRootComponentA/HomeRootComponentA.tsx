import css from "./HomeRootComponentA.module.css";
// import style from "../../../StyleRootComponent.module.css";
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
            {viewportHeight <= 400 && (
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


            {/* MediaQuery maison */}
            {viewportHeight > 400 && (
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
