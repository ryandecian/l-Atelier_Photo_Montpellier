/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

type Data = {
    /*"description": "Mentions légales de l’Atelier Photo Montpellier. Retrouvez toutes les informations juridiques concernant le site, l’éditeur, l’hébergement et la propriété intellectuelle." */
    "description": string; /* Description de la page pour les Mentions Légales */
    "id": string; /* Identifiant unique de la page (string simple, même règle que les URL). */
    "image"?: string; /* Image représentative de la page */
    "name_page": string; /* Nom de la page (espace autorisé) */
    "uri_cgv": string; /* URI de la page des CGV sans le nom de domaine (router) */
    "uri_page": string; /* URI de la page sans le nom de domaine (router) */
}

/**
 * ### Documentation : Script JSON-LD Service de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter une page web spécifique.
 * Il est généralement utilisé pour : 
 * - La page Mentions Légales, qui a des exigences spécifiques en matière de SEO et de conformité juridique.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * 
 * @param {Object} data - L'objet contenant les information necessaire au script JSON-LD.
 * @param {string} data.description - **[description]** - Description de la page pour les Mentions Légales
 * @param {string} data.id - **[id]** - Identifiant unique de la page (string simple, même règle que les URL).
 * @param {string} [data.image] - **[image]** - Image représentative de la page (Facultatif)
 * @param {string} data.name_page - **[name_page]** - Nom de la page (espace autorisé)
 * @param {string} data.uri_cgv - **[uri_cgv]** - URI de la page des CGV sans le nom de domaine (router)
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router)
 * 
 *  ---
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function webPage_script_SEO(data: Data): string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "WebPage",                    /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
        "description": data.description,   /* (Obligatoire) Description de la page pour les Mentions Légales */
        ...(data.image && { "image": data.image }), /* (Facultatif) Image représentative de la page */
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */

        /* Indique le site web global auquel appartient cette page spécifique (Rattachement sémantique) */
        "isPartOf": {
            "@type": "WebSite",
            "name": dataMasterSEO.name, /* (Obligatoire) Nom de l'entreprise */
            "url": dataMasterSEO.url    /* URL de la page d'accueil de l'entreprise (Dynamique) */
        },

        /* Désigne le sujet ou l'entité principale décrite dans la page (ex: l'entreprise elle-même) */
        "mainEntity": {
            "@type": "Organization", 
            "name": dataMasterSEO.name, /* (Obligatoire) Nom de l'entreprise */
            "url": dataMasterSEO.url    /* URL de la page d'accueil de l'entreprise (Dynamique) */
        },

        "name": data.name_page,         /* (Obligatoire) Nom de la page */
        "provider": {
            "@id": dataMasterSEO.id_LocalBusiness, /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },

        /* Identifie l'organisation ou la personne morale qui édite et publie officiellement cette page */
        "publisher": {
            "@type": "Organization",
            "name": dataMasterSEO.name, /* (Obligatoire) Nom de l'entreprise */
            "logo": dataMasterSEO.logo, /* (Obligatoire) Logo de l'entreprise */
        },

        "specialty": "LegalService",                            /* Indique explicitement aux IA la nature juridique du document */
        "termsOfService": `${dataMasterSEO.url}${data.uri_cgv}` /* (Obligatoire) URL de la page des CGV (ex : domain/uri-cgv) */,
        "url": `${dataMasterSEO.url}${data.uri_page}`,          /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
    });

    return JSON_LD;
}

export { webPage_script_SEO };
