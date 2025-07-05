import style from "../StyleRootComponent.module.css";
import css from "./StyleRoot.module.css";
import { Link } from "react-router-dom";

import useMediaQueriesWidth from "../../hook/mediaQueriesWidth.utils.hook";


function QuiSuisJeRoot() {
    const viewportWidth: number = useMediaQueriesWidth();

    
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mon Parcours de Photographe : De l'Argentique au Numérique, Une Passion Retrouvée
                </h1>
            </header>

            <div className={style.ContainerFloat}>
                <div className={css.ContainerImg}>
                    <img
                        className={css.Img}
                        src="/images/image-qui-suis-je/lapm-photographe-anne-saunier-l-atelier-photo-montpellier.jpg"
                        alt="Portrait de la photographe professionnelle Anne SAUNIER"
                    />
                    <figcaption className={css.Caption}>
                        Anne SAUNIER
                    </figcaption>
                </div>

                <p className={style.TextP4}>
                    Mon aventure photographique a commencé dès mon plus jeune âge avec un appareil argentique et un agrandisseur que je montais et démontais dans la salle de bains de mes parents.
                    J’ai passé de nombreuses heures à maîtriser la chimie des films et à perfectionner mes tirages, une expérience profondément tactile et manuelle.
                    Cependant, avec l’arrivée du numérique, je me suis éloignée de la photographie pendant un certain temps.
                    Cette transition technologique m’a paru trop éloignée de ma pratique originale, 
          <span className={style.SpanBold}> pour laquelle chaque photo devait être LA photo.</span>
                </p>

                <p className={style.TextP4}>
                    C’est par la photographie immobilière que je suis revenue à mes premières amours.
                    J'ai progressivement redécouvert la magie de l’image, tout en me familiarisant avec les nouvelles technologies numériques.
                    Depuis 7 ans, mon engagement en photographie est devenu plus profond, et 
                    <span className={style.SpanBold}> 
                        {` j’ai développé une expertise réelle dans ce domaine. `}
                    </span>
                    L’utilisation du post-traitement, devenu incontournable dans la photographie numérique, a été un axe fondamental de mon apprentissage.
                </p>

                <p className={style.TextP4}>
                    Le confinement a été aussi un tournant dans mon parcours, m’offrant l’occasion de perfectionner mes compétences en éclairage,
                    notamment grâce à l'utilisation du flash. Avec mes modèles familiaux présents à la maison,
                    j’ai expérimenté et peaufiné mes techniques de portrait en lumière artificielle.
                    J’ai également suivi une formation au studio B612, ce qui m’a permis de comprendre de manière plus approfondie les subtilités du flash
                    et son impact dans la création d’images à la fois dramatiques et naturelles.
                </p>

                <p className={style.TextP4}>
                    Aujourd'hui, 
                    <span className={style.SpanBold}>
                        {` je me spécialise dans les portraits, aussi bien en studio qu’en extérieur, et dans les reportages de mariage. `}
                    </span> Mon approche se veut personnalisée, créant des projets uniques comme "Amies sur les bancs de l'école 70 ans plus tard"
                    ou "Devenez Peaky Blinders le temps d'un shooting". Toujours à la recherche de l’authenticité et de l’émotion,
                    je mets tout en œuvre pour offrir une expérience photographique inoubliable.
                </p>

                <p className={style.TextP4}>
                    <span className={style.SpanLink}>
                        <Link to="/tarifs">
                            Découvrez mes prestations et trouvez celle qui vous correspond le mieux !
                        </Link>
                    </span>
                </p>
            </div>
    </section>
  );
}

export default QuiSuisJeRoot;
