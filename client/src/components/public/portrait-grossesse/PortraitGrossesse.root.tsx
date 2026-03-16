/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des Components de Data */
import { avisClientPortraitGrossesse_Data } from "./avisClientPortraitGrossesse.data";
import { imagesPortraitGrossesse_Data } from "./imagesPortraitGrossesse.data";
import { tarifsPortraitGrossesse_Data, mailtoLinkPortraitGrossesse_Data } from "./tarifsPortraitGrossesse.data";

/* Import des composants d'Elements */
import { Container3Images_Element } from "../../elements/container-image/container-3-images/Container3Images.element";
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { Container4ImagesPortrait_Element } from "../../elements/container-image/container-4_Images-portrait/Container4ImagesPortrait.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

function PortraitGrossesse_Root() {
    return (
        <section className={`PortraitGrossesse_Root ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Grossesse & Nouveaux-Nés : Capturer la magie de la vie dès ses premiers instants !"}
                </h1>
            </header>

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

            <Container4Images_Element
                img1={imagesPortraitGrossesse_Data[0].src}
                metaNameImg1={imagesPortraitGrossesse_Data[0].alt}
                img2={imagesPortraitGrossesse_Data[1].src}
                metaNameImg2={imagesPortraitGrossesse_Data[1].alt}
                img3={imagesPortraitGrossesse_Data[2].src}
                metaNameImg3={imagesPortraitGrossesse_Data[2].alt}
                img4={imagesPortraitGrossesse_Data[3].src}
                metaNameImg4={imagesPortraitGrossesse_Data[3].alt}
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

            <h2 className={style.TitleH2}>
                {"Prêt(e) à figer ces moments uniques avec sensibilité et simplicité ?"}
            </h2>

            <p className={style.TextP4}>
                Avant même de sortir l’appareil, on prend le temps d’échanger. <br />
                Quel style vous inspire ? Intimiste, lumineux, naturel ? <br />
                Préférez-vous une séance en studio, en pleine nature, ou chez vous dans votre cocon ? <br />
            </p>

            <p className={style.TextP4}>
                Nous définissons ensemble une 
                <span className={style.SpanBold}>
                    {" ambiance visuelle, "}
                </span>
                des envies particulières (objets symboliques, photos de famille, fratrie…). <br />
                Puis, le jour J, 
                <span className={style.SpanBold}>
                    {" je m’adapte à votre rythme – particulièrement si bébé est tout petit. "}
                </span> Pas de pression, pas de chrono serré.
            </p>

            <Container4Images_Element
                img1={imagesPortraitGrossesse_Data[4].src}
                metaNameImg1={imagesPortraitGrossesse_Data[4].alt}
                img2={imagesPortraitGrossesse_Data[5].src}
                metaNameImg2={imagesPortraitGrossesse_Data[5].alt}
                img3={imagesPortraitGrossesse_Data[6].src}
                metaNameImg3={imagesPortraitGrossesse_Data[6].alt}
                img4={imagesPortraitGrossesse_Data[7].src}
                metaNameImg4={imagesPortraitGrossesse_Data[7].alt}
            />

            <h3 className={style.TitleNH3R}>
                {"Les séances Portraits Grossesses"}
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                	📆 Idéalement entre le 7e et le 8e mois
                </li>
                <li className={style.TextLiP4}>
                    📸 En solo, en couple, avec les aînés si souhaités
                </li>
                <li className={style.TextLiP4}>
                    📍 Studio, extérieur ou à domicile
                </li>
                <li className={style.TextLiP4}>
                    💡 Possibilité de prêt de tenues et accessoires doux
                </li>
            </ul>

            <h3 className={style.TitleNH3R}>
                {"Les séances Nouveaux-Nés"}
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                	🕊️ Entre 5 et 15 jours après la naissance
                </li>
                <li className={style.TextLiP4}>
                    💤 Respect du rythme du bébé : pauses câlins ou tétées bienvenues
                </li>
                <li className={style.TextLiP4}>
                    🌿 Décors naturels, tons doux, gestes tendres
                </li>
                <li className={style.TextLiP4}>
                    📍 En studio (chauffé et aménagé) ou à domicile
                </li>
            </ul>

            <Container3Images_Element
                img1={imagesPortraitGrossesse_Data[12].src}
                metaNameImg1={imagesPortraitGrossesse_Data[12].alt}
                img2={imagesPortraitGrossesse_Data[13].src}
                metaNameImg2={imagesPortraitGrossesse_Data[13].alt}
                img3={imagesPortraitGrossesse_Data[14].src}
                metaNameImg3={imagesPortraitGrossesse_Data[14].alt}
            />

            <h2 className={style.TitleH2}>
                {"Un service clé en main : douceur, organisation et qualité"}
            </h2>

            <h3 className={style.TitleNH4}>
                {"Séance pensée pour vous mettre à l’aise"}
            </h3>

            <p className={style.TextP4}>
                Guidage tout en subtilité, conseils pour les postures naturelles, attention à chaque détail.
            </p>

            <h3 className={style.TitleNH4}>
                {"Studio cocooning à Montpellier ou déplacement à domicile"}
            </h3>

            <p className={style.TextP4}>
                Je recrée un environnement rassurant, lumineux, avec tout le confort nécessaire pour bébé et parents.
            </p>

            <h3 className={style.TitleNH4}>
                {"Retouches légères et naturelles"}
            </h3>

            <p className={style.TextP4}>
                Votre grain de peau reste réel, vos traits sont respectés. Les retouches servent la douceur, pas la perfection artificielle.
            </p>

            <h3 className={style.TitleNH4}>
                {"Livraison rapide & formats adaptés"}
            </h3>

            <p className={style.TextP4}>
                Galerie privée, fichiers optimisés pour le tirage papier, l’album photo ou le partage en ligne.
            </p>

            <Container4ImagesPortrait_Element
                img1={imagesPortraitGrossesse_Data[8].src}
                metaNameImg1={imagesPortraitGrossesse_Data[8].alt}
                img2={imagesPortraitGrossesse_Data[9].src}
                metaNameImg2={imagesPortraitGrossesse_Data[9].alt}
                img3={imagesPortraitGrossesse_Data[10].src}
                metaNameImg3={imagesPortraitGrossesse_Data[10].alt}
                img4={imagesPortraitGrossesse_Data[11].src}
                metaNameImg4={imagesPortraitGrossesse_Data[11].alt}
            />

            <h2 className={style.TitleH2}>
                {"Votre histoire mérite d’être racontée avec délicatesse – On en parle ensemble ?"}
            </h2>

           <p className={style.TextP4}>
                Une grossesse, un nouveau-né… ces instants sont de véritables trésors. Chaque moment compte, surtout ceux-là. <br />  
                Confiez-moi le soin de les rendre éternels. <br />
                <br />
                <span className={style.SpanLink}>
                    <Link to={router[3].path}>
                        Avant qu’ils ne deviennent de simples souvenirs parlons-en ensemble !
                    </Link>
                </span>
            </p>

            {/* Cartes des Tarifs pour prestation Grossesse et Nouveaux-Nés */}
            <TarifCard_Element id="tarifs-portrait-grossesse" tarifs={tarifsPortraitGrossesse_Data} mailtoLink={mailtoLinkPortraitGrossesse_Data} />

            {/* Avis clients */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitGrossesse_Data} />
        </section>
    )
}

export default PortraitGrossesse_Root;
