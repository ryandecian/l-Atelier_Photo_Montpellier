/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des Components de Data */
import { faqVideoCorporate_Data } from "./faq.data";

/* Import des composants d'Elements */
import { FAQ_Element } from "../../elements/faq/FAQ.element";

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

            <p className={style.TextLiP4}>
                Une <strong>vidéo d’entreprise bien construite</strong> devient un véritable actif de communication. <br />
                Elle permet notamment de :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    présenter votre activité de manière claire et engageante
                </li>
                <li className={style.TextLiP4}>
                    valoriser vos équipes, vos métiers et vos conditions de travail
                </li>
                <li className={style.TextLiP4}>
                    expliquer un process ou un savoir-faire spécifique
                </li>
                <li className={style.TextLiP4}>
                    renforcer votre présence digitale (site internet, LinkedIn, supports professionnels)
                </li>
                <li className={style.TextLiP4}>
                    faciliter le recrutement en montrant la réalité de votre culture d’entreprise
                </li>
            </ul>

            <p className={style.TextP4}>
                Que vous soyez une PME, une structure locale ou une organisation plus établie, la vidéo contribue à {` `}
                <strong>qualifier les contacts</strong> et à <strong>créer de la confiance</strong> dès les premiers échanges.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Vidéos corporate à Montpellier : des formats adaptés à votre réalité
            </h2>

            <p className={style.TextLiP4}>
                Chaque entreprise n’a pas les mêmes besoins ni le même niveau de maturité en communication. <br />
                Je propose plusieurs formats de <strong>vidéos corporate</strong>, choisis en fonction de votre activité et de vos objectifs.
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Vidéo marque employeur</strong> <br />
                    Ambiance de travail, valeurs, témoignages collaborateurs.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Interview dirigeant ou manager</strong> <br />
                    Vision, posture, message stratégique.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Vidéo métier ou vidéo d’activité</strong> <br />
                    Gestes professionnels, terrain, savoir-faire réel.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Film institutionnel</strong> <br />
                    Présentation globale de votre entreprise ou organisation.
                </li>
            </ul>

            <p className={style.TextP4}>
                Chaque vidéo est conçue pour être réutilisable sur plusieurs supports : site internet, LinkedIn, 
                recrutement, présentations commerciales ou communication interne.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Interview et parcours humain : structurer une prise de parole professionnelle
            </h2>

            <p className={style.TextLiP4}>
                Certaines prises de parole nécessitent plus qu’un simple tournage.
                Elles demandent une vraie écoute, un cadre rassurant et une structuration du discours.
            </p>

            <Video_Element
                title="Interview et récit de parcours professionnel"
                src="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.mp4"
                poster="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.jpg"
                description="Doris traverse l’Afrique à moto pour poursuivre son rêve de découverte."
            />

            <p className={style.TextP4}>
                Ce format repose sur un travail approfondi d’interview et de mise en récit. <br />
                L’objectif n’est pas de raconter une success story, mais de donner de la cohérence à un parcours et de 
                faire émerger le sens de l’engagement professionnel.
            </p>

            <p className={style.TextLiP4}>
                Il est particulièrement adapté aux :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    dirigeants,
                </li>
                <li className={style.TextLiP4}>
                    managers,
                </li>
                <li className={style.TextLiP4}>
                    experts,
                </li>
                <li className={style.TextLiP4}>
                    porteurs de projet souhaitant incarner leur activité avec justesse.
                </li>
            </ul>

            <h2 className={style.TitleH2_00N0}>
                Une approche alignée avec votre stratégie d’entreprise
            </h2>

            <p className={style.TextLiP4}>
                Avant chaque projet de <strong>vidéo corporate à Montpellier</strong>, nous définissons ensemble :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    l’objectif de la vidéo
                </li>
                <li className={style.TextLiP4}>
                    le message à transmettre
                </li>
                <li className={style.TextLiP4}>
                    les éléments visuels à valoriser
                </li>
                <li className={style.TextLiP4}>
                    le format le plus pertinent
                </li>
            </ul>

            <p className={style.TextP4}>
                Cette phase de cadrage garantit un contenu cohérent, lisible et réellement utile pour votre communication. <br />
                Je vous accompagne ensuite sur l’ensemble du processus : préparation, repérage, tournage, organisation, 
                montage et livraison optimisée pour le web et les réseaux professionnels.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Un processus vidéo simple, clair et professionnel
            </h2>

            <p className={style.TextP4}>
                <strong>Étape 1 — Cadrage et préparation</strong> <br />
                Définition du message, choix des lieux, construction d’un fil narratif.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 2 — Tournage sur site</strong> <br />
                Captation en conditions réelles : interviews, plans de coupe, séquences métier, ambiance.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 3 - Montage & Post-production</strong> <br />
                Montage fluide, étalonnage, titrages et sous-titres (essentiels pour LinkedIn).
            </p>

            <p className={style.TextP4}>
                <strong>Étape 4 - Livraison Optimisée</strong> <br />
                Exports adaptés à votre site, réseaux sociaux, écrans internes ou supports RH.
            </p>

            <p className={style.TextP4}>
                <Link to={router[3].path} className={style.Link}>
                    📩 Contactez-moi - Réponse garantie sous 24h
                </Link>
            </p>

            <h2 className={style.TitleH2_00N0}>
                FAQ : Questions fréquentes sur la vidéo corporate à Montpellier ?
            </h2>

            <FAQ_Element items={faqVideoCorporate_Data} />
        </section>
    )
}

export { VideoCorporate_Root };