/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { DataMasterSEO_Type } from "../data/dataMasterSEO.type";

/* Import des Utils */
import { generateURLSlug_Utils } from "./generateURLSlug.utils";

type Data = {
    "position": number, /* Position de la page dans le fil Ariane (juste un nombre) */
    "name_Breadcrumb": string, /* Nom de la page */
    "uri": string, /* URI de la page sans le nom de domaine */
    "id": string,
}

function breadcrumb_script_SEO(data: Data): string {
    /* Récupération des datas et stock des données dans une const afin de ne pas recalculer à chaques appel de la fonction data */
    const dataMasterSEO: DataMasterSEO_Type = dataMasterSEO_data_SEO();
    const url: string = import.meta.env.VITE_DOMAIN_CLIENT /* Nom de domaine */

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": dataMasterSEO["@type"].BreadcrumbList, /* (Obligatoire) Type de JSON-LD */
        "itemListElement": [ /* Tableau des éléments du fil d’Ariane, ici un seul élément par page */
            {
                "@type": "ListItem",
                "position": data.position, /* Position de la page dans le fil Ariane */
                "name": data.name_Breadcrumb, /* Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
                "item": {
                    "@type": dataMasterSEO["@type"].WebPage,
                    "@id": `${url}${data.uri}/#${generateURLSlug_Utils(data.name_Breadcrumb)}`, /* @id SEO-friendly, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
                    "url": `${url}${data.uri}`, /* URL de la page + ancre SEO-friendly (ex : domain/uri) */
                    "name": data.name_Breadcrumb, /* Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
                }
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