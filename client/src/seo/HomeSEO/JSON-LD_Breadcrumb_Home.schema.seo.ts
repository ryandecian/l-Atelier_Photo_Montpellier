import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Homes from "./DataSEO_Home.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function JSON_LD_Breadcrumb_Home_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Home: DataSEOTargetOneType = DataSEO_Homes(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Home.position,
                "name": DataSEO_Home.title,
                "item": DataSEO_Home.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Home_Schema_SEO;
