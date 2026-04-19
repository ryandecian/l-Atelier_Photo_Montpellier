/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { DataMasterSEO_Type } from "../data/dataMasterSEO.type";

type Data = {
    "position": number,
    "test1": string,
    "test2": string,
}

function breadcrumb_script_SEO(data: Data): string {
    /* Récupération des datas et stock des données dans une const afin de ne pas recalculer à chaques appel de la fonction data */
    const dataMasterSEO: DataMasterSEO_Type = dataMasterSEO_data_SEO();

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": dataMasterSEO["@type"].BreadcrumbList, /* (Obligatoire) Type de JSON-LD */
        "itemListElement": [ /* Tableau des éléments du fil d’Ariane, ici un seul élément par page */
            {
                "@type": "ListItem",
                "position": data.position,
            }
        ],
    });

    return (
        JSON_LD
    )
}

export { breadcrumb_script_SEO };

/**
 * Documentation :
 * 
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour le fil d’Ariane (BreadcrumbList) de Google. 
 * Il retourne actuellement une string grace à la fonction JSON.stringify, car lors de son injection dans une page, les 
 * datas SEO de la page sont utilisées pour construire le JSON-LD doivent être une string. 
 */