import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitSolos from "./DataSEO_PortraitSolo.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import AvisClientPortraitSoloControllerData from "../../components/PortraitSoloRoot/AvisClientPortraitSoloControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitSolo_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitSolo: DataSEOTargetOneType = DataSEO_PortraitSolos(); /* Récupération des données SEO Portrait Solo */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitSolo.id_Service,
        "serviceType": "Photographie Solo",
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEO_PortraitSolo.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitSolo.description,
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
        "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": DataSEO_PortraitSolo.url
        },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitSoloControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitSoloControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitSolo_Schema_SEO;
