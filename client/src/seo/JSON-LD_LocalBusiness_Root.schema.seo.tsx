import DataSEORoots from "./DataSEORoot.seo";
import DataSEORootType from "../types/DataSEORoot.type";

function JSON_LD_LocalBusiness_Root_Schema_SEO(): string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Local, /* (Obligatoire) Type de la donnée */
        "@id": DataSEORoot.id_LocalBusiness,
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
    });
    
    return (
        JSON_LD
    );
}

export default JSON_LD_LocalBusiness_Root_Schema_SEO;
