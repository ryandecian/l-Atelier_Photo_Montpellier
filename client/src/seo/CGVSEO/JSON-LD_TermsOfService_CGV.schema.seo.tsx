import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_CGVs from "./DataSEO_CGV.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_TermsOfService_CGV_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_CGV: DataSEOTargetOneType = DataSEO_CGVs(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].TermsOfService, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_CGV.id_Service,
        "name": DataSEO_CGV.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "url": DataSEO_CGV.url,
        "description": DataSEO_CGV.description,
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
        "creativeWorkStatus": "Published",
        "image": DataSEO_CGV.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "isPartOf": DataSEORoot.isPartOf,
        "mainEntity": DataSEORoot.mainEntity,
        "publisher": DataSEORoot.publisher,
        "about": {
            "@type": "Service",
            "name": DataSEO_CGV.serviceType,
            "url": DataSEO_CGV.url
        },
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_TermsOfService_CGV_Schema_SEO;
