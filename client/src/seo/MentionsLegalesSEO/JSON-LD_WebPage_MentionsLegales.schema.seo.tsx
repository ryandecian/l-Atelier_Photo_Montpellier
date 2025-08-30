import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_MentionsLegales from "./DataSEO_MentionsLegales.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_WebPage_MentionsLegales_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_MentionLegale: DataSEOTargetOneType = DataSEO_MentionsLegales(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].WebPage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_MentionLegale.id_Service,
        "name": DataSEO_MentionLegale.name_Service, /* (Obligatoire) Nom de l'entreprise */
        "url": DataSEO_MentionLegale.url,
        "description": DataSEO_MentionLegale.description,
        "inLanguage": "fr", /* (Obligatoire) Langue de la page */
        "image": DataSEO_MentionLegale.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "termsOfService": DataSEORoot.termsOfService,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "isPartOf": DataSEORoot.isPartOf,
        "mainEntity": DataSEORoot.mainEntity,
        "publisher": DataSEORoot.publisher,
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_WebPage_MentionsLegales_Schema_SEO;
