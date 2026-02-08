/* Import des modules CSS */
import style from "../../style.root.module.css";

function QuiSuisJe_Root() {
    return (
        <section className={`QuiSuisJe_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    Qui suis-je ?
                </h1>
            </header>
        </section>
    )
}

export default QuiSuisJe_Root;
