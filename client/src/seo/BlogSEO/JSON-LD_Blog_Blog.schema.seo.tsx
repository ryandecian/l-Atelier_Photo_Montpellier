import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Blogs from "./DataSEO_Blog.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import ListDataRouter from "../../router/router";

function JSON_LD_Blog_Blog_Schema_SEO() : string {
    const router = ListDataRouter
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
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
           "url": "https://www.latelierphotomontpellier.fr/images/blog-banner.jpg", // Image représentative de la section blog
           "width": 1200,
           "height": 628
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.latelierphotomontpellier.fr/blog"
  },
  "creator": {
    "@type": "Person",
    "name": "Anne SAUNIER"
  },
  "keywords": [
    "blog photo",
    "conseils séance photo",
    "photographe Montpellier",
    "astuces photographie",
    "portrait professionnel"
  ],
  "dateCreated": "2024-04-01", // Date de création de la section blog
  "dateModified": "2025-06-16"  // À mettre à jour dynamiquement si besoin
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_Blog_Blog_Schema_SEO;
