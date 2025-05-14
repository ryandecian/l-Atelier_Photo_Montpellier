import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitCorporates from "./DataSEO_PortraitCorporate.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitCorporate: DataSEOTargetOneType = DataSEO_PortraitCorporates(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitCorporate.position,
                "name": DataSEO_PortraitCorporate.title,
                "item": DataSEO_PortraitCorporate.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO;
