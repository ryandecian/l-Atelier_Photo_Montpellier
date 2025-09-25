/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_PortraitFamille_data_SEO } from "./dataSEOPortraitFamille.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_PortraitFamille_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_PortraitFamille: DataSEOTargetOne_Type = dataSEO_PortraitFamille_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_PortraitFamille.position,
                "name": dataSEO_PortraitFamille.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Famille */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_PortraitFamille.id_Service,
                    "url": dataSEO_PortraitFamille.url,
                    "name": dataSEO_PortraitFamille.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_PortraitFamille_schema_SEO };
