/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { DataMasterSEO_Type } from "../data/dataMasterSEO.type";

/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

type Data = {
    "position": number, /* Position de la page dans le fil Ariane (juste un nombre) */
    "name_page": string, /* Nom de la page (espace autorisé) */
    "name_service": string /* Catégorie du service (espace autorisé) */
    "description_service": string /* Description du service (espace autorisé) */
    "uri": string, /* URI de la page sans le nom de domaine (router) */
    "id": string, /* Identifiant unique de la page (simple string avec des - et sans le #). En cas d'erreur de syntaxe une fonction le corrigera */
}

function service_script_SEO(data: Data): string {
    /* Récupération des datas et stock des données dans une const afin de ne pas recalculer à chaques appel de la fonction data */
    const dataMasterSEO: DataMasterSEO_Type = dataMasterSEO_data_SEO();
    const url: string = import.meta.env.VITE_DOMAIN_CLIENT /* Nom de domaine */

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"],   /* (Obligatoire) URL de Google schéma */
        "@type": dataMasterSEO["@type"].Service, /* (Obligatoire) Type de JSON-LD */
        "@id": `${url}${data.uri}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
        "name": data.name_service,        /* (Obligatoire) Nom du service */
        "serviceType": data.name_service, /* (Obligatoire) Catégorie du service présenté, comme une description mais simple et court (ex : Photographie corporate pour CV, LinkedIn et site web) */
        "description": data.description_service,        /* (Obligatoire) Description du service */
        "url": `${url}${data.uri}`,                     /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
        "termsOfService": dataMasterSEO.termsOfService, /* (Obligatoire) CGV : URL de la page des conditions générales de vente ou d'utilisation de l'entreprise (Dynamique) */
        "provider": {
            "@id": dataMasterSEO.id_LocalBusiness       /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "publisher": {
            "@type": "Organization",
            "name": dataMasterSEO.name,
            "logo": dataMasterSEO.logo, /* (Obligatoire) URL du logo de l'entreprise (Image format carré 200 x 200 px en jpg ou png max 75 ko) */
        },
    })

    return (
        JSON_LD
    )
}

export { service_script_SEO };
/**
 * Documentation :
 * 
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter un service présent dans une page. 
 * Il retourne actuellement une string grace à la fonction JSON.stringify, car lors de son injection dans une page, les 
 * datas SEO de la page sont utilisées pour construire le JSON-LD doivent être une string. 
 */
