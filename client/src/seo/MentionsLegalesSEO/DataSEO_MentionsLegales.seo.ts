import ListDataRouter from "../../router/router";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function DataSEO_MentionsLegales(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Mentions Legales - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Mentions légales de l'Atelier Photo Montpellier : informations sur l’éditeur du site, l’hébergement, les droits d’auteur et les conditions d’utilisation.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[1].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Mentions Legales", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Mentions Legales - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Mentions légales", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "Anne SAUNIER", /* 5 mots clés */
            6: "LAPM", /* 6 mots clés */
            7: "Éditeur du site", /* 7 mots clés */
            8: "Hébergement web", /* 8 mots clés */
            9: "Conditions d’utilisation", /* 9 mots clés */
            10: "Informations légales", /* 10 mots clés */
            11: "Propriété intellectuelle", /* 11 mots clés */
            12: "Responsabilité du contenu", /* 12 mots clés */
            13: "Mentions légales site", /* 13 mots clés */
            14: "Obligations légales", /* 14 mots clés */
            15: "Crédits photo", /* 15 mots clés */
        }, /* 10 a 15 mots max */
        type : {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },
    
        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-corporate/google/lapm-photo-portrait-corporate-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-corporate/helmet/lapm-photo-portrait-corporate-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[1].path}#service-portrait-corporate`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Page d'information légale sur les obligations de l’éditeur et de l’utilisateur du site.",
    };

    return (
        DataSEO
    )
}

export default DataSEO_MentionsLegales;
