/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Prestation_data_SEO } from "./dataSEO_Prestation.data.seo";
import DataCardPrestations from "../../components/Public/PrestationRoot/DataCardPrestationRoot";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_ItemList_Prestation_schema_SEO() {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Prestation: DataSEOTargetOne_Type = dataSEO_Prestation_data_SEO(); /* Récupération des données SEO de la page */
    const dataCardPrestation = DataCardPrestations(); /* Récupération des données des cartes de prestation */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": dataSEORoot["@type"].ItemList, /* (Obligatoire) Type de la donnée */
        "name": dataSEO_Prestation.name_Service, /* (Obligatoire) Nom du service */
        "description": dataSEO_Prestation.description, /* (Obligatoire) Description du service */
        "url": dataSEO_Prestation.url, /* (Obligatoire) URL de la page */
        "numberOfItems": dataCardPrestation.length, /* Nombre total d'éléments dans la liste : max 100, sinon ignoré */
        "itemListElement": dataCardPrestation.map((prestation, index) => ({
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

export { JSON_LD_ItemList_Prestation_schema_SEO };
