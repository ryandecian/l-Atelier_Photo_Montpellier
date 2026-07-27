/* Import des types */
import type { RegistreBreadcrumb_data_Type } from './registreBreadcrumb.data.type';

function generateRegistreBreadcrumb_data_SEO(): RegistreBreadcrumb_data_Type {
    const dataRegistreBreadcrumb: RegistreBreadcrumb_data_Type = [
        {
            "id": "home",
            "name_page": "Accueil",
            "uri_page": "/",
            "position": 1
        }
    ];
    return dataRegistreBreadcrumb;
}

export const registreBreadcrumb_data_SEO = generateRegistreBreadcrumb_data_SEO();

/**
 * Reconstruit la chaîne complète pour le JSON-LD Google
 */
export function buildBreadcrumbTrail(currentPageId: string) {
    const trail: BreadcrumbNode[] = [];
    let current = BREADCRUMB_REGISTRY[currentPageId];

    while (current) {
        trail.unshift(current);
        current = current.parentId ? BREADCRUMB_REGISTRY[current.parentId] : undefined;
    }

    return { items: trail };
}