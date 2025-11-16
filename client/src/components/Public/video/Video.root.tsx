/* Import des modules CSS */
import css from "./video.module.css";
import style from "../../StyleRootComponent.module.css";

function Video_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Vidéo Corporate & Institutionnelle à Montpellier – l'Atelier Photo Montpellier
                </h1>
            </header>

            <p className={style.TextP4}>
                Chez l’Atelier Photo Montpellier, nous créons des vidéos corporate et institutionnelles pensées pour 
                servir vos objectifs : attirer plus de clients, présenter vos équipes, renforcer votre crédibilité, 
                clarifier vos services et améliorer votre visibilité.
            </p>

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

            <h2 className={style.TitleH2}>
                Pourquoi opter pour une vidéo corporate pour votre communication ?
            </h2>

            <h3 className={style.TitleLNH3}>
                1. Booster vos conversions (l’argument que vos clients regardent en premier)
            </h3>

            <p className={style.TextP4}>
                Une vidéo corporate bien conçue augmente fortement les réservations, les demandes de devis et les prises 
                de contact.
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

            <h3 className={style.TitleLNH3}>
                Exemple — Vidéo “Mélodie du Désert”
            </h3>

            <section className={css.ContainerVideo}>
                <video
                    className={css.VideoPlayer}
                    src="/video/video-trek-desert-maroc.mp4"
                    controls
                    preload="none"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                    poster="/video/video-trek-desert-maroc.jpg"
                    playsInline
                />
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
