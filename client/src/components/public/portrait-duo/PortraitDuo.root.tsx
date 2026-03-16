/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";

/* Import des Components de Data */
import { avisClientPortraitDuo_Data } from "./avisClientPortraitDuo.data";
import { imagesPortraitDuo_Data } from "./imagesPortraitDuo.data";
import { tarifsPortraitDuo_Data, mailtoLinkPortraitDuo_Data } from "./tarifsPortraitDuo.data";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

function PortraitDuo_Root() {
    return (
        <section className={`PortraitDuo_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Duo et Couple : Immortalisez votre complicité avec authenticité"}
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                {"Parce que chaque duo a son histoire, offrez-vous un portrait fidèle à votre complicité"}
            </h2>

            <p className={style.TextP4}>
                Un portrait de couple, ce n’est pas seulement une jolie photo à deux. <br />
                C’est un 
                <span className={style.SpanBold}>
                    {" instant suspendu, "}
                </span>
                une respiration dans votre quotidien bien rempli, une façon de 
                <span className={style.SpanBold}>
                    {" vous (re)voir autrement, "}
                </span>
                ensemble.
            </p>

            <p className={style.TextP4}>
                Rires complices, gestes tendres, regards pleins de sous-entendus... <br />
                Je photographie 
                <span className={style.SpanBold}>
                    {" ce qui existe déjà entre vous, "}
                </span>
                sans filtres, sans caricature, dans une ambiance douce, vraie et sans pression.
            </p>

            <Container4Images_Element
                img1={imagesPortraitDuo_Data[0].src}
                metaNameImg1={imagesPortraitDuo_Data[0].alt}
                img2={imagesPortraitDuo_Data[1].src}
                metaNameImg2={imagesPortraitDuo_Data[1].alt}
                img3={imagesPortraitDuo_Data[2].src}
                metaNameImg3={imagesPortraitDuo_Data[2].alt}
                img4={imagesPortraitDuo_Data[3].src}
                metaNameImg4={imagesPortraitDuo_Data[3].alt}
            />

            <h3 className={style.TitleNH3}>
                {"Pourquoi faire appel à l’Atelier Photo Montpellier ?"}
            </h3>

            <p className={style.TextP4}>
                Parce que je ne cherche pas à faire "poser" les couples. <br />
                Je crée 
                <span className={style.SpanBold}>
                    {" une bulle de confiance et d’intimité, "}
                </span>
                où vous pourrez simplement être vous-mêmes. <br />
                Avant la séance, on prend le temps d’échanger sur 
                <span className={style.SpanBold}>
                    {" ce qui vous lie, ce que vous voulez garder en image : "}
                </span>
                douceur ? force ? joie ? pudeur ?
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Que ce soit en studio ou en extérieur, "}
                </span>
                je mets tout en œuvre pour que l’expérience soit aussi belle que les images.
            </p>

            <p className={style.TextP4}>
                🎯 Résultat : un reportage visuel sensible, fidèle à votre lien.
            </p>

            <h2 className={style.TitleH2}>
                {"Envie d’un portrait de couple qui a du sens ?"}
            </h2>

            <p className={style.TextP4}>
                Avant de déclencher l’appareil, on échange sur votre histoire, votre dynamique, ce que vous aimez faire à deux. <br />
                Je vous propose un lieu adapté : un décor sobre au studio, un coin de nature autour de Montpellier, ou même chez vous si vous le souhaitez.
            </p>

            <p className={style.TextP4}>
                Nous définissons ensemble 
                <span className={style.SpanBold}>
                    {" l’ambiance visuelle : "}
                </span>
                lumineux et spontané, doux et minimaliste, cinématographique ? <br />
                Puis on crée ce moment rien qu’à vous, loin des clichés, proche de vous.
            </p>

            <Container4Images_Element
                img1={imagesPortraitDuo_Data[4].src}
                metaNameImg1={imagesPortraitDuo_Data[4].alt}
                img2={imagesPortraitDuo_Data[5].src}
                metaNameImg2={imagesPortraitDuo_Data[5].alt}
                img3={imagesPortraitDuo_Data[6].src}
                metaNameImg3={imagesPortraitDuo_Data[6].alt}
                img4={imagesPortraitDuo_Data[7].src}
                metaNameImg4={imagesPortraitDuo_Data[7].alt}
            />

            <h3 className={style.TitleNH3}>
                {"🧡 Ce portrait est pour vous si..."}
            </h3>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"Vous voulez garder un souvenir "}
                    </span>
                    {"vrai de votre lien"}
                </li>
                <li className={style.TextLiP4}>
                    Vous n’avez jamais fait de 
                    <span className={style.SpanBold}>
                        {" séance photo ensemble "}
                    </span>
                     mais vous en rêviez
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"Vous avez traversé une étape de vie "}
                    </span>
                    {"et vous voulez l’honorer"}
                </li>
                <li className={style.TextLiP4}>
                    Vous êtes timides et cherchez une 
                    <span className={style.SpanBold}>
                        {" expérience douce, "}
                    </span> bienveillante
                </li>
                <li className={style.TextLiP4}>
                    {"Vous voulez simplement "}
                    <span className={style.SpanBold}>
                        {"vous faire un cadeau ensemble"}
                    </span>
                </li>
            </ul>

            <h2 className={style.TitleH2}>
                {"Un accompagnement complet et bienveillant, pensé pour les duos"}
            </h2>

            <h3 className={style.TitleNH4}>
                {"Une séance sur-mesure, sans pression"}
            </h3>
            <p className={style.TextP4}>
                📍 En studio à Montpellier ou en pleine nature et en lumière naturelle, selon vos envies.
            </p>

            <h3 className={style.TitleNH4}>
                {"Un accompagnement sur-mesure"}
            </h3>
            <p className={style.TextP4}>
                🎯 Conseils de tenues, ambiance musicale si besoin, échanges fluides pour guider sans figer.
            </p>

            <h3 className={style.TitleNH4}>
                {"Une expérience hors du temps"}
            </h3>
            <p className={style.TextP4}>
                💬 Rythme calme, pauses si besoin, jeux de regards, rires ou silences bienvenus.
            </p>

            <h3 className={style.TitleNH4}>
                {"Des images sensibles et naturelles"}
            </h3>
            <p className={style.TextP4}>
                🖼️ 5 à 22 images livrées via galerie privée, avec des retouches douces et cohérentes.
            </p>

            <h2 className={style.TitleH2}>
                {"Et si vous vous offriez un instant rien qu’à vous – On en parle ensemble ?"}
            </h2>

            <p className={style.TextP4}>
                Un portrait, c’est bien plus qu’une image. C’est un moment pour se (re)découvrir, se révéler, s’honorer. <br />
                Que ce soit pour marquer un cap, célébrer une étape ou simplement se faire plaisir… <br />
                <br />
                <span className={style.SpanLink}>
                    <Link to={router[3].path}>
                        Parlons de ce que vous aimeriez capturer pour que votre lumière vous ressemble.
                    </Link>
                </span>
            </p>

            {/* Carte des tarifs */}
            <TarifCard_Element id="tarifs-portrait-duo" tarifs={tarifsPortraitDuo_Data} mailtoLink={mailtoLinkPortraitDuo_Data} />

            {/* Avis client */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitDuo_Data}/>
        </section>
    )
}

export default PortraitDuo_Root;
