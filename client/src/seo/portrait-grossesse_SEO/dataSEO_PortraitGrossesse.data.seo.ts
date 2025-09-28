/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_PortraitGrossesse_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Portrait Grossesse et nouveau né - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Avec l’Atelier Photo Montpellier, Anne SAUNIER capture la magie de la grossesse et les premiers instants de vie à travers des portraits doux et authentiques.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[18].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Portrait Grossesse et nouveau né", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Portrait Grossesse et nouveau né - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portrait Grossesse", /* 7 mots clés */
            8: "Portrait nouveau né", /* 8 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-grossesse/google/lapm-photo-portrait-grossesse-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-grossesse/helmet/lapm-photo-portrait-grossesse-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[18].path}/#service-portrait-grossesse`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Photographie grossesse et nouveau-né",
    };

    return (
        dataSEO
    )
}

export { dataSEO_PortraitGrossesse_data_SEO };
