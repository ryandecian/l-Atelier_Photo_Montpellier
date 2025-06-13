import style from "../StyleRootComponent.module.css";
import css from "./QuiSuisJeRoot.module.css";

import PremiumCardImgSudoRoot from "../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";
import useMediaQueriesWidth from "../../hook/mediaQueriesWidth.utils.hook";
import { text } from "stream/consumers";

type textHTMLType = {
    htmlA: JSX.Element;
    htmlB: string;
    htmlC: string;
    htmlD: string;
    htmlE: JSX.Element;
    htmlF: string;
    htmlG: string;
    htmlH: string;
    htmlI: string;
    htmlJ: string;
    htmlK: string;
    htmlL: string;
    htmlM: string;
}

function QuiSuisJeRoot() {
    const viewportWidth: number = useMediaQueriesWidth();

    const textHTML: textHTMLType = {
        htmlA: (
            <figure className={css.ContainerPortraitAutor}>
                <PremiumCardImgSudoRoot src="./images/image-qui-suis-je/lapm-photographe-anne-saunier-l-atelier-photo-montpellier.jpg" alt="Portrait de la photographe professionnelle Anne SAUNIER" className={css.AutorImg} />
                <figcaption className={style.SpanBold}>
                    Anne SAUNIER
                </figcaption>
            </figure>
        ),
        htmlB: "C’est par la photographie immobilière que je suis revenue à mes premières amours. ",
        htmlC: "J'ai progressivement redécouvert la magie de l’image, tout en me familiarisant avec les nouvelles technologies numériques.",
        htmlD: "Depuis 7 ans, mon engagement en photographie est devenu plus profond, et ",
        htmlE: (
            <span className={style.SpanBold}>
                {"j’ai développé une expertise réelle dans ce domaine. "}
            </span>
        ),
        htmlF: "L’utilisation du post-traitement, devenu incontournable dans la photographie numérique, a été un axe fondamental de mon apprentissage. ",
        htmlG: "Le confinement a été aussi un tournant dans mon parcours, m’offrant l’occasion de perfectionner mes compétences en éclairage, notamment grâce à l'utilisation du flash. ",
        htmlH: "Avec mes modèles familiaux présents à la maison, j’ai expérimenté et peaufiné mes techniques de portrait en lumière artificielle. ",
        htmlI: "J’ai également suivi une formation au studio B612, ce qui m’a permis de comprendre de manière plus approfondie les subtilités du flash et son impact dans la création d’images à la fois dramatiques et naturelles. ",
        htmlJ: "",
        htmlK: "",
        htmlL: "",
        htmlM: ""
    };

    return (
        <section className={`QuiSuisJe ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mon Parcours de Photographe : De l'Argentique au Numérique, Une Passion Retrouvée
                </h1>
            </header>

            <p className={style.TextP4}>
                Mon aventure photographique a commencé dès mon plus jeune âge avec un appareil argentique et un agrandisseur 
                que je montais et démontais dans la salle de bains de mes parents. J’ai passé de nombreuses heures à 
                maîtriser la chimie des films et à perfectionner mes tirages, une expérience profondément tactile et 
                manuelle. Cependant, avec l’arrivée du numérique, je me suis éloignée de la photographie pendant un certain 
                temps. Cette transition technologique m’a paru trop éloignée de ma pratique originale, 
                <span className={style.SpanBold}>
                    {" pour laquelle chaque photo devait être LA photo."}
                </span>
            </p>

            {/* MediaQuery maison */}
            {viewportWidth <= 550 && (
                <>
                    {textHTML.htmlA}
                    
                </>
            )}
        </section>
    )
}

export default QuiSuisJeRoot;
