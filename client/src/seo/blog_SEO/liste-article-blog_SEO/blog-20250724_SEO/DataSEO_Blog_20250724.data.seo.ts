import ListDataRouter from "../../../../router/router";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

function DataSEO_Blog_20250724(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Photographe grossesse à Montpellier : quand réserver votre séance photo ? – Blog - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Découvrez le moment idéal pour une séance photo de grossesse à Montpellier, entre émotions, préparation et souvenirs à transmettre.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[4].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Photo grossesse", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Photographe grossesse à Montpellier – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */

        keywords: {
            1: "photo grossesse Montpellier", /* 1 mot clé */
            2: "photographe grossesse Montpellier", /* 2 mots clés */
            3: "séance photo grossesse", /* 3 mots clés */
            4: "portrait grossesse naturelle", /* 4 mots clés */
            5: "photographe maternité Montpellier", /* 5 mots clés */
            6: "shooting grossesse professionnel", /* 6 mots clés */
            7: "souvenir de grossesse", /* 7 mots clés */
            8: "immortaliser grossesse", /* 8 mots clés */
            9: "photo ventre rond", /* 9 mots clés */
            10: "séance photo grossesse Montpellier", /* 10 mots clés */
            11: "photo future maman Montpellier", /* 11 mots clés */
            12: "grossesse studio Montpellier", /* 12 mots clés */
            13: "séance maternité extérieure", /* 13 mots clés */
            14: "photo grossesse émotion", /* 14 mots clés */
            15: "photo grossesse à domicile", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250724/google/lapm-photo-professionnel-portrait-grossesse-blog-20250724-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20250724/helmet/lapm-photo-professionnel-portrait-grossesse-blog-20250724-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[4].path}/#blog_20250724`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Article de blog dédié à la photographie grossesse, pour vous aider à choisir le bon moment, bien préparer votre séance et créer des souvenirs uniques à Montpellier.",
    };

    return (
        DataSEO
    )
}

export default DataSEO_Blog_20250724;
