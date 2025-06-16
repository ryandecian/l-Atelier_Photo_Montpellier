import DataSEORoots from "../../../DataSEORoot.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250616s from "./DataSEO_Blog_20250616.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_20250616_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Blog_20250616: DataSEOTargetOneType = DataSEO_Blog_20250616s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Blog_20250616.position,
                "name": DataSEO_Blog_20250616.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
                "item": DataSEO_Blog_20250616.url,
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Blog_20250616_Schema_SEO;
