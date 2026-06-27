/* Import des composants Router */
import router from "../../router/router";
import { routerExt } from "../../router/routerExt.router";

/* Import des Configs */
import { ENV } from "../../config/ENV.config";
import { avisClientGlobal_data_SEO } from "./avisClientGlobal.data.seo";

/* Import des Types */
import { DataMasterSEO_Type } from "./dataMasterSEO.type";

/* Import des Utils */
import { generateAverageRatingSEO_Utils } from "../../utils/seo/generateAverageRatingSEO.utils";
import { generateReviewArraySEO_Utils } from "../../utils/seo/generateReviewArraySEO.utils";

function generateDataMasterSEO_data_SEO(): DataMasterSEO_Type {
    const dataMasterSEO: DataMasterSEO_Type = {
        "@context": "https://schema.org", /* URL de Google schéma */
        "@type": {                        /* (Obligatoire) Type de JSON-LD */
            LocalBusiness: "LocalBusiness",
            BreadcrumbList: "BreadcrumbList",
            Service: "Service",
            ContactPage: "ContactPage",
            HomePage: "HomePage",
            CollectionPage: "CollectionPage",
            ImageGallery: "ImageGallery",
            ItemList: "ItemList",
            Person: "Person",
            Blog: "Blog",
            BlogPosting: "BlogPosting",
            WebPage: "WebPage",
            TermsOfService: "TermsOfService",
            VideoObject: "VideoObject"
        },
        "address": { /* (Obligatoire) Adresse de l'entreprise */
            "@type": "PostalAddress",
            "streetAddress": "13 Allée des Platanes",
            "addressLocality": "Grabels",
            "postalCode": "34790",
            "addressCountry": "FR"
        },
        "aggregateRating": generateAverageRatingSEO_Utils(avisClientGlobal_data_SEO), /* Note moyenne et nb d'avis clients */
        "email": "photo34000@gmail.com", /* Adresse email de l'entreprise (Dynamique) */
        "id_LocalBusiness": `${ENV("VITE_DOMAIN_CLIENT")}#lapm`, /* URL du front avec un ID unique pour le LocalBusiness */
        "identifier": { /* Identifiant de l'entreprise, ici le SIRET */
            "@type": "PropertyValue",
            "propertyID": "SIRET",
            "value": "80255882500021"
        },
        "image": `${ENV("VITE_DOMAIN_CLIENT")}/dans-les-yeux-de-sacha.jpg`, /* Lien URL public de l'image de l'entreprise (Dynamique) */
        "logo": {                      /* (Obligatoire) URL du logo de l'entreprise (Image format carré 200 x 200 px en jpg ou png max 75 ko) */
            "@type": "ImageObject",
            "url": `${ENV("VITE_DOMAIN_CLIENT")}/logo-LAPM-l-atelier-photo-montpellier.png`, /* Logo au format carré si possible, poids max 75 ko */
            "width": 200,
            "height": 200
        },
        "name": "L'Atelier Photo Montpellier", /* Nom de l'entreprise */
        "openingHours": [
            "Mo-Su 10:00-13:00",
            "Mo-Su 14:00-19:00"
        ], /* Horaires d'ouverture du lundi au dimanche de 10h à 13h et de 14h à 19h */
        "priceRange": "€€", /* (Recommandé) Gamme de prix de l'entreprise */
        "review": generateReviewArraySEO_Utils(avisClientGlobal_data_SEO), /* Tableau des avis clients spécifique a google. (Max 5) */
        "sameAs": [
            routerExt.instagram, /* Compte Instagram */
            routerExt.facebook,  /* Compte Facebook */
        ],
        "telephone": "+33 6 52 67 73 33", /* Numéro de téléphone de l'entreprise (Manuel) */
        "termsOfService": `${ENV("VITE_DOMAIN_CLIENT")}${router[9].path}`, /* CGV : URL de la page des conditions générales de vente ou d'utilisation de l'entreprise (Dynamique) */
        "url": `${ENV("VITE_DOMAIN_CLIENT")}`, /* URL de la page d'accueil de l'entreprise (Dynamique) */
    };

    return (
        dataMasterSEO
    );
}

/**
 * ### Documentation : dataMasterSEO_data_SEO
 * Données SEO globales de l'entreprise, utilisées dans les différents scripts JSON-LD de chaque page.
 * Elles sont stockées dans une **const** afin de ne pas être recalculées à chaque appel.
 * 
 * ---
 * @returns {DataMasterSEO_Type} Retourne un objet de type DataMasterSEO_Type.
 * 
 * ---
 * Renommage de la variable à l'import possible avec la syntaxe suivante :
 * - import { dataMasterSEO_data_SEO as nom_choisi } from "..."
 * @example import { dataMasterSEO_data_SEO as dataMasterSEO } from "..."
 */

export const dataMasterSEO_data_SEO: DataMasterSEO_Type = generateDataMasterSEO_data_SEO();
