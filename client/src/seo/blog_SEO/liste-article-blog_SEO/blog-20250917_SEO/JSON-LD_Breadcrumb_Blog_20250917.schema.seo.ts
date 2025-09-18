import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import DataSEORootType from "../../../../types/DataSEORoot.type";

import { dataSEO_Blog_20250917_data_SEO } from "./dataSEO_Blog_20250917.data.seo";
import DataSEOTargetOneType from "../../../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_20250917_schema_SEO() : string {
    const dataSEO_Root: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Blog_20250917: DataSEOTargetOneType = dataSEO_Blog_20250917_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEO_Root["@context"],
        "@type": dataSEO_Root["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Blog_20250917.position,
                "name": dataSEO_Blog_20250917.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
                "item": {
                    "@type": dataSEO_Root["@type"].WebPage,
                    "@id": dataSEO_Blog_20250917.id_Service,
                    "url": dataSEO_Blog_20250917.url,
                    "name": dataSEO_Blog_20250917.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Blog_20250917_schema_SEO };
