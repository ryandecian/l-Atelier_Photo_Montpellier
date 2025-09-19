import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import DataSEORootType from "../../../../types/seo/dataSEORoot.type";

import DataSEO_Blog_20250710s from "./dataSEO_Blog_20250710.data.seo";
import DataSEOTargetOneType from "../../../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_20250710_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
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
