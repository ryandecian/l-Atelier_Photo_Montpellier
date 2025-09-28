/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_QuiSuisJe_data_SEO } from "./dataSEO_QuiSuisJe.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_QuiSuisJe_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_QuiSuisJe: DataSEOTargetOne_Type = dataSEO_QuiSuisJe_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_QuiSuisJe.position,
                "name": dataSEO_QuiSuisJe.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Nouveau-Né */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_QuiSuisJe.id_Service,
                    "url": dataSEO_QuiSuisJe.url,
                    "name": dataSEO_QuiSuisJe.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_QuiSuisJe_schema_SEO };
