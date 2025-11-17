/* Import des modules CSS */
import css from "./video.module.css";
import style from "../../StyleRootComponent.module.css";

function Video_Root() {
    const currentVideo = e.currentTarget;

    // Pause toutes les autres vidéos
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
        if (video !== currentVideo) {
            video.pause();
        }
    });
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Vidéos d’Entreprise & de Mariage à Montpellier - Atelier Photo Montpellier
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
                <strong> mettre en scène une entreprise, un métier, un parcours et des valeurs, un moment de vie</strong>
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
                    onPlay={handleVideoPlay}
                    onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                    poster="/video/les-crocodiles-jaunes/les-crocodiles-jaunes.jpg"
                    playsInline
                />
                <p className={style.VideoDescription}>
                    Un cadre unique : découverte du centre de jeûne Les Crocodiles Jaunes à Albi.
                </p>
            </section>

            <h3 className={style.TitleLNH3}>
                2. Humaniser votre entreprise en valorisant les personnes qui la portent
            </h3>
















            <p className={style.TextLiP4}>
                Nous accompagnons aussi bien :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Les entreprises de services (experts-comptables, agences, cabinets, centres de bien-être…).
                </li>
                <li className={style.TextLiP4}>
                    Les artisans et PME du BTP (poseurs de fenêtres, électriciens, entreprises de rénovation…).
                </li>
                <li className={style.TextLiP4}>
                    Les organismes touristiques (treks, séjours bien-être, activités outdoor).
                </li>
                <li className={style.TextLiP4}>
                    Les entreprises industrielles et acteurs du secteur secondaire.
                </li>
                <li className={style.TextLiP4}>
                    Les dirigeants souhaitant raconter leur histoire de création.
                </li>
                <li className={style.TextLiP4}>
                    Les explorateurs, aventuriers et passionnés qui réalisent des exploits personnels ou sportifs.
                </li>
            </ul>

            <p className={style.TextP4}>
                Chaque vidéo est conçue pour mettre en scène votre métier, votre parcours et vos valeurs, en créant une 
                narration visuelle qui donne envie de vous suivre.
            </p>

            <h3 className={style.TitleLNH3}>
                Exemple — Vidéo “Mélodie du Désert”
            </h3>

            <section className={style.ContainerVideo}>
                <h3 className={style.VideoTitle}>Trek dans le désert du Maroc – Extrait vidéo</h3>
                <video
                    className={style.VideoPlayer}
                    src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                    controls
                    preload="none"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                    poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                    playsInline
                />
                <p className={style.VideoDescription}>
                    Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines.
                </p>
            </section>

            <h3 className={style.TitleNH3R}>
                2. Humaniser votre entreprise
            </h3>

            <p className={style.TextP4}>
                Une vidéo corporate révèle l’essence de votre activité : vos visages, vos gestes, votre façon de travailler. <br />
                Elle humanise votre communication et crée un lien naturel.
            </p>
        </section>
    );
}

export default Video_Root;
