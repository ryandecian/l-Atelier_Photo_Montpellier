/* Import des Components */
import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import { dataSEO_Blog_20250710_data_SEO } from "./dataSEO_Blog_20250710.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_20250710_Schema_SEO() : string {
    const DataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Blog_20250710: DataSEOTargetOne_Type = dataSEO_Blog_20250710_data_SEO(); /* Récupération des données SEO de la page */

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

export { JSON_LD_Breadcrumb_Blog_20250710_Schema_SEO };
