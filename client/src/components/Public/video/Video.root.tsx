/* Import des modules CSS */
import css from "./video.module.css";
import style from "../../StyleRootComponent.module.css";


function Video_Page() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={css.Title_Video}>Vidéo</h1>
            </header>
        </section>
    );
}

export default Video_Page;
