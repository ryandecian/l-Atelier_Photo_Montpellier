import DataSEORoots from "./DataSEORoot.data.seo";
import DataSEORootType from "../types/DataSEORoot.type";

import generateAverageRatingSEO from "../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../utils/generateReviewArraySEO.utils";
import AvisClientGlobalData from "./AvisClientGlobal.data.seo";

function JSON_LD_LocalBusiness_Root_Schema_SEO(): string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Local, /* (Obligatoire) Type de la donnée */
        "@id": DataSEORoot.id_LocalBusiness,
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "SIRET",
            "value": "80255882500021"
        },
        "logo": DataSEORoot.logo, /* (Obligatoire) URL du logo de l'entreprise */
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEORoot.img, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEORoot.description,
        "url": DataSEORoot.url, /* (Obligatoire) URL de la page */
        "telephone": DataSEORoot.telephone, /* (Obligatoire) Numéro de téléphone de l'entreprise */
        "email": DataSEORoot.email, /* (Obligatoire) Adresse email de l'entreprise */
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "13 Allée des Platanes",
            "addressLocality": "Grabels",
            "postalCode": "34790",
            "addressCountry": "FR"
        }, /* (Obligatoire) Adresse de l'entreprise */
        "priceRange": "€€",
        "openingHours": DataSEORoot.openingHours, /* Horaires d'ouverture de l'entreprise */
        "sameAs": DataSEORoot.sameAs, /* Liens vers les réseaux sociaux de l'entreprise */
        "aggregateRating": generateAverageRatingSEO(AvisClientGlobalData), /* Note moyenne et nb d'avis clients */
        "review": generateReviewArraySEO(AvisClientGlobalData) /* Tableau des avis clients spécifique a google. */
    });
    
    return (
        JSON_LD
    );
}

export default JSON_LD_LocalBusiness_Root_Schema_SEO;
