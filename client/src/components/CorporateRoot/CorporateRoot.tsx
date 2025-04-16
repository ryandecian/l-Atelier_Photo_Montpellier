import style from "../StyleRootComponent.module.css";

function CorporateRoot() {
    return (
        <section className={`CorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    L'importance de votre signature visuelle : bien plus qu'une simple photo !
                </h1>
            </header>
        </section>
    )
}

export default CorporateRoot;
