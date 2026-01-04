/* Import des modules CSS */
import style from "../../style.root.module.css";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <h1>Bienvenue chez Kaleidopix</h1>
            <p>Votre destination pour des services photographiques professionnels.</p>
        </section>
    )
}

export default Home_Root;
