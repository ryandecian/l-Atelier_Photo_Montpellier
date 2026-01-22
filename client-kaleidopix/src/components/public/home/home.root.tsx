/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des Components de Data */
import { imagesHome_img_data } from "./imagesHome.img.data";

/* Import des composants d'Elements */
import { Container4ImagesPortrait_Element } from "../../elements/container-image/container-4_Images-portrait/Container4ImagesPortrait.element";
import { Video_Element } from "../../elements/video/Video.element";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Images Photo & Vidéo pour Entreprises à Montpellier
                </h1>
            </header>
            
            <p className={style.TextP4}>
                Positionnez votre entreprise comme référence grâce à des <strong> contenus visuels professionnels.</strong> <br />
            </p>
            
            <p className={style.TextP4}>
                Photo Vidéo Montpellier conçoit pour vous des reportages immersifs, films institutionnels, vidéos métiers 
                et portraits corporate destinés à <strong> renforcer votre communication interne et externe.</strong>
            </p>

            <h2 className={style.TitleH2_00N0}>
                Photographie Corporate pour les entreprises dans l’Hérault
            </h2>
            
            <p className={style.TextP4}>
                Donner à voir pour comprendre : l’image fixe est la première impression que vos clients se font de votre entreprise. <br />
                En tant que <strong> photographe d’entreprise à Montpellier</strong>, je réalise des portraits professionnels 
                et des reportages adaptés à l’ensemble de vos supports : site web, réseaux sociaux, presse.
            </p>
            
            <p className={style.TextP4}>
                Je vous offre une <strong> flexibilité totale</strong> : vos portraits corporate peuvent être faits {` `}
                <strong>dans mon studio</strong> à Montpellier ou <strong> directement dans vos locaux</strong> grâce à un 
                studio photo éphémère installé sur place.
            </p>
            
            <p className={style.TextP4}>
                Cette approche me permet également de créer un portrait professionnel à Montpellier {` `}
                <strong> cohérent avec votre identité d’entreprise.</strong>
            </p>

            <h3 className={style.TitleH3}>
                Prestations photo
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Portraits Corporate : dirigeants, équipes, trombinoscope.</strong> 
                </li>
                <li className={style.TextLiP4}>
                    Reportage d’Activité : équipes en action, gestes métier, <strong>reportage photo entreprise Montpellier.</strong>
                </li>
                <li className={style.TextLiP4}>
                    Photos de Locaux : bureaux, ateliers, espaces clients.
                </li>
                <li className={style.TextLiP4}>
                    Reportage Événementiel : séminaires, inaugurations, événements internes, team building, soirées d’entreprise.
                </li>
            </ul>

            <Container4ImagesPortrait_Element 
                img1={imagesHome_img_data[0].src}
                img2={imagesHome_img_data[1].src}
                img3={imagesHome_img_data[2].src}
                img4={imagesHome_img_data[3].src}
                metaNameImg1={imagesHome_img_data[0].alt}
                metaNameImg2={imagesHome_img_data[1].alt}
                metaNameImg3={imagesHome_img_data[2].alt}
                metaNameImg4={imagesHome_img_data[3].alt}
            />

            <h2 className={style.TitleH2}>
                Production Vidéo Corporate : Valorisez votre Entreprise
            </h2>

            <p className={style.TextP4}>
                La vidéo est un <strong>véritable accélérateur de crédibilité</strong> et d’engagement, que ce soit pour 
                vos clients ou pour vos futurs collaborateurs.
            </p>

            <p className={style.TextP4}>
                <strong>Je réalise des films sur site</strong> qui dévoilent la culture de votre entreprise, l’expertise 
                de vos équipes et la qualité de vos locaux. Chaque vidéo est conçue <strong>comme un actif durable,</strong>
                {` `}performant sur votre site internet comme sur vos réseaux sociaux.
            </p>

            <h3 className={style.TitleH3}>
                Prestations vidéo
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Vidéo Marque Employeur :</strong> témoignages salariés, interviews dirigeants, ambiance de travail.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Film Institutionnel :</strong> présentation globale, valeurs, positionnement.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Vidéo Métier & Technique :</strong> démonstration de procédés, savoir-faire, produits.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Contenu Réseaux Sociaux :</strong> formats courts et dynamiques optimisés pour l’engagement.
                </li>
            </ul>

            <Video_Element
                title="Aventure saharienne - Immersion dans le désert avec Mélodie du Désert"
                src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                description="Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines."
            />

            <h2 className={style.TitleH2_00N0}>
                Votre Partenaire pour une Image corporate cohérente
            </h2>

            <p className={style.TextP4}>
                Mon rôle ne se limite pas à produire des images : j'accompagne votre entreprise dans la construction d’une 
                ligne visuelle forte et cohérente.
            </p>

            <p className={style.TextLiP4}>
                Je vous aide à :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>définir une identité visuelle</strong> percutante, de la photo au film,
                </li>
                <li className={style.TextLiP4}>
                    <strong>harmoniser portraits,</strong> reportages et vidéos institutionnelles,
                </li>
                <li className={style.TextLiP4}>
                    <strong>Vidéo Métier & Technique :</strong> démonstration de procédés, savoir-faire, produits.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Contenu Réseaux Sociaux :</strong> formats courts et dynamiques optimisés pour l’engagement.
                </li>
            </ul>

            <p className={style.TextP4}>
                Grâce à ma <strong>double compétence photo + vidéo</strong>, je pilote l’ensemble du projet : cadrage 
                stratégique, production sur site, post-production, export et optimisation pour le web et les réseaux.
            </p>

            <p className={style.TextP4}>
                Mon studio à Montpellier constitue également un cadre idéal pour des portraits corporate premium, 
                complémentaires aux reportages réalisés dans vos locaux.
            </p>

            <h2 className={style.TitleH2_00N0}>
                La qualité de mes réalisations Corporate
            </h2>

            <p className={style.TextP4}>
                J’apporte un soin particulier à chaque entreprise, quelle que soit sa taille ou son secteur.
            </p>

            <p className={style.TextP4}>
                Chaque projet est conduit avec l’exigence d’une réalisation de référence : précision des cadrages, 
                cohérence de la ligne visuelle, attention portée au message et échanges réguliers pour comprendre au 
                mieux votre réalité professionnelle.
            </p>

            <p className={style.TextP4}>
                Découvrez mes premières réalisations en photo corporate et vidéo corporate, qui témoignent de ma 
                capacité à transformer vos idées en contenus professionnels percutants, pensés pour renforcer votre 
                communication interne et externe.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Mon Processus en 4 Étapes pour Vos Projets Visuels
            </h2>

            <p className={style.TextP4}>
                De l’idée initiale à la livraison des fichiers optimisés, je vous guide à chaque étape.
            </p>

            <p className={style.TextP4}>
                Mon processus est conçu pour minimiser le temps mobilisé dans vos équipes tout en garantissant un 
                résultat final parfaitement aligné avec vos objectifs stratégiques.
            </p>

            <h3 className={style.TitleH3}>
                Étape 1 : Cadrage Stratégique
            </h3>

            <p className={style.TextP4}>
                Analyse de vos objectifs (recrutement, notoriété, vente), définition du public cible et du ton. 
                Élaboration du scénario ou du plan de reportage.
            </p>

            <h3 className={style.TitleH3}>
                Étape 2 : Production & Réalisation
            </h3>

            <p className={style.TextP4}>
                Tournage vidéo sur site ou en studio, reportages photo de vos équipes et locaux. Organisation fluide 
                pour limiter les interruptions d’activité.
            </p>

            <h3 className={style.TitleH3}>
                Étape 3 : Post-Production & Livraison
            </h3>

            <p className={style.TextP4}>
                Montage vidéo, étalonnage, retouches photo professionnelles. <br />
                Livraison de fichiers prêts à l’emploi, optimisés pour le web, LinkedIn et vos supports internes.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Prêt à positionner votre entreprise comme Référence à Montpellier ?
            </h2>

            <p className={style.TextP4}>
                Gagnez en impact et en crédibilité grâce à des contenus photo et vidéo conçus spécifiquement pour les 
                entreprises de Montpellier.
            </p>

            <p className={style.TextP4}>
                Contactez-moi pour un premier échange stratégique : je vous réponds sous 24 heures. <br />
                <strong>Demander un Devis Personnalisé :</strong> <a className={style.Link} href={routerExt.emailKaleidopix}>kaleidopix@gmail.com</a>
            </p>
        </section>
    )
}

export default Home_Root;
