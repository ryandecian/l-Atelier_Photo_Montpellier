/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import type { Service_script_Type } from "./service.script.type";


type Service_script_SEO_Props = {
    data: Service_script_Type;
};

/**
 * ### Documentation : Script JSON-LD Service de Google.
 * Ce composant réutilisable a pour objectif de générer un script JSON-LD pour présenter un service présent dans une page.
 * Il est généralement utilisé pour :
 * - Les pages de services (ex : Service de photographie corporate pour CV, LinkedIn et site web).
 *
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * @param {Service_script_Type} data - L'objet contenant les informations nécessaires au script JSON-LD.
 * @param {string} data.name_service - **[name_service]** - Nom du service (espace autorisé).
 * @param {string} data.description_service - **[description_service]** - Description du service (espace autorisé).
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router).
 * @param {string} data.id - **[id]** - Identifiant unique du service (string simple, même règle que les URL).
 *
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {React.ReactNode} Retourne un élément JSX contenant le script JSON-LD.
 */

function Service_script_SEO({ data }: Service_script_SEO_Props): React.ReactNode {
    const dataMasterSEO = dataMasterSEO_data_SEO();

    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL du vocabulaire Schema.org */
        "@type": "Service",                    /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id)}`, /* Identifiant unique du service */

        "description": data.description_service, /* (Obligatoire) Description du service */

        "name": data.name_service, /* (Obligatoire) Nom du service */

        /* Identifie l'entreprise qui propose le service */
        "provider": {
            "@type": "LocalBusiness",
            "@id": dataMasterSEO.id_LocalBusiness, /* (Obligatoire) Référence à l'ID de l'entreprise */
            "name": dataMasterSEO.name,            /* (Obligatoire) Nom de l'entreprise */
        },

        "serviceType": data.name_service, /* (Obligatoire) Catégorie du service présenté */

        "termsOfService": dataMasterSEO.termsOfService, /* URL des conditions générales de vente */

        "url": `${dataMasterSEO.url}${data.uri_page}`, /* (Obligatoire) URL de la page présentant le service */
    });

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
    );
};

export { Service_script_SEO };
