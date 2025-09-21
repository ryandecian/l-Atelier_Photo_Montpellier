/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_PortraitHobby_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Portrait Hobby - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Portrait Hobby signé L'Atelier Photo Montpellier : une séance pour mettre en lumière votre passion et révéler ce qui vous anime.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[19].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Portrait Hobby", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Portrait Hobby - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portrait Hobby", /* 7 mots clés */
            8: "", /* 8 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-hobby/google/lapm-photo-portrait-hobby-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-hobby/helmet/lapm-photo-portrait-hobby-professionnel-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[19].path}/#service-portrait-hobby`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Séance photo portrait hobby, pour capturer votre passion dans un style naturel et expressif, en studio ou dans un lieu qui vous ressemble.",
    };

    return (
        dataSEO
    )
}

export { dataSEO_PortraitHobby_data_SEO };
