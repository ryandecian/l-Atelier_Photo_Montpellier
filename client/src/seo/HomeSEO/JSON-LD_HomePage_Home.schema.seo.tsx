import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Homes from "./DataSEO_Home.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_HomePage_Home_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Home: DataSEOTargetOneType = DataSEO_Homes(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].HomePage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_Home.id_Service,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "url": DataSEO_Home.url, /* (Obligatoire) URL de la page */
        "about": {
            "@type": DataSEORoot["@type"].Local,
            "name": DataSEO_Home.name_HomePage, /* (Obligatoire) Nom de la page d'accueil */
        },
        "image": DataSEO_Home.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_Home.description,
        "provider": {
            "@type": "LocalBusiness",
            "@id": DataSEORoot.id_LocalBusiness,
            "name": DataSEORoot.name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "13 Allée des Platanes",
                "addressLocality": "Grabels",
                "postalCode": "34790",
                "addressCountry": "FR"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": DataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": DataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_HomePage_Home_Schema_SEO;
