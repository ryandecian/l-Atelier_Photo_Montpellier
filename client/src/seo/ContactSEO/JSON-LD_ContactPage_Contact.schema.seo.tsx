import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Contacts from "./DataSEO_Contact.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";


function JSON_LD_ContactPage_Contact_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Contact: DataSEOTargetOneType = DataSEO_Contacts(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].ContactPage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_Contact.id_Service,
        "name": DataSEO_Contact.name_ContactPage, /* (Obligatoire) Nom de la page de contact */
        "url": DataSEO_Contact.url, /* (Obligatoire) URL de la page */
        "about": {
            "@type": DataSEORoot["@type"].Local,
            "name": DataSEORoot.name,
        },
        "image": DataSEO_Contact.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_Contact.description,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
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

export default JSON_LD_ContactPage_Contact_Schema_SEO;
