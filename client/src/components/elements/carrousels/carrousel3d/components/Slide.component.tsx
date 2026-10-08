/* Import des Types */
import { Slide_Props } from "../carrousel3D.type";

/* Import des composants React */
import { type CSSProperties, useRef, useEffect } from "react";

/* Import des modules CSS */
import styles from "../carrousel3D.module.css";


/**
 * ### Documentation : Hook useTilt.
 *
 * Ce hook interne a pour objectif de gérer l'effet d'inclinaison 3D
 * appliqué à la slide active en fonction de la position de la souris.
 *
 * Il permet notamment :
 *
 * - D'activer ou désactiver dynamiquement l'effet de tilt grâce au paramètre `enabled`.
 * - De récupérer la position de la souris à l'intérieur de l'élément ciblé.
 * - De convertir la position de la souris en valeurs relatives comprises entre `0` et `1`.
 * - De transmettre ces valeurs au CSS grâce aux variables personnalisées `--px` et `--py`.
 * - De modifier temporairement la transition CSS lors de l'entrée et de la sortie de la souris.
 * - De réinitialiser automatiquement l'inclinaison lorsque la souris quitte l'élément.
 *
 * ---
 *
 * ### Les paramètres attendus par le hook sont :
 *
 * @param {boolean} enabled - **[enabled]** - Indique si l'effet de tilt doit être activé sur l'élément.
 * @param {string} [animationDuration="150ms"] - **[animationDuration]** Optionnel - Durée de la transition CSS utilisée lors de l'activation et de la réinitialisation de l'effet.
 *
 * ---
 *
 * ### Fonctionnement :
 *
 * Lorsque l'effet est activé, le hook ajoute trois événements natifs à l'élément HTML :
 *
 * - `mouseenter` permet de récupérer les dimensions et la position de l'élément.
 * - `mousemove` permet de calculer la position relative de la souris dans l'élément.
 * - `mouseleave` permet de réinitialiser les variables CSS et l'inclinaison.
 *
 * Les coordonnées calculées sont transmises au CSS grâce aux variables :
 *
 * - `--px` pour la position horizontale.
 * - `--py` pour la position verticale.
 *
 * Une valeur de `0.5` correspond au centre de l'élément.
 *
 * ---
 *
 * @returns {React.RefObject<HTMLDivElement | null>}
 * Retourne une référence React destinée à être appliquée à l'élément HTML
 * sur lequel l'effet de tilt doit fonctionner.
 */
function useTilt(
    enabled: boolean,
    animationDuration = "150ms",
) {

    /*
     * Référence vers l'élément HTML sur lequel
     * l'effet de tilt sera appliqué.
     */
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {

        /*
         * Récupération de l'élément HTML actuellement associé
         * à la référence React.
         */
        const el = ref.current;


        /*
         * Si aucun élément n'est disponible ou si l'effet est désactivé,
         * aucun événement n'est ajouté.
         */
        if (!el || !enabled) {
            return;
        }


        /*
         * Stockage temporaire des dimensions et de la position de l'élément.
         *
         * La valeur est mémorisée afin d'éviter d'exécuter
         * getBoundingClientRect() à chaque mouvement de souris.
         */
        let rect: DOMRect | null = null;



        /**
         * ### Fonction : handleEnter.
         *
         * Initialise l'effet de tilt lorsque la souris entre dans l'élément.
         *
         * Elle récupère les dimensions et la position de l'élément puis
         * applique une transition CSS adaptée au mouvement de la souris.
         *
         * ---
         *
         * @returns {void}
         */
        const handleEnter = () => {

            rect = el.getBoundingClientRect();

            el.style.transition =
                `transform ${animationDuration} ease-out`;

        };



        /**
         * ### Fonction : handleMove.
         *
         * Calcule la position relative de la souris à l'intérieur de l'élément.
         *
         * Les coordonnées horizontale et verticale sont converties en valeurs
         * comprises approximativement entre `0` et `1`, puis transmises au CSS
         * grâce aux variables personnalisées `--px` et `--py`.
         *
         * ---
         *
         * @param {MouseEvent} event - Événement natif déclenché lors du déplacement de la souris dans l'élément.
         *
         * ---
         *
         * @returns {void}
         */
        const handleMove = (event: MouseEvent) => {

            /*
             * Si les dimensions de l'élément n'ont pas encore été récupérées,
             * elles sont calculées au premier mouvement de souris.
             */
            rect ??= el.getBoundingClientRect();


            /*
             * Calcul de la position horizontale relative de la souris.
             *
             * 0 correspond au bord gauche.
             * 0.5 correspond au centre.
             * 1 correspond au bord droit.
             */
            const px =
                (event.clientX - rect.left) / rect.width;


            /*
             * Calcul de la position verticale relative de la souris.
             *
             * 0 correspond au bord supérieur.
             * 0.5 correspond au centre.
             * 1 correspond au bord inférieur.
             */
            const py =
                (event.clientY - rect.top) / rect.height;


            /*
             * Transmission des coordonnées au CSS.
             * Les valeurs sont limitées à deux décimales afin
             * d'éviter une précision inutile.
             */
            el.style.setProperty("--px", px.toFixed(2));
            el.style.setProperty("--py", py.toFixed(2));

        };



        /**
         * ### Fonction : handleEnd.
         *
         * Réinitialise l'effet de tilt lorsque la souris quitte l'élément.
         *
         * Les variables CSS `--px` et `--py` sont replacées au centre avec
         * une valeur de `0.5`, permettant à la slide de retrouver sa position initiale.
         *
         * ---
         *
         * @returns {void}
         */
        const handleEnd = () => {

            /* Suppression des dimensions précédemment mémorisées */
            rect = null;


            /*
             * Réinitialisation des coordonnées CSS au centre
             * de l'élément.
             */
            el.style.setProperty("--px", "0.5");
            el.style.setProperty("--py", "0.5");


            /*
             * Application d'une transition plus douce
             * lors du retour à la position initiale.
             */
            el.style.transition =
                `transform ${animationDuration} ease-in`;

        };


        /*
         * Ajout des événements nécessaires à la gestion
         * de l'effet de tilt.
         */
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleEnd);


        /*
         * Nettoyage des événements lorsque le composant est démonté,
         * lorsque `enabled` change ou lorsque `animationDuration` est modifié.
         */
        return () => {

            el.removeEventListener("mouseenter", handleEnter);
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleEnd);

        };

    }, [enabled, animationDuration]);


    return ref;

}



/**
 * ### Documentation : Composant Slide du Carrousel 3D.
 *
 * Ce composant réutilisable a pour objectif d'afficher une slide individuelle
 * à l'intérieur du composant `Carrousel3D_Element`.
 *
 * Il reçoit les données propres à la slide ainsi que les informations techniques
 * nécessaires à son positionnement dans le carrousel.
 *
 * Il permet notamment :
 *
 * - D'afficher l'image principale de la slide grâce à une balise HTML `<img>`.
 * - D'associer un texte alternatif SEO et accessible à l'image principale.
 * - D'afficher optionnellement un titre.
 * - D'afficher optionnellement un sous-titre.
 * - D'afficher optionnellement une description.
 * - De déterminer automatiquement si la slide est actuellement active.
 * - D'appliquer l'effet de tilt uniquement à la slide active.
 * - De transmettre au CSS la position relative de la slide grâce à la variable `--offset`.
 * - De transmettre au CSS la direction de la slide grâce à la variable `--dir`.
 * - D'afficher optionnellement une copie décorative de l'image dans le bloc
 *   d'arrière-plan grâce à `isPageBackground`.
 *
 * ---
 *
 * ### Les clés attendues en paramètre du composant sont :
 *
 * @param {Slide_Props} props - Objet contenant les propriétés nécessaires à l'affichage et au positionnement de la slide.
 *
 * @param {number | string} props.id
 * **[id]** - Identifiant unique de la slide, hérité de `Carrousel3D_Type`.
 *
 * @param {string} props.image
 * **[image]** - URI ou URL de l'image utilisée comme image principale de la slide.
 *
 * @param {string} props.imageAlt
 * **[imageAlt]** - Texte alternatif décrivant l'image principale.
 * Cette valeur est utilisée par la balise `<img>` pour l'accessibilité
 * et l'interprétation de l'image par les moteurs de recherche.
 *
 * @param {string} [props.title]
 * **[title]** Optionnel - Titre principal affiché dans la slide.
 *
 * @param {string} [props.subtitle]
 * **[subtitle]** Optionnel - Sous-titre affiché sous le titre principal.
 *
 * @param {string} [props.description]
 * **[description]** Optionnel - Description complémentaire affichée dans la slide.
 *
 * @param {number} props.offset
 * **[offset]** - Position relative de la slide par rapport à la slide active.
 *
 * @param {boolean} props.isPageBackground
 * **[isPageBackground]** - Indique si l'image doit également être rendue
 * dans le bloc d'arrière-plan de la page.
 *
 * ---
 *
 * ### Fonctionnement de l'image principale :
 *
 * Contrairement à l'ancienne version du composant, l'image n'est plus appliquée
 * avec la propriété CSS `background-image`.
 *
 * Elle est désormais rendue grâce à une véritable balise HTML `<img>`.
 *
 * Cette architecture permet notamment :
 *
 * - De fournir un attribut `alt`.
 * - D'améliorer l'accessibilité du contenu.
 * - De permettre aux moteurs de recherche d'identifier directement l'image.
 * - De conserver la possibilité d'utiliser `object-fit: cover`
 *   afin de reproduire le comportement visuel de `background-size: cover`.
 *
 * La balise `<img>` doit être positionnée par le CSS derrière
 * `.slideContentInner` afin de conserver exactement la présentation actuelle.
 *
 * ---
 *
 * ### Fonctionnement de l'arrière-plan de page :
 *
 * Lorsque `isPageBackground` est défini sur `true`, une seconde balise `<img>`
 * est générée dans `.slideBackground`.
 *
 * Cette image est uniquement décorative.
 *
 * Elle utilise donc :
 *
 * - `alt=""` afin de ne pas être annoncée par les technologies d'assistance.
 * - `aria-hidden="true"` afin de confirmer son rôle purement décoratif.
 *
 * Cela évite également de dupliquer sémantiquement l'image principale.
 *
 * ---
 *
 * ### Fonctionnement de l'état actif :
 *
 * Une slide est considérée comme active uniquement lorsque son `offset`
 * est égal à `0`.
 *
 * Lorsque la slide est active :
 *
 * - L'attribut `data-active="true"` est ajouté à l'élément HTML principal.
 * - Le hook `useTilt` est activé.
 * - Le CSS peut appliquer des styles spécifiques à la slide actuellement sélectionnée.
 *
 * ---
 *
 * ### Fonctionnement des variables CSS :
 *
 * Le composant transmet deux variables CSS personnalisées :
 *
 * - `--offset` contient la position relative complète de la slide.
 * - `--dir` contient uniquement la direction de la slide par rapport à la slide active.
 *
 * Les valeurs possibles de `--dir` sont :
 *
 * - `-1` lorsque la slide se situe avant la slide active.
 * - `0` lorsque la slide est active.
 * - `1` lorsque la slide se situe après la slide active.
 *
 * ---
 *
 * @returns {React.ReactNode}
 * Retourne l'élément JSX représentant une slide individuelle du carrousel 3D.
 */
function Slide_Component({

    image,
    imageAlt,
    title,
    subtitle,
    description,
    offset,
    isPageBackground,

}: Slide_Props) {


    /*
     * Une slide est considérée comme active lorsque
     * son offset est égal à 0.
     */
    const isActive = offset === 0;


    /*
     * Activation de l'effet de tilt uniquement
     * lorsque la slide est actuellement active.
     */
    const ref = useTilt(isActive);


    /*
     * Variables CSS personnalisées utilisées pour gérer
     * le positionnement et la direction de la slide.
     *
     * --offset :
     * Position relative complète de la slide.
     *
     * --dir :
     * -1 = slide précédente
     *  0 = slide active
     *  1 = slide suivante
     */
    const slideStyle = {

        "--offset": offset,

        "--dir":
            offset === 0
                ? 0
                : offset > 0
                    ? 1
                    : -1,

    } as CSSProperties;


    return (

        <div
            ref={ref}
            className={styles.slide}
            data-active={isActive ? "true" : undefined}
            style={slideStyle}
        >


            {/*
             * Génération optionnelle de l'arrière-plan associé à la slide.
             *
             * Cet élément est uniquement généré lorsque
             * `isPageBackground` est défini sur true.
             *
             * L'image étant uniquement décorative :
             *
             * - alt est volontairement vide.
             * - aria-hidden est défini sur true.
             */}

            {isPageBackground && (

                <div className={styles.slideBackground}>

                    <img
                        className={styles.slideBackgroundImage}
                        src={image}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                    />

                </div>

            )}



            {/*
             * Contenu visuel principal de la slide.
             *
             * L'image reçue en propriété est désormais utilisée
             * dans une véritable balise HTML <img>.
             *
             * Le CSS doit lui appliquer notamment :
             *
             * position: absolute;
             * inset: 0;
             * width: 100%;
             * height: 100%;
             * object-fit: cover;
             *
             * afin de reproduire le comportement visuel
             * précédemment obtenu avec background-image.
             */}

            <div className={styles.slideContent}>


                {/*
                 * Image principale de la slide.
                 *
                 * Cette image possède un véritable attribut `alt`
                 * permettant d'améliorer son accessibilité
                 * et son interprétation par les moteurs de recherche.
                 */}

                <img
                    className={styles.slideImage}
                    src={image}
                    alt={imageAlt}
                    draggable={false}
                />



                {/*
                 * Conteneur accueillant les éventuels contenus textuels.
                 *
                 * Il doit rester positionné au-dessus de l'image
                 * grâce au z-index défini dans le CSS.
                 */}

                <div className={styles.slideContentInner}>


                    {/*
                     * Affichage conditionnel du titre.
                     *
                     * Aucun élément <h2> n'est généré lorsque
                     * aucune valeur n'est fournie.
                     */}

                    {title && (

                        <h2
                            className={styles.slideTitle}
                            dir="auto"
                        >
                            {title}
                        </h2>

                    )}



                    {/*
                     * Affichage conditionnel du sous-titre.
                     *
                     * Aucun élément <h3> n'est généré lorsque
                     * aucune valeur n'est fournie.
                     */}

                    {subtitle && (

                        <h3
                            className={styles.slideSubtitle}
                            dir="auto"
                        >
                            {subtitle}
                        </h3>

                    )}



                    {/*
                     * Affichage conditionnel de la description.
                     *
                     * Aucun élément <p> n'est généré lorsque
                     * aucune valeur n'est fournie.
                     */}

                    {description && (

                        <p
                            className={styles.slideDescription}
                            dir="auto"
                        >
                            {description}
                        </p>

                    )}


                </div>

            </div>

        </div>

    );

}



export { Slide_Component };