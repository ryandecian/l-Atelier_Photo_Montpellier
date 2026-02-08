/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants d'Elements */
import { Video_Element } from "../../elements/video/Video.element";

/* Import des composants Router */
import router from "../../../router/router";

function VideoCorporate_Root() {
    return (
        <section className={`VideoCorporate_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    Vidéo corporate à Montpellier : valorisez votre activité et vos métiers
                </h1>
            </header>

            <p className={style.TextP4}>
                La <strong>vidéo corporate à Montpellier</strong> est aujourd’hui l’un des outils les plus efficaces 
                pour présenter une entreprise, un métier ou une activité professionnelle de manière claire et crédible. <br />
                Bien pensée, elle permet de rendre visible un savoir-faire réel, une manière de travailler et une culture 
                d’entreprise, sans discours artificiel.
            </p>

            <p className={style.TextP4}>
                J’accompagne les entreprises, PME, structures professionnelles et organisations basées à {` `}
                <strong>Montpellier, en France et à l’étranger </strong> dans la création de <strong>vidéos d’entreprise utiles</strong>
                {` `}, conçues pour répondre à des objectifs concrets : visibilité, communication digitale, recrutement, 
                marque employeur ou prise de parole dirigeante.
            </p>

            <p className={style.TextP4}>
                Mon approche repose sur une conviction simple : <br />
                Une <strong>bonne vidéo d’entreprise doit servir votre stratégie</strong>, pas seulement votre image.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Vidéo métier et vidéo d’activité à Montpellier : montrer ce que vous faites vraiment
            </h2>

            <p className={style.TextP4}>
                Toutes les entreprises ne se reconnaissent pas dans une vidéo corporate classique tournée derrière un 
                bureau. <br />
                De nombreuses activités se vivent <strong>sur le terrain</strong>, dans un environnement précis, avec 
                des gestes, des interactions et un rythme propre.
            </p>

            <p className={style.TextLiP4}>
                La <strong>vidéo métier</strong> ou <strong>vidéo d’activité d’entreprise</strong> permet de montrer concrètement :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    ce que vous faites,
                </li>
                <li className={style.TextLiP4}>
                    comment vous le faites,
                </li>
                <li className={style.TextLiP4}>
                    et dans quel esprit.
                </li>
            </ul>

            <p className={style.TextLiP4}>
                Elle s’adresse particulièrement aux entreprises de services, aux métiers techniques, aux structures de 
                formation, aux activités terrain ou aux organisations souhaitant une communication plus incarnée.
            </p>
            
            <Video_Element
                title="Vidéo d’activité immersive : expérience et parcours client"
                src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                poster="/video/video-trek-desert-maroc/video-trek-desert-maroc-kaleidopix.jpg"
                description="Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines."
            />

            <p className={style.TextP4}>
                Ce format met l’accent sur l’expérience vécue. <br />
                Le tournage valorise l’environnement, les échanges, le rythme et l’atmosphère afin de permettre aux 
                futurs clients de se projeter avant même le premier contact.
            </p>

            <p className={style.TextLiP4}>
                La <strong>vidéo d’activité immersive</strong> est particulièrement adaptée aux :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    métiers terrain (BTP, industrie, services techniques),
                </li>
                <li className={style.TextLiP4}>
                    centres de formation,
                </li>
                <li className={style.TextLiP4}>
                    structures d’accompagnement,
                </li>
                <li className={style.TextLiP4}>
                    activités touristiques ou événementielles,
                </li>
                <li className={style.TextLiP4}>
                    concepts expérientiels.
                </li>
            </ul>

            <Video_Element
                title="Vidéo d’activité et mise en valeur d’un lieu"
                src="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.mp4"
                poster="/video/les-crocodiles-jaunes/les-crocodiles-jaunes-kaleidopix.jpg"
                description="Un cadre unique : découverte du centre de jeûne : Les Crocodiles Jaunes à Albi."
            />

            <p className={style.TextP4}>
                Cette approche permet de valoriser un <strong>lieu</strong>, un <strong>concept</strong> et une {` `}
                <strong>philosophie d’accueil</strong> sans discours commercial forcé. <br />
                Elle est pertinente pour les entreprises recevant du public ou souhaitant humaniser leur communication 
                professionnelle. Elle propose l’expérience client qui sera vécu.
            </p>

            <p className={style.TextP4}>
                Objectif : montrer la cohérence du lieu, la qualité de l’accueil et l’expérience proposée, de manière 
                fluide et sincère.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Pourquoi investir dans une vidéo corporate professionnelle ?
            </h2>

















            <p className={style.TextP4}>
                Chaque vidéo est conçue pour être un <strong>actif durable</strong>, réutilisable sur différents supports.
            </p>

            <p className={style.TextP4}>
                Vidéo Corporate : Valoriser votre savoir-faire et <strong>inspirer confiance</strong> à vos Clients. <br />
                Une vidéo efficace ne se limite pas à filmer vos locaux ou vos activités : elle révèle ce qui rassure 
                réellement vos clients.
            </p>

            <p className={style.TextP4}>
                En montrant vos équipes en action, vos méthodes de travail et vos environnements professionnels, vous 
                offrez un aperçu concret de votre sérieux, de votre transparence et de votre cohérence d’entreprise.
            </p>

            <p className={style.TextP4}>
                Grâce à une compréhension précise des enjeux de communication : image, culture, marque employeur, chaque 
                vidéo est pensée pour <strong>mettre en valeur les éléments qui renforcent la confiance :</strong> {` `}
                expertise, humanité, rigueur, engagement.
            </p>

            <p className={style.TextP4}>
                La vidéo corporate est également un <strong>levier très puissant pour le recrutement :</strong> elle attire 
                des candidats plus alignés, réduit le turnover et permet un recrutement plus ciblé. <br />
                Les talents veulent voir où ils postulent et avec qui ils vont travailler, la vidéo répond à cette 
                attente de manière immédiate.
            </p>

            <p className={style.TextP4}>
                J’explique d’ailleurs ce phénomène dans ma page blog. <br />
                Une vidéo bien pensée aide clients et candidats à se projeter et à choisir votre entreprise en toute 
                confiance.
            </p>
            
            <h2 className={style.TitleH2_00N0}>
                Vidéo métier & activité à Montpellier : valorisez votre savoir-faire
            </h2>

            <p className={style.TextLiP4}>
                Toutes les entreprises n’ont pas besoin d’un film institutionnel complet. <br />
                Parfois, une <strong>vidéo ciblée sur une activité précise</strong> est bien plus efficace. <br />
                Il peut s’agir :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    d’un service spécifique
                </li>
                <li className={style.TextLiP4}>
                    d’un métier clé dans votre organisation
                </li>
                <li className={style.TextLiP4}>
                    d’un process technique
                </li>
                <li className={style.TextLiP4}>
                    d’un savoir-faire artisanal ou professionnel
                </li>
            </ul>

            <p className={style.TextP4}>
                Ce format est particulièrement adapté aux entreprises locales, artisans, cabinets, centres de formation 
                ou PME souhaitant valoriser concrètement leur travail.
            </p>

            <p className={style.TextP4}>
                À Montpellier et dans la région, je réalise des vidéos métier qui montrent vos équipes en action, vos 
                gestes professionnels, vos environnements réels — sans mise en scène artificielle. <br />
                L’objectif est simple : permettre à vos futurs clients (et candidats) de comprendre immédiatement ce 
                que vous faites, comment vous le faites, et avec quel niveau d’exigence.
            </p>

            <p className={style.TextP4}>
                Ces vidéos peuvent rester strictement professionnelles, ou intégrer une dimension plus personnelle 
                lorsque votre activité s’y prête (atelier à domicile, studio, passion entrepreneuriale, parcours individuel…).
            </p>

            <p className={style.TextLiP4}>
                Toujours avec la même ligne directrice : authenticité, clarté, crédibilité.
            </p>
                        
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    un montage dynamique, optimisé web
                </li>
                <li className={style.TextLiP4}>
                    sous-titres inclus pour une diffusion efficace sur LinkedIn
                </li>
            </ul>

            <p className={style.TextLiP4}>
                Ce sont des contenus conçus pour vivre longtemps : site internet, pages services, recrutement, présentations commerciales.
            </p>

            <Video_Element
                title="80 ans, première moto, 16 000 km en Afrique - Doris inspire le monde !"
                src="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.mp4"
                poster="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.jpg"
                description="Doris traverse l’Afrique à moto pour poursuivre son rêve de découverte."
            />
            
            <h2 className={style.TitleH2_00N0}>
                Mon Approche : Des contenus visuels alignés avec votre stratégie
            </h2>

            
            <p className={style.TextLiP4}>
                Avant chaque projet, nous définissons ensemble :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>l’objectif</strong> (recrutement, notoriété, communication interne, présentation métier),
                </li>
                <li className={style.TextLiP4}>
                    <strong>le message</strong> à transmettre,
                </li>
                <li className={style.TextLiP4}>
                    <strong>les éléments visuels</strong> à mettre en valeur,
                </li>
                <li className={style.TextLiP4}>
                    <strong>le format vidéo</strong> le plus adapté.
                </li>
            </ul>
            
            <p className={style.TextP4}>
                Cette étape garantit une vidéo ou un reportage pleinement aligné avec votre identité d’entreprise. <br />
                Je vous accompagne ensuite sur l’ensemble du processus : préparation, repérage, tournage, organisation, 
                montage et livraison optimisée pour le web et les réseaux professionnels.
            </p>
            
            <h2 className={style.TitleH2_00N0}>
                Un Processus vidéo simple et professionnel
            </h2>

            <p className={style.TextP4}>
                <strong>Étape 1 - Cadrage & Préparation</strong> <br />
                Repérage, choix des lieux, définition du message, création d’un fil narratif.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 2 - Tournage sur Site</strong> <br />
                Captation en conditions réelles : interviews, plans de coupe, séquences métier, ambiance.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 3 - Montage & Post-production</strong> <br />
                Montage rythmé, étalonnage, titrages, sous-titres (indispensables pour LinkedIn).
            </p>

            <p className={style.TextP4}>
                <strong>Étape 4 - Livraison Optimisée</strong> <br />
                Exports adaptés à votre site, réseaux sociaux, écrans internes ou supports RH.
            </p>
            
            <h2 className={style.TitleH2_00N0}>
                Envie de créer une vidéo corporate qui renforce votre image ?
            </h2>

            <p className={style.TextP4}>
                <Link to={router[3].path} className={style.Link}>
                    📩 Contactez-moi - Réponse garantie sous 24h
                </Link>
            </p>
        </section>
    )
}

export { VideoCorporate_Root };