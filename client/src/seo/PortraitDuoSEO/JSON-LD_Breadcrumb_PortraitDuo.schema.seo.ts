import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitDuos from "./DataSEO_PortraitDuo.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

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
                "name": DataSEO_PortraitDuo.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitDuo.id_Service,
                    "url": DataSEO_PortraitDuo.url,
                    "name": DataSEO_PortraitDuo.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitDuo_Schema_SEO;
