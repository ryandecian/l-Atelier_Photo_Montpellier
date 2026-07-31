/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import { ContactPage_script_Type } from "./contactPage.script.type";


/**
 * ### Documentation : Script JSON-LD ContactPage de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter la page de contact du site.
 * Il est généralement utilisé pour : 
 * - La page de contact, qui a des exigences spécifiques en matière de SEO et de structuration des données.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * @param {ContactPage_script_Type} data - L'objet contenant les information necessaire au script JSON-LD.
 * @param {string} data.description - **[description]** - Résumé dense de la page de contact pour le SEO/GEO (80 à 160 caractères max).
 * @param {string} data.id - **[id]** - Identifiant unique de la page (string simple, même règle que les URL).
 * @param {string} data.name_page - **[name_page]** - Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML).
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function contactPage_script_SEO(data: ContactPage_script_Type) : string {
    const dataMasterSEO = dataMasterSEO_data_SEO();
    
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "ContactPage",                /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* @id SEO-friendly, identifiant unique de la page, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */

        "about": {
            "@type": "LocalBusiness",
            "@id": dataMasterSEO.id_LocalBusiness, /* (Obligatoire) Référence à l'ID de l'Entreprise */
            "name": dataMasterSEO.name,            /* (Obligatoire) Nom de l'entreprise */
        },

        "description": data.description,           /* (Obligatoire) Résumé dense de la page contact pour les moteurs de recherche. */

        /* Désigne le sujet ou l'entité principale décrite dans la page (ex: l'entreprise elle-même) */
        "mainEntity": {
            "@type": "ContactPoint", 
            "areaServed": "FR",
            "availableLanguage": "French",
            "contactType": "technical support",
            "description": "Support technique dédié aux utilisateurs.",
            "email": dataMasterSEO.email,         /* (Obligatoire) Adresse email de l'entreprise (Dynamique) */
            "name": dataMasterSEO.name,           /* (Obligatoire) Nom de l'entreprise */
            "telephone": dataMasterSEO.telephone, /* (Obligatoire) Numéro de téléphone de l'entreprise (Dynamique) */
            "url": dataMasterSEO.url,             /* URL de la page d'accueil de l'entreprise (Dynamique) */
        },

        "name": data.name_page,         /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
        "provider": {
            "@type": "LocalBusiness",
            "@id": dataMasterSEO.id_LocalBusiness, /* Référence croisée à l'ID de l'Entreprise */
        },

        "publisher": {
            "@type": "LocalBusiness",
            "@id": dataMasterSEO.id_LocalBusiness, /* Référence croisée à l'ID de l'Éditeur légal */
        },

        "url": `${dataMasterSEO.url}${data.uri_page}`, /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
    });

    return JSON_LD;
}

export { contactPage_script_SEO };
