/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_PortraitHobby_data_SEO } from "./dataSEO_PortraitHobby.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitHobby_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_PortraitHobby: DataSEOTargetOne_Type = dataSEO_PortraitHobby_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_PortraitHobby.position,
                "name": dataSEO_PortraitHobby.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Hobbys */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_PortraitHobby.id_Service,
                    "url": dataSEO_PortraitHobby.url,
                    "name": dataSEO_PortraitHobby.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_PortraitHobby_schema_SEO };
