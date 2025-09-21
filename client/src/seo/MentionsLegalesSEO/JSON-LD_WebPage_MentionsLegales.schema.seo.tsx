/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_MentionsLegales_data_SEO } from "./dataSEO_MentionsLegales.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_WebPage_MentionsLegales_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_MentionLegale: DataSEOTargetOne_Type = dataSEO_MentionsLegales_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].WebPage, /* (Obligatoire) Type de la donnée */
        "@id": dataSEO_MentionLegale.id_Service,
        "name": dataSEO_MentionLegale.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "url": dataSEO_MentionLegale.url,
        "description": dataSEO_MentionLegale.description,
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
        "image": dataSEO_MentionLegale.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "termsOfService": dataSEORoot.termsOfService,
        "provider": {
            "@id": dataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "isPartOf": dataSEORoot.isPartOf,
        "mainEntity": dataSEORoot.mainEntity,
        "publisher": dataSEORoot.publisher,
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_WebPage_MentionsLegales_schema_SEO };
