import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitDuos from "./DataSEO_PortraitFamille.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

function JSON_LD_Breadcrumb_PortraitDuo_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitDuo: DataSEOTargetOneType = DataSEO_PortraitDuos(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitDuo.position,
                "name": DataSEO_PortraitDuo.title,
                "item": DataSEO_PortraitDuo.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitDuo_Schema_SEO;
