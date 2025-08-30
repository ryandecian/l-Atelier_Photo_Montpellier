import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_MentionsLegales from "./DataSEO_MentionsLegales.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Breadcrumb_MentionsLegales_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_MentionLegale: DataSEOTargetOneType = DataSEO_MentionsLegales(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_MentionLegale.position,
                "name": DataSEO_MentionLegale.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_MentionLegale.id_Service,
                    "url": DataSEO_MentionLegale.url,
                    "name": DataSEO_MentionLegale.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_MentionsLegales_Schema_SEO;
