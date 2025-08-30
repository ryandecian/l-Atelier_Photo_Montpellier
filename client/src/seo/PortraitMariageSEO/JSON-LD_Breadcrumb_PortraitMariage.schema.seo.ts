import DataSEORoots from "../DataSEORoot.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitMariages from "./DataSEO_PortraitMariage.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitMariage_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitMariage: DataSEOTargetOneType = DataSEO_PortraitMariages(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitMariage.position,
                "name": DataSEO_PortraitMariage.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Mariage */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitMariage.id_Service,
                    "url": DataSEO_PortraitMariage.url,
                    "name": DataSEO_PortraitMariage.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitMariage_Schema_SEO;
