/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_Contact_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Contact - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Une idée, un projet photo ? Contactez Anne SAUNIER par téléphone ou email. À l’Atelier Photo Montpellier, chaque demande est traitée avec attention et réactivité.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[3].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Contact", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_ContactPage: "Contact - l'Atelier Photo Montpellier", /* Nom de la page de contact, utilisé dans le JSON-LD ContactPage */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Contact", /* 6 mots clés */
            7: "Contact LAPM", /* 7 mots clés */
            8: "Contact l'Atelier Photo Montpellier", /* 8 mots clés */
            9: "Email LAPM", /* 9 mots clés */
            10: "Email l'Atelier Photo Montpellier", /* 10 mots clés */
            11: "Téléphone LAPM", /* 11 mots clés */
            12: "Téléphone l'Atelier Photo Montpellier", /* 12 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/contact/google/lapm-photo-portrait-solo-professionnel-contact-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/contact/helmet/lapm-photo-professionnel-contact-montpellier-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[3].path}/#contact`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "",
    };

    return (
        dataSEO
    )
}

export { dataSEO_Contact_data_SEO };
