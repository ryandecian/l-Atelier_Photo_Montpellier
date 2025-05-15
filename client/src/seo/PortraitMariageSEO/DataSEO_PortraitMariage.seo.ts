import ListDataRouter from "../../router/router";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function DataSEO_PortraitMariage(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Portrait Mariage - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Portrait Mariage à Montpellier – Une séance photo professionnelle pour valoriser votre image, inspirer confiance et marquer les esprits. Par Anne SAUNIER, photographe à l’Atelier Photo Montpellier.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[13].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name: "Portrait Mariage", /* Clé pour Breadcrumb qui est = à title sans le nom de l'entreprise */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portrait Mariage", /* 7 mots clés */
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
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-mariage/google/photo-professionnel-mariage-domaine-de-gramont-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/portrait-mariage/helmet/photo-portrait-mariage-professionnel-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[13].path}#service-portrait-mariage`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Photographe professionnelle spécialisée en portraits, événements et cérémonies de mariage à Montpellier",
    };

    return (
        DataSEO
    )
}

export default DataSEO_PortraitMariage;
