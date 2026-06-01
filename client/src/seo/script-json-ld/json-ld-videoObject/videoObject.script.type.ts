/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à VideoObject.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `videoObject_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */

type VideoObject_script_Type = {
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
    "id": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide.
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_video": string;
}

export type { VideoObject_script_Type };
