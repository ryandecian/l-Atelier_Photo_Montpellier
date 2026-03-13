/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";
import css from "./portraitHobby.module.css";

/* Import des Components de Data */
import { avisClientPortraitHobby_Data } from "./avisClientPortraitHobby.data";
import { imagesPortraitHobby_Data } from "./imagesPortraitHobby.data";
import { tarifsPortraitHobby_Data, mailtoLinkPortraitHobby_Data } from "./tarifsPortraitHobby.data";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

function PortraitHobby_Root() {
    return (
        <section className={`PortraitHobbyRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Hobby : Mettez en lumière ce qui vous anime !"}
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                {"Parce que chaque hobby a son histoire, offrez-vous un portrait fidèle à cette complicité"}
            </h2>

            <p className={style.TextP4}>
                On a tous un truc qui nous fait vibrer. <br />
                Un art, un sport, un instrument, un geste maîtrisé. <br />
                Que vous soyez judoka, cavalière, danseuse, batteur du dimanche, passionné de jardinage ou collectionneur de vinyles, 
                <span className={style.SpanBold}>
                    {" votre passion fait partie de votre identité."}
                </span>
            </p>

            <p className={style.TextP4}>
                Alors pourquoi ne pas lui donner une place en image ? <br />
                Un
                <span className={style.SpanBold}>
                    {" portrait centré sur ce que vous aimez, "}
                </span>
                c’est l’occasion de figer un moment de fierté, de plaisir, de concentration ou de mouvement. C’est aussi une façon de dire : “voilà qui je 
                suis, au-delà du boulot, au-delà des apparences”.
            </p>

            <Container4Images_Element
                img1={imagesPortraitHobby_Data[0].src}
                metaNameImg1={imagesPortraitHobby_Data[0].alt}
                img2={imagesPortraitHobby_Data[1].src}
                metaNameImg2={imagesPortraitHobby_Data[1].alt}
                img3={imagesPortraitHobby_Data[2].src}
                metaNameImg3={imagesPortraitHobby_Data[2].alt}
                img4={imagesPortraitHobby_Data[3].src}
                metaNameImg4={imagesPortraitHobby_Data[3].alt}
            />

            <h2 className={css.TitleH2}>
                {"Parce que chaque passion a son histoire, vivez là en image !"}
            </h2>

            <h3 className={style.TitleNH3R}>
                {"Pourquoi faire un portrait de votre passion ?"}
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Pour 
                    <span className={style.SpanBold}>
                        {" garder une trace "}
                    </span>
                    d’une période importante de votre vie.
                </li>
                <li className={style.TextLiP4}>
                    Pour 
                    <span className={style.SpanBold}>
                        {" célébrer vos progrès, "}
                    </span>
                    vos réussites, ou simplement votre constance.
                </li>
                <li className={style.TextLiP4}>
                    Pour 
                    <span className={style.SpanBold}>
                        {" vous reconnecter à vous-même "}
                    </span>
                    à travers ce que vous aimez faire.
                </li>
                <li className={style.TextLiP4}>
                    Pour 
                    <span className={style.SpanBold}>
                        {" partager "}
                    </span>
                    cette facette de vous avec vos proches ou sur les réseaux.
                </li>
                <li className={style.TextLiP4}>
                    Parce que vous méritez une image de vous… dans votre élément
                </li>
            </ul>

            <h3 className={style.TitleNH3}>
                {"Pourquoi choisir l’Atelier Photo Montpellier ?"}
            </h3>

            <p className={style.TextP4}>
                Parce que chez moi, on ne “pose” pas. <br />
                On vit la photo,
                <span className={style.SpanBold}>
                    {" on la construit ensemble, "}
                </span>
                avec ce que vous êtes, ce que vous faites, ce qui vous touche.
            </p>

            <p className={style.TextLiP4}>
                Je vous accompagne de A à Z :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On échange "}
                    </span>
                    avant la séance sur votre pratique, votre style, vos envies.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On réfléchit ensemble "}
                    </span>
                    {"à un lieu ou une mise en scène cohérente (au studio, chez vous, sur le terrain, dans votre atelier…)"}
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"Je vous guide avec bienveillance, "}
                    </span>
                    que vous soyez à l’aise ou pas du tout avec l’objectif.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On prend le temps, "}
                    </span>
                    pour que chaque image reflète vraiment votre énergie et votre passion.
                </li>
            </ul>

            <Container4Images_Element
                img1={imagesPortraitHobby_Data[4].src}
                metaNameImg1={imagesPortraitHobby_Data[4].alt}
                img2={imagesPortraitHobby_Data[5].src}
                metaNameImg2={imagesPortraitHobby_Data[5].alt}
                img3={imagesPortraitHobby_Data[6].src}
                metaNameImg3={imagesPortraitHobby_Data[6].alt}
                img4={imagesPortraitHobby_Data[7].src}
                metaNameImg4={imagesPortraitHobby_Data[7].alt}
            />

            <h3 className={style.TitleH2}>
                Un accompagnement complet sur mesure
            </h3>

            <h4 className={style.TitleNH4}>
                Une séance sur-mesure, sans pression
            </h4>
            <p className={style.TextP4}>
                📍 Au studio à Montpellier ou en lumière naturelle, sur le lieu de votre pratique 
                (terrain de sport, atelier, cuisine, manège, garage, salle de danse… c’est votre univers, et je m’y adapte).
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
                💬 Même si vous n’aimez pas l’objectif, je vous guide pas à pas, toujours dans la bienveillance. <br />
                💬 Je peux aussi venir discrètement capter un 
                <span className={style.SpanBold}>
                    {" moment en action "}
                </span>
                {"(entraînement, répétition, prestation), ou bien mettre en scène "}
                <span className={style.SpanBold}>
                    {"une ambiance plus artistique ou symbolique."}
                </span>
            </p>

            <h4 className={style.TitleNH4}>
                Des images qui vous font du bien
            </h4>
            <p className={style.TextLiP4}>
                📸 Sélection de 6 à 18 photos retouchées avec soin, livrées en galerie privée
            </p>

            <h2 className={style.TitleH2R}>
                Les portraits Hobbies sont faits pour vous si :
            </h2>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    {"Vous pratiquez une activité artistique, créative, sportive ou artisanale"}
                </li>
                <li className={style.TextLiP4}>
                    {"Vous voulez une image authentique, qui vous représente vraiment"}
                </li>
                <li className={style.TextLiP4}>
                    {"Vous souhaitez fêter une étape (compétition, première scène, diplôme d’art, nouveau projet…)"}
                </li>
                <li className={style.TextLiP4}>
                    {"Vous n’êtes pas forcément à l’aise devant l’objectif, mais vous avez envie de tenter l’expérience avec bienveillance"}
                </li>
            </ul>

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

            {/* Container C : Carte tarifs */}
            <TarifCard_Element id="tarifs-portrait-hobby" tarifs={tarifsPortraitHobby_Data} mailtoLink={mailtoLinkPortraitHobby_Data} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitHobby_Data} />
        </section>
    )
}

export default PortraitHobby_Root;
