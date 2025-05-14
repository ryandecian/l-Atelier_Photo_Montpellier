import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitLifeStyles from "./DataSEO_PortraitLifeStyle.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import AvisClientPortraitLifeStyleControllerData from "../../components/PortraitLifeStyleRoot/AvisClientPortraitLifeStyleControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitLifeStyle_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitLifeStyle: DataSEOTargetOneType = DataSEO_PortraitLifeStyles(); /* Récupération des données SEO Portrait Grossesse */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitLifeStyle.id_Service,
        "serviceType": DataSEO_PortraitLifeStyle.serviceType,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEO_PortraitLifeStyle.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitLifeStyle.description,
        "url": DataSEO_PortraitLifeStyle.url,
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
        // ⚠️ A décommenter lors du passage de site vitrine en e-commerce
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": DataSEO_PortraitLifeStyle.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitLifeStyleControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitLifeStyleControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitLifeStyle_Schema_SEO;
