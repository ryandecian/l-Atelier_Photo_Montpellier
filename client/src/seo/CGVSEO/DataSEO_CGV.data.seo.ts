import ListDataRouter from "../../router/router";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function DataSEO_CGV(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Conditions Générales de Vente - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Consultez les conditions générales de vente de l’Atelier Photo Montpellier. Informations légales sur les prestations photographiques proposées par Anne SAUNIER.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[9].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Conditions Générales de Vente", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Conditions Générales de Vente - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Conditions Générales de Vente", /* 1 mot clés */
            2: "CGV", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "Anne SAUNIER", /* 5 mots clés */
            6: "Prestation photo", /* 6 mots clés */
            7: "Réservation séance photo", /* 7 mots clés */
            8: "Droit à l'image", /* 8 mots clés */
            9: "Photographie professionnelle", /* 9 mots clés */
            10: "Contrat photo", /* 10 mots clés */
            11: "Annulation séance photo", /* 11 mots clés */
            12: "Paiement séance photo", /* 12 mots clés */
            13: "CGV photographie", /* 13 mots clés */
            14: "Photographe indépendant", /* 14 mots clés */
            15: "Engagement client photographe", /* 15 mots clés */
        }, /* 10 a 15 mots max */
        type : {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },
    
        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/cgv/google/lapm-photo-professionnel-portrait-lifestyle-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/cgv/helmet/lapm-photo-professionnel-portrait-lifestyle-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[9].path}/#cgv`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Conditions générales de vente pour les prestations photographiques proposées par Anne SAUNIER à Montpellier.",
    };

    return (
        DataSEO
    )
}

export default DataSEO_CGV;
