/**
 * TypeScript type pour les données d'entrée du script JSON-LD spécifique à Person.
 * 
 * ⚠️ **NOTE IMPORTANTE** : Ce type définit les clés attendues en paramètre de la fonction `person_script_SEO`. Il est crucial de respecter les types et les contraintes définis pour chaque clé afin d'assurer la validité du JSON-LD généré et d'optimiser le score GEO/SEO de la page.
 */

type Person_script_Type = {
    /**
     * ⚠️ **NOTE ET CONTRAINTE SEO** : Résumé biographique pour les moteurs de recherche.
     * 
     * Doit faire entre 60 et 160 caractères.
     * _Une string hors de ces limites pénalisera le score GEO/SEO._
     * 
     * ---
     * ⚠️ **CONTRAINTE SEO** :
     * - Doit être orienté recherche Google.
     * - Doit faire entre 60 et 160 caractères.
     * - Pas de terme ou mot court générique.
     * - Une description trop longue ou contenant du bourrage de mots-clés sera ignorée par Google.
     * 
     * ---
     * @example "Photographe de mariage passionnée, je capture les moments d'émotion et de complicité de votre plus beau jour. Reportages photo authentiques et lumineux." (152 caractères)
     * @example "Ryan DECIAN, concepteur développeur d'applications spécialisé en React et Express. Découvrez mes projets web et mobiles innovants." (131 caractères)
     */
    "description": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple.
     * - Correspond au Prénom de la personne décrite dans et par la page.
     * - Tous les caractères spéciaux sont autorisés
     * 
     * ---
     * @example "Anne"
     * @example "Jean-Pierre"
     * @example "Élodie"
     */
    "first_name": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple.
     * - Correspond au Genre de la personne décrite dans et par la page.
     * - Doit être soit "Female" ou "Male"
     */
    "gender": "Female" | "Male",

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple, même règle que les URL.
     * - Correspond à la personne décrite dans et par la page.
     * - Doit être unique pour chaque personne du site.
     * - Ne pas passer le # au début de l'ID, le script s'en chargera automatiquement.
     * - Ne pas commencer par un slash (/), le script s'en chargera automatiquement.
     * - Doit être au format URL. Si le format est incorrect, une fonction de correction tentera de le corriger automatiquement.
     * 
     * ---
     * @example "lapm-anne" (correspondra à domain/uri/#lapm-anne)
     * @example "lapm anne " (correspondra à domain/uri/#lapm-anne)
    */
   "id_person": string;
   
    /**
    * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple.
    * - Correspond au titre du poste ou à la profession de la personne décrite dans et par la page.
    * - Tous les caractères spéciaux sont autorisés
    * 
    * ---
    * @example "Photographe"
    * @example "Directeur artistique"
    * @example "Développeur web"
    */
    "job_title": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une string simple.
     * - Correspond au Nom de la personne décrite dans et par la page.
     * - Tous les caractères spéciaux sont autorisés
     * - Il est recommandé de mettre le nom en majuscule pour une meilleure lisibilité.
     * 
     * ---
     * @example "SAUNIER"
     * @example "DUPONT-MARTIN"
     * @example "O'CONNOR"
     */
    "last_name": string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Indique si la personne est salariée ou non.
     * - Si true, le script inclura les informations de l'organisation pour laquelle la personne travaille.
     * - Si false ou non précisé, ce bloc ne sera pas inclus.
     * 
     * ---
     * @example true
     * @example false
     */
    "salaried"?: boolean;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Liste des compétences et technologies de la personne décrite dans et par la page.
     * - Doit être un tableau de strings.
     * - Chaque élément du tableau doit représenter une compétence ou une technologie.
     * - Tous les caractères spéciaux sont autorisés.
     * - Doit être orienté recherche Google.
     * - Doit correspondre à des mot clés pertinents pour le SEO.
     * 
     * ---
     * @example ["Photographie", "Retouche photo", "Adobe Photoshop"]
     * @example ["Développement web", "React", "Node.js"]
     */
    "skills": string[];

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Liste des réseaux sociaux et profils professionnels de la personne décrite dans et par la page.
     * - Doit être un tableau de strings.
     * - Chaque élément du tableau doit représenter un lien vers un réseau social ou un profil professionnel.
     * - Doit être au format URL.
     * 
     * ---
     * @example ["https://www.linkedin.com/in/anne-saunier", "https://www.instagram.com/anne_saunier"]
     */
    "social_networks": string[];

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Doit être une URI valide.
     * - L'image doit être dans le dossier public du projet.
     * - Ne doit pas contenir le nom de domaine.
     * - Doit commencer par un slash (/).
     * 
     * ---
     * @example "/person/anne-saunier/avatar.jpg"
     */
    "uri_image_avatar"?: string;

    /**
     * ⚠️ **NOTE ET CONTRAINTE** : Represente l'URL directe de la page dans lequel se trouve la personne. Ici on a uniquement besoin de l'URI de la page sans le nom de domaine.
     * - Doit être une URI valide.
     * - Doit être récupérer depuis le router.
     * - Ne doit pas contenir le nom de domaine.
     * - Ne commence pas par un slash (/).
     */
    "uri_page": string;
}

export type { Person_script_Type };
