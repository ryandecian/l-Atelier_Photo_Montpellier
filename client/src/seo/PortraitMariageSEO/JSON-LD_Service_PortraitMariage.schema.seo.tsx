import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitMariages from "./DataSEO_PortraitMariage.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Service_PortraitMariage_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_PortraitMariage: DataSEOTargetOneType = DataSEO_PortraitMariages(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitMariage.id_Service,
        "serviceType": DataSEO_PortraitMariage.serviceType,
        "name": DataSEO_PortraitMariage.name_Service, /* (Obligatoire) Nom du service */
        "image": DataSEO_PortraitMariage.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitMariage.description,
        "url": DataSEO_PortraitMariage.url,
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
        // ⚠️ A décommanter lors du passage de site vitrine en e-commerce
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": DataSEO_PortraitMariage.url
        // },
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitMariage_Schema_SEO;
