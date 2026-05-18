/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

type Data = {
    "name_service": string; /* Catégorie du service (espace autorisé) */
    "description_service": string; /* Description du service (espace autorisé) */
    "uri": string; /* URI de la page sans le nom de domaine (router) */
    "id": string; /* Identifiant unique de la page (string simple, même règle que les URL). */
}

/**
 * ### Documentation : Script JSON-LD Service de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter un service présent dans une page. 
 * Il est généralement utilisé pour : 
 * - Les pages de services (ex : Service de photographie corporate pour CV, LinkedIn et site web)
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * 
 * @param {Object} data - L'objet contenant les information necessaire au script JSON-LD.
 * @param {string} data.name_service - **[name_service]** - Nom du service (espace autorisé)
 * @param {string} data.description_service - **[description_service]** - Description du service (espace autorisé)
 * @param {string} data.uri - **[uri]** - URI de la page sans le nom de domaine (router)
 * @param {string} data.id - **[id]** - Identifiant unique de la page (string simple, même règle que les URL).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function service_script_SEO(data: Data): string {
    const url: string = import.meta.env.VITE_DOMAIN_CLIENT /* Nom de domaine */

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"],   /* (Obligatoire) URL de Google schéma */
        "@type": dataMasterSEO["@type"].Service, /* (Obligatoire) Type de JSON-LD */
        "@id": `${url}${data.uri}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
        "name": data.name_service,        /* (Obligatoire) Nom du service */
        "serviceType": data.name_service, /* (Obligatoire) Catégorie du service présenté, comme une description mais simple et court (ex : Photographie corporate pour CV, LinkedIn et site web) */
        "description": data.description_service,        /* (Obligatoire) Description du service */
        "url": `${url}${data.uri}`,                     /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
        "termsOfService": dataMasterSEO.termsOfService, /* (Obligatoire) CGV : URL de la page des conditions générales de vente ou d'utilisation de l'entreprise (Dynamique) */
        "provider": {
            "@id": dataMasterSEO.id_LocalBusiness       /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
    })

    return (
        JSON_LD
    )
}

export { service_script_SEO };
