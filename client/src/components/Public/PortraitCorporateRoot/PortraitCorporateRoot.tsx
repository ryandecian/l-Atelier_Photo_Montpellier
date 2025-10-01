import style from "../../StyleRootComponent.module.css";
import css from "./PortraitCorporateRoot.module.css";

import externalLinks from "../../../constants/externalLinks";

import Container4ImagesRoot from "../../Elements/container-image/Container4ImagesRoot/Container4ImagesRoot";
import Container4ImagesPortraitRoot from "../../Elements/container-image/container-4_Images-portrait/Container4ImagesPortrait.element";
import ImagesPortraitCorporateControllerData from "./ImagesPortraitCorporateControllerData";

import AvisClientPortraitCorporateControllerData from "./AvisClientPortraitCorporateControllerData";
import GeneratorCardAvisClient from "../../Elements/GeneratorCardAvisClient/GeneratorCardAvisClient";

import TarifCardCorporate from "./ComponentsPortraitCorporateRoot/TarifsComponentsCorporate/TarifsCardCorporate";
import { TarifsPortraitCorporate, MailtoLinkPortraitCorporate } from "./TarifsPortraitCorporate";

function PortraitCorporateRoot() {
    return (
        <section id="PortraitCorporateRoot" className={`PortraitCorporateRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Corporate : Valorisez votre image professionnelle !"}
                </h1>
            </header>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Votre visage, votre signature, ce que vous souhaitez transmettre y sera !
            </h2>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>{"Votre signature visuelle, "}</span>
                c’est la première impression que vous laissez. Elle influence la perception que vos clients, partenaires et recruteurs ont
                de vous.
                <span className={style.SpanBold}>{" Dans un monde où l’image joue un rôle majeur, "}</span>
                un portrait professionnel de qualité devient un véritable levier de communication et de différenciation.
            </p>
            <p className={style.TextP4}>
                Un portrait soigné, cohérent avec votre activité et votre personnalité, permet de renforcer votre crédibilité : une photo bien
                réalisée inspire confiance et professionnalisme. Elle montre que
                <span className={style.SpanBold}>{" vous prenez soin de votre image et, par extension, de votre activité."}</span>
            </p>
            <p className={style.TextP4}>
                Dans un univers où tout va vite, une signature visuelle impactante vous aide à sortir du lot et à marquer les esprits.
            </p>

            {/* Container 1 : Container image portrait Corporate */}
            <Container4ImagesPortraitRoot
                img1={ImagesPortraitCorporateControllerData[0].src}
                MetaNameImg1={ImagesPortraitCorporateControllerData[0].alt}
                img2={ImagesPortraitCorporateControllerData[1].src}
                MetaNameImg2={ImagesPortraitCorporateControllerData[1].alt}
                img3={ImagesPortraitCorporateControllerData[2].src}
                MetaNameImg3={ImagesPortraitCorporateControllerData[2].alt}
                img4={ImagesPortraitCorporateControllerData[3].src}
                MetaNameImg4={ImagesPortraitCorporateControllerData[3].alt}
            />

            <br />

            <p className={style.TextP4}>
                Pourquoi faire appel à l’Atelier Photo Montpellier ? Car un portrait réalisé par mes soins garantit une lumière maîtrisée,
                une posture naturelle et
                <span className={style.SpanBold}>{" une image qui vous met réellement en valeur. "}</span>
                Elle affirme votre présence et véhicule le message que vous souhaitez faire passer comme le sérieux, l’écoute, la compétence...
                En prenant le temps d’échanger sur vos attentes, je serai en force de proposition pour que vos photos s’inscrivent dans votre
                communication globale d’entreprise.
                <span className={style.SpanBold}>{" Et vous pourrez même être tenté par une vidéo d’entreprise "}</span>
                (renseignements à demander directement) pour vous démarquer.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Prêt(e) à donner du poids à votre signature visuelle d’entreprise ?
            </h2>

            <p className={style.TextP4}>
                Avant de déclencher l’appareil, je vous propose un
                <span className={style.SpanBold}>{" temps d’échange et de repérage. "}</span>
                L’objectif ? Définir ensemble le ton, le style et l’ambiance qui correspondent le mieux à votre image de marque.
            </p>
            <p className={style.TextP4}>
                Si nous réalisons
                <span className={style.SpanBold}>{" la séance dans vos locaux, "}</span>
                cette étape permet d’identifier les meilleurs espaces pour un fond valorisant, une lumière naturelle intéressante ou une
                <span className={style.SpanBold}>{" mise en scène cohérente avec votre activité. "}</span>
                En studio, j’ajuste l’éclairage et le fond pour un rendu sobre et intemporel, parfait pour une identité forte et homogène.
            </p>
            <p className={style.TextP4}>
                <span className={style.SpanBold}>{"Ce travail en amont "}</span>
                garantit des portraits professionnels impactants et cohérents, adaptés à vos différents supports : signature mail, site web, LinkedIn,
                presse ou communication interne.
            </p>
            <p className={style.TextP4}>
                Votre image mérite le meilleur –{" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne}>{"Prêt(e) à     passer devant l’objectif ?"}</a>
                </span>
            </p>

            {/* Container 2 : Container image portrait Corporate */}
            <Container4ImagesRoot
                img1={ImagesPortraitCorporateControllerData[4].src}
                MetaNameImg1={ImagesPortraitCorporateControllerData[4].alt}
                img2={ImagesPortraitCorporateControllerData[5].src}
                MetaNameImg2={ImagesPortraitCorporateControllerData[5].alt}
                img3={ImagesPortraitCorporateControllerData[6].src}
                MetaNameImg3={ImagesPortraitCorporateControllerData[6].alt}
                img4={ImagesPortraitCorporateControllerData[7].src}
                MetaNameImg4={ImagesPortraitCorporateControllerData[7].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {"Un service clé en main pour les entreprises : simplicité et efficacité !"}
            </h2>

            <p className={style.TextP4}>
                Faire réaliser un portrait Corporate ne
                <span className={style.SpanBold}>{" doit pas être une contrainte. "}</span>
                Mon service clé en main est conçu pour s’adapter à votre emploi du temps tout en garantissant un rendu professionnel et fidèle
                à ce que vous voulez transmettre en terme de valeur d’entreprise.
            </p>

            <h3 className={css.TitleH3}>Shooting en entreprise ou en studio : à vous de choisir</h3>
            <p className={style.TextP4}>
                - En entreprise :
                <span className={style.SpanBold}>{" Je me déplace avec mon matériel "}</span>
                pour une séance fluide et optimisée, sans perturber votre organisation. Idéal pour capter l’ambiance de votre environnement
                professionnel et renforcer votre image de marque. <br />
                - En studio : Une maîtrise parfaite de la lumière et
                <span className={style.SpanBold}>{" un cadre neutre "}</span>
                qui met en avant votre personnalité. L’idéal pour un rendu intemporel, élégant et homogène, parfait pour une équipe entière ou
                une mise en valeur individuelle.
            </p>

            <h3 className={css.TitleH3}>Organisation optimisée :</h3>
            <p className={style.TextP4}>
                Je mets en place un
                <span className={style.SpanBold}>{" planning structuré "}</span>
                pour éviter les temps d’attente et assurer un déroulement fluide. Chaque collaborateur dispose d’un créneau précis, avec
                <span className={style.SpanBold}>{" une séance rapide et efficace. "}</span>
            </p>

            <h3 className={css.TitleH3}>Mise en confiance et direction naturelle</h3>
            <p className={style.TextP4}>
                Même les plus réticents à l’objectif se sentiront à l’aise. Je guide avec bienveillance pour obtenir un portrait naturel,
                professionnel et authentique.
            </p>

            <h3 className={css.TitleH3}>Uniformité et cohérence visuelle :</h3>
            <p className={style.TextP4}>
                Que vous soyez une équipe de 5 ou de 50 personnes, je veille à une harmonisation des portraits pour
                <span className={style.SpanBold}>{" un rendu homogène "}</span>
                et cohérent sur votre site web, LinkedIn et autres supports de communication.
            </p>

            <h3 className={css.TitleH3}>Livraison rapide et adaptée à vos besoins :</h3>
            <p className={style.TextP4}>
                <span className={style.SpanBold}>{"Les photos sont soigneusement retouchées "}</span>
                et livrées sous plusieurs formats, optimisés pour LinkedIn, site internet, presse ou supports print.
            </p>

            <p className={style.TextP4}>
                Besoin d’un conseil ?{" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne}>{" Discutons de votre projet ! "}</a>
                </span>
            </p>

            {/* Container D : Carte des tarifs */}
            <TarifCardCorporate
                id="tarifs-portrait-corporate"
                tarifs={TarifsPortraitCorporate}
                mailtoLink={MailtoLinkPortraitCorporate}
            />

            {/* Container E : Avis clients */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitCorporateControllerData} />
        </section>
    );
}

export default PortraitCorporateRoot;
