/* Import des types */
import type { RegistreBreadcrumb_data_Type } from './registreBreadcrumb.data.type';
import type { BuildBreadcrumbTrail_data_Type } from './buildBreadcrumbTrail.data.type';

const registreBreadcrumb_data_SEO: RegistreBreadcrumb_data_Type = [
    {
        "id": "home",
        "name_page": "Accueil",
        "uri_page": "/",
    },
];

/**
 * ### Documentation : buildBreadcrumbTrail_data_SEO
 * Retourne un objet contenant deux propriétés : `dataBreadcrumb` et `dataItems`.
 * - `dataBreadcrumb` : Contient un tableau d'objets représentant chaque page dans le fil d’Ariane, avec les informations nécessaires pour générer le script JSON-LD Breadcrumb.
 * - `dataItems` : Contient les données uniques de la page courante dans le fil d’Ariane.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * 
 * @param {string} currentPageId - L'identifiant unique (id) de la page courante (string simple, même règle que les URL).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {BuildBreadcrumbTrail_data_Type} Retourne un objet contenant `dataBreadcrumb` et `dataItems`.
 * 
 */

function buildBreadcrumbTrail_data_SEO(currentPageId: string): BuildBreadcrumbTrail_data_Type {
    const trail: RegistreBreadcrumb_data_Type = [];
    
    /* 1. On trouve la page courante */
    let current = registreBreadcrumb_data_SEO.find(
        (node) => node.id === currentPageId
    );

    /* 2. On remonte la chaîne des parents */
    while (current) {
        trail.unshift(current);
        current = current.parent_id
            ? registreBreadcrumb_data_SEO.find((node) => node.id === current?.parent_id)
            : undefined;
    }

    /* 3. On injecte la position exacte (1, 2, 3...) selon l'ordre dans le fil d'Ariane */
    const dataBreadcrumb = trail.map((node, index) => ({
        ...node,
        position: index + 1
    }));

    /* 4. On isole les données uniques de la page */
    const dataItems = dataBreadcrumb.find(
        (node) => node.id === currentPageId
    );
    
    return { 
        dataBreadcrumb,
        dataItems
    };
}

export { buildBreadcrumbTrail_data_SEO };
