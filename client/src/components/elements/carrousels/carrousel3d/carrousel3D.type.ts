/**
 * TypeScript type pour les données d'une slide du composant `Carrousel3D_Element`.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les informations attendues pour chaque slide affichée dans le carrousel 3D.
 * Chaque élément du tableau `slides` doit respecter cette structure afin de garantir le bon fonctionnement de l'affichage, de la navigation et des animations du carrousel.
 */
type Carrousel3D_Type = {
  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Identifiant unique de la slide.
   * 
   * - Peut être un nombre ou une string.
   * - Doit être unique dans le tableau des slides.
   * - Est notamment utilisé pour générer une clé React unique lors du rendu du carrousel.
   * - Il est recommandé d'utiliser un identifiant stable qui ne change pas entre les rendus.
   * 
   * ---
   * @example 1
   * @example 12
   * @example "photo-mariage-1"
   * @example "portrait-anne"
   */
  id: number | string;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Image principale affichée dans la slide.
   * 
   * - Doit être une string représentant une URI ou une URL valide vers une image.
   * - L'image est utilisée comme fond principal de la slide.
   * - Si `isPageBackground` est activé sur le carrousel, cette même image est également utilisée comme arrière-plan associé à la slide.
   * - Le format recommandé est **3:4** afin de respecter correctement la mise en page prévue par le composant.
   * - Le poids recommandé de l'image est de **150 Ko maximum** afin de limiter l'impact sur les performances et le temps de chargement.
   * - Il est recommandé d'utiliser une image optimisée pour le web.
   * 
   * ---
   * @example "/images/mariage/photo-1.jpg"
   * @example "/assets/carrousel/portrait-anne.avif"
   * @example "https://example.com/images/photo.webp"
   */
  image: string;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Titre principal optionnel de la slide.
   * 
   * - Si la valeur n'est pas renseignée, aucun titre ne sera affiché.
   * - Est rendu dans une balise HTML `<h2>`.
   * - Peut contenir des caractères spéciaux.
   * - Il est recommandé de rester court afin de conserver une bonne lisibilité sur l'image.
   * 
   * ---
   * @example "Mariage à Montpellier"
   * @example "Portrait en extérieur"
   * @example "Séance couple"
   */
  title?: string;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Sous-titre optionnel de la slide.
   * 
   * - Si la valeur n'est pas renseignée, aucun sous-titre ne sera affiché.
   * - Est rendu dans une balise HTML `<h3>`.
   * - Sert généralement à apporter un complément d'information au titre principal.
   * - Peut contenir des caractères spéciaux.
   * 
   * ---
   * @example "Reportage photo"
   * @example "Montpellier - Hérault"
   * @example "Photographie naturelle et lumineuse"
   */
  subtitle?: string;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Description optionnelle de la slide.
   * 
   * - Si la valeur n'est pas renseignée, aucune description ne sera affichée.
   * - Est rendue dans une balise HTML `<p>`.
   * - Permet d'ajouter une information complémentaire au titre et au sous-titre.
   * - Peut contenir des caractères spéciaux.
   * - Il est recommandé de conserver une description relativement courte afin de ne pas surcharger visuellement la slide.
   * 
   * ---
   * @example "Un reportage réalisé au coucher du soleil dans le centre historique de Montpellier."
   * @example "Une séance portrait naturelle réalisée en extérieur."
   */
  description?: string;
};

/**
 * TypeScript interface pour les propriétés attendues par le composant `Carrousel3D_Element`.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Cette interface définit la configuration générale du carrousel 3D.
 * Elle permet de transmettre les slides à afficher ainsi que plusieurs options facultatives permettant de modifier son comportement ou son intégration visuelle.
 */
interface Carrousel3D_Props {
  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Liste des slides affichées dans le carrousel.
   * 
   * - Doit être un tableau respectant le type `Carrousel3D_Type`.
   * - Chaque slide doit posséder un identifiant unique.
   * - Si le tableau est vide, le composant ne retourne aucun élément HTML.
   * - L'ordre des éléments dans le tableau correspond à l'ordre logique de navigation dans le carrousel.
   * 
   * ---
   * @example
   * [
   *   {
   *     id: 1,
   *     image: "/images/photo-1.webp",
   *     title: "Mariage à Montpellier"
   *   },
   *   {
   *     id: 2,
   *     image: "/images/photo-2.webp",
   *     title: "Séance couple"
   *   }
   * ]
   */
  slides: Carrousel3D_Type[];

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Active ou désactive l'affichage de l'image de la slide comme arrière-plan supplémentaire.
   * 
   * - Si `true`, chaque slide génère également un élément utilisant son image comme arrière-plan.
   * - Si `false` ou non précisé, seul le contenu principal de la slide est affiché.
   * - La valeur par défaut appliquée par le composant est `false`.
   * 
   * ---
   * @example true
   * @example false
   */
  isPageBackground?: boolean;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Classe CSS supplémentaire appliquée au conteneur principal du carrousel.
   * 
   * - Permet de personnaliser ponctuellement l'apparence ou le positionnement du composant depuis son parent.
   * - La classe fournie est ajoutée en complément de la classe CSS Module interne du carrousel.
   * - Si aucune valeur n'est précisée, une string vide est utilisée par défaut.
   * 
   * ---
   * @example "homeCarousel"
   * @example "portfolioCarousel"
   * @example "custom-spacing"
   */
  className?: string;
}

/**
 * TypeScript interface pour les propriétés internes du composant `Slide_Component`.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Cette interface étend directement `Carrousel3D_Type`.
 * Elle reprend donc toutes les informations d'une slide et ajoute les propriétés techniques nécessaires à son positionnement et à son comportement dans le carrousel.
 * 
 * Cette interface est principalement destinée à un usage interne au composant `Carrousel3D_Element`.
 */
interface Slide_Props extends Carrousel3D_Type {
  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Position relative de la slide par rapport à la slide actuellement active.
   * 
   * - `0` indique que la slide est actuellement active.
   * - Une valeur négative indique que la slide est située avant la slide active.
   * - Une valeur positive indique que la slide est située après la slide active.
   * - Cette valeur est utilisée dans les variables CSS `--offset` et `--dir` afin de gérer le positionnement et les animations 3D.
   * - Cette valeur est calculée automatiquement par le composant `Carrousel3D_Element` et ne doit normalement pas être définie manuellement.
   * 
   * ---
   * @example 0
   * @example -1
   * @example 1
   * @example 2
   */
  offset: number;

  /**
   * ⚠️ **NOTE ET CONTRAINTE** : Indique si l'image de la slide doit également être utilisée comme arrière-plan.
   * 
   * - La valeur est transmise automatiquement depuis `Carrousel3D_Element`.
   * - Si `true`, un élément supplémentaire utilisant l'image de la slide comme arrière-plan est généré.
   * - Si `false`, cet élément n'est pas rendu.
   * 
   * ---
   * @example true
   * @example false
   */
  isPageBackground: boolean;
}

export type {
  Carrousel3D_Type,
  Carrousel3D_Props,
  Slide_Props,
};