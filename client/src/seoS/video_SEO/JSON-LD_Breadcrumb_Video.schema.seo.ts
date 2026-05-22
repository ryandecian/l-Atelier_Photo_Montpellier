/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Video_data_SEO } from "./dataSEO_Video.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Video_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Video: DataSEOTargetOne_Type = dataSEO_Video_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Video.position,
                "name": dataSEO_Video.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Hobbys */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Video.id_Service,
                    "url": dataSEO_Video.url,
                    "name": dataSEO_Video.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Video_schema_SEO };
