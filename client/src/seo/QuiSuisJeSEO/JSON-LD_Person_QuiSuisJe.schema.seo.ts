import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/seo/dataSEORoot.type";

import DataSEO_QuiSuisJes from "./DataSEO_QuiSuisJe.data.seo";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Person_QuiSuisJe_Schema_SEO() {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_QuiSuisJe: DataSEOTargetOneType = DataSEO_QuiSuisJes(); /* Récupération des données SEO de la page */
    
    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Person, /* (Obligatoire) Type de la donnée */
        "name": DataSEO_QuiSuisJe.autor, /* (Obligatoire) Nom de la personne */
        "alternateName": "Photographe Anne SAUNIER",
        "description": DataSEO_QuiSuisJe.description, /* (Obligatoire) Description de la personne */
        "image": DataSEO_QuiSuisJe.img_JSON_LD, /* (Obligatoire) Lien URL de l'image */
        "jobTitle": "Photographe professionnelle",
        "gender": "Female",
        "worksFor": DataSEORoot.worksFor, /* Indique de la personne est liée à cette activité */
        "alumniOf": DataSEORoot.alumniOf, /* Établissement d'enseignement supérieur où l'auteur a étudié */
        "knowsAbout": DataSEORoot.knowsAbout, /* Liste des domaines de compétence de la personne */
        "sameAs": DataSEORoot.sameAs, /* Liste des profils sociaux de la personne */
        "url": DataSEO_QuiSuisJe.url, /* (Obligatoire) Lien URL de la page */
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_Person_QuiSuisJe_Schema_SEO;
