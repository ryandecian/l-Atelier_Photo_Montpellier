import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitSolos from "./DataSEO_PortraitSolo.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function JSON_LD_Breadcrumb_PortraitSolo_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitSolo: DataSEOTargetOneType = DataSEO_PortraitSolos(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitSolo.position,
                "name": DataSEO_PortraitSolo.title,
                "item": DataSEO_PortraitSolo.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitSolo_Schema_SEO;
