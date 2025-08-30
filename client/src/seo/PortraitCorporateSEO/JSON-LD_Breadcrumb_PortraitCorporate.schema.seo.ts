import DataSEORoots from "../DataSEORoot.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitCorporates from "./DataSEO_PortraitCorporate.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_PortraitCorporate: DataSEOTargetOneType = DataSEO_PortraitCorporates(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitCorporate.position,
                "name": DataSEO_PortraitCorporate.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitCorporate.id_Service,
                    "url": DataSEO_PortraitCorporate.url,
                    "name": DataSEO_PortraitCorporate.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO;
