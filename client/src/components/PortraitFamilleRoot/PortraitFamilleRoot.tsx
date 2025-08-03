import style from "../StyleRootComponent.module.css";

import Container4ImagesRoot from "../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitFamilleControllerData from "./ImagesPortraitFamilleControllerData";

import { Link } from "react-router-dom";
import ListDataRouter from "../../router/router";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitFamilleControllerData from "./AvisClientPortraitFamilleControllerData";

import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitFamille, MailtoLinkPortraitFamille } from "./TarifsPortraitFamille";

function PortraitFamilleRoot() {

    return (
        <section className={`PortraitFamilleRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Famille - Amis : Créez des souvenirs précieux avec ceux que vous aimez."}
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                {"Offrez-vous une séance photo en famille, entre amis ou en groupe pour des souvenirs authentiques."}
            </h2>

            <h3 className={style.TitleLNH3}>
                💞 Ces instants qui ne reviendront pas
            </h3>

            <p className={style.TextP4}>
                Un regard de fierté pendant une remise de diplôme. <br />
                Un baiser volé sur le front d’un enfant baptisé. <br />
                Une robe ou un costume pour le bal de fin d’année, un sourire timide, un papa ému dans un coin.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Ces moments-là, ils passent vite, "}
                </span> trop vite. <br />
                Et pourtant, ils marquent toute une vie. <br />
                <span className={style.SpanBold}>
                    {"Alors pourquoi ne pas les garder, "}
                </span> vraiment ?
            </p>

            <p className={style.TextP4}>
                Chez L’Atelier Photo Montpellier, je vous propose de figer ces instants précieux, de les transformer en 
                <span className={style.SpanBold}>
                    {" souvenirs vivants, "}
                </span>
                que vous regarderez ensemble, plus tard.
            </p>

            <Container4ImagesRoot
                img1={ImagesPortraitFamilleControllerData[0].src}
                MetaNameImg1={ImagesPortraitFamilleControllerData[0].alt}
                img2={ImagesPortraitFamilleControllerData[1].src}
                MetaNameImg2={ImagesPortraitFamilleControllerData[1].alt}
                img3={ImagesPortraitFamilleControllerData[2].src}
                MetaNameImg3={ImagesPortraitFamilleControllerData[2].alt}
                img4={ImagesPortraitFamilleControllerData[3].src}
                MetaNameImg4={ImagesPortraitFamilleControllerData[3].alt}
            />

            <h3 className={style.TitleNH3}>
                {"🌿 Photographier les étapes de la vie, ensemble"}
            </h3>

            <h4 className={style.TitleNH4}></h4>

            <p className={style.TextLiP4}>
                Quelques exemples de ces moments clés :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Baptême : "}
                    </span>
                    dans l’église ou juste après, entre émotion et câlins de famille.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Remise de diplôme : "}
                    </span>
                    les yeux brillants, la toge, les embrassades de fin de parcours.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Bal de fin d’année : "}
                    </span>
                    l’élégance d’un soir, les premiers souvenirs d’adulte.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Anniversaire marquant : "}
                    </span>
                    1 an, 18 ans, 40 ans, 70 ans... chaque âge a son éclat.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Déménagement : "}
                    </span>
                    pour marquer le début d’une nouvelle aventure.
                </li>
            </ul>
        
            <p className={style.TextP4}>
                Ces rendez-vous sont autant d’occasions de rassembler plusieurs générations autour d’un même moment. Et de créer un
                <span className={style.SpanBold}>
                    {" album émotionnel "}
                </span>
                que vos enfants ou vos parents ou vos petits-enfants feuilletteront plus tard.
            </p>

            <h2 className={style.TitleH2}>
                {"Un portrait pour rassembler les générations et célébrer les liens de famille."}
            </h2>

            <p className={style.TextP4}>
                Chez L’Atelier Photo Montpellier, je crée des images qui racontent
                <span className={style.SpanBold}>
                    {" votre histoire de famille."}
                </span> <br />
                Je travaille souvent avec plusieurs générations réunies : des grands-parents aux petits-enfants, des fratries aux jeunes adultes prêts à quitter le nid.
            </p>

            <p className={style.TextP4}>
                L’objectif ? 
                <span className={style.SpanBold}>
                    {" Garder le souvenir et les moments de ceux qui comptent."}
                </span> <br />
                C’est dans ces échanges, souvent silencieux, que naissent les images les plus fortes.
            </p>

            <Container4ImagesRoot
                img1={ImagesPortraitFamilleControllerData[4].src}
                MetaNameImg1={ImagesPortraitFamilleControllerData[4].alt}
                img2={ImagesPortraitFamilleControllerData[5].src}
                MetaNameImg2={ImagesPortraitFamilleControllerData[5].alt}
                img3={ImagesPortraitFamilleControllerData[6].src}
                MetaNameImg3={ImagesPortraitFamilleControllerData[6].alt}
                img4={ImagesPortraitFamilleControllerData[7].src}
                MetaNameImg4={ImagesPortraitFamilleControllerData[7].alt}
            />

            <h3 className={style.TitleH2}>
                {"Un accompagnement complet et bienveillant"}
            </h3>

            <h4 className={style.TitleNH4}>
                {"Une séance sur-mesure, sans pression"}
            </h4>
            <p className={style.TextP4}>
                📍 Au studio à Montpellier ou en lumière naturelle, selon vos envies.
            </p>

            <h4 className={style.TitleNH4}>
                {"Un lieu rassurant ou un extérieur inspirant"}
            </h4>
            <p className={style.TextP4}>
                🎯 On avance à votre rythme, en jouant avec les postures, la lumière, les émotions.
            </p>

            <h4 className={style.TitleNH4}>
                {"Direction naturelle et mise en confiance"}
            </h4>
            <p className={style.TextP4}>
                💬 Même si vous n’aimez pas l’objectif, je vous guide pas à pas, toujours dans la bienveillance.
            </p>

            <h4 className={style.TitleNH4}>
                {"Des images uniques et authentiques"}
            </h4>
            <p className={style.TextP4}>
                📸 Sélection de 5 à 15 photos retouchées avec soin, livrées en galerie privée
            </p>

            <h3 className={style.TitleNH3R}>
                {"📷 Une séance, concrètement, c’est quoi ?"}
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" On échange : "}
                    </span>
                    Que voulez-vous raconter ? Quels moments marquants ?
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" On planifie : "}
                    </span>
                    Je vous aide à choisir le bon lieu, les tenues, le meilleur moment.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" On vit l’instant : "}
                    </span>
                    Vous profitez. Je capte les gestes tendres, les rires discrets, les grands yeux émus.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" On revit ensemble : "}
                    </span>
                    Une galerie privée, des images retouchées avec soin, la possibilité de créer un 
                    <span className={style.SpanBold}>
                        {" album à transmettre."}
                    </span>
                </li>
            </ul>

            <h3 className={style.TitleNH3}>
                {"📍 Montpellier & alentours – Des lieux remplis d’histoires"}
            </h3>

            <p className={style.TextP4}>
            Je vous accueille à Montpellier, mais je me déplace aussi dans toute la région : Palavas, Clapiers, Lattes, Castelnau-le-Lez, 
                Saint-Jean-de-Védas, Grabels… <br />
                Je vous propose des 
                <span className={style.SpanBold}>
                    {" lieux calmes, naturels, "}
                </span>
            adaptés aux petits comme aux anciens. Mon but : capter l’essence de votre lien, sans jamais forcer.
            </p>

            <h2 className={style.TitleH2}>
                {"Et si vous vous offriez un instant rien qu’à vous – On en parle ensemble ?"}
            </h2>

            <p className={style.TextP4}>
                Un portrait, c’est bien plus qu’une image. C’est un moment pour se (re)découvrir, se révéler, s’honorer. <br />
                Que ce soit pour marquer un cap, célébrer une étape ou simplement se faire plaisir… <br />
                <br />
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[3].path}>
                        Parlons de ce que vous aimeriez capturer pour que votre lumière vous ressemble.
                    </Link>
                </span>
            </p>

            {/* Tarifs des prestations : Portrait Famille */}
            <TarifCardRoot id="tarifs-portrait-famille" tarifs={TarifsPortraitFamille} mailtoLink={MailtoLinkPortraitFamille} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitFamilleControllerData} />
        </section>
    )
}

export default PortraitFamilleRoot;
