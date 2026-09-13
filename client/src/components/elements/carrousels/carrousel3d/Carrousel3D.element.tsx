/* Import des modules CSS */
import styles from "./carrousel3D.module.css";

/* Import des Components */
import { Slide_Component } from "./components/Slide.component";

/* Import des composants React */
import {
    useRef,
    useState,
    type TouchEvent,
} from "react";

/* Import des Types */
import { Carrousel3D_Props } from "./carrousel3D.type";


/**
 * ### Documentation : Composant Carrousel 3D.
 * Ce composant réutilisable à pour objectif d'afficher une liste de slides sous la forme d'un carrousel interactif avec un effet visuel 3D.
 * Il centralise la gestion de la navigation entre les différentes slides et transmet les informations nécessaires au composant `Slide_Component`.
 *
 * Il permet notamment :
 * - D'afficher une liste de slides contenant une image et éventuellement du contenu textuel.
 * - De naviguer entre les slides grâce aux boutons précédent et suivant.
 * - De naviguer sur un appareil tactile grâce à un swipe horizontal.
 * - De différencier la slide active des slides précédentes et suivantes grâce à un système d'offset.
 * - De générer une navigation circulaire virtuelle permettant de parcourir les slides indéfiniment dans les deux directions.
 * - De réutiliser automatiquement les images existantes lorsque la navigation dépasse la première ou la dernière slide.
 * - D'afficher optionnellement l'image d'une slide comme arrière-plan supplémentaire grâce à `isPageBackground`.
 * - D'ajouter une classe CSS personnalisée au conteneur principal du carrousel.
 *
 * ---
 * ### Contraintes recommandées pour les images :
 * Les images utilisées dans les slides doivent respecter les recommandations suivantes afin de garantir un affichage optimal et de limiter le poids des ressources chargées :
 *
 * - Formats acceptés : `JPG` ou `WebP`.
 * - Poids maximal recommandé : `150 Ko` par image.
 * - Ratio attendu : `3:4`.
 * - Dimensions recommandées : `1200 x 1600 px`.
 *
 * Le respect de ces dimensions et de ce ratio permet de conserver un rendu homogène entre les différentes slides et d'éviter les déformations ou les différences de cadrage dans le carrousel.
 *
 * ---
 * ### Les clés attendues en paramètre du composant sont :
 * @param {Carrousel3D_Props} props - L'objet contenant les propriétés nécessaires au fonctionnement du carrousel.
 * @param {Carrousel3D_Type[]} props.slides - **[slides]** - Tableau contenant l'ensemble des slides à afficher dans le carrousel.
 * @param {boolean} [props.isPageBackground=false] - **[isPageBackground]** Optionnel - Indique si l'image des slides doit également être utilisée comme arrière-plan supplémentaire.
 * @param {string} [props.className=""] - **[className]** Optionnel - Classe CSS supplémentaire ajoutée au conteneur principal du carrousel.
 *
 * ---
 * ### Fonctionnement de la navigation infinie :
 * Le carrousel utilise un index virtuel pouvant évoluer indéfiniment dans les valeurs positives ou négatives.
 *
 * L'index n'est donc jamais réinitialisé lorsque la première ou la dernière slide est dépassée.
 * La slide réelle à afficher est déterminée grâce à un calcul modulo basé sur le nombre de slides disponibles.
 *
 * Exemple avec quatre slides :
 * - Index virtuel `0` → slide `1`.
 * - Index virtuel `1` → slide `2`.
 * - Index virtuel `2` → slide `3`.
 * - Index virtuel `3` → slide `4`.
 * - Index virtuel `4` → slide `1`.
 * - Index virtuel `5` → slide `2`.
 * - Index virtuel `-1` → slide `4`.
 * - Index virtuel `-2` → slide `3`.
 *
 * Cette logique permet de conserver un déplacement continu sans repositionnement visible du carrousel.
 *
 * ---
 * ### Fonctionnement de la navigation tactile :
 * - Lors du début du toucher, la position X et Y du doigt est mémorisée.
 * - Lors de la fin du toucher, la distance parcourue horizontalement et verticalement est calculée.
 * - Si le mouvement est principalement vertical, aucune navigation n'est déclenchée.
 * - Si le mouvement horizontal est inférieur au seuil défini par `swipeThreshold`, aucune navigation n'est déclenchée.
 * - Un swipe vers la gauche affiche la slide suivante.
 * - Un swipe vers la droite affiche la slide précédente.
 *
 * ---
 * ### Fonctionnement de l'offset :
 * Chaque slide virtuelle reçoit une valeur `offset` représentant sa position relative par rapport à la slide actuellement active.
 *
 * - `0` correspond à la slide active.
 * - Une valeur négative correspond à une slide située avant la slide active.
 * - Une valeur positive correspond à une slide située après la slide active.
 *
 * Cette valeur est ensuite utilisée par `Slide_Component` et le CSS afin de générer le positionnement et les animations 3D.
 *
 * ---
 * @returns {React.ReactNode | null} Retourne le carrousel 3D complet. Retourne `null` si aucune slide n'est fournie.
 */
function Carrousel3D_Element({
    slides,
    isPageBackground = false,
    className = "",
}: Carrousel3D_Props) {

    /*
     * Index virtuel de la slide actuellement active.
     *
     * Cet index peut augmenter ou diminuer indéfiniment.
     * Il n'est jamais remis à zéro lorsque la navigation
     * dépasse la première ou la dernière slide.
     */
    const [slideIndex, setSlideIndex] = useState(0);

    /*
     * Position de départ du swipe tactile.
     *
     * Les positions X et Y sont conservées séparément afin de pouvoir
     * déterminer si le mouvement de l'utilisateur est principalement
     * horizontal ou vertical.
     */
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);

    /*
     * Distance minimum en pixels nécessaire pour considérer
     * le mouvement tactile comme un véritable swipe.
     */
    const swipeThreshold = 50;

    /*
     * Si aucune slide n'est fournie, aucun élément HTML
     * n'est généré par le composant.
     */
    if (slides.length === 0) {
        return null;
    }

    /**
     * ### Fonction : getRealSlideIndex.
     * Convertit un index virtuel en index réel correspondant
     * à une slide présente dans le tableau `slides`.
     *
     * Le double modulo permet également de gérer correctement
     * les index virtuels négatifs.
     *
     * Exemple avec quatre slides :
     * - `4` retourne `0`.
     * - `5` retourne `1`.
     * - `-1` retourne `3`.
     * - `-2` retourne `2`.
     *
     * ---
     * @param {number} virtualIndex - Index virtuel à convertir.
     *
     * ---
     * @returns {number} Index réel correspondant dans le tableau `slides`.
     */
    const getRealSlideIndex = (
        virtualIndex: number,
    ): number => {
        return (
            (virtualIndex % slides.length) +
            slides.length
        ) % slides.length;
    };

    /**
     * ### Fonction : handlePrevSlide.
     * Permet d'afficher la slide précédente.
     *
     * L'index virtuel est simplement décrémenté sans effectuer
     * de retour automatique vers la fin du tableau.
     *
     * ---
     * @returns {void}
     */
    const handlePrevSlide = () => {
        setSlideIndex(
            (currentIndex) => currentIndex - 1,
        );
    };

    /**
     * ### Fonction : handleNextSlide.
     * Permet d'afficher la slide suivante.
     *
     * L'index virtuel est simplement incrémenté sans effectuer
     * de retour automatique au début du tableau.
     *
     * ---
     * @returns {void}
     */
    const handleNextSlide = () => {
        setSlideIndex(
            (currentIndex) => currentIndex + 1,
        );
    };

    /**
     * ### Fonction : handleTouchStart.
     * Enregistre la position initiale du doigt lorsqu'un utilisateur
     * commence une interaction tactile sur le carrousel.
     *
     * Les positions horizontale et verticale sont conservées afin de
     * pouvoir déterminer la direction du mouvement lors de `handleTouchEnd`.
     *
     * ---
     * @param {TouchEvent<HTMLElement>} event - Événement tactile déclenché au début du contact avec le carrousel.
     *
     * ---
     * @returns {void}
     */
    const handleTouchStart = (
        event: TouchEvent<HTMLElement>,
    ) => {
        const touch = event.touches[0];

        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    /**
     * ### Fonction : handleTouchEnd.
     * Analyse le mouvement tactile effectué entre le début et la fin du toucher
     * afin de déterminer si l'utilisateur souhaite changer de slide.
     *
     * Plusieurs vérifications sont effectuées :
     * - Les coordonnées de départ doivent avoir été correctement enregistrées.
     * - Le déplacement doit être principalement horizontal.
     * - Le déplacement doit dépasser la distance minimale définie par `swipeThreshold`.
     *
     * Si ces conditions sont respectées :
     * - Un déplacement vers la gauche affiche la slide suivante.
     * - Un déplacement vers la droite affiche la slide précédente.
     *
     * ---
     * @param {TouchEvent<HTMLElement>} event - Événement tactile déclenché lorsque l'utilisateur retire son doigt.
     *
     * ---
     * @returns {void}
     */
    const handleTouchEnd = (
        event: TouchEvent<HTMLElement>,
    ) => {

        /* Vérifie que la position initiale du swipe est disponible */
        if (
            touchStartX.current === null ||
            touchStartY.current === null
        ) {
            return;
        }

        /* Récupération de la position finale du doigt */
        const touch = event.changedTouches[0];

        /* Calcul de la distance parcourue sur les axes horizontal et vertical */
        const deltaX =
            touch.clientX - touchStartX.current;

        const deltaY =
            touch.clientY - touchStartY.current;

        /* Réinitialisation des coordonnées de départ */
        touchStartX.current = null;
        touchStartY.current = null;

        /*
         * Ignore le mouvement si le déplacement vertical
         * est supérieur ou égal au déplacement horizontal.
         */
        if (
            Math.abs(deltaX) <= Math.abs(deltaY)
        ) {
            return;
        }

        /*
         * Ignore le mouvement si la distance horizontale parcourue
         * est inférieure au seuil minimum défini.
         */
        if (
            Math.abs(deltaX) < swipeThreshold
        ) {
            return;
        }

        /* Swipe vers la gauche : affiche la slide suivante */
        if (deltaX < 0) {
            handleNextSlide();
            return;
        }

        /* Swipe vers la droite : affiche la slide précédente */
        handlePrevSlide();
    };

    /**
     * ### Fonction : handleTouchCancel.
     * Réinitialise les coordonnées du swipe lorsqu'une interaction tactile
     * est annulée par le navigateur ou par le système.
     *
     * Cette réinitialisation évite qu'une ancienne position tactile
     * soit réutilisée lors d'une interaction suivante.
     *
     * ---
     * @returns {void}
     */
    const handleTouchCancel = () => {
        touchStartX.current = null;
        touchStartY.current = null;
    };

    /*
     * Génération des positions virtuelles autour de la slide active.
     *
     * Une série complète est conservée avant et après la slide active
     * afin de disposer de suffisamment d'éléments pour l'effet visuel 3D.
     *
     * Exemple avec quatre slides et un slideIndex de 0 :
     *
     * -4 -3 -2 -1 [0] 1 2 3 4
     *
     * Chaque position virtuelle est ensuite associée à l'une
     * des véritables slides grâce à `getRealSlideIndex`.
     */
    const virtualSlides = Array.from(
        {
            length: slides.length * 2 + 1,
        },
        (_, index) => {
            return (
                slideIndex -
                slides.length +
                index
            );
        },
    );

    return (
        <section
            className={`${styles.slidesWrapper} ${className}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
        >
            <div className={styles.slides}>

                {/* Bouton permettant d'afficher la slide précédente */}
                <button
                    type="button"
                    className={styles.prevSlideBtn}
                    onClick={handlePrevSlide}
                    aria-label="Slide précédente"
                >
                    ‹
                </button>

                {/*
                 * Génération des slides virtuelles.
                 *
                 * Chaque occurrence possède son propre index virtuel utilisé
                 * comme clé React.
                 *
                 * Lors de la navigation, les occurrences déjà présentes
                 * conservent donc leur identité et changent simplement d'offset.
                 * Le CSS peut ainsi animer leur déplacement naturellement.
                 */}
                {virtualSlides.map((virtualIndex) => {

                    /*
                     * Conversion de la position virtuelle vers
                     * l'index correspondant dans le tableau réel.
                     */
                    const realIndex =
                        getRealSlideIndex(virtualIndex);

                    const slide = slides[realIndex];

                    /*
                     * Distance entre cette occurrence virtuelle
                     * et la slide actuellement active.
                     */
                    const offset =
                        virtualIndex - slideIndex;

                    return (
                        <Slide_Component
                            key={virtualIndex}
                            {...slide}
                            offset={offset}
                            isPageBackground={isPageBackground}
                        />
                    );
                })}

                {/* Bouton permettant d'afficher la slide suivante */}
                <button
                    type="button"
                    className={styles.nextSlideBtn}
                    onClick={handleNextSlide}
                    aria-label="Slide suivante"
                >
                    ›
                </button>

            </div>
        </section>
    );
}

export { Carrousel3D_Element };
