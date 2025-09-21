/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Blog_data_SEO } from "./dataSEO_Blog.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Blog_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Blog: DataSEOTargetOne_Type = dataSEO_Blog_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Blog.position,
                "name": dataSEO_Blog.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Blog.id_Service,
                    "url": dataSEO_Blog.url,
                    "name": dataSEO_Blog.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Blog_schema_SEO };
