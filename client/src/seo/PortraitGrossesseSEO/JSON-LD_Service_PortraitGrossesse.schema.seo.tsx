import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitGrossesses from "./DataSEO_PortraitGrossesse.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import AvisClientPortraitGrossesseControllerData from "../../components/PortraitGrossesseRoot/AvisClientPortraitGrossesseControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitGrossesse_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitGrossesse: DataSEOTargetOneType = DataSEO_PortraitGrossesses(); /* Récupération des données SEO Portrait Grossesse */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitGrossesse.id_Service,
        "serviceType": "Photographie grossesse",
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEO_PortraitGrossesse.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitGrossesse.description,
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
        "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": DataSEO_PortraitGrossesse.url
        },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitGrossesseControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitGrossesseControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitGrossesse_Schema_SEO;
