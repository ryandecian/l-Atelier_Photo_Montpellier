import ListDataRouter from "../../../../router/router";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

function DataSEO_Blog_20250601(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Photographie de Mariage en Style Reportage – Blog - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Découvrez l’approche naturelle et sincère du reportage photo pour mariage, une manière unique de capturer l’émotion du jour J.",
        url: `${ListDataRouter[4].children?.[1].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Photographie de mariage en style reportage", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Photographie de mariage en style reportage – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */

        keywords: {
            1: "photographie de mariage", /* 1 mot clés */
            2: "reportage photo", /* 2 mots clés */
            3: "style naturel", /* 3 mots clés */
            4: "émotions mariage", /* 4 mots clés */
            5: "photographe Montpellier", /* 5 mots clés */
            6: "Anne SAUNIER", /* 6 mots clés */
            7: "l'Atelier Photo Montpellier", /* 7 mots clés */
            8: "photo spontanée", /* 8 mots clés */
            9: "séance photo mariage", /* 9 mots clés */
            10: "mariage authentique", /* 10 mots clés */
            11: "", /* 11 mots clés */
            12: "", /* 12 mots clés */
            13: "", /* 13 mots clés */
            14: "", /* 14 mots clés */
            15: "", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog_20250601/google/lapm-photo-professionnel-portrait-mariage-blog-20250601-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog_20250601/helmet/lapm-photo-professionnel-portrait-mariage-blog-20250601-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].children?.[1].path}#blog_20250601`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Article de blog sur le style reportage en photographie de mariage, par Anne SAUNIER, photographe professionnelle à Montpellier.",
    };

    return (
        DataSEO
    )
}

export default DataSEO_Blog_20250601;
