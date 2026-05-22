/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_PortraitCorporate_data_SEO } from "./dataSEO_PortraitCorporate.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitCorporate_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_PortraitCorporate: DataSEOTargetOne_Type = dataSEO_PortraitCorporate_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_PortraitCorporate.position,
                "name": dataSEO_PortraitCorporate.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_PortraitCorporate.id_Service,
                    "url": dataSEO_PortraitCorporate.url,
                    "name": dataSEO_PortraitCorporate.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_PortraitCorporate_schema_SEO };
