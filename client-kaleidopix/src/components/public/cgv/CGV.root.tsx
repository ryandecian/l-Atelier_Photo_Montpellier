/* Import des modules CSS */
import style from "../../style.root.module.css";

function CGV_Root() {
    return (
        <section className={`CGV_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    {`CONDITIONS GÉNÉRALES DE VENTE (CGV) - Kaleidopix`}
                </h1>
            </header>
        </section>
    )
}

export default CGV_Root;
