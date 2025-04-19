import style from "../../../StyleRootComponent.module.css";
import css from "../PortraitSoloStyleRoot.module.css"
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitSoloControllerData from "../../ImagesPortraitSoloControllerData";

function PortraitSoloRootComponentB() {
    return (
        <section className={style.ContainerRoot}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Envie de reprendre le pouvoir sur votre image ?
                </h2>
            </header>

            <p className={style.TextP4}>
                Je propose des séances sur mesure, pensées pour faire ressortir le meilleur de vous. <br />
                Avant la séance, on définit ensemble le style visuel qui vous attire : minimaliste ? lumineux ? créatif ? brut ? <br />
                Je vous donne aussi des 
                <span className={style.SpanBold}>
                    {" conseils de tenues et d’attitudes "}
                </span>
                pour que vous vous sentiez bien le jour J.
            </p>

            <Container4ImagesRoot
                img1={ImagesPortraitSoloControllerData[4].src}
                MetaNameImg1={ImagesPortraitSoloControllerData[4].alt}
                img2={ImagesPortraitSoloControllerData[5].src}
                MetaNameImg2={ImagesPortraitSoloControllerData[5].alt}
                img3={ImagesPortraitSoloControllerData[6].src}
                MetaNameImg3={ImagesPortraitSoloControllerData[6].alt}
                img4={ImagesPortraitSoloControllerData[7].src}
                MetaNameImg4={ImagesPortraitSoloControllerData[7].alt}
            />

            <article className={style.ContainerText}>
                <br />
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Portrait solo Feel Good – c’est pour vous si :"}
                    </span>
                </p>

                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        Vous n’aimez jamais les photos de vous, mais vous aimeriez changer ça ?
                    </li>
                    <li className={style.TextLiP4}>
                        Vous traversez une étape (pro/perso) et souhaitez marquer ce moment ?
                    </li>
                    <li className={style.TextLiP4}>
                        Vous avez besoin de vous reconnecter à votre confiance, à votre beauté ?
                    </li>
                    <li className={style.TextLiP4}>
                        Vous avez juste envie d’un beau souvenir, pour vous, pour toujours ?
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default PortraitSoloRootComponentB;
