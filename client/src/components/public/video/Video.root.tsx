/* Import des modules CSS */
import css from "./video.module.css";
import style from "../../StyleRootComponent.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Components de Data */
import { avisClientVideo_Data } from "./avisClientVideo.data";

/* Import des composants d'Elements */
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { Video_Element } from "../../elements/video/Video.element";

/* Import des composants Router */
import router from "../../../router/router";

function Video_Root() {
    return (
        <section className={` Video_Root ${style.ContainerRootRacine} ${css.Video_Root}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Vidéos Professionnelles pour Entreprises, Événements et Mariage
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                Pourquoi faire appel à une vidéaste professionnelle pour votre entreprise ?
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

            <Video_Element
                title="Aventure saharienne - Immersion dans le désert avec Mélodie du Désert"
                src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                description="Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines."
            />

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

            <Video_Element
                title="Votre prochaine parenthèse bien-être : Les Crocodiles Jaunes"
                src="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.mp4"
                poster="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.jpg"
                description="Un cadre unique : découverte du centre de jeûne - Les Crocodiles Jaunes à Albi."
            />

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
                <strong> portraits vidéo personnels</strong>, sportifs et artistiques, conçus pour valoriser vos activités, 
                vos passions et vos aventures. Que vous cherchiez un <strong>vidéaste équitation</strong>, une 
                <strong> vidéo de votre moto</strong>, une <strong>vidéo cheval</strong>, un 
                <strong> portrait vidéo sportif</strong>, une <strong>vidéo mise en scène</strong>, un
                <strong> portrait vidéo professionnel</strong>, ou encore une vidéo pour mettre en valeur votre 
                côté <strong>explorateur</strong>, je vous accompagne avec une approche créative et authentique.
            </p>

            <p className={style.TextP4}>
                Ces prestations s’adressent aux <strong>particuliers</strong>, aux <strong>passionnés</strong>, aux 
                <strong> artistes</strong>, aux <strong>sportifs</strong> et aux <strong>explorateurs</strong> souhaitant une
                <strong> vidéo de présentation personnelle</strong> ou une <strong>vidéo de présentation d’activité.</strong> <br />
                Votre <strong>vidéaste créatif à Montpellier</strong> met en valeur votre univers avec un rendu dynamique, 
                esthétique et facile à partager.
            </p>

            <Video_Element
                title="80 ans, première moto, 16 000 km en Afrique - Doris inspire le monde !"
                src="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.mp4"
                poster="/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.jpg"
                description="À 80 ans, Doris traverse l’Afrique à moto pour poursuivre son rêve de découverte."
            />

            <p className={style.TextP4}>
                Je réalise pour vous un <strong>film de mariage naturel et authentique</strong>, pensé pour retranscrire 
                votre journée telle qu’elle a été vécue, sans mise en scène forcée. Mon objectif : capturer vos regards, 
                vos échanges, l’ambiance réelle et tous les moments spontanés qui créent la magie du jour J.
            </p>

            <p className={style.TextP4}>
                Le résultat : <br />
                Un <strong>film vivant, sincère et fidèle</strong>, dans lequel vous retrouverez l’émotion, le rythme et 
                l’atmosphère de votre mariage. Une vidéo que l’on regarde et que l’on partage avec plaisir, année après année.
            </p>

            <Video_Element
                title="Vidéo de mariage Laure & Charles au Château Bas d’Aumelas"
                src="/video/video-de-mariage-laure-et-charles-au-chateau-bas-d-aumelas/video-de-mariage-laure-et-charles-au-chateau-bas-d-aumelas.mp4"
                poster="/video/video-de-mariage-laure-et-charles-au-chateau-bas-d-aumelas/video-de-mariage-laure-et-charles-au-chateau-bas-d-aumelas.jpg"
                description="Ce film de mariage capture l’essence d’une journée sincère, joyeuse et profondément humaine."
            />

            <p className={style.TextP4}>
                Je vous accompagne pour créer une <strong>vidéo de naissance douce et authentique</strong>, dédiée aux 
                tout premiers instants de votre enfant. J’y capture les gestes délicats, les premières interactions, 
                la complicité naturelle entre parents et nouveau-né, ainsi que l’atmosphère calme et chaleureuse de ces 
                moments uniques.
            </p>

            <p className={style.TextP4}>
                Le résultat : <br />
                Un <strong>souvenir tendre et intemporel</strong>, filmé avec respect et discrétion, qui vous permettra 
                de revivre ces premiers instants avec émotion et de les transmettre à votre enfant plus tard.
            </p>

            <h3 className={style.TitleNH3}>
                3. Une vidéo pensée pour être partagée et revue
            </h3>

            <p className={style.TextLiP4}>
                Votre vidéo est fournie dans un format adapté :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    à vos réseaux sociaux
                </li>
                <li className={style.TextLiP4}>
                    à votre télévision
                </li>
                <li className={style.TextLiP4}>
                    à votre téléphone
                </li>
                <li className={style.TextLiP4}>
                    à votre site ou espace privé
                </li>
            </ul>
            <p className={style.TextLiP4}>
                <strong>Effets immédiats :</strong>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    partage facilité
                </li>
                <li className={style.TextLiP4}>
                    vidéo agréable à revoir sans s’en lasser
                </li>
                <li className={style.TextLiP4}>
                    souvenir sécurisé et durable
                </li>
            </ul>

            <h2 className={style.TitleH2}>
                Donnez vie à votre projet grâce à une vidéo sur mesure
            </h2>

            <p className={style.TextP4}>
                Prêt·e à donner vie à votre image ?
            </p>

            <p className={style.TextP4}>
                Contactez-nous aujourd’hui pour une {` `}
                <span className={style.SpanLink}>
                    <Link to={router[3].path}>
                        {"vidéo corporate sur-mesure"}
                    </Link>
                </span>
                {` `} et bénéficierez d’un accompagnement complet, de la définition du concept à la diffusion sur vos 
                réseaux.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={router[3].path}>
                        {"Demandez un devis gratuit ou une rencontre-visio avec l’Atelier Photo Montpellier"}
                    </Link>
                </span>
                {` `} : la lumière, le cadre et le récit n’attendent plus que vous.
            </p>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientVideo_Data} />
        </section>
    );
}

export default Video_Root;
