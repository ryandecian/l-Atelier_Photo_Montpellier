import DataSEORoots from "../../../DataSEORoot.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250710s from "./DataSEO_Blog_20250710.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

import DataCardBlogRoots from "../../../../components/BlogRoot/DataCardBlogRoot";
import CardBlogType from "../../../../types/CardBlog.type";

import extractKeywordsFromDataSEO from "../../../../utils/extractKeywordsFromDataSEO.utils";
import convertDateFrToISO from "../../../../utils/convertDateFrToISO.utils";

function JSON_LD_BlogPosting_Blog_20250710_Schema_SEO() : string {
    const DataCardBlogRoot: CardBlogType[] = DataCardBlogRoots(); /* Récupération des données de la carte du blog */
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Blog_20250710: DataSEOTargetOneType = DataSEO_Blog_20250710s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BlogPosting,

        /* Identifiants & URL */
        "@id": DataSEO_Blog_20250710.id_Service, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": DataSEO_Blog_20250710.url,
        },
        "url": DataSEO_Blog_20250710.url,

        /* Métadonnées principales */
        "headline": DataSEO_Blog_20250710.name_Service, /* Titre principal affiché par Google */
        "description": DataSEO_Blog_20250710.description, /* Description de l'article de blog */
        "keywords": extractKeywordsFromDataSEO(DataSEO_Blog_20250710.keywords), /* Extraction des mots clés */

        /* Image principale */
        "image": {
            "@type": "ImageObject",
            "url": DataSEO_Blog_20250710.img_JSON_LD, /* Lien URL public de l'image */
            "width": 1200,
            "height": 800
        },

        /* Dates */
        "datePublished": convertDateFrToISO(DataCardBlogRoot[0].date), /* Date de publication au format ISO 8601 */

        /* Auteur */
        "author": DataSEORoot.author, /* Auteur de l'article, défini dans DataSEORoot */

        /* Éditeur */
        "publisher": DataSEORoot.publisher, /* Éditeur de l'article, défini dans DataSEORoot */

        /* Créatrice */
        "creator": DataSEORoot.creator, /* Créatrice de l'article, défini dans DataSEORoot */
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_BlogPosting_Blog_20250710_Schema_SEO;
