/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Contact_data_SEO } from "./dataSEO_Contact.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";


function JSON_LD_ContactPage_Contact_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Contact: DataSEOTargetOne_Type = dataSEO_Contact_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].ContactPage, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_Contact.id_Service,
        "name": dataSEO_Contact.name_ContactPage, /* (Obligatoire) Nom de la page de contact */
        "url": dataSEO_Contact.url, /* (Obligatoire) URL de la page */
        "about": {
            "@type": dataSEORoot["@type"].Local,
            "name": dataSEORoot.name,
        },
        "image": dataSEO_Contact.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": dataSEO_Contact.description,
        "provider": {
            "@id": dataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
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

export { JSON_LD_ContactPage_Contact_schema_SEO };
