/* Import des Components */
import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import { dataSEO_Blog_20250710_data_SEO } from "./dataSEO_Blog_20250710.data.seo";
import { dataCardBlog_img_data } from "../../../../components/Public/BlogRoot/dataCardBlog.img.data";

/* Import des Types */
import { DataSEORoot_Type } from "../../../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";
import { CardBlog_Type } from "../../../../types/components/blogs/cardBlog.type";

/* Import des Utils */
import { extractKeywordsFromDataSEO_Utils } from "../../../../utils/extractKeywordsFromDataSEO.utils";
import { convertDateFrToISO_String_Utils } from "../../../../utils/convertDateFrToISO.utils";

function JSON_LD_BlogPosting_Blog_20250710_schema_SEO() : string {
    const DataCardBlogRoot: CardBlog_Type[] = dataCardBlog_img_data(); /* Récupération des données de la carte du blog */
    const DataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Blog_20250710: DataSEOTargetOne_Type = dataSEO_Blog_20250710_data_SEO(); /* Récupération des données SEO de la page */

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
        "keywords": extractKeywordsFromDataSEO_Utils(DataSEO_Blog_20250710.keywords), /* Extraction des mots clés */

        /* Image principale */
        "image": {
            "@type": "ImageObject",
            "url": DataSEO_Blog_20250710.img_JSON_LD, /* Lien URL public de l'image */
            "width": 1200,
            "height": 800
        },

        /* Dates */
        "datePublished": convertDateFrToISO_String_Utils(DataCardBlogRoot[0].date), /* Date de publication au format ISO 8601 */

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

export { JSON_LD_BlogPosting_Blog_20250710_schema_SEO };
