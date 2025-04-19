import style from "../../../StyleRootComponent.module.css";
import css from "../PortraitSoloStyleRoot.module.css";
import { LinkExt } from "../../../../router/router";
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
                <br />
            </article>

            <article className={style.ContainerText}>
                <h3 className={style.TitleH2}>
                    Un accompagnement complet et bienveillant
                </h3>

                <h4 className={css.TitleH4}>
                    Une séance sur-mesure, sans pression
                </h4>
                <p className={style.TextP4}>
                    📍 Au studio à Montpellier ou en lumière naturelle, selon vos envies.
                </p>

                <h4 className={css.TitleH4}>
                    Un lieu rassurant ou un extérieur inspirant
                </h4>
                <p className={style.TextP4}>
                    🎯 On avance à votre rythme, en jouant avec les postures, la lumière, les émotions.
                </p>

                <h4 className={css.TitleH4}>
                    Direction naturelle et mise en confiance
                </h4>
                <p className={style.TextP4}>
                    💬 Même si vous n’aimez pas l’objectif, je vous guide pas à pas, toujours dans la bienveillance.
                </p>

                <h4 className={css.TitleH4}>
                    Des images qui vous font du bien
                </h4>
                <p className={style.TextP4}>
                    📸 Sélection de 10 à 20 photos retouchées avec soin, livrées en galerie privée
                </p>
                <br />
            </article>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Prêt(e) à vous (re)découvrir avec douceur et vérité ?"}
                </span>
            </p>
            
            <p className={style.TextP4}>
                <span className={`${style.SpanLink} ${css.SpanLink}`}>
                    <a href={LinkExt.phoneAnne}>
                        📲 Réserver ma séance Feel Good
                    </a>
                </span>
                <br />
                <span className={`${style.SpanLink} ${css.SpanLink}`}>
                    <a href={LinkExt.emailAnne}>
                        💬 Discuter de mes envies avec Anne
                    </a>
                </span>
            </p>
        </section>
    )
}

export default PortraitSoloRootComponentB;
