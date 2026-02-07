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
                    Vidéos Corporate et Reportages d’Entreprise à Montpellier
                </h1>
            </header>

            <p className={style.TextP4}>
                La vidéo est aujourd’hui l’un des <strong>outils les plus puissants </strong> pour valoriser votre entreprise. <br />
                Elle permet de dévoiler votre culture, votre expertise, vos valeurs et le travail de vos équipes avec 
                un impact immédiat.
            </p>

            <p className={style.TextP4}>
                À Montpellier et dans la région, j’accompagne les organisations qui souhaitent renforcer leur 
                communication, attirer des talents, présenter leurs métiers ou structurer leur identité visuelle grâce 
                à des contenus audiovisuels professionnels.
            </p>

            <p className={style.TextP4}>
                Mon approche : <strong>produire des contenus clairs</strong>, humains et alignés avec vos objectifs - marque 
                employeur, <strong>recrutement</strong>, prise de parole, présentation entreprise ou communication digitale.
            </p>
            
            <Video_Element
                title="Aventure saharienne - Immersion dans le désert avec Mélodie du Désert"
                src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                description="Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines."
            />

            <h2 className={style.TitleH2_00N0}>
                Le retour sur investissement (ROI) d’une vidéo corporate ?
            </h2>

            <p className={style.TextLiP4}>
                Une vidéo professionnelle donne à votre entreprise une visibilité forte et crédible. <br />
                Elle permet de :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    présenter votre structure de manière claire et engageante,
                </li>
                <li className={style.TextLiP4}>
                    mettre en avant votre marque employeur,
                </li>
                <li className={style.TextLiP4}>
                    valoriser vos équipes, vos métiers et votre environnement,
                </li>
                <li className={style.TextLiP4}>
                    expliquer un process technique ou un savoir-faire,
                </li>
                <li className={style.TextLiP4}>
                    renforcer votre présence digitale (site web, LinkedIn, réseaux pro),
                </li>
                <li className={style.TextLiP4}>
                    faciliter le recrutement en donnant à voir la réalité de votre culture d’entreprise.
                </li>
            </ul>
            
            <p className={style.TextP4}>
                Que vous disposiez d’une petite équipe ou d’une structure plus importante, une vidéo corporate 
                professionnelle devient un véritable outil pour <strong>générer de la demande client et qualifier vos recrutements.</strong>
                {` `}<strong>C’est un actif durable</strong>, réutilisable sur le site web, LinkedIn, vos offres 
                d’emploi, vos présentations et vos supports internes.
            </p>
            
            <Video_Element
                title="Votre prochaine parenthèse bien-être : Les Crocodiles Jaunes"
                src="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.mp4"
                poster="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.jpg"
                description="Un cadre unique : découverte du centre de jeûne : Les Crocodiles Jaunes à Albi."
            />

            <h2 className={style.TitleH2_00N0}>
                Vidéos Corporate : une identité visuelle indispensable actuellement
            </h2>

            <p className={style.TextLiP4}>
                Je réalise différents formats vidéo adaptés à vos besoins et à la maturité de votre communication :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Vidéo Marque Employeur :</strong> ambiance de travail, témoignages, culture d’entreprise.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Interview Dirigeant ou Manager :</strong> vision, valeurs, message stratégique.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Vidéo Métier :</strong> démonstration de gestes professionnels, présentation d’un service.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Film Institutionnel :</strong> portrait global de votre entreprise.
                </li>
            </ul>

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