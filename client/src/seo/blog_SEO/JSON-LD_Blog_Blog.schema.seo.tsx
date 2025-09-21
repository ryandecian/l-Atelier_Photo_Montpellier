/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Blog_data_SEO } from "./dataSEO_Blog.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Utils */
import { extractKeywordsFromDataSEO_Utils } from "../../utils/seo/extractKeywordsFromDataSEO.utils";

function JSON_LD_Blog_Blog_schema_SEO() : string {
    const router = ListDataRouter
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Blog: DataSEOTargetOne_Type = dataSEO_Blog_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].Blog, // Type de la page
        "@id": dataSEO_Blog.id_Service, // URL canonique de la page blog
        "url": dataSEO_Blog.url, // URL de la page blog
        "name": dataSEO_Blog.url, // Nom de la rubrique blog
        "headline": dataSEO_Blog.name_Service, // Titre principal affiché par Google
        "description": dataSEO_Blog.description, // Description de la section blog
        "inLanguage": "fr-FR", // Langue du blog
        "author": {
            "@type": "Person",
            "name": "Anne SAUNIER",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}${router[7].path}` // Page "Qui suis-je"
        },
        "publisher": dataSEORoot.publisher, // Informations sur l'éditeur
        "image": {
           "@type": "ImageObject",
           "url": dataSEO_Blog.img_JSON_LD, // Image représentative de la section blog
           "width": 1200,
           "height": 800
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": dataSEO_Blog.url,
        },
        "creator": {
            "@type": "Person",
            "name": dataSEO_Blog.author, // Nom de l'auteur du blog
        },
       "keywords": extractKeywordsFromDataSEO_Utils(dataSEO_Blog.keywords), // Mots-clés associés à la section blog
    })

    return (
        JSON_LD
    )
}

export { JSON_LD_Blog_Blog_schema_SEO };
