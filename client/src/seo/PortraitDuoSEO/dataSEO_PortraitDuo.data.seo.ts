/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEOPortraitDuo_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Portrait Duo - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Un lien unique, deux âmes en harmonie. Laissez parler vos émotions à travers un portrait duo ou couple plein de sincérité.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[15].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Portrait Duo", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Portrait Duo - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portrait Duo", /* 7 mots clés */
            8: "Portrait Couple", /* 8 mots clés */
            9: "", /* 9 mots clés */
            10: "", /* 10 mots clés */
            11: "", /* 11 mots clés */
            12: "", /* 12 mots clés */
            13: "", /* 13 mots clés */
            14: "", /* 14 mots clés */
            15: "", /* 15 mots clés */
        }, /* 10 a 15 mots max */
        type : {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },
    
        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-duo/google/lapm-photo-portrait-duo-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-duo/helmet/lapm-photo-portrait-duo-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[15].path}/#service-portrait-duo`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Séance photo professionnelle en duo, pour couples, amis ou proches, capturant les liens forts à travers des portraits expressifs et naturels.",
    };

    return (
        dataSEO
    )
}

export { dataSEOPortraitDuo_data_SEO };
