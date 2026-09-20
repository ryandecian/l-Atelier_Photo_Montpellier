/* Import des modules CSS */
import style from "../../style.root.module.css";
import CSS from "./portraitMariage.module.css";

/* Import des Components de Data */
import { imagesPortraitMariage_Data } from "./imagesPortraitMariage.data";
import { avisClientPortraitMariage_Data } from "./avisClientPortraitMariage.data";
import { tarifsPortraitMariage_Data, mailtoLinkPortraitMariage_Data } from "./tarifsPortraitMariage.data";
import { carrouselPortraitMariage_Data } from "./carrouselPortraitMariage.data";
import { faqPortraitMariage_Data } from "./faqPortraitMariage.data";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";
import { Carrousel3D_Element } from "../../elements/carrousels/carrousel3d/Carrousel3D.element";
import { FAQ_Element } from "../../elements/faq/FAQ.element";

/* Import des composants React */
// import { Link } from "react-router-dom";
import { CadreModel2_Element } from "../../elements/cadres/cadre-model-2/CadreModel2.element";

/* Import des composants Router */
// import router from "../../../router/router";

function PortraitMariageTest_Root() {
    return (
        <section className={`PortraitMariageTest_Root ${style.ContainerRootRacine}`}>
            <header className={CSS.ContainerTitle}>
                <h1 className={CSS.TitleH1}>
                    Tarifs et prestations de photographe mariage à Montpellier
                </h1>
            </header>

            <Carrousel3D_Element slides={carrouselPortraitMariage_Data} />

            <p className={style.TextP4}>
                Découvrez les prestations de photographie de mariage proposées par L’Atelier Photo Montpellier, avec 
                plusieurs formules adaptées à la durée et au déroulement de votre journée. Reportage photo à Montpellier, 
                dans l’Hérault et au-delà, avec options complémentaires selon vos besoins.
            </p>
            
            {/* Cadre Model 1 */}
            <CadreModel2_Element
                image={imagesPortraitMariage_Data[20].src}
                alt={imagesPortraitMariage_Data[20].alt}
            />

            {/* Container Images 1 */}
            <Container4Images_Element
                img1={imagesPortraitMariage_Data[0].src}
                metaNameImg1={imagesPortraitMariage_Data[0].alt}
                img2={imagesPortraitMariage_Data[1].src}
                metaNameImg2={imagesPortraitMariage_Data[1].alt}
                img3={imagesPortraitMariage_Data[2].src}
                metaNameImg3={imagesPortraitMariage_Data[2].alt}
                img4={imagesPortraitMariage_Data[3].src}
                metaNameImg4={imagesPortraitMariage_Data[3].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            {/* <nav className={CSS.menuAncrage} aria-label="Navigation rapide dans la page mariage">
                <a href="#tarifs-portrait-mariage" className={CSS.link}>
                    Tarifs
                </a>

                <a href="#options" className={CSS.link}>
                    Options
                </a>

                <a href="#deroulement" className={CSS.link}>
                    Déroulement
                </a>

                <a href="#faq" className={CSS.link}>
                    FAQ
                </a>

                <a href="#avis" className={CSS.link}>
                    Avis clients
                </a>
            </nav> */}

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Quel tarif pour votre reportage de mariage ?
            </h2>

            <p className={style.TextP4}>
                Choisissez la formule la plus adaptée à votre journée selon la durée de présence souhaitée et les moments 
                à couvrir. Toutes les prestations incluent la sélection et la retouche des photos, une galerie privée et 
                la livraison des images en haute définition.
            </p>

            <TarifCard_Element id="tarifs-portrait-mariage" tarifs={tarifsPortraitMariage_Data} mailtoLink={mailtoLinkPortraitMariage_Data} />

            <p className={style.TextP4}>
                Test texte a mettre en place pour la section des tarifs.
            </p>

            {/* Container Images 1 */}
            <Container4Images_Element
                img1={imagesPortraitMariage_Data[0].src}
                metaNameImg1={imagesPortraitMariage_Data[0].alt}
                img2={imagesPortraitMariage_Data[1].src}
                metaNameImg2={imagesPortraitMariage_Data[1].alt}
                img3={imagesPortraitMariage_Data[2].src}
                metaNameImg3={imagesPortraitMariage_Data[2].alt}
                img4={imagesPortraitMariage_Data[3].src}
                metaNameImg4={imagesPortraitMariage_Data[3].alt}
            />
            
            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Quelles sont les options supplémentaires pour votre reportage de mariage ?
            </h2>

            <p className={style.TextP4}>
                Découvrez les options supplémentaires disponibles pour enrichir votre reportage de mariage.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Le déroulement typique d'un reportage de mariage
            </h2>

            <p className={style.TextP4}>
                Découvrez le déroulement typique d'un reportage de mariage, de la préparation des mariés à la réception, en passant par la cérémonie et les moments clés de la journée.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                FAQ : Questions fréquentes sur la photographie de mariage à Montpellier ?
            </h2>

            <FAQ_Element items={faqPortraitMariage_Data} />
            
            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des photos, des expériences, des mots, ils m'ont fait confiance !
            </h2>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitMariage_Data} />

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}


        </section>
    );
}

export default PortraitMariageTest_Root;
