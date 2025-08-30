import DataSEORoots from "../../../DataSEORoot.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import DataSEO_Blog_20250710s from "./DataSEO_Blog_20250710.data.seo";
import DataSEOTargetOneType from "../../../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_20250710_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Blog_20250710: DataSEOTargetOneType = DataSEO_Blog_20250710s(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Blog_20250710.position,
                "name": DataSEO_Blog_20250710.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_Blog_20250710.id_Service,
                    "url": DataSEO_Blog_20250710.url,
                    "name": DataSEO_Blog_20250710.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Blog_20250710_Schema_SEO;
