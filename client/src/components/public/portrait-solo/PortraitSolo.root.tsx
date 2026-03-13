/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des Components de Data */
import { avisClientPortraitSolo_Data } from "./avisClientPortraitSolo.data";
import { imagesPortraitSolo_Data } from "./imagesPortraitSolo.data";
import { tarifsPortraitSolo_Data, mailtoLinkPortraitSolo_Data } from "./tarifsPortraitSolo.data";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

function PortraitSolo_Root() {
    return (
        <section className={`PortraitSoloRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Solo : Une séance photos pour renouer avec votre image !
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                Un Portrait Feel Good, ce n'est pas qu'un beau cliché !
            </h2>
            
            <p className={style.TextP4}>
                C'est un moment pour soi. <br />
                <span className={style.SpanBold}>
                    {"Un espace-temps rare où l’on se pose, "}
                </span>
                on respire, on ose être soi-même… devant l’objectif, mais aussi en dedans.
            </p>

            <p className={style.TextP4}>
                Un portrait solo feel good, c’est 
                <span className={style.SpanBold}>
                    {" s’autoriser à se voir autrement : "}
                </span>
                avec bienveillance, authenticité, douceur. <br />
                Ce n’est pas réservé aux mannequins. Ce n’est pas une question de photogénie. <br />
                C’est pour vous, qui avez envie de vous reconnecter à votre image, de 
                <span className={style.SpanBold}>
                    {" reprendre confiance, "}
                </span>
                ou simplement de 
                <span className={style.SpanBold}>
                    {" vous faire un cadeau sincère."}
                </span>
            </p>

            <Container4Images_Element
                img1={imagesPortraitSolo_Data[0].src}
                metaNameImg1={imagesPortraitSolo_Data[0].alt}
                img2={imagesPortraitSolo_Data[1].src}
                metaNameImg2={imagesPortraitSolo_Data[1].alt}
                img3={imagesPortraitSolo_Data[2].src}
                metaNameImg3={imagesPortraitSolo_Data[2].alt}
                img4={imagesPortraitSolo_Data[3].src}
                metaNameImg4={imagesPortraitSolo_Data[3].alt}
            />

            <h3 className={style.TitleNH3}>
                Pourquoi choisir l’Atelier Photo Montpellier ?
            </h3>

            <p className={style.TextP4}>
                Parce que j’ai fait de l'
                <span className={style.SpanBold}>
                    {"humain "}
                </span>
                le cœur de mon métier. <br />
                Mon objectif : que vous repartiez 
                <span className={style.SpanBold}>
                    {" souriant(e), apaisé(e), reboosté(e), "}
                </span>
                avec des images qui vous ressemblent vraiment. 
            </p>

            <p className={style.TextLiP4}>
                Je vous accompagne du début à la fin, avec écoute, simplicité et sens du détail :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On échange en amont sur vos envies, "}
                    </span>
                    vos doutes, votre rapport à la photo.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"Je vous guide doucement "}
                    </span>
                    pendant la séance, sans jamais vous forcer.
                </li>
                <li className={style.TextLiP4}>
                    On prend le temps de faire les choses bien, 
                    <span className={style.SpanBold}>
                        {" dans une atmosphère détendue,"}
                    </span> conviviale et créative.
                </li>
            </ul>

            <p className={style.TextP4}>
                Le studio est pensé comme un 
                <span className={style.SpanBold}>
                    {" lieu cocon, "}
                </span>
                et les extérieurs autour de Montpellier offrent des décors inspirants si vous préférez un shooting nature. 
            </p>

            <h2 className={style.TitleH2}>
                Envie de reprendre le pouvoir sur votre image ?
            </h2>

            <p className={style.TextP4}>
                Je propose des séances sur mesure, pensées pour faire ressortir le meilleur de vous. <br />
                Avant la séance, on définit ensemble le style visuel qui vous attire : minimaliste ? lumineux ? créatif ? brut ? <br />
                Je vous donne aussi des 
                <span className={style.SpanBold}>
                    {" conseils de tenues et d’attitudes "}
                </span>
                pour que vous vous sentiez bien le jour J.
            </p>

            <Container4Images_Element
                img1={imagesPortraitSolo_Data[4].src}
                metaNameImg1={imagesPortraitSolo_Data[4].alt}
                img2={imagesPortraitSolo_Data[5].src}
                metaNameImg2={imagesPortraitSolo_Data[5].alt}
                img3={imagesPortraitSolo_Data[6].src}
                metaNameImg3={imagesPortraitSolo_Data[6].alt}
                img4={imagesPortraitSolo_Data[7].src}
                metaNameImg4={imagesPortraitSolo_Data[7].alt}
            />

            <div className={style.br}></div>

            <p className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    {"Portrait solo Feel Good – c’est pour vous si :"}
                </span>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Vous n’aimez jamais les photos de vous, mais vous aimeriez changer ça.
                </li>
                <li className={style.TextLiP4}>
                    Vous 
                    <span className={style.SpanBold}>
                        {" traversez une étape "}
                    </span> (pro/perso) et souhaitez marquer ce moment.
                </li>
                <li className={style.TextLiP4}>
                    Vous 
                    <span className={style.SpanBold}>
                        {" avez besoin de vous reconnecter "}
                    </span> à votre confiance, à votre beauté.
                </li>
                <li className={style.TextLiP4}>
                    Vous 
                    <span className={style.SpanBold}>
                        {" avez juste envie d’un beau souvenir, "}
                    </span>pour vous, pour toujours.
                </li>
            </ul>

            <h3 className={style.TitleH2}>
                Un accompagnement complet et bienveillant
            </h3>

            <h4 className={style.TitleNH4}>
                Une séance sur-mesure, sans pression
            </h4>
            <p className={style.TextP4}>
                📍 Au studio à Montpellier ou en lumière naturelle, selon vos envies.
            </p>

            <h4 className={style.TitleNH4}>
                Un lieu rassurant ou un extérieur inspirant
            </h4>
            <p className={style.TextP4}>
                🎯 On avance à votre rythme, en jouant avec les postures, la lumière, les émotions.
            </p>

            <h4 className={style.TitleNH4}>
                Direction naturelle et mise en confiance
            </h4>
            <p className={style.TextP4}>
                💬 Même si vous n’aimez pas l’objectif, je vous guide pas à pas, toujours dans la bienveillance.
            </p>

            <h4 className={style.TitleNH4}>
                Des images qui vous font du bien
            </h4>
            <p className={style.TextP4}>
                📸 Sélection de 5 à 22 photos retouchées avec soin, livrées en galerie privée sécurisée avec mot de passe.
            </p>

            <h2 className={style.TitleH2}>
                {"Et si vous vous offriez un instant rien qu’à vous – On en parle ensemble ?"}
            </h2>

           <p className={style.TextP4}>
                Un portrait, c’est bien plus qu’une image. C’est un moment pour se (re)découvrir, se révéler, s’honorer. <br />
                Que ce soit pour marquer un cap, célébrer une étape ou simplement se faire plaisir… <br />
            </p>

           <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={router[3].path}>
                        Parlons de ce que vous aimeriez capturer pour que votre lumière vous ressemble.
                    </Link>
                </span>
            </p>

            {/* Tarifs test */}
            <TarifCard_Element id="tarifs-portrait-solo" tarifs={tarifsPortraitSolo_Data} mailtoLink={mailtoLinkPortraitSolo_Data} />

            {/* Container C : Avis Clients */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitSolo_Data} />
        </section>
    )
}

export default PortraitSolo_Root;
