import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitGrossesseControllerData from "../../ImagesPortraitGrossesseControllerData";

function PortraitGrossesseRootComponentA() {
    return (
        <section className={`PortraitGrossesseRootComponentA ${style.ContainerRoot}`}>
                <h2 className={style.TitleH2}>
                    {"Une photo de grossesse ou de naissance, c’est bien plus qu’un souvenir ..."}
                </h2>

            <p className={style.TextP4}>
                Une séance grossesse ou nouveau-né, c’est une parenthèse. <br />
                Un temps suspendu pour 
                <span className={style.SpanBold}>
                    {" capter ce qui est en train de se créer : "}
                </span> un lien, une attente, un amour déjà immense.
            </p>

            <p className={style.TextP4}>
                Photographier ces instants, c’est 
                <span className={style.SpanBold}>
                    {" offrir à votre histoire une mémoire visuelle, "}
                </span> douce, sincère et respectueuse. <br />
                Pas de poses figées, pas de mise en scène caricaturale : je vous propose des images vivantes, simples et délicates, 
                où vous pourrez vous reconnaître.
            </p>

            <p className={style.TextP4}>
                Ce sont des photos que vous aurez plaisir 
                <span className={style.SpanBold}>
                    {" à transmettre, à revoir, à encadrer. "}
                </span> Des images qui traversent le 
                temps, à hauteur de cœur.
            </p>

            <Container4ImagesRoot
                img1={ImagesPortraitGrossesseControllerData[0].src}
                MetaNameImg1={ImagesPortraitGrossesseControllerData[0].alt}
                img2={ImagesPortraitGrossesseControllerData[1].src}
                MetaNameImg2={ImagesPortraitGrossesseControllerData[1].alt}
                img3={ImagesPortraitGrossesseControllerData[2].src}
                MetaNameImg3={ImagesPortraitGrossesseControllerData[2].alt}
                img4={ImagesPortraitGrossesseControllerData[3].src}
                MetaNameImg4={ImagesPortraitGrossesseControllerData[3].alt}
            />

                <h3 className={style.TitleNH3}>
                    {"Pourquoi choisir l’Atelier Photo Montpellier ?"}
                </h3>

                <p className={style.TextP4}>
                    Parce que je ne fais pas juste des photos, je crée un 
                    <span className={style.SpanBold}>
                        {" cocon visuel "}
                    </span>
                    autour de vous. <br />
                    Je vous accueille dans un studio chaleureux, ou je me déplace à votre domicile en prenant le temps d’écouter 
                    votre histoire, vos envies, 
                    vos appréhensions aussi. <br />
                    Mon objectif ? Que vous vous sentiez 
                    <span className={style.SpanBold}>
                        {" vous-même. "}
                    </span>
                    Que vous puissiez 
                    <span className={style.SpanBold}>
                        {" respirer, sourire, être touché, "}
                    </span>
                    sans vous forcer.
                </p>

                <p className={style.TextP4}>
                    Que ce soit pour une Grossesse ou un nouveau-né, je propose un 
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
        </section>
    )
}

export default PortraitGrossesseRootComponentA;
