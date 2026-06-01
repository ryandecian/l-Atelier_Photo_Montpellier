/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à VideoObject.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `videoObject_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */

type VideoObject_script_Type = {
    /**
     * ⚠️ **NOTE ET CONTRAINTE SEO** : Résumé dense de la page contact pour les moteurs de recherche.
     * 
     * Doit faire entre 80 et 160 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** :
     * - Doit être orienté recherche Google.
     * - Doit faire entre 80 et 160 caractères.
     * - Pas de terme ou mot court générique.
     * - Une description trop longue ou contenant du bourrage de mots-clés sera ignorée par Google.
     * 
     * ---
     * @example "Reportage photo complet de votre mariage à Montpellier et sa région. Captures spontanées, émotions naturelles et album haute définition inclus." (138 caractères)
     * @example "Session portrait photo professionnel en studio à Grabels. Idéal pour valoriser votre image sur LinkedIn ou vos CV. Coaching de pose inclus." (136 caractères)
     */
    "description": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une date au format ISO 8601 (YYYY-MM-DD) représentant la date de publication ou de mise à jour de la vidéo. Cette information est importante pour les moteurs de recherche afin de comprendre la fraîcheur du contenu vidéo.
     * - Doit être une string au format ISO 8601 (ex : "2024-01-15").
     * - Doit être au format ISO 8601 (ex : "YYYY-MM-DD").
     * - Doit être au format ISO 8601 (ex : "2024-01-15").
     * - Attention, aucune fonction ne protège d'une eventuelle erreur de saisie de la date.
     */
    "date_upload": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple, même règle que les URL.
     * - Doit être unique pour chaque vidéo du site.
     * - Ne pas passer le # au début de l'ID, le script s'en chargera automatiquement.
     * - Ne pas commencer par un slash (/), le script s'en chargera automatiquement.
     * - Doit être au format URL. Si le format est incorrect, une fonction de correction tentera de le corriger automatiquement.
     * 
     * ---
     * @example "lapm-croco" (correspondra à domain/uri/#lapm-croco)
     * @example "lapm croco " (correspondra à domain/uri/#lapm-croco)
     */
    "id_video": string;

    /** 
     * ⚠️ **DESCRIPTION** : Représente le nom de la vidéo.
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** : Doit faire entre 10 et 60 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     */
    "name_video": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide.
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_miniature": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Represente l'URL directe de la page dans lequel se trouve la vidéo. Ici on a uniquement besoin de l'URI de la page sans le nom de domaine.
     * - Doit être une URI valide.
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_page": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : représente l'URL directe de la video. Ici on a uniquement besoin de l'URI sans le nom de domaine.
     * - Doit être une URI valide.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_video": string;
}

export type { VideoObject_script_Type };
