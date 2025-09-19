/* Import des composants Router */
import ListDataRouter from "../../../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function dataSEO_Blog_20250917_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Pourquoi investir dans la vidéo et la photo pour votre entreprise ? – Blog - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Photo et vidéo corporate à Montpellier : impact, crédibilité et ROI. Événementiel, communication interne, réseaux sociaux, image de marque — pourquoi et comment investir.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[5].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Investir photo & vidéo", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Photo & vidéo corporate à Montpellier – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */

        keywords: {
            1: "photographe corporate Montpellier", /* 1 mot clé */
            2: "vidéaste entreprise Montpellier", /* 2 mots clés */
            3: "photo et vidéo événementiel entreprise", /* 3 mots clés */
            4: "communication visuelle d'entreprise", /* 4 mots clés */
            5: "photographe événement Montpellier", /* 5 mots clés */
            6: "vidéo corporate Montpellier", /* 6 mots clés */
            7: "production vidéo entreprise", /* 7 mots clés */
            8: "photographe professionnel Montpellier", /* 8 mots clés */
            9: "vidéaste professionnel Montpellier", /* 9 mots clés */
            10: "image de marque entreprise", /* 10 mots clés */
            11: "photo LinkedIn entreprise", /* 11 mots clés */
            12: "contenu visuel B2B", /* 12 mots clés */
            13: "reportage photo entreprise", /* 13 mots clés */
            14: "film d'entreprise Montpellier", /* 14 mots clés */
            15: "ROI communication visuelle", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250917/google/lapm-photo-professionnel-conference-blog-20250917-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250917/helmet/lapm-photo-pro-conference-blog-20250917-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[5].path}/#blog_20250917`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Article de blog dédié à la photo et à la vidéo corporate : leviers d’impact, de confiance et de ROI pour les entreprises à Montpellier et ailleurs (événementiel, marque, réseaux sociaux).",
    };

    return (
        dataSEO
    )
}

export {dataSEO_Blog_20250917_data_SEO};
