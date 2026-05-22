/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Portfolio_data_SEO } from "./dataSEO_Portfolio.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Portfolio_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Portfolio: DataSEOTargetOne_Type = dataSEO_Portfolio_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Portfolio.position,
                "name": dataSEO_Portfolio.title,
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Portfolio.id_Service,
                    "url": dataSEO_Portfolio.url,
                    "name": dataSEO_Portfolio.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Portfolio_schema_SEO };
