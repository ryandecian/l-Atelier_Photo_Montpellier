import { dataSEO_Root_data_SEO } from "./dataSEO_Root.data.seo";
import DataSEORootType from "../types/seo/ddataSEORoot.type";

import generateAverageRatingSEO from "../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../utils/generateReviewArraySEO.utils";
import AvisClientGlobalData from "./AvisClientGlobal.data.seo";

function JSON_LD_LocalBusiness_Root_schema_SEO(): string {
    const dataSEO_Root: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": dataSEO_Root["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEO_Root["@type"].Local, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_Root.id_LocalBusiness,
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "SIRET",
            "value": "80255882500021"
        },
        "logo": dataSEO_Root.logo, /* (Obligatoire) URL du logo de l'entreprise */
        "name": dataSEO_Root.name, /* (Obligatoire) Nom de l'entreprise */
        "image": dataSEO_Root.img, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": dataSEO_Root.description,
        "url": dataSEO_Root.url, /* (Obligatoire) URL de la page */
        "telephone": dataSEO_Root.telephone, /* (Obligatoire) Numéro de téléphone de l'entreprise */
        "email": dataSEO_Root.email, /* (Obligatoire) Adresse email de l'entreprise */
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "13 Allée des Platanes",
            "addressLocality": "Grabels",
            "postalCode": "34790",
            "addressCountry": "FR"
        }, /* (Obligatoire) Adresse de l'entreprise */
        "priceRange": "€€",
        "openingHours": dataSEO_Root.openingHours, /* Horaires d'ouverture de l'entreprise */
        "sameAs": dataSEO_Root.sameAs, /* Liens vers les réseaux sociaux de l'entreprise */
        "aggregateRating": generateAverageRatingSEO(AvisClientGlobalData), /* Note moyenne et nb d'avis clients */
        "review": generateReviewArraySEO(AvisClientGlobalData) /* Tableau des avis clients spécifique a google. */
    });
    
    return (
        JSON_LD
    );
}

export { JSON_LD_LocalBusiness_Root_schema_SEO };
