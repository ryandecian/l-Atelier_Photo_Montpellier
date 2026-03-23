/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Video_data_SEO } from "./dataSEO_Video.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_VideoObject_NaissanceInstantCommence_schema_SEO(): string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* SEO Global */
    const dataSEO_Video: DataSEOTargetOne_Type = dataSEO_Video_data_SEO(); /* SEO page Vidéo */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].VideoObject,
        "name": "La naissance, c’est l’instant où tout commence vraiment",
        "description":
            "La naissance capture un début, un geste, une respiration, et redessine la façon dont une famille avance.",
        "thumbnailUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/la-naissance-c-est-ou-tout-commence-vraiment/la-naissance-c-est-ou-tout-commence-vraiment.jpg`,
        "contentUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/la-naissance-c-est-ou-tout-commence-vraiment/la-naissance-c-est-ou-tout-commence-vraiment.mp4`,
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

export { JSON_LD_VideoObject_NaissanceInstantCommence_schema_SEO };
