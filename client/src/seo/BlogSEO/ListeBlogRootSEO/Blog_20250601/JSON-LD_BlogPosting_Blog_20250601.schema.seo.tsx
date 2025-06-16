import DataSEORoots from "../../../DataSEORoot.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250601s from "./DataSEO_Blog_20250601.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

import DataCardBlogRoots from "../../../../components/BlogRoot/DataCardBlogRoot";

import extractKeywordsFromDataSEO from "../../../../utils/extractKeywordsFromDataSEO.utils";
import convertDateFrToISO from "../../../../utils/convertDateFrToISO.utils";

function JSON_LD_BlogPosting_Blog_20250601_Schema_SEO() : string {
    const DataCardBlogRoot = DataCardBlogRoots(); /* Récupération des données de la carte du blog */
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Blog_20250601: DataSEOTargetOneType = DataSEO_Blog_20250601s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BlogPosting,

        /* Identifiants & URL */
        "@id": DataSEO_Blog_20250601.id_Service, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": DataSEO_Blog_20250601.url,
        },
        "url": DataSEO_Blog_20250601.url,

        /* Métadonnées principales */
        "headline": DataSEO_Blog_20250601.name_Service, /* Titre principal affiché par Google */
        "description": DataSEO_Blog_20250601.description, /* Description de l'article de blog */
        "keywords": extractKeywordsFromDataSEO(DataSEO_Blog_20250601.keywords), /* Extraction des mots clés */

        /* Image principale */
        "image": {
            "@type": "ImageObject",
            "url": DataSEO_Blog_20250601.img_JSON_LD, /* Lien URL public de l'image */
            "width": 1200,
            "height": 800
        },

        /* Dates */
        "datePublished": convertDateFrToISO(DataCardBlogRoot[1].date), /* Date de publication au format ISO 8601 */

        /* Auteur */
        "author": {
            "@type": "Person",
            "name": "Anne SAUNIER",
            "url": "https://www.latelierphotomontpellier.fr/qui-suis-je"
  },

  /* Éditeur */
  "publisher": {
    "@type": "Organization",
    "name": "l'Atelier Photo Montpellier",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.latelierphotomontpellier.fr/logo-LAPM-l-atelier-photo-montpellier.png",
      "width": 200,
      "height": 200
    }
  },

  /* Créatrice */
  "creator": {
    "@type": "Person",
    "name": "Anne SAUNIER"
  }
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_BlogPosting_Blog_20250601_Schema_SEO;
