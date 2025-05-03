import style from "../../../StyleRootComponent.module.css";
import css from "../../GrossesseStyleRoot.module.css";

function GrossesseRootComponenetC() {
    return (
        <article className={`GrossesseRootComponentC ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Un service clé en main : douceur, organisation et qualité"}
                </h2>
            </header>

            <h3 className={css.TitleH4}>
                {"Séance pensée pour vous mettre à l’aise"}
            </h3>
        </article>
    )
}

export default GrossesseRootComponenetC;
