/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import { HomePage_script_Type } from "./homePage.script.type";


/**
 * ### Documentation : Script JSON-LD HomePage de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter la page d'accueil du site.
 * Il est généralement utilisé pour : 
 * - La page d'accueil, qui a des exigences spécifiques en matière de SEO et de structuration des données.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * @param {HomePage_script_Type} data - L'objet contenant les information necessaire au script JSON-LD.
 * @param {string} data.description - **[description]** - Résumé dense de la page d'accueil pour le SEO/GEO (80 à 160 caractères max).
 * @param {string} data.id - **[id]** - Identifiant unique de la page (string simple, même règle que les URL).
 * @param {string} data.name_page - **[name_page]** - Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML).
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */
function homePage_script_SEO(data: HomePage_script_Type) : string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "HomePage",                   /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */

        "about": {
            "@type": "LocalBusiness",
            "@id": dataMasterSEO.id_LocalBusiness, /* (Obligatoire) Référence à l'ID de l'Entreprise */
            "name": dataMasterSEO.name,            /* (Obligatoire) Nom de l'entreprise */
        },
        "description": data.description,           /* (Obligatoire) Résumé dense de la page d'accueil pour les moteurs de recherche. */
        "inLanguage": "fr",

        /* Rattachement au site web global */
        "isPartOf": {
            "@type": "WebSite",
            "name": dataMasterSEO.name, /* (Obligatoire) Nom de l'entreprise */
            "url": dataMasterSEO.url
        },

        "name": data.name_page,         /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */

        /* Identifie l'organisation ou l'entité légale qui édite officiellement cette page */
        "publisher": { 
            "@type": "Organization",
            "@id": dataMasterSEO.id_LocalBusiness, /* (Obligatoire) Référence à l'ID de l'Entreprise */
            "name": dataMasterSEO.name,            /* (Obligatoire) Nom de l'entreprise */
            "logo": dataMasterSEO.logo             /* (Obligatoire) Logo de l'entreprise */
        },
        "url": `${dataMasterSEO.url}${data.uri_page}`, /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
    });

    return JSON_LD;
};

export { homePage_script_SEO };
