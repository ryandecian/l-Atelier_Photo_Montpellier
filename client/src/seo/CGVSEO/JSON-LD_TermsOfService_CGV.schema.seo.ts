/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_CGV_data_SEO } from "./dataSEO_CGV.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_TermsOfService_CGV_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_CGV: DataSEOTargetOne_Type = dataSEO_CGV_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].TermsOfService, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_CGV.id_Service,
        "name": dataSEO_CGV.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "url": dataSEO_CGV.url,
        "description": dataSEO_CGV.description,
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
        "creativeWorkStatus": "Published",
        "image": dataSEO_CGV.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "provider": {
            "@id": dataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "isPartOf": dataSEORoot.isPartOf,
        "mainEntity": dataSEORoot.mainEntity,
        "publisher": dataSEORoot.publisher,
        "about": {
            "@type": "Service",
            "name": dataSEO_CGV.serviceType,
            "url": dataSEO_CGV.url
        },
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_TermsOfService_CGV_schema_SEO };
