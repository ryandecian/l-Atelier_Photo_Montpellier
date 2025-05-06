import { LinkExt } from "../router/router";
import ListDataRouter from "../router/router";

const DataSEORoot = {
    /* Data Helmet */
    autor: "Anne SAUNIER", // Nom de l'auteur
    twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/

    /* Data JSON-LD */
    "@context": "https://schema.org",
    "@type": {
        Local: "LocalBusiness",
        Service: "Service",
    },
    id_LocalBusiness: `${import.meta.env.URL_CLIENT}${ListDataRouter[17].path}#lapm`, // @id SEO-friendly, correspond id unique de l'entreprise
    "name": "L'Atelier Photo Montpellier",
    "telephone": "+33 6 52 67 73 33", // Numéro de téléphone de l'entreprise (Manuel)
    "email": LinkExt.emailAnne, // Adresse email de l'entreprise (Dynamique)
    "openingHours": [
        "Mo-Su 10:00-13:00",
        "Mo-Su 14:00-19:00"
    ], // Horaires d'ouverture du lundi au dimanche de 10h à 13h et de 14h à 19h
    "sameAs": [
        LinkExt.instagram, // Compte Instagram
        LinkExt.facebook, // A modifier car ce n'est pas le bon compte
    ],
    "areaServed": [
        {
            "@type": "Place",
            "name": "Grabels",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Grabels",
                "postalCode": "34790",
                "addressCountry": "FR"
            }
        },
        {
            "@type": "Place",
            "name": "Montpellier",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montpellier",
                "postalCode": "34000",
                "addressCountry": "FR"
            }
        },
    ]
}

export default DataSEORoot
