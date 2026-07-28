/* Import des types */
import type { RegistreBreadcrumb_data_Type } from './registreBreadcrumb.data.type';
import type { BuildBreadcrumbTrail_data_Type } from './buildBreadcrumbTrail.data.type';

function generateRegistreBreadcrumb_data_SEO(): RegistreBreadcrumb_data_Type {
    const dataRegistreBreadcrumb: RegistreBreadcrumb_data_Type = [
        {
            "id": "home",
            "name_page": "Accueil",
            "uri_page": "/",
        },
    ];
    return dataRegistreBreadcrumb;
}

export const registreBreadcrumb_data_SEO = generateRegistreBreadcrumb_data_SEO();

/**
 * Reconstruit la chaîne complète pour le JSON-LD Google
 */
function buildBreadcrumbTrail_data_SEO(currentPageId: string): { items: BuildBreadcrumbTrail_data_Type } {
    const trail = [];
    
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
    const items = trail.map((node, index) => ({
        ...node,
        position: index + 1
    }));

    return { items };
}

export { buildBreadcrumbTrail_data_SEO };
