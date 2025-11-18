/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Video_data_SEO } from "./dataSEO_Video.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_VideoObject_DorisAfriqueMoto_schema_SEO(): string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* SEO Global */
    const dataSEO_Video: DataSEOTargetOne_Type = dataSEO_Video_data_SEO(); /* SEO page Vidéo */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].VideoObject,
        "name": "80 ans, première moto, 16 000 km en Afrique – Doris inspire le monde",
        "description":
            "À 82 ans, Doris traverse l’Afrique à moto pour accomplir son rêve d’aventure et de découverte.",
        "thumbnailUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.jpg`,
        "contentUrl":
            `${import.meta.env.VITE_DOMAIN_CLIENT}/video/a-80-ans-elle-traverse-l-afrique-a-moto/a-80-ans-elle-traverse-l-afrique-a-moto.mp4`,
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

export { JSON_LD_VideoObject_DorisAfriqueMoto_schema_SEO };
