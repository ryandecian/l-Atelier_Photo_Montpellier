import DataSEORoots from "../../../DataSEORoot.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250601s from "./DataSEO_Blog_20250601.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

import ListDataRouter from "../../../../router/router";
// import extractKeywordsFromDataSEO from "../../../../utils/extractKeywordsFromDataSEO.utils";

function JSON_LD_BlogPosting_Blog_20250601_Schema_SEO() : string {
    const router = ListDataRouter
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Blog_20250601: DataSEOTargetOneType = DataSEO_Blog_20250601s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": "BlogPosting",

        /* Identifiants & URL */
        "@id": "https://www.latelierphotomontpellier.fr/blog/20250601#photographie-reportage-mariage",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.latelierphotomontpellier.fr/blog/20250601"
        },
        "url": "https://www.latelierphotomontpellier.fr/blog/20250601",

  /* Métadonnées principales */
  "headline": "Photographie de Mariage en Style Reportage : L’Art de Capturer l’Authentique",
  "description": "Découvrez l’approche naturelle et sincère du reportage photo pour mariage, une manière unique de capturer l’émotion du jour J.",
  "keywords": [
    "photographie de mariage",
    "reportage photo",
    "style naturel",
    "émotions mariage",
    "photographe Montpellier",
    "Anne SAUNIER",
    "photo spontanée",
    "mariage authentique",
    "portrait reportage",
    "photo de couple naturelle"
  ],

  /* Image principale */
  "image": {
    "@type": "ImageObject",
    "url": "https://www.latelierphotomontpellier.fr/images-seo/blog/20250601/google/lapm-photo-mariage-style-reportage-anne-saunier.jpg",
    "width": 1200,
    "height": 628
  },

  /* Dates */
  "datePublished": "2025-06-01",
  "dateModified": "2025-06-01",

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
