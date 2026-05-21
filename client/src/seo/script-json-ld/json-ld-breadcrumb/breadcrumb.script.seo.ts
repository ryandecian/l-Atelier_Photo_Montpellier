/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import { Breadcrumb_script_Type } from "./breadcrumb.script.type";

/**
 * ### Documentation : Script JSON-LD pour le Breadcrumb de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour le fil d’Ariane (BreadcrumbList) de Google.
 * Il est généralement utilisé pour : 
 * - Toutes les pages du site, afin d'indiquer clairement la position de chaque page dans la hiérarchie du site.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * 
 * @param {Breadcrumb_script_Type} data - L'objet contenant les informations spécifiques au fil d’Ariane.
 * @param {number} data.position - **[position]** - Position de la page dans le fil Ariane (juste un nombre)
 * @param {string} data.name_page - **[name_page]** - Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML)
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router)
 * @param {string} data.id - **[id]** - Identifiant unique de la page (string simple, même règle que les URL).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function breadcrumb_script_SEO(data: Breadcrumb_script_Type): string {
    const url: string = import.meta.env.VITE_DOMAIN_CLIENT /* Nom de domaine */

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "BreadcrumbList", /* (Obligatoire) Type de JSON-LD */
        "itemListElement": [ /* Tableau des éléments du fil d’Ariane, ici un seul élément par page */
            {
                "@type": "ListItem",
                "position": data.position, /*(Obligatoire) Position de la page dans le fil Ariane */
                "name": data.name_page, /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
                "item": {
                    "@type": "WebPage",
                    "@id": `${url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /*(Obligatoire) @id SEO-friendly, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
                    "url": `${url}${data.uri_page}`, /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
                    "name": data.name_page, /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
                }
            }
        ],
    });

    return (
        JSON_LD
    )
}

export { breadcrumb_script_SEO };
