/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_QuiSuisJe_data_SEO } from "./dataSEO_QuiSuisJe.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Person_QuiSuisJe_schema_SEO() {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_QuiSuisJe: DataSEOTargetOne_Type = dataSEO_QuiSuisJe_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].Person, /* (Obligatoire) Type de la donnée */
        "name": dataSEO_QuiSuisJe.author, /* (Obligatoire) Nom de la personne */
        "alternateName": "Photographe Anne SAUNIER",
        "description": dataSEO_QuiSuisJe.description, /* (Obligatoire) Description de la personne */
        "image": dataSEO_QuiSuisJe.img_JSON_LD, /* (Obligatoire) Lien URL de l'image */
        "jobTitle": "Photographe professionnelle",
        "gender": "Female",
        "worksFor": dataSEORoot.worksFor, /* Indique de la personne est liée à cette activité */
        "alumniOf": dataSEORoot.alumniOf, /* Établissement d'enseignement supérieur où l'auteur a étudié */
        "knowsAbout": dataSEORoot.knowsAbout, /* Liste des domaines de compétence de la personne */
        "sameAs": dataSEORoot.sameAs, /* Liste des profils sociaux de la personne */
        "url": dataSEO_QuiSuisJe.url, /* (Obligatoire) Lien URL de la page */
    })

    return (
        JSON_LD
    )
}

export { JSON_LD_Person_QuiSuisJe_schema_SEO };
