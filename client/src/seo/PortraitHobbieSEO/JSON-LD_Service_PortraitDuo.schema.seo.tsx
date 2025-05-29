import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitDuos from "./DataSEO_PortraitHobbie.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import AvisClientPortraitDuoControllerData from "../../components/PortraitDuoRoot/AvisClientPortraitDuoControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitDuo_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitDuo: DataSEOTargetOneType = DataSEO_PortraitDuos(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitDuo.id_Service,
        "serviceType": DataSEO_PortraitDuo.serviceType,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
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
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitDuoControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitDuoControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitDuo_Schema_SEO;
