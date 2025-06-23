import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitGrossesses from "./DataSEO_PortraitGrossesse.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import AvisClientPortraitGrossesseControllerData from "../../components/PortraitGrossesseRoot/AvisClientPortraitGrossesseControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
// import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitGrossesse_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitGrossesse: DataSEOTargetOneType = DataSEO_PortraitGrossesses(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitGrossesse.id_Service,
        "serviceType": DataSEO_PortraitGrossesse.serviceType,
        "name": DataSEO_PortraitGrossesse.name_Service, /* (Obligatoire) Nom du service */
        "image": DataSEO_PortraitGrossesse.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitGrossesse.description,
        "url": DataSEO_PortraitGrossesse.url,
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
        // "serviceUrl": DataSEO_PortraitGrossesse.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitGrossesseControllerData),
        /* ⚠️ La ligne suivante est actuellement refusée par google */
        // "review": generateReviewArraySEO(AvisClientPortraitGrossesseControllerData) /* Tableau des avis clients spécifique a google. */
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitGrossesse_Schema_SEO;
