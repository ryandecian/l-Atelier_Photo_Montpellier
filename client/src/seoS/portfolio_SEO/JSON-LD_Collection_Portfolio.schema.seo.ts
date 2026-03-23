/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Portfolio_data_SEO } from "./dataSEO_Portfolio.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

/* Import des Utils */
import { generatePortfolioHasPartSEO_Utils } from "./utils/generatePortfolioHashPartSEO.utils";

function JSON_LD_Collection_Portfolio_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Portfolio: DataSEOTargetOne_Type = dataSEO_Portfolio_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].CollectionPage, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_Portfolio.id_Service,
        "about": dataSEO_Portfolio.serviceType,
        "name": dataSEO_Portfolio.name_Collection, /* (Obligatoire) Correspond au H1 ou title de la page */
        "image": dataSEO_Portfolio.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": dataSEO_Portfolio.description,
        "url": dataSEO_Portfolio.url,
        "publisher": {
            "@type": "Organization",
            "name": dataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": dataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
        "hasPart": generatePortfolioHasPartSEO_Utils(), /* (Obligatoire) Liste des images du portfolio */
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Collection_Portfolio_schema_SEO };
