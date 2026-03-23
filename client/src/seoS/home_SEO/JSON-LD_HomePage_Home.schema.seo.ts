/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Home_data_SEO } from "./dataSEO_Home.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_HomePage_Home_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Home: DataSEOTargetOne_Type = dataSEO_Home_data_SEO(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].HomePage, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_Home.id_Service,
        "name": dataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "url": dataSEO_Home.url, /* (Obligatoire) URL de la page */
        "about": {
            "@type": dataSEORoot["@type"].Local,
            "name": dataSEO_Home.name_HomePage, /* (Obligatoire) Nom de la page d'accueil */
        },
        "image": dataSEO_Home.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": dataSEO_Home.description,
        "provider": {
            "@type": "LocalBusiness",
            "@id": dataSEORoot.id_LocalBusiness,
            "name": dataSEORoot.name,
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
            "name": dataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": dataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_HomePage_Home_schema_SEO };
