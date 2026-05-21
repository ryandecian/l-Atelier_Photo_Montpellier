/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à WebPage.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `webPage_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */

type Service_script_Type = {
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
    "id": string;
    
    /** 
     * ⚠️ **DESCRIPTION** : Représente la description du service.
     * 
     * Doit faire entre 80 et 160 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** :
     * - Doit être orienté recherche Google.
     * - Doit faire entre 80 et 160 caractères.
     * - Pas de terme ou mot court générique.
     * 
     * ---
     * @example "Reportage photo complet de votre mariage à Montpellier et sa région. Captures spontanées, émotions naturelles et album haute définition inclus." (138 caractères)
     * @example "Session portrait photo professionnel en studio à Grabels. Idéal pour valoriser votre image sur LinkedIn ou vos CV. Coaching de pose inclus." (136 caractères)
     */
    "description_service": string;

    /** 
     * ⚠️ **DESCRIPTION** : Représente le nom du service.
     * 
     * Doit faire entre 20 et 60 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** :
     * - Doit être orienté recherche Google.
     * - Doit faire entre 20 et 60 caractères.
     * - Pas de terme ou mot court générique.
     * 
     * ---
     * @example "Shooting Photo Grossesse et Maternité" (~38 caractères)
     * @example "Reportage Photo de Mariage à Montpellier" (~40 caractères)
     * @example "Session Portrait Professionnel en Studio" (~40 caractères)
     */
    "name_service": string; /* Nom du service (espace autorisé) */

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide, sans le nom de domaine, et correspondre à l'URI utilisée dans les autres scripts JSON-LD de la page (ex : BreadcrumbList).
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     */
    "uri_page": string;
}

export type { Service_script_Type };
