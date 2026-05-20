/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../data/dataMasterSEO.data.seo";


/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

type Data = {
    /*"description": "Mentions légales de l’Atelier Photo Montpellier. Retrouvez toutes les informations juridiques concernant le site, l’éditeur, l’hébergement et la propriété intellectuelle." */
    "description": string; /* Description de la page pour les Mentions Légales */
    "id": string; /* Identifiant unique de la page (string simple, même règle que les URL). */
    "image"?: string; /* Image représentative de la page */
    "name_page": string; /* Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML) */
    "uri_page": string;  /* URI de la page sans le nom de domaine (router) */
}

function homePage_script_SEO(data: Data) : string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "HomePage",                   /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */

        "name": data.name_page,         /* (Obligatoire) Nom de la page */
    });

    return JSON_LD;
};

export { homePage_script_SEO };
