import ListDataRouter from "../../router/router";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function DataSEO_Portfolio(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Portfolio - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Découvrez mon univers en images : une sélection de portraits et instants capturés avec passion, entre émotion, lumière et authenticité.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[8].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Portfolio", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_ImageGalery: "Portfolio et Galerie photo – L'Atelier Photo Montpellier", /* Nom de la galerie photo, utilisé dans le JSON-LD ImageGallery */
        name_Collection: "Portfolio et Galerie photo – L'Atelier Photo Montpellier", /* Nom de la page de collection, utilisé dans le JSON-LD CollectionPage */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portfolio", /* 7 mots clés */
            8: "Portrait Rue", /* 8 mots clés */
            9: "Portrait Urbain", /* 9 mots clés */
            10: "Portrait Paysage", /* 10 mots clés */
            11: "Portrait Mariage", /* 11 mots clés */
            12: "Portrait Corporate", /* 12 mots clés */
            13: "Portrait LifeStyle", /* 13 mots clés */
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
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[8].path}/#portfolio`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Découvrez l’univers visuel d’Anne SAUNIER à travers des clichés de portrait, paysage et photographie urbaine à Montpellier.", /* Utilisé pour la clé about dans JSON-LD_Collection car pas de serviceType dan ce JSON-LD */
    };

    return (
        DataSEO
    )
}

export default DataSEO_Portfolio;
