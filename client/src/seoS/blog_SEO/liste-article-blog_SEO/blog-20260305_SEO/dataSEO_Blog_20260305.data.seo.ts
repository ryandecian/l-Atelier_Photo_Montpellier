/* Import des composants Router */
import ListDataRouter from "../../../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function dataSEO_Blog_20260305_data_SEO(): DataSEOTargetOne_Type {

    const dataSEO = {
        /* Data Helmet */
        title: "Mariage à Montpellier : 10 critères essentiels – Blog - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Les vrais critères pour choisir un photographe mariage à Montpellier sans stress ni mauvaises surprises.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[6].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Mariage à Montpellier", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service:
            "Mariage à Montpellier : 10 critères essentiels – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg:
            ``, /* Lien URL de l'image */

        keywords: {
            1: "", /* 1 mot clé */
            2: "", /* 2 mots clés */
            3: "", /* 3 mots clés */
            4: "", /* 4 mots clés */
            5: "", /* 5 mots clés */
            6: "", /* 6 mots clés */
            7: "", /* 7 mots clés */
            8: "", /* 8 mots clés */
            9: "", /* 9 mots clés */
            10: "", /* 10 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20260305/google/lapm-photo-professionnel-portrait-mariage-blog-20260305-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20260305/helmet/lapm-photo-professionnel-portrait-mariage-blog-20260305-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[8].path}/#blog_20260305`, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        serviceType: "Mariage à Montpellier : 10 critères essentiels – Blog - l'Atelier Photo Montpellier",
    };

    return dataSEO;
}

export { dataSEO_Blog_20260305_data_SEO };
