import ListDataRouter from "../../../../router/router";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

function dataSEO_Blog_20250917_data_SEO(): DataSEOTargetOneType {
    const DataSEO = {
        /* Data Helmet */
        title: "Pourquoi la communication visuelle professionnelle n’est plus une option – Blog – l’Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Comment la photo et la vidéo événementielles transforment vos événements en actifs de marque : impact, préparation, ROI post-événement, et place de l’humain.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[5].path}`, /* URL de la page */
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Communication visuelle", /* Libellé du lien dans le fil d’Ariane */
        name_Service: "Photographie & vidéo événementielles – Blog – l’Atelier Photo Montpellier", /* Nom du service / contexte éditorial */
        twitterUrlImg: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog_20250917/helmet/lapm-communication-visuelle-evenementielle-blog-20250917-l-atelier-photo-montpellier.jpg`, /* Lien URL de l'image (peut servir à Twitter Cards) */

        keywords: {
            1: "communication visuelle professionnelle",
            2: "photographie événementielle",
            3: "photographe événementiel entreprise",
            4: "vidéo événementielle corporate",
            5: "communication visuelle entreprise Montpellier",
            6: "photographe corporate Montpellier",
            7: "photos d’événement professionnel",
            8: "ROI communication visuelle",
            9: "images professionnelles LinkedIn",
            10: "couvrir un événement d’entreprise",
            11: "captation photo vidéo événement",
            12: "storytelling visuel entreprise",
            13: "banque d’images de marque",
            14: "photographe séminaire Montpellier",
            15: "valoriser un lancement de produit",
        }, /* 10 à 15 mots max */

        type: {
            website: "website", /* (Par défaut) site web classique */
            article: "article",  /* Article de blog / éditorial */
            video: "video.movie", /* Page contenant une vidéo de type film */
            music: "music.song", /* Page dédiée à la musique */
            profile: "profile", /* Page profil d'une personne */
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog_20250917/google/lapm-communication-visuelle-evenementielle-blog-20250917-l-atelier-photo-montpellier.jpg`, /* Lien URL public de l'image */
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog_20250917/helmet/lapm-communication-visuelle-evenementielle-blog-20250917-l-atelier-photo-montpellier.jpg`, /* Lien URL public de l'image (Open Graph / Twitter) */
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[5].path}/#blog_20250917`, // @id SEO-friendly : URL + ancre datée
        serviceType: "Article de blog sur la photographie et la vidéo événementielles : pourquoi la communication visuelle professionnelle n’est plus une option, comment préparer une captation et maximiser l’effet post-événement, avec l’humain au centre.",
    };

    return DataSEO;
}

export { dataSEO_Blog_20250917_data_SEO };
