import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Contacts from "./DataSEO_Contact.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";


function JSON_LD_ContactPage_Contact_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Contact: DataSEOTargetOneType = DataSEO_Contacts(); /* Récupération des données SEO Portrait Solo */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].ContactPage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_Contact.id_Service,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
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
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_ContactPage_Contact_Schema_SEO;
