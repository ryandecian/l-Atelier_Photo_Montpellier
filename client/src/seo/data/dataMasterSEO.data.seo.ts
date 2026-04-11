/* Import des composants Router */
// import router from "../../router/router";
import { routerExt } from "../../router/routerExt.router";

/* Import des Configs */
import { ENV } from "../../config/ENV.config";

/* Import des Types */
import { dataMasterSEO_Type } from "./dataMasterSEO.type";

function dataMasterSEO_data_SEO(): dataMasterSEO_Type {
    const dataMasterSEO: dataMasterSEO_Type = {
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
        "id_LocalBusiness": `${ENV("VITE_DOMAIN_CLIENT")}#lapm`, /* URL du front avec un ID unique pour le LocalBusiness */
        "identifier": {                                          /* Identifiant de l'entreprise, ici le SIRET */
            "@type": "PropertyValue",
            "propertyID": "SIRET",
            "value": "80255882500021"
        },
        "logo": {                      /* (Obligatoire) URL du logo de l'entreprise */
            "@type": "ImageObject",
            "url": `${ENV("VITE_DOMAIN_CLIENT")}/logo-LAPM-l-atelier-photo-montpellier.png`, /* Logo au format carré si possible, poids max 75 ko */
            "width": 200,
            "height": 200
        },
        "name": "L'Atelier Photo Montpellier", /* Nom de l'entreprise */
        "image": `${ENV("VITE_DOMAIN_CLIENT")}/dans-les-yeux-de-sacha.jpg`, /* Lien URL public de l'image de l'entreprise (Dynamique) */
        "url": `${ENV("VITE_DOMAIN_CLIENT")}`, /* URL de la page d'accueil de l'entreprise (Dynamique) */
        "telephone": "+33 6 52 67 73 33", /* Numéro de téléphone de l'entreprise (Manuel) */
        "email": routerExt.emailAnne, /* Adresse email de l'entreprise (Dynamique) */
        "address": { /* (Obligatoire) Adresse de l'entreprise */
            "@type": "PostalAddress",
            "streetAddress": "13 Allée des Platanes",
            "addressLocality": "Grabels",
            "postalCode": "34790",
            "addressCountry": "FR"
        },
        "priceRange": "€€", /* (Recommandé) Gamme de prix de l'entreprise */
        "openingHours": [
            "Mo-Su 10:00-13:00",
            "Mo-Su 14:00-19:00"
        ], /* Horaires d'ouverture du lundi au dimanche de 10h à 13h et de 14h à 19h */
        sameAs: [
            routerExt.instagram, /* Compte Instagram */
            routerExt.facebook,  /* Compte Facebook */
        ],
    };

    return (
        dataMasterSEO
    );
}

export { dataMasterSEO_data_SEO };
