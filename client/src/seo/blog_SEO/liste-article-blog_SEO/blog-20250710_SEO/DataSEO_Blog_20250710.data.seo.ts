/* Import des composants Router */
import ListDataRouter from "../../../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function dataSEO_Blog_20250710_data_SEO(): DataSEOTargetOne_Type {
    const DataSEO = {
        /* Data Helmet */
        title: "Portrait LifeStyle : révélez votre personnalité en image – Blog - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Découvrez comment un portrait lifestyle peut transformer votre image, nourrir votre estime de vous-même et vous offrir des souvenirs authentiques à Montpellier.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[3].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Portrait LifeStyle", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Portrait LifeStyle – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */

        keywords: {
            1: "portrait lifestyle Montpellier", /* 1 mot clé */
            2: "photo portrait naturel", /* 2 mots clés */
            3: "photographe professionel Montpellier", /* 3 mots clés */
            4: "photographe Montpellier", /* 4 mots clés */
            5: "photo Montpellier", /* 5 mots clés */
            6: "photographe professionnel lifestyle", /* 6 mots clés */
            7: "portrait émotion authentique", /* 7 mots clés */
            8: "portrait extérieur Montpellier", /* 8 mots clés */
            9: "portrait urbain élégant", /* 9 mots clés */
            10: "portrait à Montpellier", /* 10 mots clés */
            11: "photo de soi valorisante", /* 11 mots clés */
            12: "portrait spontané et naturel", /* 12 mots clés */
            13: "séance photo personnelle Montpellier", /* 13 mots clés */
            14: "photographie portrait feel good", /* 14 mots clés */
            15: "portrait artistique Montpellier", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250710/google/lapm-photo-professionnel-portrait-lifestyle-blog-20250710-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250710/helmet/lapm-photo-professionnel-portrait-lifestyle-blog-20250710-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[3].path}/#blog_20250710`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Article de blog dédié à la photographie portrait lifestyle, révélant la personnalité de chacun à travers des images naturelles, expressives et valorisantes à Montpellier.",
    };

    return (
        DataSEO
    )
}

export { dataSEO_Blog_20250710_data_SEO };
