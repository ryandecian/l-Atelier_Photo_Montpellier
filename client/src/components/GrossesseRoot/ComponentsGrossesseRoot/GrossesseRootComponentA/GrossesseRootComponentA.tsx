import style from "../../../StyleRootComponent.module.css";
import css from "../../GrossesseStyleRoot.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesGrossesseControllerData from "../../ImagesGrossesseControllerData";

function GrossesseRootComponentA() {
    return (
        <section className={`GrossesseRootComponentA ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Une photo de grossesse ou de naissance, c’est bien plus qu’un souvenir"}
                </h2>
            </header>

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

            <Container4ImagesRoot
                img1={ImagesGrossesseControllerData[0].src}
                MetaNameImg1={ImagesGrossesseControllerData[0].alt}
                img2={ImagesGrossesseControllerData[1].src}
                MetaNameImg2={ImagesGrossesseControllerData[1].alt}
                img3={ImagesGrossesseControllerData[2].src}
                MetaNameImg3={ImagesGrossesseControllerData[2].alt}
                img4={ImagesGrossesseControllerData[3].src}
                MetaNameImg4={ImagesGrossesseControllerData[3].alt}
            />

            <article className={style.ContainerText}>
                <h3 className={css.TitleH3}>
                    {"Pourquoi choisir l’Atelier Photo Montpellier ?"}
                </h3>

                <p className={style.TextP4}>
                    Parce que je ne fais pas juste des photos, je crée un 
                    <span className={style.SpanBold}>
                        {" cocon visuel "}
                    </span>
                    autour de vous. <br />
                    Je vous accueille dans un cadre chaleureux (à domicile ou en studio), en prenant le temps d’écouter votre histoire, vos envies, 
                    vos appréhensions aussi. <br />
                    Mon objectif ? Que vous vous sentiez 
                    <span className={style.SpanBold}>
                        {" vous-mêmes. "}
                    </span>
                    Que vous puissiez 
                    <span className={style.SpanBold}>
                        {" respirer, sourire, être touchés, "}
                    </span>
                    sans vous forcer.
                </p>

                <p className={style.TextP4}>
                    Que ce soit pour une grossesse ou un nouveau-né, je propose un 
                    <span className={style.SpanBold}>
                        {" accompagnement complet : "}
                    </span>
                    choix du décor, suggestions de tenues, rythmes adaptés à votre énergie ou à celle de bébé.
                </p>

                <p className={style.TextP4}>
                    Chaque séance est pensée pour être 
                    <span className={style.SpanBold}>
                        {" douce, fluide et bienveillante."}
                    </span>
                </p>
            </article>
        </section>
    )
}

export default GrossesseRootComponentA;
