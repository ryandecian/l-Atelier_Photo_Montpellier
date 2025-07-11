import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_CGVs from "./DataSEO_CGV.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_CGV_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_CGV: DataSEOTargetOneType = DataSEO_CGVs(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_CGV.position,
                "name": DataSEO_CGV.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_CGV.id_Service,
                    "url": DataSEO_CGV.url,
                    "name": DataSEO_CGV.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_CGV_Schema_SEO;
