/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../utils/generateURLSlug.utils";

/* Import des Types */
import { Breadcrumb_script_Type } from "./breadcrumb.script.type";

type Breadcrumb_script_SEO_Props = {
    data: Breadcrumb_script_Type[];
};

/**
 * ### Documentation : Script JSON-LD pour le Breadcrumb (Fil d'Ariane) de Google.
 * Génère un script JSON-LD sous forme de BreadcrumbList pour représenter la hiérarchie de navigation.
 * 
 * ---
 * @param {Breadcrumb_script_SEO_Props} props - Les propriétés du composant.
 * @param {Breadcrumb_script_Type[]} props.data - Tableau d'objets représentant chaque niveau du fil d’Ariane.
 * @param {number} item.position - Position de la page dans la hiérarchie (ex: 1 pour Accueil, 2 pour la sous-page...).
 * @param {string} item.name_page - Nom de la page affiché dans le fil d'Ariane.
 * @param {string} item.uri_page - URI de la page (route relative).
 * @param {string} item.id - Identifiant unique de la page pour le slug.
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire.
 * @returns {React.ReactNode} Élément JSX contenant le script JSON-LD injectable.
 */
function Breadcrumb_script_SEO({ data }: Breadcrumb_script_SEO_Props): React.ReactNode {
    const dataMasterSEO = dataMasterSEO_data_SEO();

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "BreadcrumbList",             /* (Obligatoire) Type de JSON-LD */
        
        /* Tableau des éléments du fil d’Ariane, ici un seul élément par page */
        "itemListElement": data.map((item) => ({
            "@type": "ListItem",
            "position": item.position, /*(Obligatoire) Position de la page dans le fil Ariane */
            "name": item.name_page,    /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
            "item": {
                "@type": "WebPage",
                "@id": `${dataMasterSEO.url}${item.uri_page}/#${generateURLSlug_Utils(item.id)}`,  /*(Obligatoire) @id SEO-friendly, correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */
                "url": `${dataMasterSEO.url}${item.uri_page}`, /*(Obligatoire) URL de la page + ancre SEO-friendly (ex : domain/uri) */
                "name": item.name_page,                        /*(Obligatoire) Libellé ou nom de la page dans le fil Ariane (ex: Portfolio ou Portrait Duo) */
            }
        }))
    });

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
    );
}

export { Breadcrumb_script_SEO };
