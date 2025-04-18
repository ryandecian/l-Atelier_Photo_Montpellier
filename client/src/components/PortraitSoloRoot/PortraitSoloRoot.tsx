import style from "../StyleRootComponent.module.css";

function PortraitSoloRoot() {
    return (
        <section className={`PortraitSoloRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Solo : Une séance photos pour renouer avec votre image !
                </h1>
            </header>
        </section>
    )
}

export default PortraitSoloRoot;
