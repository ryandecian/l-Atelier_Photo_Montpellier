import ListDataRouter from "../../router/router";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function DataSEO_Home(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Accueil - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Photographe professionnelle à Montpellier, Anne SAUNIER vous accueille à l’Atelier Photo Montpellier pour des portraits vrais, élégants et lumineux.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[0].path}`, /*URL de la page*/
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Meilleur photogaphe montpellier", /* 6 mots clés */
            7: "Photographe professionnel", /* 7 mots clés */
            8: "Photographe sud de france", /* 8 mots clés */
            9: "Photographe Grabels", /* 9 mots clés */
            10: "Photographe rapide", /* 10 mots clés */
            11: "Déplacement photographe", /* 11 mots clés */
            12: "Photographe animalier Montpellier", /* 12 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/home/google/photo-professionnel-portrait-lifestyle-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/home/helmet/reflets-de-memoire-anne-saunier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[0].path}#home`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Découverte des prestations de photographie professionnelle proposées par l'Atelier Photo Montpellier",
    };

    return (
        DataSEO
    )
}

export default DataSEO_Home;
