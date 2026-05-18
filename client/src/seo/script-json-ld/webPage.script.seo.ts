/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

type Data = {
    "uri": string, /* URI de la page sans le nom de domaine (router) */
    "id": string, /* Identifiant unique de la page (simple string avec des - et sans le #). En cas d'erreur de syntaxe une fonction le corrigera */
}

function webPage_script_SEO(data: Data): string {
    const url: string = import.meta.env.VITE_DOMAIN_CLIENT /* Nom de domaine */

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"],   /* (Obligatoire) URL de Google schéma */
        "@type": "WebPage", /* (Obligatoire) Type de JSON-LD */
        "@id": `${url}${data.uri}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
        "name": dataMasterSEO.name, /* (Obligatoire) Nom de la page */
        "url": `${url}${data.uri}`, /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
        "description": dataMasterSEO.description, /* (Obligatoire) Description de la page pour les Mentions Légales */
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
    });

    return (
        JSON_LD
    )
}

export { webPage_script_SEO };
