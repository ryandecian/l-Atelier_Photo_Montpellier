import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import { dataSEO_Blog_20250601_data_SEO } from "./dataSEO_Blog_20250601.data.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

import DataCardBlogRoots from "../../../../components/Public/BlogRoot/DataCardBlogRoot";
import CardBlogType from "../../../../types/CardBlog.type";

import extractKeywordsFromDataSEO from "../../../../utils/extractKeywordsFromDataSEO.utils";
import { convertDateFrToISO_String } from "../../../../utils/convertDateFrToISO.utils";

function JSON_LD_BlogPosting_Blog_20250601_schema_SEO() : string {
    const dataCardBlog_Root: CardBlogType[] = DataCardBlogRoots(); /* Récupération des données de la carte du blog */
    const dataSEO_Root: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Blog_20250601: DataSEOTargetOneType = dataSEO_Blog_20250601_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEO_Root["@context"],
        "@type": dataSEO_Root["@type"].BlogPosting,

        /* Identifiants & URL */
        "@id": dataSEO_Blog_20250601.id_Service, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": dataSEO_Blog_20250601.url,
        },
        "url": dataSEO_Blog_20250601.url,

        /* Métadonnées principales */
        "headline": dataSEO_Blog_20250601.name_Service, /* Titre principal affiché par Google */
        "description": dataSEO_Blog_20250601.description, /* Description de l'article de blog */
        "keywords": extractKeywordsFromDataSEO(dataSEO_Blog_20250601.keywords), /* Extraction des mots clés */

        /* Image principale */
        "image": {
            "@type": "ImageObject",
            "url": dataSEO_Blog_20250601.img_JSON_LD, /* Lien URL public de l'image */
            "width": 1200,
            "height": 800
        },

        /* Dates */
        "datePublished": convertDateFrToISO_String(dataCardBlog_Root[1].date), /* Date de publication au format ISO 8601 */

        /* Auteur */
        "author": dataSEO_Root.author, /* Auteur de l'article, défini dans DataSEORoot */

        /* Éditeur */
        "publisher": dataSEO_Root.publisher, /* Éditeur de l'article, défini dans DataSEORoot */

        /* Créatrice */
        "creator": dataSEO_Root.creator, /* Créatrice de l'article, défini dans DataSEORoot */
    })

    return (
        JSON_LD
    )
}

export { JSON_LD_BlogPosting_Blog_20250601_schema_SEO };
