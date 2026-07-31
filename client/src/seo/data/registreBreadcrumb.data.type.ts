/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à Breadcrumb.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `breadcrumb_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type sera également utilisé dans les fichiers de données spécifiques au SEO de chaque page, afin de garantir la cohérence des données entre les différents scripts JSON-LD.
 */

type RegistreBreadcrumb_data_Type = {
    /**
     * **NOTE IMPORTANTE** : Cette clée est utilisée pour genérer le fil d’Ariane complet pour le JSON-LD Google. 
     * - Elle contient un tableau d'objets représentant chaque page dans le fil d’Ariane, avec les informations nécessaires pour générer le script JSON-LD Breadcrumb.
     */
    dataBreadcrumb: {
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
         * - String simple, espace autorisé, 10 à 60 caractères max.
         * 
         * ---
         * ⚠️ **CONTRAINTE SEO** : Doit faire entre 10 et 60 caractères.
         * _Une string hors de ces limites pénalisera le score GEO/SEO._
        */
        "name_page": string;

        /**
        * ⚠️ **DESCRIPTION** : Représente l'ID du parent dans le fil d’Ariane.
        * - Doit correspondre à l'ID du parent dans le fil d’Ariane et du registre, si la page a un parent.
        * - Ne pas passer le # au début de l'ID, le script s'en chargera automatiquement.
        * - Ne pas commencer par un slash (/), le script s'en chargera automatiquement.
        * - Doit être au format URL. Si le format est incorrect, une fonction de correction tentera de le corriger automatiquement.
        */
        "parent_id"?: string;

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
        }[];
    
    /**
     * **NOTE IMPORTANTE** : Cette clée est utilisée pour isoler les données uniques de la page courante dans le fil d’Ariane.
     */
    dataItems: {
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
         * - String simple, espace autorisé, 10 à 60 caractères max.
         * 
         * ---
         * ⚠️ **CONTRAINTE SEO** : Doit faire entre 10 et 60 caractères.
         * _Une string hors de ces limites pénalisera le score GEO/SEO._
        */
        "name_page": string;

        /**
        * ⚠️ **DESCRIPTION** : Représente l'ID du parent dans le fil d’Ariane.
        * - Doit correspondre à l'ID du parent dans le fil d’Ariane et du registre, si la page a un parent.
        * - Ne pas passer le # au début de l'ID, le script s'en chargera automatiquement.
        * - Ne pas commencer par un slash (/), le script s'en chargera automatiquement.
        * - Doit être au format URL. Si le format est incorrect, une fonction de correction tentera de le corriger automatiquement.
        */
        "parent_id"?: string;

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
    };
};

export type { RegistreBreadcrumb_data_Type };
