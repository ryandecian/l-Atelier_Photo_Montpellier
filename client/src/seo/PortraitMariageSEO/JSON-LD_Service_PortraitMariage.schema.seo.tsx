import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitMariages from "./DataSEO_PortraitMariage.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import AvisClientPortraitMariageControllerData from "../../components/PortraitMariageRoot/AvisClientPortraitMariageControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitMariage_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitMariage: DataSEOTargetOneType = DataSEO_PortraitMariages(); /* Récupération des données SEO Portrait Grossesse */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitMariage.id_Service,
        "serviceType": DataSEO_PortraitMariage.serviceType,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEO_PortraitMariage.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitMariage.description,
        "url": DataSEO_PortraitMariage.url,
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
        // ⚠️ A décommanter lors du passage de site vitrine en e-commerce
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": DataSEO_PortraitMariage.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitMariageControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitMariageControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitMariage_Schema_SEO;
