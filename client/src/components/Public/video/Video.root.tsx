/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des Utils */
import { pauseOtherVideos_Utils } from "../../../utils/pauseOtherVideos.utils";

function Video_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Vidéos Professionnelles pour Entreprises, Loisirs, Événements et Mariage
                </h1>
            </header>

            <p className={style.TextP4}>
                A l’Atelier Photo Montpellier, nous créons des <strong>vidéos autant pour les entreprises</strong> afin 
                de servir leurs objectifs : attirer plus de clients, présenter les équipes, renforcer la crédibilité, 
                clarifier les services et améliorer la visibilité, que pour les moments de vie tels que votre mariage 
                afin d’immortaliser toutes les sensations de ce jour exceptionnel.
            </p>

            <p className={style.TextP4}>
                Nous accompagnons tout public de la <strong>PME</strong> à la <strong>TPE</strong>, du dirigeant à 
                l’explorateur désirant partager son aventure, des jeunes parents aux jeunes (ou moins jeunes) mariés !
            </p>

            <p className={style.TextP4}>
                Chaque vidéo est conçue pour
                <strong> mettre en scène une entreprise, un métier, un parcours et des valeurs, un moment de vie </strong>
                en créant une narration visuelle qui donne envie de vous suivre.
            </p>

            <h2 className={style.TitleH2}>
                Pourquoi faire appel à une vidéaste professionnelle pour votre société ?
            </h2>

            <h3 className={style.TitleLNH3}>
                1. Booster vos conversions (l’argument que vos clients regardent en premier)
            </h3>

            <p className={style.TextP4}>
                Une vidéo corporate bien conçue augmente fortement les réservations, les demandes de devis et les prises de contact.
            </p>

            <p className={style.TextLiP4}>
                Elle répond immédiatement aux trois questions essentielles :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Est-ce que cette entreprise est fiable ?
                </li>
                <li className={style.TextLiP4}>
                    Est-ce que je comprends clairement ce qu’elle fait ?
                </li>
                <li className={style.TextLiP4}>
                    Est-ce que j’ai envie de travailler avec elle ?
                </li>
            </ul>

            <p className={style.TextP4}>
                Quand ces trois leviers sont activés, la conversion grimpe naturellement.
            </p>

            <section className={style.ContainerVideo}>
                <h3 className={style.VideoTitle}>Vidéo : Les crocodiles jaunes</h3>
                <video
                    className={style.VideoPlayer}
                    src="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.mp4"
                    controls
                    preload="none"
                    controlsList="nodownload"
                    onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                    onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                    poster="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.jpg"
                    playsInline
                />
                <p className={style.VideoDescription}>
                    Un cadre unique : découverte du centre de jeûne <br />
                    Les Crocodiles Jaunes à Albi.
                </p>
            </section>

            <h3 className={style.TitleNH3}>
                2. Humaniser votre entreprise en valorisant les personnes qui la portent
            </h3>

            <p className={style.TextP4}>
                Une vidéo corporate révèle l’essence de votre activité : vos visages, vos gestes, votre façon de travailler. <br />
                Elle humanise votre communication et crée un lien naturel. <br />
                Effets : <strong>une relation plus chaleureuse, des collaborateurs valorisés</strong>, une image plus 
                authentique, une attractivité renforcée
            </p>

            <h3 className={style.TitleNH3}>
                3. Augmenter votre visibilité en ligne en utilisant la vidéo
            </h3>

            <p className={style.TextP4}>
                <strong>La vidéo augmente la durée de visite</strong>, améliore le référencement naturel et multiplie les 
                partages.
            </p>

            <p className={style.TextP4}>
                <strong>Résultats :</strong> une visibilité locale boostée, un engagement plus fort, une augmentation du 
                trafic site, <strong>une meilleure position Google, un référencement naturel en hausse.</strong>
            </p>

            <h3 className={style.TitleNH3}>
                4. Valoriser votre expertise et renforcer l’engagement de votre audience
            </h3>

            <p className={style.TextP4}>
                Une vidéo soignée donne immédiatement une impression de maîtrise, de stabilité et de professionnalisme.
            </p>

            <p className={style.TextP4}>
                <strong>Effets immédiats :</strong> une confiance accrue, <strong>une différenciation nette</strong>, 
                une image premium.
            </p>

            <p className={style.TextP4}>
                L’émotion étant le moteur de mémorisation une bonne vidéo corporate crée une atmosphère forte grâce à : 
                un musique ciblée, une narration visuelle, un rythme maîtrisé, une lumière naturelle, une mise en scène 
                authentique
            </p>

            <p className={style.TextLiP4}>
                <strong>Le spectateur va ressentir :</strong>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Ils ont l’air pros et humains.
                </li>
                <li className={style.TextLiP4}>
                    J’ai envie d’y aller.
                </li>
                <li className={style.TextLiP4}>
                    Je peux leur faire confiance.
                </li>
            </ul>

            <section className={style.ContainerVideo}>
                <h3 className={style.VideoTitle}>Trek dans le désert du Maroc – Extrait vidéo</h3>
                <video
                    className={style.VideoPlayer}
                    src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                    controls
                    preload="none"
                    controlsList="nodownload"
                    onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                    onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                    poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                    playsInline
                />
                <p className={style.VideoDescription}>
                    Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines.
                </p>
            </section>

            <h2 className={style.TitleH2}>
                Des vidéos de mariage, de naissance ou de loisirs pour révéler vos moments forts
            </h2>

            <h3 className={style.TitleLNH3}>
                1. Préserver des souvenirs qui traversent le temps
            </h3>

            <p className={style.TextP4}>
                Une vidéo bien réalisée permet de conserver un moment important avec une intensité que la photo seule 
                ne peut pas restituer.
            </p>

            <p className={style.TextLiP4}>
                Elle fige non seulement les images, mais aussi :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    les voix,
                </li>
                <li className={style.TextLiP4}>
                    les regards,
                </li>
                <li className={style.TextLiP4}>
                    les rires,
                </li>
                <li className={style.TextLiP4}>
                    les instants spontanés.
                </li>
            </ul>

            <p className={style.TextLiP4}>
                Ce format répond à trois besoins essentiels :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Revivre un moment</strong> tel qu’il a été réellement vécu.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Le transmettre à ses proches</strong>, aujourd’hui ou plus tard.
                </li>
                <li className={style.TextLiP4}>
                    <strong>Disposer d’un souvenir fidèle</strong>, propre et agréable à regarder.
                </li>
            </ul>

            <p className={style.TextLiP4}>
                <strong>Effets observés chez les familles et couples accompagnés :</strong>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Meilleure réappropriation des souvenirs (évite l’oubli des détails)
                </li>
                <li className={style.TextLiP4}>
                    Forte émotion lors du visionnage
                </li>
                <li className={style.TextLiP4}>
                    Souvenir intergénérationnel durable
                </li>
            </ul>

            <h3 className={style.TitleLNH3}>
                2. Raconter vos instants forts : aventures, mariage ou naissance
            </h3>

            <p className={style.TextP4}>
                Chaque événement a sa dynamique et sa sensibilité. Une vidéo bien construite permet d’en capter l’essence.
            </p>

            <p className={style.TextP4}>
                Je réalise pour vous des <strong>vidéos lifestyle</strong>, des
                <strong>portraits vidéo personnels</strong>, sportifs et artistiques, conçus pour valoriser vos activités, 
                vos passions et vos aventures. Que vous cherchiez un <strong>vidéaste équitation</strong>, une 
                <strong>vidéo de votre moto</strong>, une <strong>vidéo cheval</strong>, un 
                <strong>portrait vidéo sportif</strong>, une <strong>vidéo mise en scène</strong>, un
                <strong>portrait vidéo professionnel</strong>, ou encore une vidéo pour mettre en valeur votre 
                côté <strong>explorateur</strong>, je vous accompagne avec une approche créative et authentique.
            </p>

            <p className={style.TextP4}>
                Ces prestations s’adressent aux <strong>particuliers</strong>, aux <strong>passionnés</strong>, aux 
                <strong> artistes</strong>, aux <strong>sportifs</strong> et aux <strong>explorateurs</strong> souhaitant une
                <strong>vidéo de présentation personnelle</strong> ou une <strong>vidéo de présentation d’activité.</strong> <br />
                Votre <strong>vidéaste créatif à Montpellier</strong> met en valeur votre univers avec un rendu dynamique, 
                esthétique et facile à partager.
            </p>

















        </section>
    );
}

export default Video_Root;
