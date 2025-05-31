import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Portfolios from "./DataSEO_Portfolio.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function JSON_LD_Breadcrumb_Portfolio_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Portfolio: DataSEOTargetOneType = DataSEO_Portfolios(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Portfolio.position,
                "name": DataSEO_Portfolio.title,
                "item": DataSEO_Portfolio.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Portfolio_Schema_SEO;
