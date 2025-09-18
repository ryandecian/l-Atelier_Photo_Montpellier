import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitGrossesses from "./DataSEO_PortraitGrossesse.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitGrossesse_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_PortraitGrossesse: DataSEOTargetOneType = DataSEO_PortraitGrossesses(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitGrossesse.position,
                "name": DataSEO_PortraitGrossesse.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Grossesse */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitGrossesse.id_Service,
                    "url": DataSEO_PortraitGrossesse.url,
                    "name": DataSEO_PortraitGrossesse.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitGrossesse_Schema_SEO;
