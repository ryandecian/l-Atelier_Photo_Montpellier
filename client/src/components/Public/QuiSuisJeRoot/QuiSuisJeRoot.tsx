/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import ListDataRouter from "../../../router/router";

/* Import des Utils */
import { pauseOtherVideos_Utils } from "../../../utils/pauseOtherVideos.utils";

function QuiSuisJeRoot() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mon Parcours de Photographe : De l'Argentique au Numérique, Une Passion Retrouvée
                </h1>
            </header>

            <div className={style.ContainerFloat}>
                <section className={style.FloatLeftImg_Po}>
                    <h3 className={style.VideoTitle}>Se révéler devant l'objectif</h3>
                    <video
                        className={style.VideoPlayer}
                        src="/video/auto-portrait/auto-portrait.mp4"
                        controls
                        preload="none"
                        controlsList="nodownload"
                        onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                        onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                        poster="/video/auto-portrait/auto-portrait.jpg"
                        playsInline
                    />
                    <p className={style.VideoDescription}>
                        <strong>Se révéler devant l'objectif : un voyage intime à travers le portrait.</strong>
                    </p>
            </section>

                <h2 className={style.TitleH2}>
                    De mes débuts argentiques à la création d’images professionnelles
                </h2>
    
                <p className={style.TextP4}>
                    Mon rapport à l’image commence très tôt. <br />
                    Un appareil argentique. <br />
                    Un agrandisseur installé dans la salle de bains familiale.
                </p>

                <p className={style.TextP4}>
                    Je passais des heures dans le noir, à attendre que l’image apparaisse. <br />
                    Chimie, gestes précis, patience... <br />
                    Cette approche artisanale a façonné mon regard. <br />
                    Puis le numérique est arrivé, et j’ai mis la photo de côté.
                </p>

                <p className={style.TextP4}>
                    Cette transition me semblait trop éloignée de ma façon de travailler, où chaque déclenchement comptait. <br />
                    Pourtant, ces premières années argentiques sont aujourd’hui le socle de ma manière de créer des images authentiques.
                </p>

                <p className={style.TextP4}>
                    Portraits, reportages, vidéos professionnelles, films de mariage, séances naissance… tout reste guidé 
                    par la lumière, l’émotion et la simplicité.
                </p>

                <h2 className={style.TitleH2}>
                    Mon retour à l’image : immobilier, portrait professionnel et vidéo moderne
                </h2>

                <p className={style.TextP4}>
                    C’est par la photographie immobilière que j’ai retrouvé l’image. <br />
                    Un domaine technique qui m’a ramenée au cadrage, à la lumière naturelle et à la précision. <br />
                    Très vite, j’ai renoué avec le portrait. Life Style – Nouveaux Nés - Grossesse
                </p>

                <p className={style.TextP4}>
                    Puis avec les besoins des entreprises : <br />
                    portraits d’équipe, dirigeants, reportage métier, communication interne. <br />
                </p>

                <p className={style.TextP4}>
                    Aujourd’hui, je propose un accompagnement complet en portrait corporate, reportage métier en entreprise, 
                    portraits professionnels, en studio ou en extérieur. <br />
                    Peu à peu, j’ai intégré le post-traitement, les outils numériques, puis la vidéo. <br />
                    Un langage plus vivant, idéal pour mettre en valeur une identité de marque.
                </p>

                <h2 className={style.TitleH2}>
                    Le travail en studio : une évolution clé pour mes portraits professionnels
                </h2>

                <p className={style.TextP4}>
                    Le confinement a été un tournant. <br />
                    Avec ma famille comme modèles, j’ai travaillé le flash, la lumière artificielle, le contraste, les ambiances. <br />
                    Une formation au Studio B612 a renforcé cette base : sculpter un visage, créer une atmosphère, diriger un modèle.
                </p>

                <p className={style.TextLiP4}>
                    Aujourd’hui, le studio est essentiel dans ma pratique. <br />
                    J’y réalise :
                </p>

                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        portraits d’entreprise,
                    </li>
                    <li className={style.TextLiP4}>
                        portraits individuels,
                    </li>
                    <li className={style.TextLiP4}>
                        séances famille, grossesse, nouveau-né,
                    </li>
                    <li className={style.TextLiP4}>
                        projets créatifs uniques.
                    </li>
                </ul>

                <p className={style.TextP4}>
                    C’est un espace où chacun peut se sentir en confiance.
                </p>
                
                <h2 className={style.TitleH2}>
                    Ma transition vers la vidéo professionnelle pour entreprises et portraits
                </h2>

                <p className={style.TextP4}>
                    Avec le portrait, la vidéo est arrivée naturellement. <br />
                    Envie de raconter différemment : une voix, un geste, une ambiance, une énergie. <br />
                    J’accompagne aujourd’hui les entreprises, créateurs et indépendants dans leurs contenus vidéo.
                </p>

                <p className={style.TextP4}>
                    Je réalise chaque film de A à Z : de la captation à la post-production sur DaVinci Resolve Studio, 
                    pour un rendu cohérent, moderne et professionnel.
                </p>
    
                <p className={style.TextP4}>
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[2].path}>
                            Découvrez mes prestations et trouvez celle qui vous correspond le mieux !
                        </Link>
                    </span>
                </p>
            </div>
        </section>
    );
}

export default QuiSuisJeRoot;
