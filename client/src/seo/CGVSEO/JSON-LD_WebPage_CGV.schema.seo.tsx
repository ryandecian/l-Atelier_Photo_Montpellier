import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/ddataSEORoot.type";

import DataSEO_CGVs from "./DataSEO_CGV.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_WebPage_CGV_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_CGV: DataSEOTargetOneType = DataSEO_CGVs(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].WebPage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_CGV.id_Service,
        "name": DataSEO_CGV.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "url": DataSEO_CGV.url,
        "description": DataSEO_CGV.description,
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
        "image": DataSEO_CGV.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "isPartOf": DataSEORoot.isPartOf,
        "mainEntity": DataSEORoot.mainEntity,
        "publisher": DataSEORoot.publisher,
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_WebPage_CGV_Schema_SEO;
