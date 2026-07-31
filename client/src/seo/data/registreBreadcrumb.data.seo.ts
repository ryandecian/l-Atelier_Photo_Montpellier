/* Import des Configs */
// import { ENV } from "../../config/ENV.config";

/* Import des composants Router */
import router from "../../router/router";

/* Import des types */
import type { RegistreBreadcrumb_data_Type } from './registreBreadcrumb.data.type';
import type { DataBreadcrumb_data_Type } from './dataBreadcrumb.data.type';


/**
 * ### Documentation : dataRegistreBreadcrumb_data_SEO
 * Contient un tableau d'objets représentant chaque page dans le fil d’Ariane, avec les informations nécessaires pour générer le script JSON-LD Breadcrumb.
 * Chaque objet représente une page et contient les propriétés suivantes :
 * 
 * - id : Identifiant unique de la page valable uniquement pour le registre (string simple, même règle que les URL).
 * - parent_id : Identifiant unique de la page parent valable uniquement pour le registre (string simple, même règle que les URL), a mettre si la page a un parent.
 * - name_page : Nom de la page (espace autorisé, 10 à 60 caractères max), (Généralement = au H1 HTML).
 * - uri_page : URI de la page. Attention, ne doit pas contenir le nom de domaine et ne commence pas par un slash (/) car le router contient les routes avec (/).
 */

function dataRegistreBreadcrumb_data_SEO() {
    /**
     * ### Documentation : Titre de page (name_page)
     * 
     * Structure recommandée pour le titre de la page (name_page) :
     * - [Service Principal / Titre de la Page] | [Nom de Marque / Ville] (Sigle)
     * - Doit faire entre 50 et 60 caractères maximum.
     * 
     * ---
     * ⚠️ **NOTE ET CONTRAINTES**
     * - Si le titre fait moins de 50 caractères : perte d'opportunités sur des mots-clés importants.
     * - S'il fait plus de 60 caractères : Google risque de le couper brutalement avec des points de suspension (...), ce qui dégrade le taux de clic (CTR).
     * 
     * ---
     * Page d'Accueil (Home) :
     * @example "Photographe Mariage & Portrait | L'Atelier Photo (LAPM)" // 57 caractères
     * 
     * Page Prestation Mariage :
     * @example "Photographe de Mariage | L'Atelier Photo Montpellier (LAPM)" // 58 caractères
     * 
     * Page Prestation Portrait / Studio :
     * @example "Shooting Photo Portrait | L'Atelier Photo Montpellier (LAPM)" // 59 caractères
     * 
     * Page À Propos / Tarifs / Contact :
     * @example "Tarifs Photographe Montpellier | L'Atelier Photo (LAPM)" // 54 caractères
     */
    const data: DataBreadcrumb_data_Type = [
        {
            "id": "home",
            "name_page": "Photographe de Mariage | L'Atelier Photo Montpellier (LAPM)",
            "uri_page": router[0].path,
        },
    ];
    return data;
}


/**
 * ### Documentation : registreBreadcrumb_data_SEO
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
 * @returns {RegistreBreadcrumb_data_Type} Retourne un objet contenant `dataBreadcrumb` et `dataItems`.
 * 
 */

function registreBreadcrumb_data_SEO(currentPageId: string): RegistreBreadcrumb_data_Type {
    const data: DataBreadcrumb_data_Type = dataRegistreBreadcrumb_data_SEO();
    const trail: DataBreadcrumb_data_Type = [];
    
    /* 1. On trouve la page courante */
    let current = data.find(
        (node) => node.id === currentPageId
    );

    /* 2. On remonte la chaîne des parents */
    while (current) {
        trail.unshift(current);
        current = current.parent_id
            ? data.find((node) => node.id === current?.parent_id)
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
    )!;
    
    return { 
        dataBreadcrumb,
        dataItems
    };
}

export { registreBreadcrumb_data_SEO };
