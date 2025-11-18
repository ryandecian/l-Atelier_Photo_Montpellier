/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_Video_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Vidéos professionnelles – l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description:
            "Création de vidéos professionnelles pour entreprises, mariages, naissances et portraits personnels. Vidéaste à Montpellier : vidéos corporate, films de mariage, portraits vidéo et reportages authentiques.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[20].path}`, /* URL de la page Vidéo */
        position: 2, /* Position dans le fil d'Ariane */
        name_Breadcrumb: "Vidéos", /* Libellé du breadcrumb */
        name_Service: "Création de vidéos professionnelles – l'Atelier Photo Montpellier", /* Nom du service principal pour le JSON-LD */
        twitterUrlImg: "",

        keywords: {
            1: "Vidéaste Montpellier",
            2: "Vidéo corporate Montpellier",
            3: "Film de mariage Montpellier",
            4: "Vidéo naissance Montpellier",
            5: "Portrait vidéo",
            6: "Vidéo professionnelle",
            7: "Vidéaste entreprise",
            8: "Vidéaste événement",
            9: "L'Atelier Photo Montpellier",
            10: "Anne SAUNIER",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
        }, /* 10 à 15 mots clés */

        type: {
            website: "website",
            article: "article",
            video: "video.movie",
            music: "music.song",
            profile: "profile",
        },

        /* Images Helmet et JSON-LD (à mettre à jour selon ton organisation SEO) */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/video/google/lapm-video-professionnelle-montpellier-atelier-photo-montpellier.jpg`,
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/video/helmet/lapm-video-professionnelle-montpellier-atelier-photo-montpellier.jpg`,

        /* @id pour JSON-LD Service */
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[20].path}/#service-video`,

        /* Description du service pour le JSON-LD Service */
        serviceType:
            "Création de vidéos professionnelles : corporate, mariage, naissance, portraits vidéo et contenus lifestyle pour particuliers et entreprises.",
    };

    return dataSEO;
}

export { dataSEO_Video_data_SEO };
