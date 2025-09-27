/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_PortraitCorporate_data_SEO } from "./dataSEO_PortraitCorporate.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Service_PortraitCorporate_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_PortraitCorporate: DataSEOTargetOne_Type = dataSEO_PortraitCorporate_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_PortraitCorporate.id_Service,
        "serviceType": dataSEO_PortraitCorporate.serviceType,
        "name": dataSEO_PortraitCorporate.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "image": dataSEO_PortraitCorporate.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": dataSEO_PortraitCorporate.description,
        "url": dataSEO_PortraitCorporate.url,
        "termsOfService": dataSEORoot.termsOfService,
        "provider": {
            "@id": dataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "publisher": {
            "@type": "Organization",
            "name": dataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": dataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
        "areaServed": dataSEORoot.areaServed, /* Zone géographique desservie par le service */
        // ⚠️ A décommenter lors du passage de site vitrine en e-commerce
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": dataSEO_PortraitCorporate.url
        // },
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Service_PortraitCorporate_schema_SEO };
