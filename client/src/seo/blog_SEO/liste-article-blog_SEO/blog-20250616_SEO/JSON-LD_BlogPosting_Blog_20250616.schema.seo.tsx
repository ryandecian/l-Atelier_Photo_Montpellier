import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250616s from "./DataSEO_Blog_20250616.data.seo";
import DataSEOTargetOneType from "../../../../types/seo/dataSEOTargetOne.type";

import DataCardBlogRoots from "../../../../components/Public/BlogRoot/dataCardBlog.img.data";
import CardBlogType from "../../../../types/cardBlog.type";

import extractKeywordsFromDataSEO from "../../../../utils/extractKeywordsFromDataSEO.utils";
import { convertDateFrToISO_String } from "../../../../utils/convertDateFrToISO.utils";

function JSON_LD_BlogPosting_Blog_20250616_Schema_SEO() : string {
    const DataCardBlogRoot: CardBlogType[] = DataCardBlogRoots(); /* Récupération des données de la carte du blog */
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Blog_20250616: DataSEOTargetOneType = DataSEO_Blog_20250616s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BlogPosting,

        /* Identifiants & URL */
        "@id": DataSEO_Blog_20250616.id_Service, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": DataSEO_Blog_20250616.url,
        },
        "url": DataSEO_Blog_20250616.url,

        /* Métadonnées principales */
        "headline": DataSEO_Blog_20250616.name_Service, /* Titre principal affiché par Google */
        "description": DataSEO_Blog_20250616.description, /* Description de l'article de blog */
        "keywords": extractKeywordsFromDataSEO(DataSEO_Blog_20250616.keywords), /* Extraction des mots clés */

        /* Image principale */
        "image": {
            "@type": "ImageObject",
            "url": DataSEO_Blog_20250616.img_JSON_LD, /* Lien URL public de l'image */
            "width": 1200,
            "height": 800
        },

        /* Dates */
        "datePublished": convertDateFrToISO_String(DataCardBlogRoot[0].date), /* Date de publication au format ISO 8601 */

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

export default JSON_LD_BlogPosting_Blog_20250616_Schema_SEO;
