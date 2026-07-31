/**
 * TypeScript type pour les données d'entrée du script Meta Name SEO.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `MetaName_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité des métadonnées et d'optimiser le score GEO/SEO de la page.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type sera également utilisé dans les fichiers de données spécifiques au SEO de chaque page, afin de garantir la cohérence des données entre les différents scripts SEO.
 */

type MetaName_script_Type = {
    /**
     * ⚠️ **DESCRIPTION** : Représente l'auteur de la page.
     * - String simple, espace autorisé, 10 à 60 caractères max.
     */
    "author": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE SEO** : Résumé dense de la page d'accueil pour les moteurs de recherche.
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
     * ⚠️ **DESCRIPTION** : Représente les données de l'image SEO pour la page.
     * 
     * ---
     * ⚠️ **NOTE ET CONTRAINTE** : "uri_image"
     * - Doit être une URI valide.
     * - Ne doit pas contenir le nom de domaine.
     * - Doit commencer par un slash (/).
     * 
     * ---
     * ⚠️ **NOTE ET CONTRAINTE** : "alt_image"
     * - String simple avec espace autorisé.
     * - Doit faire entre 80 et 160 caractères.
     * - Une string hors de ces limites pénalisera le score GEO/SEO.
     */
    "img_seo": {
        "uri_image": string;
        "alt_image": string;
    };

    /**
     * ⚠️ **DESCRIPTION** : Représente le titre de la page.
     * - String simple, espace autorisé.
     * - Doit faire entre 50 et 60 caractères max.
     */
    "title": string;

    /**
     * ⚠️ **DESCRIPTION** : Définit la nature du contenu pour la balise Open Graph (og:type).
     * 
     * Valeurs possibles :
     * - "website" : (Valeur par défaut) Indique qu'il s'agit d'un site web classique.
     * - "article" : Pour des articles de blog ou du contenu éditorial.
     * - "video.movie" : Pour les pages contenant des vidéos de films.
     * - "music.song" : Pour les pages dédiées à la musique.
     * - "profile" : Pour une page personnelle (profil d'une personne).
     */
    "type_website": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Représente l'URL directe de la page. Ici on a uniquement besoin de l'URI de la page sans le nom de domaine.
     * - Doit être une URI valide.
     * - Doit être récupérée depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_page": string;
}

export type { MetaName_script_Type };
