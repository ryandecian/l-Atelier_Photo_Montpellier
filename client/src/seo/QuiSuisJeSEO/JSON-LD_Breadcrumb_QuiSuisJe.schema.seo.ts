import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/ddataSEORoot.type";

import DataSEO_QuiSuisJes from "./DataSEO_QuiSuisJe.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_QuiSuisJe_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_QuiSuisJe: DataSEOTargetOneType = DataSEO_QuiSuisJes(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_QuiSuisJe.position,
                "name": DataSEO_QuiSuisJe.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Nouveau-Né */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_QuiSuisJe.id_Service,
                    "url": DataSEO_QuiSuisJe.url,
                    "name": DataSEO_QuiSuisJe.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_QuiSuisJe_Schema_SEO;
