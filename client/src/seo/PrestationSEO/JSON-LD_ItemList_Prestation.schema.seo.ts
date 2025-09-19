import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Prestations from "./DataSEO_Prestation.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import DataCardPrestations from "../../components/Public/PrestationRoot/DataCardPrestationRoot";

function JSON_LD_ItemList_Prestation_Schema_SEO() {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Prestation: DataSEOTargetOneType = DataSEO_Prestations(); /* Récupération des données SEO de la page */
    const DataCardPrestation = DataCardPrestations(); /* Récupération des données des cartes de prestation */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].ItemList, /* (Obligatoire) Type de la donnée */
        "name": DataSEO_Prestation.name_Service, /* (Obligatoire) Nom du service */
        "description": DataSEO_Prestation.description, /* (Obligatoire) Description du service */
        "url": DataSEO_Prestation.url, /* (Obligatoire) URL de la page */
        "numberOfItems": DataCardPrestation.length, /* Nombre total d'éléments dans la liste : max 100, sinon ignoré */
        "itemListElement": DataCardPrestation.map((prestation, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": prestation.title,
            "description": prestation.description,
            "url": `https://atelier-photo-montpellier.fr${prestation.path}#${prestation.id}`,
            "image": `${import.meta.env.VITE_DOMAIN_CLIENT}${prestation.image}`
        }))
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_ItemList_Prestation_Schema_SEO;
