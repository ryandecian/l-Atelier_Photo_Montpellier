import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/ddataSEORoot.type";

import DataSEO_Portfolios from "./DataSEO_Portfolio.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Portfolio_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Portfolio: DataSEOTargetOneType = DataSEO_Portfolios(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Portfolio.position,
                "name": DataSEO_Portfolio.title,
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_Portfolio.id_Service,
                    "url": DataSEO_Portfolio.url,
                    "name": DataSEO_Portfolio.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Portfolio_Schema_SEO;
