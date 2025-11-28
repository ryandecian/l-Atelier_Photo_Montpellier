/* Import des composants Router */
import ListDataRouter from "../../../../router/router";

/* Import des Types */
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function dataSEO_Blog_20251127_data_SEO(): DataSEOTargetOne_Type {

    const dataSEO = {
        /* Data Helmet */
        title: "Marque Employeur en vidéo : attirer les bons profils et réduire les coûts RH – Blog - l'Atelier Photo Montpellier",
        author: "Anne SAUNIER",
        description: "Comment la vidéo Marque Employeur filtre les candidatures, améliore l’alignement culturel et réduit le turnover. Témoignages employés, film manifeste, e-learning : formats et ROI.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[6].path}`, /*URL de la page*/
        position: 3, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Vidéo Marque Employeur & recrutement", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service:
            "Vidéo Marque Employeur : attirer les bons profils et réduire les coûts – Blog - l'Atelier Photo Montpellier", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg:
            `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20251127/helmet/lapm-video-marque-employeur-recrutement-blog-20251127.jpg`, /* Lien URL de l'image */

        keywords: {
            1: "vidéo marque employeur", /* 1 mot clé */
            2: "recrutement B2B vidéo", /* 2 mots clés */
            3: "réduction coûts recrutement", /* 3 mots clés */
            4: "baisse turnover RH", /* 4 mots clés */
            5: "témoignages employés vidéo", /* 5 mots clés */
            6: "film corporate manifeste", /* 6 mots clés */
            7: "vidéo e-learning entreprise", /* 7 mots clés */
            8: "vidéaste entreprise Montpellier", /* 8 mots clés */
            9: "marque employeur Montpellier", /* 9 mots clés */
            10: "candidatures qualifiées RH", /* 10 mots clés */
            11: "culture d’entreprise en vidéo", /* 11 mots clés */
            12: "communication RH authentique", /* 12 mots clés */
            13: "production vidéo corporate", /* 13 mots clés */
            14: "stratégie recrutement vidéo", /* 14 mots clés */
            15: "ROI vidéo RH", /* 15 mots clés */
        }, /* 10 a 15 mots max */

        type: {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },

        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20251127/google/lapm-video-recrutement-entreprise-culture-l-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        img_Helmet: `${import.meta.env.VITE_DOMAIN_CLIENT}/images-seo/blog/liste-blog-root/blog-20251127/helmet/lapm-video-entreprise-culture-candidats-temoignage-atelier-photo-montpellier.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}${ListDataRouter[4].children?.[6].path}/#blog_20251127`, /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
        serviceType: "Article de blog dédié à la Vidéo Marque Employeur : attirer des candidatures qualifiées, réduire le turnover et les coûts de recrutement via 3 formats clés (témoignages employés, film corporate/manifeste, e-learning), avec exemples d’usages et focus ROI.",
    };

    return dataSEO;
}

export { dataSEO_Blog_20251127_data_SEO };
