/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à Breadcrumb.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `breadcrumb_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */

type Breadcrumb_script_Type = {
    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple, même règle que les URL, et correspondre à l'ID utilisée dans les autres scripts JSON-LD de la page (ex : BreadcrumbList).
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
     * ⚠️ **DESCRIPTION** : Représente le nom de la page.
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** : Doit faire entre 10 et 60 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     */
    "name_page": string;

    /**
     * ⚠️ **DESCRIPTION** : Représente la position de la page dans le fil d’Ariane.
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** : Doit être un nombre entier positif.
     * _Une valeur hors de ces limites pénalisera le score GEO/SEO._
     */
    "position": number;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Représente l'URL directe de la page. Ici on a uniquement besoin de l'URI de la page sans le nom de domaine.
     * - Doit être une URI valide.
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_page": string;
}

export type { Breadcrumb_script_Type };
