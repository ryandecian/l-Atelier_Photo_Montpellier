import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_MentionsLegales from "./DataSEO_MentionsLegales.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_WebPage_MentionsLegales_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_MentionLegale: DataSEOTargetOneType = DataSEO_MentionsLegales(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_MentionLegale.id_Service,
        "serviceType": DataSEO_MentionLegale.serviceType,
        "name": DataSEO_MentionLegale.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "image": DataSEO_MentionLegale.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_MentionLegale.description,
        "url": DataSEO_MentionLegale.url,
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
        // "serviceUrl": DataSEO_MentionLegale.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientPortraitCorporateControllerData),
        "review": generateReviewArraySEO(AvisClientPortraitCorporateControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_WebPage_MentionsLegales_Schema_SEO;
