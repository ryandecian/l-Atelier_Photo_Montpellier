/* Import des Components */

/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { dataMasterSEO_Type } from "../data/dataMasterSEO.type";

/* Import des Utils */

function localBusiness_script_SEO(): string {
    const dataMasterSEO: dataMasterSEO_Type = dataMasterSEO_data_SEO(); /* Récupération des données SEO */

    const json_ld = JSON.stringify({
        "@context": dataMasterSEO["@context"],
        "@type": dataMasterSEO["@type"].LocalBusiness,
    });

    return (
        json_ld
    );
}

export { localBusiness_script_SEO };
