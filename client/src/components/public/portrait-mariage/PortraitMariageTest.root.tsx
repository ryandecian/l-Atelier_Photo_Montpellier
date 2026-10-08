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
import { Link } from "react-router-dom";
import { CadreModel4_Element } from "../../elements/cadres/cadre-model-4/CadreModel4.element";

/* Import des composants Router */
import router from "../../../router/router";

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
                Photographe de mariage à Montpellier et dans l'Hérault, j’incarne 
                <strong> L'Atelier Photo Montpellier (LAPM)</strong> et je réalise des reportages naturels et dynamiques 
                pour raconter votre journée au-delà des moments que vous avez vécus.
            </p>

            <CadreModel4_Element
                image={imagesPortraitMariage_Data[20].src}
                alt={imagesPortraitMariage_Data[20].alt}
            />
            <p className={style.TextP4}>
                Un mariage passe vite. <br />
                Pendant que vous vivez un moment, d’autres se déroulent ailleurs.
            </p>

            <p className={style.TextP4}>
                Des regards, des gestes, des émotions que vous ne voyez pas sur l’instant.
            </p>

            <p className={style.TextP4}>
                C’est toute la force du reportage : capter aussi ce qui vous échappe, pour vous permettre de revivre 
                votre journée dans son intégralité.
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

            <p className={style.TextLiP4}>
                Découvrez les options supplémentaires disponibles pour enrichir votre reportage de mariage.
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Séance “day after” à partir de <strong> 349 €</strong>
                </li>
                <li className={style.TextLiP4}>
                    Album photo à partir de <strong> 290 €</strong>
                </li>
                <li className={style.TextLiP4}>
                    Photos 40 x 50 tirage premium à partir de <strong> 80 €</strong>
                </li>
                <li className={style.TextLiP4}>
                    Photos Carton à partir de <strong> 250 €</strong>
                </li>
                <li className={style.TextLiP4}>
                    Prises de vue drone à partir de <strong> 250 €</strong>
                </li>
            </ul>

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
                Comment se déroule votre reportage de mariage ?
            </h2>

            <p className={style.TextP4}>
                Découvrez le déroulement typique d'un reportage de mariage, de la préparation des mariés à la réception, 
                en passant par la cérémonie et les moments clés de la journée.
            </p>

            <h3 className={style.TitleH3}>
                1 - Un premier échange pour comprendre votre mariage et vos envies.
            </h3>

            <p className={style.TextP4}>
                Nous échangeons sur votre projet, votre organisation et surtout sur ce que vous attendez de vos photos 
                de mariage : style d’images que vous aimez, ambiance recherchée, moments importants pour vous, personnes 
                à photographier et niveau de présence que vous souhaitez de la part du photographe.
            </p>

            <p className={style.TextP4}>
                Nous faisons également le point sur la date, les différents lieux, le nombre d’invités et le déroulement 
                envisagé de votre journée.
            </p>

            <h3 className={style.TitleH3}>
                2 - Une préparation personnalisée pour un reportage qui vous ressemble.
            </h3>

            <p className={style.TextP4}>
                En amont du mariage, nous construisons ensemble le rétroplanning de votre reportage photo. Je vous 
                conseille notamment sur le temps à prévoir pour les photos de groupe, les photos de couple et les 
                différents moments de la journée.
            </p>

            <p className={style.TextP4}>
                J'ai eu la chance de photographier des mariages dans des lieux qui me tiennent particulièrement à cœur 
                : le <strong>Château Bas d'Aumelas</strong>, le <strong>Mas Valéro</strong> à Lattes/Maurin, 
                le <strong>Domaine des Oliviers</strong> à Ceyras, ou encore le <strong>Domaine de la Salvage</strong> en 
                Aveyron. Chaque lieu a son ambiance, sa lumière, ses recoins — et je m'adapte à chacun pour raconter 
                votre journée avec authenticité, où qu'elle se déroule.
            </p>

            <p className={style.TextP4}>
                Nous recensons les lieux et les temps forts à photographier, le nombre de groupes souhaités et vos 
                éventuelles demandes particulières, afin que je puisse anticiper votre journée et raconter votre mariage 
                selon vos priorités.
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
            
            <h3 className={style.TitleH3}>
                3 - Le jour du mariage : réactivité, adaptation et sens du bon moment
            </h3>

            <p className={style.TextP4}>
                Le jour J, le planning reste un repère, mais il ne doit jamais prendre le dessus sur ce que vous êtes en 
                train de vivre. Une météo qui change, un timing qui se resserre ou un moment qui se prolonge : je 
                m’adapte pour préserver le rythme de votre journée.
            </p>

            <p className={style.TextP4}>
                À l’inverse, je ne cherche pas à interrompre systématiquement ce qui fonctionne. Pendant le vin d’honneur, 
                par exemple, si vos invités discutent, rient et profitent pleinement de l’instant, je privilégie ces 
                moments spontanés plutôt que de les faire poser en permanence.
            </p>

            <p className={style.TextP4}>
                Mon objectif en tant que photographe professionnel : respecter le rythme de votre journée tout en restant 
                attentive aux occasions qui feront la différence dans votre reportage.
            </p>
            
            <h3 className={style.TitleH3}>
                4 - La sélection et la livraison de vos photos
            </h3>

            <p className={style.TextP4}>
                Après le mariage, je sélectionne et retouche soigneusement vos images pour créer un reportage cohérent 
                et fidèle à votre journée. Vous recevez ensuite votre galerie privée en ligne, avec vos photos en haute 
                définition, sous 15 jours.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Un aperçu de mes reportages de mariage
            </h2>

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

            <br />

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
                FAQ sur les prestations d’un photographe professionnel de mariage 
            </h2>

            <FAQ_Element items={faqPortraitMariage_Data} />
            
            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Vérifier ma disponibilité pour votre date
            </h2>

            <p className={style.TextP4}>
                Vous avez une date en tête ? <br />
                <br />
                <Link to={router[3].path} className={style.Link}>
                        👉 Contactez-moi pour vérifier mes disponibilités et échanger sur votre projet.
                </Link>
            </p>
            
            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des photos, des expériences, des mots, ils m'ont fait confiance !
            </h2>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitMariage_Data} />

            {/* ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- */}


        </section>
    );
}

export default PortraitMariageTest_Root;
