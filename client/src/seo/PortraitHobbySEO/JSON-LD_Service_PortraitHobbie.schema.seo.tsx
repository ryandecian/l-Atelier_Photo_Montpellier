import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitHobbies from "./DataSEO_PortraitHobby.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import AvisClientPortraitHobbieControllerData from "../../components/PortraitHobbyRoot/AvisClientPortraitHobbyControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_Service_PortraitHobbie_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitHobbie: DataSEOTargetOneType = DataSEO_PortraitHobbies(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_PortraitHobbie.id_Service,
        "serviceType": DataSEO_PortraitHobbie.serviceType,
        "name": DataSEO_PortraitHobbie.name_Service, /* (Obligatoire) Nom du service */
        "image": DataSEO_PortraitHobbie.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_PortraitHobbie.description,
        "url": DataSEO_PortraitHobbie.url,
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
        // "serviceUrl": DataSEO_PortraitHobbie.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitHobbieControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitHobbieControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_PortraitHobbie_Schema_SEO;
