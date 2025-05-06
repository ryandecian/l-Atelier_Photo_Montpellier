import { LinkExt } from "../router/router"

const DataSEORoot = {
    /* Data Helmet */
    autor: "Anne SAUNIER", // Nom de l'auteur
    twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/

    /* Data JSON-LD */
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
}

export default DataSEORoot
