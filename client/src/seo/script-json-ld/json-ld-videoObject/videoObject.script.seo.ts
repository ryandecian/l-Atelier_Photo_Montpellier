/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";

/* Import des Types */
import { VideoObject_script_Type } from "./videoObject.script.type";


function videoObject_script_SEO(data: VideoObject_script_Type) : string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "VideoObject",                /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_video}/#${generateURLSlug_Utils(data.id)}`, /* Identifiant unique de la vidéo dans la page */
    });

    return (
        JSON_LD
    )
}

export { videoObject_script_SEO };
