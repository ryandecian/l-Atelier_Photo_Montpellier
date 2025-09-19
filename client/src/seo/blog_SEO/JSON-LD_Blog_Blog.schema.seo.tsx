import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/dataSEORoot.type";

import DataSEO_Blogs from "./ddataSEO_Blog.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

import ListDataRouter from "../../router/router";
import extractKeywordsFromDataSEO from "../../utils/seo/extractKeywordsFromDataSEO.utils";

function JSON_LD_Blog_Blog_Schema_SEO() : string {
    const router = ListDataRouter
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Blog: DataSEOTargetOneType = DataSEO_Blogs(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].Blog, // Type de la page
        "@id": DataSEO_Blog.id_Service, // URL canonique de la page blog
        "url": DataSEO_Blog.url, // URL de la page blog
        "name": DataSEO_Blog.url, // Nom de la rubrique blog
        "headline": DataSEO_Blog.name_Service, // Titre principal affiché par Google
        "description": DataSEO_Blog.description, // Description de la section blog
        "inLanguage": "fr-FR", // Langue du blog
        "author": {
            "@type": "Person",
            "name": "Anne SAUNIER",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}${router[7].path}` // Page "Qui suis-je"
        },
        "publisher": DataSEORoot.publisher, // Informations sur l'éditeur
        "image": {
           "@type": "ImageObject",
           "url": DataSEO_Blog.img_JSON_LD, // Image représentative de la section blog
           "width": 1200,
           "height": 800
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": DataSEO_Blog.url,
        },
        "creator": {
            "@type": "Person",
            "name": DataSEO_Blog.autor, // Nom de l'auteur du blog
        },
       "keywords": extractKeywordsFromDataSEO(DataSEO_Blog.keywords), // Mots-clés associés à la section blog
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_Blog_Blog_Schema_SEO;
