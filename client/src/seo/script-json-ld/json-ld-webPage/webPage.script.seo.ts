/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

import { WebPage_script_Type } from "./webPage.script.type";


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
 * @param {string} [data.uri_image] - **[image]** - Image représentative de la page (Facultatif)
 * @param {string} data.name_page - **[name_page]** - Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML)
 * @param {string} data.uri_cgv - **[uri_cgv]** - URI de la page des CGV sans le nom de domaine (router)
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router)
 * 
 *  ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function webPage_script_SEO(data: WebPage_script_Type): string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "WebPage",                    /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
        "description": data.description,   /* (Obligatoire) Description de la page pour les Mentions Légales */
        ...(data.uri_image && { "image": `${dataMasterSEO.url}${data.uri_image}` }), /* (Facultatif) Image représentative de la page */
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
};

export { webPage_script_SEO };
