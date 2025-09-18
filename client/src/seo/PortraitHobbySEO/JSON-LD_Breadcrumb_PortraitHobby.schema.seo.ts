import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_PortraitHobbys from "./DataSEO_PortraitHobby.data.seo";
import DataSEOTargetOneType from "../../types/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitHobby_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_PortraitHobby: DataSEOTargetOneType = DataSEO_PortraitHobbys(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"],
        "@type": DataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": DataSEO_PortraitHobby.position,
                "name": DataSEO_PortraitHobby.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Hobbys */
                "item": {
                    "@type": DataSEORoot["@type"].WebPage,
                    "@id": DataSEO_PortraitHobby.id_Service,
                    "url": DataSEO_PortraitHobby.url,
                    "name": DataSEO_PortraitHobby.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_Breadcrumb_PortraitHobby_Schema_SEO;
