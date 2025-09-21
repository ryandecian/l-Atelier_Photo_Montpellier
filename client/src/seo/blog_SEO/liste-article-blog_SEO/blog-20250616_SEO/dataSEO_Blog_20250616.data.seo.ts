/* Import des composants Router */
import ListDataRouter from "../../../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function dataSEO_Blog_20250616_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Photo professionnelle pour CV : captez l’attention des recruteurs – Blog - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Découvrez comment un portrait professionnel soigné peut renforcer votre image sur votre CV et faire la différence auprès des recruteurs à Montpellier.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[2].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Photo professionnelle pour CV", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Photo professionnelle pour CV – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */

        keywords: {
            1: "photo professionnelle CV", /* 1 mot clé */
            2: "portrait pro Montpellier", /* 2 mots clés */
            3: "photographe portrait Montpellier", /* 3 mots clés */
            4: "image professionnelle CV", /* 4 mots clés */
            5: "impact photo CV", /* 5 mots clés */
            6: "portrait corporate", /* 6 mots clés */
            7: "portrait studio Montpellier", /* 7 mots clés */
            8: "photographe pour CV", /* 8 mots clés */
            9: "photo de profil LinkedIn", /* 9 mots clés */
            10: "première impression recruteur", /* 10 mots clés */
            11: "photo CV professionnelle Montpellier", /* 11 mots clés */
            12: "valoriser son image sur un CV", /* 12 mots clés */
            13: "photo portrait naturel", /* 13 mots clés */
            14: "conseils photo CV", /* 14 mots clés */
            15: "photographe portrait pro Montpellier", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250616/google/lapm-photo-professionnel-portrait-corporate-blog-20250616-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250616/helmet/lapm-photo-professionnel-portrait-corporate-blog-20250616-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[2].path}/#blog_20250616`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Article de blog dédié à la photographie professionnelle pour CV, avec conseils pour optimiser son image et capter l'attention des recruteurs à Montpellier.",
    };

    return (
        dataSEO
    )
}

export { dataSEO_Blog_20250616_data_SEO };
