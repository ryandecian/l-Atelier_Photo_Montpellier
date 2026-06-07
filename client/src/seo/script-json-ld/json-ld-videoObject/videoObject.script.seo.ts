/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";
import { timeISO8601_Utils } from "./timeISO8601.utils";

/* Import des Types */
import { VideoObject_script_Type } from "./videoObject.script.type";


function videoObject_script_SEO(data: VideoObject_script_Type) : string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "VideoObject",                /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id_video)}`, /* @id SEO-friendly, identifiant unique de la page, dans lequel se trouve la video. Correspond à l'URL de la page + mots clés (ex : domain/uri/#mot-clé ) */

        "description": data.description,       /* (Obligatoire) Description de la vidéo */
        "name": data.name_video,                     /* (Obligatoire) Titre de la vidéo */
        "thumbnailUrl": `${dataMasterSEO.url}${data.uri_miniature}`,     /* (Obligatoire) URL de l'image miniature */
        "uploadDate": data.date_upload,         /* (Obligatoire) Date de mise en ligne (YYYY-MM-DD) */
        "contentUrl": `${dataMasterSEO.url}${data.uri_video}`, /* (Obligatoire) URL directe du fichier vidéo */

        ...(data.duration_video && { "duration": timeISO8601_Utils(data.duration_video) }), /* (Optionnel) mais recommandé. Durée de la video au format ISO 8601. 3 clés sont attendus : h, m et s, tous de type number */
    });

    return (
        JSON_LD
    )
}

export { videoObject_script_SEO };
