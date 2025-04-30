import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";

function GrossesseRootComponentA() {
    return (
        <section className={`GrossesseRootComponentA ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Une photo de grossesse ou de naissance, c’est bien plus qu’un souvenir"}
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Une séance grossesse ou nouveau-né, c’est une parenthèse. <br />
                    Un temps suspendu pour capter ce qui est en train de se créer : un lien, une attente, un amour déjà immense.
                </p>

                <p className={style.TextP4}>
                    Photographier ces instants, c’est offrir à votre histoire une mémoire visuelle, douce, sincère et respectueuse. <br />
                    Pas de poses figées, pas de mise en scène caricaturale : je vous propose des images vivantes, simples et délicates, où vous pourrez vous reconnaître.
                </p>

                <p className={style.TextP4}>
                    Ce sont des photos que vous aurez plaisir à transmettre, à revoir, à encadrer. Des images qui traversent le temps, à hauteur de cœur.
                </p>

                <Container4ImagesRoot />
            </article>
        </section>
    )
}

export default GrossesseRootComponentA;
