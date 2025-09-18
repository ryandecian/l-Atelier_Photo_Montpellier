import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/ddataSEORoot.type";

import DataSEO_PortraitDuos from "./DataSEO_PortraitDuo.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Service_PortraitDuo_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_PortraitDuo: DataSEOTargetOneType = DataSEO_PortraitDuos(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitDuo.id_Service,
        "serviceType": DataSEO_PortraitDuo.serviceType,
        "name": DataSEO_PortraitDuo.name_Service, /* (Obligatoire) Nom du service */
        "image": DataSEO_PortraitDuo.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitDuo.description,
        "url": DataSEO_PortraitDuo.url,
        "termsOfService": DataSEORoot.termsOfService,
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
        "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
        // ⚠️ A décommenter lors du passage de site vitrine en e-commerce
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": DataSEO_PortraitDuo.url
        // },
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitDuo_Schema_SEO;
