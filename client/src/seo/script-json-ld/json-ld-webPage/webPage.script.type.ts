/*"description": "Mentions légales de l’Atelier Photo Montpellier. Retrouvez toutes les informations juridiques concernant le site, l’éditeur, l’hébergement et la propriété intellectuelle." */

/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à WebPage.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `webPage_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */
type WebPage_script_Type = {
    /**
     * ⚠️ **NOTE ET CONTRAINTE SEO** : Description de la page, utilisée pour les Mentions Légales et pour fournir un résumé clair du contenu de la page aux moteurs de recherche et aux utilisateurs.
     * - Doit faire entre 50 et 300 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     */
    "description": string; /* Description de la page pour les Mentions Légales */

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple, même règle que les URL, et correspondre à l'ID utilisée dans les autres scripts JSON-LD de la page (ex : BreadcrumbList).
     * - URI uniquement
     * - Ne pas passer le # au début de l'ID, le script s'en chargera automatiquement.
     * - Ne pas commencer par un slash (/), le script s'en chargera automatiquement.
     * - Doit être au format URL. Si le format est incorrect, une fonction de correction tentera de le corriger automatiquement.
     * 
     * ---
     * @example "mentions-legales" (correspondra à domain/uri/#mentions-legales)
     * @example "Mentions légales " (correspondra à domain/uri/#mentions-legales)
     */
    "id": string; /* Identifiant unique de la page (string simple, même règle que les URL). */

    /**
     * ⚠️ **DESCRIPTION** : Image optionnel représentative de la page, qui peut être utilisée par les moteurs de recherche et les réseaux sociaux pour illustrer la page dans les résultats de recherche ou les partages.
     * - Doit être une URI valide, sans le nom de domaine et commençant par un slash (ex : /images/photo-article.jpg).
     * - Ratio : 16:9 - 1200 x 675 px minimum, 1920 x 1080 px maximum recommandé.
     * - 50 à 150 Ko maximum, 100 Ko recommandé.
     * - JPG
     * 
     * ---
     * @example "/images/photo-article.jpg"
     */
    "uri_image"?: string; /* Image représentative de la page */

    /** 
     * ⚠️ **DESCRIPTION** : Représente le nom de la page.
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** : Doit faire entre 10 et 60 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     */
    "name_page": string; /* Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML) */

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide, sans le nom de domaine, et correspondre à l'URI utilisée dans les autres scripts JSON-LD de la page (ex : BreadcrumbList).
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     */
    "uri_cgv": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide, sans le nom de domaine, et correspondre à l'URI utilisée dans les autres scripts JSON-LD de la page (ex : BreadcrumbList).
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     */
    "uri_page": string; /* URI de la page sans le nom de domaine (router) */
}

export type { WebPage_script_Type };
