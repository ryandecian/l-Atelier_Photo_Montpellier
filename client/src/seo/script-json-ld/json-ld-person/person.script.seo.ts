/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import { Person_script_Type } from "./person.script.type";


function person_script_SEO(data: Person_script_Type): string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "Person",                /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id_person)}`, /* @id SEO-friendly, id unique de l'entité humaine dont parle la page, lié au domaine principal, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */

        "name": `${data.first_name} ${data.last_name}`, /* Nom prénom complet combiné */
        "givenName": data.first_name,                   /* Prénom */
        "familyName": data.last_name,                   /* Nom de famille */
        "jobTitle": data.job_title,                     /* Titre du poste ou profession (professionnel) */
        "description": data.description,                /* Résumé biographique pour les moteurs de recherche (entre 60 et 160 caractères) */

        "url": dataMasterSEO.url,               /* URL racine du site (portfolio) de la personne. Si pas de site portfolio, utiliser l'URL de la page d'accueil. (mainEntityOfPage décrira alors quel page du site parle de la personne) */
        "mainEntityOfPage": `${dataMasterSEO.url}${data.uri_page}`, /* Dis explicitement à Google quelle page web décrit cette personne (URL + URI de la page) */

        "knowsAbout": data.skills,             /* Liste des compétences et technologies */
        "sameAs": data.social_networks         /* Liens externes de certification d'identité (réseaux sociaux, profils professionnels, etc.) */
    })

    return (
        JSON_LD
    )
}

export { person_script_SEO };
