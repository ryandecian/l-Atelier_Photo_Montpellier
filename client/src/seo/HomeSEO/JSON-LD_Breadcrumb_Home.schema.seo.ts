import DataSEORoots from "../DataSEORoot.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Homes from "./DataSEO_Home.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Home_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Home: DataSEOTargetOneType = DataSEO_Homes(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_Home.position,
                "name": DataSEO_Home.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_Home.id_Service,
                    "url": DataSEO_Home.url,
                    "name": DataSEO_Home.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_Home_Schema_SEO;
