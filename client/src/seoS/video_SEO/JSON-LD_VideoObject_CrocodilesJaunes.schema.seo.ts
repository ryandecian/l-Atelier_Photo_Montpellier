/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Video_data_SEO } from "./dataSEO_Video.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_VideoObject_CrocodilesJaunes_schema_SEO(): string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* SEO Global */
    const dataSEO_Video: DataSEOTargetOne_Type = dataSEO_Video_data_SEO(); /* SEO page Vidéo */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].VideoObject,
        "name": "Votre prochaine parenthèse bien-être : Les Crocodiles Jaunes",
        "description":
            "Vidéo de présentation du centre de jeûne Les Crocodiles Jaunes à Albi.",
        "thumbnailUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/les-crocodiles-jaunes/les-crocodiles-jaunes.jpg`,
        "contentUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/les-crocodiles-jaunes/les-crocodiles-jaunes.mp4`,
        "uploadDate": "2025-11-17",
        "publisher": {
            "@type": "Organization",
            "name": dataSEORoot.name,
            "logo": {
                "@type": "ImageObject",
                "url": dataSEORoot.logo,
                "width": 200,
                "height": 200
            }
        },
        "url": dataSEO_Video.url
    });

    return JSON_LD;
}

export { JSON_LD_VideoObject_CrocodilesJaunes_schema_SEO };
