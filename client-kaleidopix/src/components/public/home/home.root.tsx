/* Import des modules CSS */
import style from "../../style.root.module.css";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Bienvenue chez Kaleidopix
                </h1>
            </header>
            <p className={style.TextP4}>Votre destination pour des services photographiques professionnels.</p>
        </section>
    )
}

export default Home_Root;
