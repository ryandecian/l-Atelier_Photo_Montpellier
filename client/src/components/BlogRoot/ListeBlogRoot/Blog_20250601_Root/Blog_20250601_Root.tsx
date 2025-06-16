import style from "../../../StyleRootComponent.module.css";
// import ListDataRouter from "../../../../router/router";
// import { Link } from "react-router-dom";

import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesBlog_20250601_RootControllerData from "./ImagesBlog_20250601_RootControllerData";

function Blog_20250601_Root() {
    return (
        <section id="blog_20250601" className={`Blog_20250601_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photographie de Mariage en Style Reportage : L’Art de Capturer l’Authentique`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Le jour de votre mariage est unique. Il passe à toute vitesse, entre les préparatifs, les émotions, les 
                retrouvailles et les fous rires. Pour garder un souvenir véritable de cette journée, de plus en plus de 
                couples font le choix d’un photographe de mariage en style reportage. Mais qu’est-ce que cela signifie 
                vraiment ? Quels sont les avantages concrets de cette approche, et pourquoi pourrait-elle être faite pour 
                vous ?
            </p>

            <p className={style.TextP4}>
                Dans cet article, je vous explique tout sur ce style naturel et sincère, à travers mon regard de 
                photographe professionnelle à Montpellier.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Qu'est-ce que la photographie de mariage en style reportage ?`}
            </h2>

            <Container4ImagesRoot
                img1={ImagesBlog_20250601_RootControllerData[0].src}
                MetaNameImg1={ImagesBlog_20250601_RootControllerData[0].alt}
                img2={ImagesBlog_20250601_RootControllerData[1].src}
                MetaNameImg2={ImagesBlog_20250601_RootControllerData[1].alt}
                img3={ImagesBlog_20250601_RootControllerData[2].src}
                MetaNameImg3={ImagesBlog_20250601_RootControllerData[2].alt}
                img4={ImagesBlog_20250601_RootControllerData[3].src}
                MetaNameImg4={ImagesBlog_20250601_RootControllerData[3].alt}
            />

            <p className={style.TextP4}>
                La photographie de mariage en style reportage, aussi appelée "documentaire", consiste à raconter l’histoire 
                du jour J sans poser ni diriger constamment les mariés ou leurs invités. C’est une approche discrète, qui 
                capture les instants tels qu’ils se présentent, sur le vif.
            </p>

            <p className={style.TextP4}>
                Contrairement à une séance photo traditionnelle où chaque image est construite, le style reportage 
                privilégie l’émotion, l’imprévu, le mouvement, le naturel.
            </p>

            <h3 className={style.TitleNH3}>
                Quelques caractéristiques du style reportage :
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Photos prises sur le moment, sans mise en scène
                </li>
                <li className={style.TextLiP4}>
                    Émotions réelles, sans surjeu
                </li>
                <li className={style.TextLiP4}>
                    Récit visuel chronologique de la journée
                </li>
                <li className={style.TextLiP4}>
                    Lumière et ambiance naturelles
                </li>
                <li className={style.TextLiP4}>
                    Interaction minimale du photographe
                </li>
                <br />
            </ul>

            <p className={style.TextP4}>
                Ce style est idéal pour les couples qui souhaitent vivre pleinement leur journée sans se sentir observés 
                ou mis en situation.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleNH2}>
                {`Les avantages du style reportage pour votre mariage`}
            </h2>

            <h3 className={style.TitleNH3}>
                {`Vivre pleinement l’instant présent`}
            </h3>

            <Container4ImagesRoot
                img1={ImagesBlog_20250601_RootControllerData[4].src}
                MetaNameImg1={ImagesBlog_20250601_RootControllerData[4].alt}
                img2={ImagesBlog_20250601_RootControllerData[5].src}
                MetaNameImg2={ImagesBlog_20250601_RootControllerData[5].alt}
                img3={ImagesBlog_20250601_RootControllerData[6].src}
                MetaNameImg3={ImagesBlog_20250601_RootControllerData[6].alt}
                img4={ImagesBlog_20250601_RootControllerData[7].src}
                MetaNameImg4={ImagesBlog_20250601_RootControllerData[7].alt}
            />

            <p className={style.TextP4}>
                L’avantage premier de ce style, c’est qu’il vous permet d’être pleinement présents le jour de votre 
                mariage. Pas besoin de vous interrompre pour poser ou pour changer de lieu toutes les 10 minutes.
            </p>

            <p className={style.TextP4}>
                Le photographe est là, mais sans vous accaparer. Vous vivez, vous échangez, vous ressentez. Et tout 
                cela est capturé naturellement.
            </p>

            <h3 className={style.TitleNH3}>
                {`Des souvenirs réels, fidèles à votre journée`}
            </h3>

            <p className={style.TextP4}>
                Les images issues d’un reportage sont souvent chargées d’émotions. Un regard complice, une larme 
                d’émotion, un fou rire entre amis... Ces petits riens sont les grandes choses de votre journée, et 
                ce sont souvent ces images qui résonnent le plus fort dans les années à venir.
            </p>

            <p className={style.TextP4}>
                Les photos ne sont pas figées dans une pose : elles vivent.
            </p>

            <h3 className={style.TitleNH3}>
                {`Une ambiance naturelle et chaleureuse`}
            </h3>

            <p className={style.TextP4}>
                Le style reportage respecte l’ambiance de votre mariage. Que vous soyez en pleine nature, dans une 
                salle chic ou en bord de mer, la lumière naturelle, les couleurs et les décors sont capturés tels 
                quels, sans filtres excessifs ni mises en scène artificielles.
            </p>

            <p className={style.TextP4}>
                Vous gardez une trace de votre journée, pas d’un mariage standardisé.
            </p>

            <h3 className={style.TitleNH3}>
                {`Idéal pour les couples qui n'aiment pas poser`}
            </h3>

            <p className={style.TextP4}>
                Vous n’êtes pas à l’aise devant l’objectif ? Le style reportage est fait pour vous.
            </p>

            <p className={style.TextP4}>
                Le photographe devient un observateur attentif, pas un metteur en scène. Vous pouvez être vous-mêmes, 
                sans pression, sans devoir "réussir" une photo. C’est le photographe qui s’adapte à vous, pas l’inverse.
            </p>

            <p className={style.TextP4}></p>
        </section>
    );
}

export default Blog_20250601_Root;
